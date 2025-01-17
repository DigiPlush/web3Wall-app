import PostBox from "./PostBox";
import { useContractEvents } from "thirdweb/react";
import { statusContract } from "@/constants/contracts";
import  PostEventCard  from "./PostEventCard";
import { prepareEvent,} from "thirdweb";
import Loading from "../Loading";


const style = {
    wrapper: 'flex-[2] flex-col bg-[#242936] border-r border-l border-black overflow-y-scroll',
    header: 'sticky top-0  z-10 p-4 flex justify-between items-center',
    headerTitle: 'text-xl font-bold',
    loading: 'h-16 w-16 mx-auto',
  }

const contract = statusContract;

function Feed() {

    const preparedEvent = prepareEvent({ 
      signature: "event StatusUpdated(address indexed user, string newStatus, uint256 timestamp)",
    });

    const { data: statusEvents, isLoading: isStatusEventsLoading,} = useContractEvents({
      contract,
      events: [preparedEvent],
      blockRange: 100000,
    }); 



  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <h2 className={style.headerTitle}>Home</h2>
      </div>
      <PostBox/>
      <Loading/>
      <div>
        {!isStatusEventsLoading && statusEvents && (
            statusEvents.slice(0,30).reverse().map((event, index) => (
                <PostEventCard 
                    key={index} 
                    walletAddress={event.args.user}
                    newStatus={event.args.newStatus}
                    timestamp={event.args.timestamp}/>
        )))}
        </div>
    </div>
  );
}

export default Feed;