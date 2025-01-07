"use client";

import { ThirdwebProvider } from '@thirdweb-dev/react';
import Sidebar from '../components/Sidebar';
import Feed from '../components/home/Feed';



const style = {
  wrapper: 'flex justify-center h-screen w-screen select-none bg-[#1F2430] text-white',
  content: 'max-w-[1400px] w-2/3 flex justify-between',
};



export default function Home() {
  return (
    <ThirdwebProvider>
    <div className={style.wrapper}>
      <div className={style.content}> 
        <Sidebar/>
        <Feed/>
        <h2>Widgets</h2>
      </div>
    </div>
    </ThirdwebProvider>
    
  );
}
