import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import '../styles/video.scss';
import ReactPlayer from 'react-player'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { currentVideoActions } from '../redux/CurrentVid';

const Video = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [isFetching,setIsFetching] = useState(true)
    const [currentPage,setCurrentPage] = useState(0);
    const [data,setData] = useState<any>([]);
    const currentVideo = useSelector((state : RootState)=>state.currentVideo);

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
            if((document.body.offsetHeight - window.innerHeight) <= window.pageYOffset){
                setCurrentPage(prev => prev + 1)
            }
        }
        window.addEventListener('scroll',handleScroll)
        return () => window.removeEventListener('scroll',handleScroll)
    },[])
    return (
        <section className='video-page'>
            <article className='video'>
                <ReactPlayer url='https://www.youtube.com/watch?v=bukWzToGhgI' controls={true} width={1200} height={600} />
                <h2 className='title'>{currentVideo.title}</h2>
                <img src={currentVideo.creatorPic} alt="" />
                <span>{currentVideo.creatorName}</span>
                <h2 className='desc'> description</h2>
                <p>{currentVideo.desc}</p>
            </article>
            <ul role='list'>
            {data.map((e:any,i:any) => {
                const { postId,creator,submission } = e;
                return (
                    <li key={i}
                        onClick={()=>handleClick({
                            creatorName:creator.name,
                            creatorPic:creator.pic,
                            postId,
                            title:submission.title,
                            desc:submission.description
                        })}
                    >
                        <div className='image' style={{backgroundImage:`url(${submission.thumbnail})`}}>
                            <img src={submission.thumbnail} alt="" />
                        </div>
                        <h2 className='title'>{submission.title}</h2>
                        <span className='creator-name'>{creator.name}</span>
                    </li>
                )
            })
            }
            {isFetching && <span className='loading'></span>}
            </ul>
        </section>
    )
}

export default Video