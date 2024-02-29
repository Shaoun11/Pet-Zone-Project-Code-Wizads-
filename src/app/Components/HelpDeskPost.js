"use client";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { TiDelete } from "react-icons/ti";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import Swal from "sweetalert2";
import axios from "axios";
import useLike from "../hooks/useLike";


const HelpDeskPost = () => {

  const [allPost, setAllPost] = useState([]);
  const { user } = useContext(AuthContext);
  const { myuser } = useLike();
  console.log(myuser);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5001/helpdesk');
        const data = await response.json();
        setAllPost(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);


  const formatDate = (postTime) => {
    const postDate = new Date(postTime);
    const currentDate = new Date();
    const timeDifference = currentDate - postDate;
    const oneDay = 24 * 60 * 60 * 1000;

    if (timeDifference < oneDay && postDate.getDate() === currentDate.getDate()) {
      return postDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    else if (timeDifference < (2 * oneDay) && postDate.getDate() === currentDate.getDate() - 1) {
      return 'Yesterday';
    }
    else {
      return postDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    }
  };


  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure you want to delete your post?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5001/helpdesk/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              setAllPost(allPost.filter(post => post._id !== id));
              Swal.fire({
                title: "Deleted!",
                text: "Your post has been deleted",
                icon: "success",
              });
            }
          });
      }
    });
  };


  const handleLike = async (id, userId) => {
    try {
      const res = await axios.put(`http://localhost:5001/helpdesk/like/${id}`, { userId })
      console.log("Liked", res.data);

      const postIndex = allPost.findIndex(post => post._id === id);
      const updatedPosts = [...allPost];
      updatedPosts[postIndex] = {
        ...updatedPosts[postIndex],
        like: [...updatedPosts[postIndex].like, userId]
      };
      setAllPost(updatedPosts);
    }
    catch (error) {
      console.log(error);
    }
  }

  const handleUnLike = async (id, userId) => {
    try {
      const res = await axios.put(`http://localhost:5001/helpdesk/unlike/${id}`, { userId })
      console.log("unLiked", res.data);

      const postIndex = allPost.findIndex(post => post._id === id);
      const updatedPosts = [...allPost];
      updatedPosts[postIndex] = {
        ...updatedPosts[postIndex],
        like: updatedPosts[postIndex].like.filter(id => id !== userId)
      };
      setAllPost(updatedPosts);
    }
    catch (error) {
      console.log(error);
    }
  }



  return (
    <div className="gap-5">
      {
        allPost.map((helpdesk, index) => <div key={helpdesk._id} className="bg-white p-5 lg:p-1  mb-4 rounded-lg shadow-md">
          <div key={helpdesk._id} className="flex items-center pl-5 justify-between mb-2">
            <div className="flex items-center">
              <img
                src={helpdesk.userPhoto}
                alt="Profile Picture"
                className="w-12 h-12 object-cover rounded-full mr-4"
              />
              <div>
                <h2 className="text-lg font-bold">{helpdesk.userName}</h2>
                <p className="text-gray-600 text-sm flex">{formatDate(helpdesk.postTime)}</p>
              </div>
            </div>

            {
              helpdesk.userEmail === user?.email ?
                <>
                  <button onClick={() => handleDelete(helpdesk._id)} className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-red-500 ml-4 mr-3">
                    <TiDelete className="text-3xl" />
                  </button>
                </>
                :
                <>
                  {
                    helpdesk.like?.includes(myuser._id) ?
                      <button onClick={() => handleUnLike(helpdesk._id, myuser._id)} className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center ml-4 mr-3">
                        <FcLike className="text-xl" />
                      </button>
                      :
                      <button onClick={() => handleLike(helpdesk._id, myuser._id)} className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center ml-4 mr-3">
                        <FcLikePlaceholder className="text-xl" />
                      </button>
                  }
                </>
            }

          </div>
          <p className="text-lg pl-5 pr-5 leading-tight mb-4">
            {helpdesk?.postWriting}
          </p>
          <img
            src={helpdesk?.postImage}
            alt="Posted Image"
            className="w-full pl-5 object-cover pr-3  mb-4"
          />
          <div className="flex items-center pl-3 pb-3 pr-3 justify-between">
            <div className="flex items-center space-x-4">
              <button className="flex items-center focus:outline-none"></button>
              <button className="flex items-center focus:outline-none">
                <svg
                  className="w-5 h-5 text-gray-500 hover:text-blue-500"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 21l-7-7-7 7"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
                <span className="ml-1 text-sm text-gray-600">Comment</span>
              </button>
            </div>
            <div className="text-sm text-gray-600">
              {
                helpdesk && helpdesk.like ?
                  <span>{helpdesk.like.length} {helpdesk.like.length <= 1 ? "Like " : "Likes "}</span>
                  :
                  <span> 0 Like </span>
              }
              |
              5 comments
            </div>
          </div>
        </div>)
      }
    </div>
  );
};

export default HelpDeskPost;
