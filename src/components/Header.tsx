import React from 'react';
import { BsList , BsSearch , BsBell} from 'react-icons/bs';
import { HiUpload } from 'react-icons/hi'

type props = {
    setIsShowen: React.Dispatch<React.SetStateAction<boolean>>,
}

const Header = ({setIsShowen}: props) => {
    return (
            <header className='main-header'>
                <div className='left'>
                    <span onClick={()=>setIsShowen(true)}>
                        {BsList({})}
                    </span>
                    <div className='logo'>
                        <img src="/Youtube_logo.png" alt="" />
                        <p>YouTube</p>
                    </div>
                </div>
                <div className='search'>
                    <input type="text" placeholder='Search' />
                    <button>
                        {BsSearch({})}
                    </button>
                </div>
                <div className='right'>
                    <span className='upload'>
                        {HiUpload({})}
                    </span>
                    <span className='bell'>
                        {BsBell({})}
                    </span>
                    <div className='account'>
                    </div>
                </div>
            </header>
    )
}

export default Header