import React from "react";
import "./ImgBlock.css";

const ImgBlock = (props) => {
    return (
        <div>
            <img src={props.url}/>
        </div>

    )
}

export default ImgBlock;