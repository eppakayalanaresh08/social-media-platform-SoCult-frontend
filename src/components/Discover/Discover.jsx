import React, { useState } from 'react';
// import { people } from './people';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const Discover = () => {
  //   const route = useRouter();
  const navigate = useNavigate();

  const [friendOne, setFriendOne] = useState(false);
  const [friendTwo, setFriendTwo] = useState(false);
  const [friendThree, setFriendThree] = useState(false);
  const [friendFour, setFriendFour] = useState(false);
  

  const add = 'Add Friend';
  const added = 'Added';



  return (
    <div className="bg-blue p-3 shadow-md hover:shadow-lg h-min  rounded-md">
      <div className="text-darktextgray text-xl min-h  font-semibold ">
        Who to Follow
        
        <div className="flex my-4 py-2 " key="Rakesh">
          <img
            src="https://res.cloudinary.com/dgcprz6er/image/upload/v1687004058/portrait-young-indian-top-manager-t-shirt-tie-crossed-arms-smiling-white-isolated-wall_496169-1513_wllbd8.webp"
            className="w-12 h-12 rounded-full object-cover"
            alt="young-indian-top"
          />
          <div className="mx-3 grid grid-cols-1 text-xs border-b-2 border-slate-300 border-inherit">
            <span
              onClick={(e) => {
                e.preventDefault();
                navigate('/user');
              }}
              className="text-balck cursor-pointer hover:text-slate-600">
              Rakesh
            </span>
            <span
              onClick={() => setFriendOne(!friendOne)}

              className={` hover:text-green-600 cursor-pointer ${
                friendOne === false ? 'text-green' : 'text-red'
              }`}>
              {friendOne === false ? add : added}
            </span>
          </div>
        </div>
        <div className="flex my-4 py-2 " key="Naveen">
          <img
            src="https://res.cloudinary.com/dgcprz6er/image/upload/v1687003954/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320_qv2oly.webp"
            className="w-12 h-12 rounded-full object-cover image-Element"
            alt="male-keeps"
          />
          <div className=" mx-3 grid grid-cols-1 text-xs border-b-2 border-slate-300 border-inherit">
            <span
              onClick={(e) => {
                e.preventDefault();
                navigate('/user');
              }}
              className="text-black cursor-pointer hover:text-slate-600">
              Naveen
            </span>
            <span
              onClick={() => setFriendTwo(!friendTwo)}
              className={` hover:text-green-600 cursor-pointer ${
                friendTwo === false ? 'text-green' : 'text-red'
              }`}>
              {friendTwo === false ? add : added}
            </span>
          </div>
        </div>
        <div className="flex my-4 py-2 " key="Veena">
          <img
            src="https://res.cloudinary.com/dgcprz6er/image/upload/v1687003861/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-space_23-2148767055_omtynk.webp"
            className="w-12 h-12 rounded-full object-cover"
            alt="posing-outdoors"
          />
          <div className=" mx-3 grid grid-cols-1 text-xs border-b-2 border-slate-300 border-inherit">
            <span
              onClick={(e) => {
                e.preventDefault();
                navigate('/user');
              }}
              className="text-balck cursor-pointer hover:text-slate-600">
              Veena
            </span>
            <span
              onClick={() => setFriendThree(!friendThree)}
              className={` hover:text-green-600 cursor-pointer ${
                friendThree === false ? 'text-green' : 'text-red'
              }`}>
              {friendThree === false ? add : added}
            </span>
          </div>
        </div>
        <div className="flex my-4 py-2 " key="Siri">
          <img
            src="https://res.cloudinary.com/dgcprz6er/image/upload/v1687002989/naresh/smiling-confident-businesswoman-posing-with-arms-folded_mdnczs.jpg"
            className="w-12 h-12 rounded-full object-cover"
            alt="businesswoman"
          />
          <div className=" mx-3 grid grid-cols-1 text-xs border-b-2 border-slate-300 border-inherit">
            <span
              onClick={(e) => {
                e.preventDefault();
                navigate('/user');
              }}
              className="text-black cursor-pointer hover:text-slate-600">
              Siri
            </span>
            <span
              onClick={() => setFriendFour(!friendFour)}
              className={` hover:text-green-600 cursor-pointer ${
                friendFour === false ? 'text-green' : 'text-red'
              }`}>
              {friendFour === false ? add : added}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
