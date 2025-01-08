import PostBox from "./PostBox";
import { useContractEvents } from "thirdweb/react";
import { STATUS_CONTRACT_ADDRESS } from "../../constants/contracts";
import  PostEventCard  from "./PostEventCard";

import { createThirdwebClient, getContract, prepareEvent,} from "thirdweb";
import { defineChain } from "thirdweb/chains";
import {client} from '../../app/client'


const style = {
    wrapper: `flex-[2] bg-[#242936] border-r border-l border-black overflow-y-scroll`,
    header: `sticky top-0  z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
  }

const contract = getContract({
  client: client,
  chain: defineChain(80002),
  address: STATUS_CONTRACT_ADDRESS,
});

function Feed() {

    //const {data} = useReadContract

    //const {contract} = useContract(STATUS_CONTRACT_ADDRESS);

    const preparedEvent = prepareEvent({ 
      signature: "event StatusUpdated(address indexed user, string newStatus, uint256 timestamp)",
    });

    const { data: statusEvents, isLoading: isStatusEventsLoading,} = useContractEvents({
      contract,
      events: [preparedEvent],
    }); 

    console.log("1")
    console.log(isStatusEventsLoading);
    console.log(statusEvents);
    console.log("2")

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <h2 className={style.headerTitle}>Home</h2>
      </div>
      <PostBox/>
      <div>
        {!isStatusEventsLoading && statusEvents && (
            statusEvents.slice(0,30).map((event, index) => (
                <PostEventCard 
                    key={index} 
                    walletAddress={event.data.user}
                    newStatus={event.data.newStatus}
                    timestamp={event.data.timestamp}/>
        )))}
        </div>
    </div>
  );
}

export default Feed;