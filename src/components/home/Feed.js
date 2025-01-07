import PostBox from "./PostBox";


const style = {
    wrapper: `flex-[2] bg-[#242936] border-r border-l border-black overflow-y-scroll`,
    header: `sticky top-0  z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
  }

function Feed() {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <h2 className={style.headerTitle}>Home</h2>
      </div>
      <PostBox/>
    </div>
  );
}

export default Feed;