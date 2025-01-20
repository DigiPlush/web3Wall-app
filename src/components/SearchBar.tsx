import { redirect } from "next/navigation";
import React, { useState } from "react";

const style = {
    wrapper: 'flex-[2] flex-col bg-[#242936] border-r border-l border-black overflow-y-scroll',
    header: 'sticky top-0  z-10 p-4 flex justify-between items-center',
    headerTitle: 'text-xl font-bold',
    loading: 'h-16 w-16 mx-auto',
    barGeneral : 'max-w-md mx-auto',
    button : 'px-4 py-2 rounded-3xl font-bold bg-[#FFCC66] text-black absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium text-sm',
    inputField: 'block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500'
}

export default function SearchBar() {

    const [search, setSearch] = useState('');

    const handleSearch = async (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        if(!search) return;
        redirect(`/account/${search}`);
    }

    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <h2 className={style.headerTitle}>Search Address</h2>
            </div>
            
            <div>
                <form className={style.barGeneral}>
                    <div className="relative">
                    <input 
                        type="search"
                        className={style.inputField}
                        placeholder="Enter an address (0x...)" 
                        value = {search}
                        onChange={(e) => setSearch(e.target.value)}/>
                    <button
                        type='submit'
                        className={style.button}
                        onClick={event => handleSearch(event)}
                    >Search</button>
                    </div>
                </form>
            </div>
        </div>
    )
}