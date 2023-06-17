import React from 'react';

const User = () => {
  return (
    <main className="min-h-screen bg-white grid">
      <div className="h-3/5 relative bg-cover bg-[url('https://res.cloudinary.com/dgcprz6er/image/upload/v1687008767/pexels-photo-1146708_esiq5p.jpg')] ">
        <div className="bg-black grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 absolute bottom-6 text-white bg-opacity-70 w-full h-[70px]">

          <img
            className="w-32 mx-4 absolute bottom-0.5 my-auto h-32 border-4 rounded-full object-cover"
            src="https://res.cloudinary.com/dgcprz6er/image/upload/v1687004058/portrait-young-indian-top-manager-t-shirt-tie-crossed-arms-smiling-white-isolated-wall_496169-1513_wllbd8.webp" alt="top-manager"
          />
          
          <ul className="absolute  bottom-5 left-64 flex my-auto justify-center w-min col-span-3">
            <li className="mx-5 font-semibold my-auto">Timeline</li>
            <li className="mx-5 font-semibold my-auto">About</li>
            <li className="mx-5 font-semibold my-auto">Album</li>
            <li className="mx-5 font-semibold my-auto">Friends</li>
          </ul>

          <div className="absolute bottom-4 right-4 flex my-auto justify-center col-span-3">
            <div className="align-middle py-auto my-auto">
              1,299 people following her
            </div>

            <button className="bg-blue font-semibold px-4 text-white p-2 rounded-2xl mx-3">
              Add Friend
            </button>

          </div>
        </div>
      </div>
    </main>
  );
};

export default User;
