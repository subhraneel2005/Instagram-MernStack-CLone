import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { BiVideoPlus } from "react-icons/bi";
import { TbCirclePlus } from "react-icons/tb"
import { FaUser } from "react-icons/fa";
import logo from "../../assets/instaLogo.png"
import ShowPosts from '../PostComponents/ShowPosts';

function Sidebar() {

    const lists = [
        {
            id: 1,
            nameee: "Home",
            iconName: <GoHomeFill size={30}/>,
        },
        {
            id: 2,
            nameee: "Search",
            iconName: <FiSearch size={30}/>,
        },
        {
            id: 3,
            nameee: "Reels",
            iconName: <BiVideoPlus size={30}/>,
        },
        {
            id: 4,
            nameee: "Profile",
            iconName: <FaUser size={30}/>,
        },
    ]
  return (
    <div className='h-full container hidden md:block'>
        <div className='ml-4 mt-20 sticky top-[5rem]'>
            <img src={logo}  className="h-[100px]" alt="" />
            {lists.map(({id, nameee, iconName}) => (
                <div className='flex gap-3 mt-6 w-fit cursor-pointer hover:bg-slate-200 rounded-full px-3 duration-300 py-2' key={id}>
                    <div>{iconName}</div>
                    <h1 className='mb-1 text-xl'>{nameee}</h1>
                </div>
            ))}
            <div className='flex gap-3 mt-6 w-fit cursor-pointer hover:bg-slate-200 rounded-full px-3 duration-300 py-2'>
                    <div><TbCirclePlus size={30} onClick={<ShowPosts/>}/></div>
                    <h1 className='mb-1 text-xl'>Create post</h1>
            </div>
        </div>
    </div>
  )
}

export default Sidebar