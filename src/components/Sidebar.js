import { FiMoreHorizontal } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import SidebarOption from "./SidebarOptions";
import { useState } from "react";
import { RiHome2Fill, RiHome2Line, RiProfileFill, RiProfileLine, RiSearch2Fill, RiSearch2Line } from "react-icons/ri";


const style = {
    wrapper: `flex-[0.7] px-8 flex flex-col`,
    homeIconContainer: `text-3xl m-4`,
    postButton: `bg-[#FFCC66] text-black hover:bg-[#C9A151] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer`,
    navContainer: `flex-1`,
    profileButton: `flex items-center mb-6 cursor-pointer hover:bg-[#242936] rounded-[100px] p-2`,
    profileLeft: `flex item-center justify-center mr-4`,
    profileImage: `height-12 w-12 rounded-full`,
    profileRight: `flex-1 flex`,
    details: `flex-1`,
    name: `text-lg`,
    handle: `text-[#8899a6]`,
    moreContainer: `flex items-center mr-2`,
  }

function Sidebar(initialSelectedIcon = 'Home'){
    const [selected, setSelected] = useState(initialSelectedIcon);
    return (
        <div className={style.wrapper}>
            <div className={style.homeIconContainer}>
                <AiFillStar/>
            </div>
            <div className={style.navContainer}>
                <SidebarOption 
                    Icon={selected==='Home' ? RiHome2Fill : RiHome2Line}
                    text='Home' 
                    isActive={selected==='Home'} 
                    setSelected={setSelected}
                    redirect={'/'}/>
                <SidebarOption
                    Icon={selected==='Search' ? RiSearch2Fill : RiSearch2Line}
                    text='Search'
                    isActive={selected==='Search'}
                    setSelected={setSelected}
                    redirect={'/'}/>
                <SidebarOption
                    Icon={selected==='Profile' ? RiProfileFill : RiProfileLine}
                    text='Profile'
                    isActive={selected==='Profile'}
                    setSelected={setSelected}
                    redirect={'/'}/>
                <SidebarOption
                    Icon={selected==='More' ? FiMoreHorizontal : FiMoreHorizontal}
                    text='Credits'
                    isActive={selected==='More'}
                    setSelected={setSelected}
                    redirect={'/'}/>
                <div className={style.postButton}>Say Something</div>
            </div>
            <div className={style.profileButton}>
                <div className={style.profileLeft}></div>
                <div className={style.profileRight}>
                    <div className={style.details}>
                        <div className={style.name}>Your Name</div>
                        <div className={style.handle}>@yourhandle</div>
                    </div>
                    <div className={style.moreContainer}>
                        <FiMoreHorizontal/>
                    </div>
                </div>
            </div>
                    
        </div>
    )
}

export default Sidebar;