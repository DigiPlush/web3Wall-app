import React, { useState } from 'react';
import { prepareContractCall } from 'thirdweb';
import { statusContract } from '@/constants/contracts';
import { useSendTransaction } from 'thirdweb/react';


const style = {
  wrapper: 'px-4 flex flex-row border-b border-[#38444d] pb-4',
  postBoxLeft: 'mr-4',
  postBoxRight: 'flex-1',
  profileImage: 'height-12 w-12 rounded-full',
  inputField: 'block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500',
  formLowerContainer: 'flex',
  iconsContainer: 'text-[#1d9bf0] flex flex-1 items-center',
  icon: 'mr-2',
  submitGeneral: 'px-6 py-2 rounded-3xl font-bold',
  inactiveSubmit: 'bg-[#C9A151] text-black',
  activeSubmit: 'bg-[#FFCC66] text-black',
  charCount: 'flex justify-end text-s',
}




const PostBox = () => {

  const [postMessage, setPostMessage] = useState('');

  const { mutateAsync: mutateTransaction } = useSendTransaction();
  const styleCharacterCountColor = postMessage.length > 140 ? 'text-red-500' : 'text-[#8899a6]';

  const handlePost = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (!postMessage) return;
    try {
      const tx = await prepareContractCall({
        contract: statusContract,
        method: "function setStatus(string _status)",
        params: [postMessage],
      });
      await mutateTransaction(tx);
    } catch (error) {
      console.error(error);
    }
    finally {
      setPostMessage('');
    }
  };

  return <div className={style.wrapper}>
    <div className={style.postBoxLeft}>
      <img className={style.profileImage} src="" alt="" />
    </div>
    <div className={style.postBoxRight}>
      <form>
        <textarea
          
          className={style.inputField}
          placeholder="Share a thought onchain..."
          value={postMessage} onChange={(e) => setPostMessage(e.target.value)} />

        <div className={style.charCount}>
          <p className={styleCharacterCountColor}>{postMessage.length}/140</p>
        </div>

        <button
          type='submit'
          onClick={event => handlePost(event)}
          disabled={!postMessage}
          className={`${style.submitGeneral} ${postMessage ? style.activeSubmit : style.inactiveSubmit}`}
        >Submit</button>
      </form>
    </div>
  </div>

}

export default PostBox;