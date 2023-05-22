import React, { useState,useEffect }  from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Thumbnail from './Thumbnail'
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { currentVideoActions } from '../redux/CurrentVid';
import {useNavigate} from 'react-router-dom';

const Home = () => {
    const [currentPage,setCurrentPage] = useState(0);
    const [data,setData] = useState<any>([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isShowen,setIsShowen] = useState(true);
    const [isFetching,setIsFetching] = useState(true)


    function handleClick(
        data: {
        creatorName: string,
        creatorPic: string,
        desc: string,
        postId: string,
        title: string
    }){
        dispatch(currentVideoActions.setVideo({...data}));
        navigate(`/video/${data.postId}`)
    }

    useEffect(() => {
        setIsFetching(true)
        fetch(`https://internship-service.onrender.com/videos?page=${currentPage}`)
        .then(res => res.json())
        .then(data => setData((prev: any) => [...prev,...data.data.posts]))
        .finally(()=> setIsFetching(false))
    }, [currentPage])
    

    useEffect(()=>{
        function handleScroll(){
            if((document.body.offsetHeight - window.innerHeight + 85) <= window.pageYOffset){
                setCurrentPage(prev => prev + 1)
            }
        }
        window.addEventListener('scroll',handleScroll)
        return () => window.removeEventListener('scroll',handleScroll)
    },[])
    return (
    <>
        <Header setIsShowen={setIsShowen}/>
        <Sidebar isShowen={isShowen} setIsShowen={setIsShowen} />
        <section className={`thumbnails ${isShowen && 'expand'}`}>
        <div className='thumbnails-holder'>
            {data.map((e:any,i:any) => {
                const { postId,creator,submission } = e;
                return (
                    <Thumbnail 
                        onClick={()=>handleClick({
                            creatorName:creator.name,
                            creatorPic:creator.pic,
                            postId,
                            title:submission.title,
                            desc:submission.description
                        })}
                        key={i} 
                        image={submission.thumbnail} 
                        creatorPic={creator.pic} 
                        creatorName={creator.name} 
                        title={submission.title}
                        />
                )
            })
            }
        </div>
        {isFetching && <span className='loading'></span>}
        </section>
    </>
  )
}

export default Home