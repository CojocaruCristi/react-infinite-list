import React, {useEffect} from 'react';
import './App.css';
import ImgBlock from "./components/ImgBlock/ImgBlock";
import {getImgData} from "./Redux/img-reducer";
import {connect} from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import Preloader from "./components/Preloader/Preloader";

function App(props) {

    useEffect(() => {
        props.getImgData()
    }, [])
  return (
    <div className="App">
        <InfiniteScroll next={props.getImgData} hasMore={true} loader={<Preloader />} dataLength={props.imgData.length}>
            <div className="imgWrapper">
                {props.imgData.map(image => {
                    return <ImgBlock url={image.urls.thumb} key={image.id} />
                })}
            </div>
        </InfiniteScroll>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        imgData: state.images.imagesData
    }
}

export default connect(mapStateToProps, {getImgData})(App);
