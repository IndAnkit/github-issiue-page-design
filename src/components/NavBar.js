import React from 'react';
import { AiFillGithub, AiOutlineUser } from 'react-icons/ai'
import { CgDetailsMore } from 'react-icons/cg';
import { RiNotificationLine, RiAddFill } from 'react-icons/ri';

const NavBar = () => {
    return (
        <div className='bg-black px-8 py-4'>
            {/*  MD ANd LG */}
            <div className='hidden  flex-row md:flex items-center'>
                {/* Left */}
                <div className='flex-1 gap-2 flex flex-row text-white items-center'>
                <AiFillGithub className='text-white' />
                    <input className='bg-transparent outline-none border rounded-md placeholder:text-gray-400 border-gray-400 px-2' placeholder='Search Here..'/>
                  <div className='font-medium'>Pull Request</div>
                  <div className='font-medium'>Issue</div>
                  <div className='font-medium'>Marketplace</div>
                  <div className='font-medium'>Explore</div>
                </div>
                {/* right */}
                <div className='gap-2 flex flex-row-reverse text-white'>
                    <AiOutlineUser />
                    <RiAddFill />
                    <RiNotificationLine className='text-white' />
                </div>
            </div>
            {/* SM */}
            <div className='md:hidden flex flex-row justify-between text-white'>
                <CgDetailsMore />
                <AiFillGithub className='text-white' />
                <RiNotificationLine className='text-white' />
            </div>

        </div>
    )
}

export default NavBar