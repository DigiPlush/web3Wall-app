import {useState, useEffect} from 'react';
import Lottie from "lottie-react";
import loadingLottie from "@/../public/loadingLottie.json";

const style = {
    loading: 'h-16 w-16 mx-auto',
}

function Loading(){
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
    const timer = setTimeout(() => {
        setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
    },[]);

  if(isLoading){
    return(
      <div className={style.loading}>
        <Lottie animationData={loadingLottie} loop={true}/>
      </div>
    )
  }
}

export default Loading;