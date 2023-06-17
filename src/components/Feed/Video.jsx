import React, { useState } from 'react';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { comments } from './comments';
import { userVideo } from './userVideo';

const Video = () => {
  const [count, setCount] = useState(0);

  const [diskikeCount, setDiskikeCount] = useState(0);

  const onAddLike = () => {
    setCount(count + 1);
  };

  const onAddDisike = () => {
    setDiskikeCount(diskikeCount + 1);
  };
  return (
    <>
      {userVideo.map((item) => (
        <div className="w-full bg-bggray my-2  rounded-md text-[9px] text-lightgray">
          {/* <img
        className="mx-auto h-[240px] rounded-t-md object-contain my-auto"
            src={item.img}
        /> */}
          <video
            controls
            className="mx-auto h-[240px] rounded-t-md object-contain my-auto">
            <source src={item.img} type="video/mp4" />
          </video>

          <div className=" h-min flex flex-col mx-1 p-2">
            <div className="grid grid-cols-5">
              <div className="col-span-1">
                <img
                  className="w-8 h-8 rounded-full object-cover my-auto mx-2"
                  src={item.profile}
                  alt={item.name}
                />
              </div>
              <div className="flex flex-col col-span-3 mx-2">
                <div className="flex">
                  <div className="text-left text-blue font-semibold px-3">
                    {item.name}
                  </div>
                  <div className="text-green px-3">following</div>
                </div>

                <div>{item.status}</div>
              </div>

              <div className="grid grid-cols-2 gap-2 ">
                <div className="text-green m-auto flex">
                  <AiFillLike
                    onClick={onAddLike}
                    fontSize={12}
                    className="mx-1 cursor-pointer"
                  />
                  <span>{count}</span>
                </div>
                <div className="text-red m-auto flex">
                  <AiFillDislike
                    onClick={onAddDisike}
                    fontSize={12}
                    className="mx-1 cursor-pointer"
                  />
                  <span>{diskikeCount}</span>
                </div>
              </div>
            </div>

            <div className="font-semibold ml-16 border-y-[1px] border-lightgray py-2 w-4/5">
              {item.text}
            </div>

            <div className="font-semibold ml-16 py-2 w-4/5">
              {comments.map((item) => (
                <div className="flex my-2">
                  <img
                    className="w-7 h-7 rounded-full object-cover"
                    src={item.img}
                    alt={item.name}
                  />
                  <div className="mx-1">
                    <span className="text-blue">{item.name}</span> {item.text}
                  </div>
                </div>
              ))}
              <div className="flex">
                <img
                  className="w-6 h-6 rounded-full mr-3"
                  src="https://th.bing.com/th/id/OIP.YWFSHmhVvwHHmColuR-sjAHaFj?pid=ImgDet&rs=1"
                  alt="user-profile2"
                />
                <input
                  placeholder="Post a Comment"
                  className="border border-textgray items-center my-auto rounded-sm px-2"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Video;
