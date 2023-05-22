import React from 'react'

type ThumbnailProps = {
    onClick: () => void,
    image:string,
    creatorPic:string,
    title:string,
    creatorName:string
}

const Thumbnail = ({image,creatorPic,title,creatorName,onClick}:ThumbnailProps) => {
    // https://content-uploads-staging.s3.ap-south-1.amazonaws.com/1ef3bc0564e8_1659218190745.bin
    return (
        <article className='thumbnail' onClick={onClick}> 
            <div className='image' style={{backgroundImage:`url(${image})`}}>
                <img src={image} alt="" />
            </div>
            <img src={creatorPic} alt="" className='creator-pic' />
            <p className='title'>{title} </p>
            <span className='creator-name'>{creatorName}</span>
        </article>
    )
}

export default Thumbnail