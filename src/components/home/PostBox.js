import React, { useState } from 'react';


const style = {
    wrapper: `px-4 flex flex-row border-b border-[#38444d] pb-4`,
    postBoxLeft: `mr-4`,
    postBoxRight: `flex-1`,
    profileImage: `height-12 w-12 rounded-full`,
    inputField: `w-full h-full outline-none bg-transparent text-lg`,
    formLowerContainer: `flex`,
    iconsContainer: `text-[#1d9bf0] flex flex-1 items-center`,
    icon: `mr-2`,
    submitGeneral: `px-6 py-2 rounded-3xl font-bold`,
    inactiveSubmit: `bg-[#C9A151] text-black`,
    activeSubmit: `bg-[#FFCC66] text-black`,
  }
  

  const PostBox = () => {
    const [postMessage, setPostMessage] = useState('');

    const submitPost = (event) => {
        event.preventDefault();

        if(!postMessage) return;
        console.log(postMessage);
        setPostMessage('');
    }

    return <div className={style.wrapper}>
      <div className={style.postBoxLeft}>
        <img className={style.profileImage} src="" alt=""/>
      </div>
      <div className={style.postBoxRight}>
        <form>
            <textarea 
            className={style.inputField} 
            placeholder="Share a thought onchain..." 
            value = {postMessage} onChange={(e) => setPostMessage(e.target.value)}/>

            <div className={style.formLowerContainer}>
            </div>
          <button 
          type = 'submit'
          onClick = {event => submitPost(event)}
          disabled = {!postMessage}
          className={`${style.submitGeneral} ${postMessage ? style.activeSubmit : style.inactiveSubmit}`}
          >Submit</button>
          </form>
        </div>
      </div>
      
  }

    export default PostBox;