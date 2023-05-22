import { createSlice  } from '@reduxjs/toolkit';

export const currentVideo = createSlice({
    name:'currentVideo',
    initialState:{
        postId:'',
        creatorName:'',
        creatorPic:'',
        title:'',
        desc:''
    },
    reducers: {
        setVideo(state,actions){
            state.postId = actions.payload.postId
            state.creatorName = actions.payload.creatorName
            state.creatorPic = actions.payload.creatorPic
            state.title = actions.payload.title
            state.desc = actions.payload.desc
        }
    }
})


export const currentVideoActions = currentVideo.actions