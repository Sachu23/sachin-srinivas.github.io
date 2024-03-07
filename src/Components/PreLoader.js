import React, { useEffect } from "react";
import "../css/preloader.css"
import { preLoaderAnim } from "../animations";

const PreLoader = () => {

    useEffect(() => {
        preLoaderAnim();
      }, []);

    return(
        <div className="preloader">
            <div className="text-container">
                <span>FullStack Developer, </span>
                <span>Cloud Engineer, </span>
                <span>Software Developer.</span>
            </div>
        </div>
    )
}

export default PreLoader;