'use client';
import { useParams } from "next/navigation";

import Sidebar from "@/components/Sidebar";
import Connexion from "@/components/Connexion";
import ProfileFeed from "@/components/ProfileFeed";

const style = {
  wrapper: 'flex justify-center h-screen w-screen select-none bg-[#1F2430] text-white',
  content: 'max-w-[1600px] w-4/5 flex justify-between',
};

export default function Profile() {
  const { walletAddress } = useParams<{ walletAddress: string }>();
  

 

  return (
    <div className={style.wrapper}>
      <div className={style.content}> 
        <Sidebar initialSelectedIcon={"Profile"}/>
        <ProfileFeed address={walletAddress}/>
        <Connexion/>
      </div>
    </div>
  );


}