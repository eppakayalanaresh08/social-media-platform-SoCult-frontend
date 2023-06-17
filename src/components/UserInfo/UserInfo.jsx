import React from 'react'
import { UserWorkList, UserEduList, userLivingInfo } from './userInfoList';
import {MdWork} from 'react-icons/md'
import {FaGraduationCap} from 'react-icons/fa'
import {AiFillHome} from 'react-icons/ai'



const UserInfo = () => {
  return (
    <div
    className="h-min w-full rounded-md bg-gray px-3 text-white text-xs font-semibold py-3"
    >
        <h1 className="text-base">Intro</h1>
        <button className="py-1 mx-auto my-2 text-textgray bg-lightgray rounded-md w-full overflow-x-hidden text-center">
            Add Bio
        </button>

        {
            UserWorkList.map(
                (item) => (
                    <div className="flex text-textgray my-3">
                       <div
                       className="items-center mx-1 align-middle my-auto"
                       >
                        <MdWork
                            fontSize={15}
                        />
                       </div>
                       <div className="text-[10px]">
                        {item.work} at <span
                        className="font-bold"
                        >{item.place}</span>
                       </div>
                    </div>
                )
            )
        }

        {
            UserEduList.map(
                (item) => (
                    <div className="flex text-textgray my-3">
                       <div
                       className="items-center mx-1 align-middle my-auto"
                       >
                        <FaGraduationCap
                            fontSize={15}
                        />
                       </div>
                       <div className="text-[10px]">
                        {item.edu} at <span
                        className="font-bold"
                        >{item.place}</span>
                       </div>
                    </div>
                )
            )
        }

        {
            userLivingInfo.map(
                (item) => (
                    <div className="flex text-textgray my-3">
                       <div
                       className="items-center mx-1 align-middle my-auto"
                       >
                        <AiFillHome
                            fontSize={15}
                        />
                       </div>
                       <div className="text-[10px]">
                        {item.event} <span
                        className="font-bold"
                        >{item.place}</span>
                       </div>
                    </div>
                )
            )
        }
    </div>
  )
}

export default UserInfo