"use client"

import { useContext } from "react";
import Navbar from "../Components/Header";

import HelpDeskPost from "../Components/HelpDeskPost";
import { AuthContext } from "../Provider/AuthProvider";
import { imageUpload } from "../hooks/image";
import axios from "axios";
import Swal from "sweetalert2";




const HelpDesk = () => {

  const { user } = useContext(AuthContext)




  const handlePost = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const postContent = form.get("postContent");
    const fileContent = form.get("fileContent");

    const imageData = await imageUpload(fileContent);
    const image = imageData.data.display_url;

    const date = new Date();
    const localDate = date.toLocaleString();

    const helpPost = {
      postWriting: postContent,
      postImage: image,
      postTime: localDate,
      userName: user?.displayName,
      userEmail: user?.email,
      userPhoto: user?.photoURL
    };

    console.log(helpPost);

    axios.post('https://pet-zone-project-next-js.vercel.app/helpdesk', helpPost)
      .then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: 'Post added successfully',
        })
            .then(() => {
              form.set("postContent", "");
              form.set("fileContent", "");
            });
        }
      }).catch((error) => {
        console.log(error.message);
      });

  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="h-screen overflow-y-scroll bg-white">
        <div className="grid grid-cols-1  gap-4 lg:grid-cols-3 md:grid-cols-2 lg:gap-8">
          <div className="post p-5 lg:p-1 rounded-md">
            <div className="lg:fixed lg:left-14 lg:w-3/12 md:fixed md:w-5/12">
              <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full mb-4">
                <div className="relative">
                  <img
                    src="https://hivelife.com/wp-content/uploads/2021/04/Untitled-design-2.jpg"
                    alt="Banner Profile"
                    className="w-full rounded-t-lg"
                  />
                  <img
                    src={user?.photoURL}
                    alt="Profile Picture"
                    className="absolute bottom-0 left-2/4 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-white"
                  />
                </div>
                <div className="flex items-center mt-11">
                  <h2 className="text-xl font-bold text-gray-800">
                    {user?.displayName}

                  </h2>
                  <span className="bg-blue-500 rounded-full p-1 ml-2" title="Verified">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gray-100 h-2.5 w-2.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="4"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </span>
                </div>
                <p className="text-gray-700 mt-2">
                  {" "}
                  Web Developer | Cat Lover | Coffee Enthusiast{" "}
                </p>
                <div className="flex items-center mt-4 space-x-4">
                  <a href="#" className="text-red-500 hover:underline">
                    {" "}
                    Twitter{" "}
                  </a>
                  <a href="#" className="text-red-500 hover:underline">
                    {" "}
                    GitHub{" "}
                  </a>
                  <a href="#" className="text-red-500 hover:underline">
                    {" "}
                    LinkedIn{" "}
                  </a>
                </div>
              </div>


              <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                <h2 className="text-xl font-bold text-center">Create Post</h2>
                <form onSubmit={handlePost}>
                  <div className="mb-6">
                    <label
                      htmlFor="postContent"
                      className="block text-gray-700 text-sm font-bold mb-2">
                      Post Content:
                    </label>
                    <textarea
                      id="postContent"
                      name="postContent"
                      rows="4"
                      className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 resize-none focus:outline-none focus:border-blue-500 bg-white" placeholder="What's on your mind?" required>
                    </textarea>
                  </div>


                  <div className="mb-6">
                    <label
                      htmlFor="fileContent"
                      className="block text-gray-700 text-sm font-bold mb-2">
                      Attach File:
                    </label>
                    {/* <div className="relative border-2 rounded-md px-4 py-3 bg-white flex items-center justify-between hover:border-blue-500 transition duration-150 ease-in-out"> */}
                    <input
                      type="file"
                      id="fileContent"
                      name="fileContent"
                      className="w-full border-2 rounded-md px-4 py-2 focus:outline-none bg-white focus:ring-0 focus:border-blue-500 text-sm" />
                    {/* <div className="flex items-center">
                      <svg
                        className="w-6 h-6 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6">
                        </path>
                      </svg>
                      <span className="ml-2 text-sm text-gray-600">
                        Choose a file
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      Max file size: 5MB
                    </span>
                  </div> */}
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      type="submit"
                      className="flex justify-center items-center bg-red-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue text-white py-2 px-4 rounded-md transition duration-300 gap-2">
                      {" "}
                      Post
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                        id="send"
                        fill="#fff">
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.59c0 .71.73 1.2 1.39.91z"></path>
                      </svg>
                    </button>
                    <span className="text-sm text-gray-500">
                      Max 140 characters
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="post lg:col-span-2  rounded-md pr-10 pt-10">
            <HelpDeskPost></HelpDeskPost>

          </div>
        </div>
      </div >

    </div >
  );
};

export default HelpDesk;