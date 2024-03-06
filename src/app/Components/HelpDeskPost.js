"use client";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { TiDelete } from "react-icons/ti";
import { FaComment } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { FaDeleteLeft } from "react-icons/fa6";
import Swal from "sweetalert2";
import axios from "axios";
import useLike from "../hooks/useLike";


const HelpDeskPost = () => {

  const [allPost, setAllPost] = useState([]);
  const [comment, setComment] = useState("");
  const [currentPost, setCurrentPost] = useState({});
  const { user } = useContext(AuthContext);
  const { myuser } = useLike();
  console.log(myuser);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pet-zone-project-next-js.vercel.app/helpdesk');
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
        axios.delete(`https://pet-zone-project-next-js.vercel.app/helpdesk/${id}`)
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
      const res = await axios.put(`https://pet-zone-project-next-js.vercel.app/helpdesk/like/${id}`, { userId })
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
      const res = await axios.put(`https://pet-zone-project-next-js.vercel.app/helpdesk/unlike/${id}`, { userId })
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

  const handleComment = (post) => {
    setCurrentPost(post);
  }

  const addComment = async (userId, userName, userPhoto) => {
    const date = new Date();
    const localDate = date.toLocaleString();
    if (comment.trim() !== '') {
      try {
        const res = await axios.put(`http://localhost:5001/helpdesk/addcomment`, { id: currentPost._id, comment, postedTime: localDate, userId, userName, userPhoto });
        console.log("Add comment", res.data);
        const updatedPost = res.data;

        setAllPost(allPost.map(post => {
          if (post._id === updatedPost._id) {
            return updatedPost;
          }
          return post;
        }));

        setComment("");
      }
      catch (error) {
        console.log(error);
      }
    }
  }

  const removeComment = async (postId, commentId) => {
    console.log("postid", postId);
    console.log("commentid", commentId);
    try {
      const res = await axios.put(`http://localhost:5001/helpdesk/removecomment/${postId}/${commentId}`);
      console.log("Comment removed ", res.data);

      setAllPost(allPost.map(post => {
        if (post._id === postId) {
          return {
            ...post,
            comment: post.comment.filter(comment => comment.commentId !== commentId)
          };
        }
        return post;
      }));
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
          <p className="text-base pl-5 pr-5  leading-tight mb-4">
            {helpdesk?.postWriting}
          </p>
          <img
            src={helpdesk?.postImage}
            alt="Posted Image"
            className="w-full h-[510px] pl-5 object-cover pr-3  mb-4"
          />
          <div className="flex items-center pl-3 pb-3 pr-3 justify-between">
            <div className="flex items-center space-x-4">
              <button className="flex items-center gap-2" onClick={() => { document.getElementById(`comment_modal_${helpdesk._id}`).showModal(); handleComment(helpdesk) }}>
                <FaComment className="text-red-500"></FaComment>
                <span className="text-sm text-gray-600">Comments</span>
              </button>
              <dialog id={`comment_modal_${helpdesk._id}`} className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                  </form>
                  <h3 className="font-bold text-lg">All Comments</h3>
                  <div>
                    <div className="my-6">
                      {
                        helpdesk.comment && helpdesk.comment.length > 0 ?
                          <>
                            {
                              helpdesk.comment.map((c) => (
                                <div key={c._id}>
                                  <div className="mb-8">
                                    <div className="flex items-center justify-between gap-2">
                                      <div className="flex items-center gap-2">
                                        <img className="w-8 rounded-full" src={c.postedBy?.userPhoto} />
                                        <p className="text-sm font-bold">{c.postedBy?.userName}</p>
                                        {
                                          myuser._id == c.postedBy?.userId && (
                                            <button onClick={() => removeComment(helpdesk._id, c.commentId)} className="text-red-400"><FaDeleteLeft /></button>
                                          )
                                        }
                                      </div>
                                      <p className="text-xs font-medium">{formatDate(c.postedTime)}</p>
                                    </div>
                                    <p className="text-xs ml-10 text-justify">{c.text}</p>
                                  </div>
                                </div>
                              ))
                            }
                          </>
                          :
                          <>
                            <p className="text-center text-xl">No Comments Yet</p>
                          </>
                      }
                    </div>
                    <div>
                      <form method="dialog" className="py-4" onClick={(e) => { e.preventDefault(); addComment(myuser._id, myuser.name, myuser.photo); }}>
                        <h3 className="font-bold text-lg mt-5 mb-3">Add your comment here</h3>
                        <div>
                          <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Write Something" className="textarea textarea-bordered w-4/5 rounded-sm" />
                          <button className="bg-red-500 text-white normal-case py-2 px-3 rounded-sm ml-3">Submit</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </dialog>
            </div>
            <div className="text-sm text-gray-600 flex">
              {
                helpdesk && helpdesk.like ?
                  <span className="flex">{helpdesk.like.length} <FcLike className="mt-[2px]"></FcLike></span>
                  :
                  <><span> 0 <FcLike className="mt-[2px]"></FcLike></span>  </>
              }
              |
              {
                helpdesk && helpdesk.comment ?
                  <span> {helpdesk.comment.length} {helpdesk.comment.length <= 1 ? "Comment " : "Comments "}</span>
                  :
                  <span> 0 Comment </span>
              }
            </div>
          </div>
        </div>)
      }
    </div>
  );
};

export default HelpDeskPost;
