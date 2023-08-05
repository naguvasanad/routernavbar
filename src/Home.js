import React from "react";
import "./Home.css"



const Home = () =>{
    return (
        <div style ={{margin:"10px"}}>
        <div className=" polaroid rotate_right">
            <img src="https://picsum.photos/200/200" alt="picsum photos"/>
            <p className="caption">This is beautifull picture of nature from picsum photos.</p>
        </div>

        <div className=" polaroid rotate_left">
        <img src="https://picsum.photos/id/237/200/200" alt="picsum photos"/>
        <p className="caption">This is beautifull picture of nature from picsum photos.</p>
    </div>
    </div>
    );
}

export default Home;