import React, { useState } from 'react';
import { BsList } from 'react-icons/bs';
import { 
    AiFillHome,
    AiOutlineClockCircle,
    AiOutlineLike,
    AiOutlineFire,
    AiOutlineSetting,
    AiOutlineFlag
} from 'react-icons/ai'
import { TfiVideoClapper,TfiCup } from 'react-icons/tfi';
import { SiYoutubegaming } from 'react-icons/si';
import { MdOutlineOndemandVideo,
        MdOutlineVideoLibrary,
        MdOutlineHistory,
        MdOutlineMusicNote,
        MdOutlineHelpOutline
    } from 'react-icons/md';
import { BiCommentError } from 'react-icons/bi';

type props = {
    isShowen: boolean,
    setIsShowen: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar = ({isShowen,setIsShowen} : props) => {
    return (
        <>
            <aside className={`sidebar ${isShowen && 'showen'}`}>
                <div className='top'>
                    <span onClick={()=>setIsShowen(false)}>
                        {BsList({})}
                    </span>
                    <div className='logo'>
                        <img src="/Youtube_logo.png" alt="" />
                        <p>YouTube</p>
                    </div>
                </div>
                <ul role='list'>
                    <li>
                        <span>{AiFillHome({})}</span>
                        <p>Home</p>
                    </li>
                    <li>
                        <span>{TfiVideoClapper({})}</span>
                        <p>Shorts</p>
                    </li>
                    <li>
                        <span>{MdOutlineOndemandVideo({})}</span>
                        <p>Subscriptions</p>
                    </li>
                </ul>
                <ul role='list'>
                    <li>
                        <span>{MdOutlineVideoLibrary({})}</span>
                        <p>Library</p>
                    </li>
                    <li>
                        <span>{MdOutlineHistory({})}</span>
                        <p>History</p>
                    </li>
                    <li>
                        <span>{MdOutlineOndemandVideo({})}</span>
                        <p>Your videos</p>
                    </li>
                    <li>
                        <span>{AiOutlineClockCircle({})}</span>
                        <p>Watch later</p>
                    </li>
                    <li>
                        <span>{AiOutlineLike({})}</span>
                        <p>Liked videos</p>
                    </li>
                </ul>
                <ul role='list'>
                    <h2>Explore</h2>
                    <li>
                        <span>{AiOutlineFire({})}</span>
                        <p>Trending</p>
                    </li>
                    <li>
                        <span>{MdOutlineMusicNote({})}</span>
                        <p>Music</p>
                    </li>
                    <li>
                        <span>{SiYoutubegaming({})}</span>
                        <p>Gaming</p>
                    </li>
                    <li>
                        <span>{TfiCup({})}</span>
                        <p>Sports</p>
                    </li>
                </ul>
                <ul role='list'>
                    <h2>More from YouTube</h2>
                    <li>
                        <img src="/Youtube_logo.png" alt="" />
                        <p>YouTube Studio</p>
                    </li>
                    <li>
                        <img src="/Youtube_logo.png" alt="" />
                        <p>YouTube Kids</p>
                    </li>
                </ul>
                <ul role='list'>
                    <li>
                        <span>{AiOutlineSetting({})}</span>
                        <p>Settings</p>
                    </li>
                    <li>
                        <span>{AiOutlineFlag({})}</span>
                        <p>Report history</p>
                    </li>
                    <li>
                        <span>{MdOutlineHelpOutline({})}</span>
                        <p>Help</p>
                    </li>
                    <li>
                        <span>{BiCommentError({})}</span>
                        <p>Send feedback</p>
                    </li>
                </ul>
            </aside>
            <aside className='sidebar-shortcut'>
                <ul role='list'>
                    <li>
                        <span>{AiFillHome({})}</span>
                        <p>Home</p>
                    </li>
                    <li>
                        <span>{TfiVideoClapper({})}</span>
                        <p>Shorts</p>
                    </li>
                    <li>
                        <span>{MdOutlineOndemandVideo({})}</span>
                        <p>Subscriptions</p>
                    </li>
                    <li>
                        <span>{MdOutlineVideoLibrary({})}</span>
                        <p>Library</p>
                    </li>
                </ul>
            </aside>
            <div className={`sidebar-over-layer ${isShowen && 'active'}`}> </div>
        </>
    )
}

export default Sidebar