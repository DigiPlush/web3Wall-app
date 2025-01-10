"use client";

import Connexion from '@/components/Connexion';
import Sidebar from '@/components/Sidebar';
import Feed from '@/components/home/Feed';



const style = {
  wrapper: 'flex justify-center h-screen w-screen select-none bg-[#1F2430] text-white',
  content: 'max-w-[1600px] w-4/5 flex justify-between',
};



export default function Home() {
  return (
    
    <div className={style.wrapper}>
      <div className={style.content}> 
        <Sidebar/>
        <Feed/>
        <Connexion/>
      </div>
    </div>
    
    
  );
}
