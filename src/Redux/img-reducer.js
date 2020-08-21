import {imgAPI} from "../API/api";

const SET_IMG = "SET_IMG";

const initialState = {
    imagesData: []
}

const imgReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IMG:
            return {
                ...state,
                imagesData: [...state.imagesData, ...action.imgData]
            }
        default: return state
    }
}



export const setImg = (imgData) => {
    return {
        type: SET_IMG,
        imgData
    }
}

export const getImgData = () => {
    return (dispatch) => {
        imgAPI.getImg().then(data => {
            dispatch(setImg(data))
            console.log(data)
        })
    }
}


export default imgReducer;