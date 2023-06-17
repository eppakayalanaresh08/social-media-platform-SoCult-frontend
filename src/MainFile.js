import React, { useState } from 'react';
// import Head from 'react-helmet';
import UserInfo from './components/UserInfo/UserInfo';
import Discover from './components/Discover/Discover';
import { Photo, Video } from './components/Feed';
import { BiPhotoAlbum } from 'react-icons/bi';
import { MdSlowMotionVideo } from 'react-icons/md';

export default function MainFile() {
  const [feed, setFeed] = useState('PHOTO');

  return (
    <>
      <main className="min-h-screen bg-[url('https://res.cloudinary.com/dgcprz6er/image/upload/v1687008238/pexels-aliona-_-pasha-3892172_fzg834.jpg')] grid  p-8">
        <div className="gap-8 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1">
          <UserInfo className="mx-2 fixed" />
          <div className="h-min w-full">
            <div className="rounded-md grid grid-cols-2 shadow-md hover:shadow-lg py-1 text-sm font-semibold">
              <button className="flex" onClick={() => setFeed('PHOTO')}>
                <div className="mx-auto flex items-center text-center">
                  <BiPhotoAlbum fontSize={18} className="mx-auto" />
                  <span className="mx-2">Photo</span>
                </div>
              </button>

              <button className="flex" onClick={() => setFeed('VIDEO')}>
                <div className="mx-auto flex items-center text-center">
                  <MdSlowMotionVideo fontSize={18} className="mx-auto" />
                  <span className="mx-2">Video</span>
                </div>
              </button>
            </div>
            <div className="w-full">
              {feed === 'PHOTO' ? <Photo /> : <Video />}
            </div>
          </div>
          <Discover className="mx-2" />
        </div>
      </main>
    </>
  );
}
