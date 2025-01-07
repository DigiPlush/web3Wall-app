import PostBox from "./PostBox";
import { useContract, useContractEvents } from "@thirdweb-dev/react";
import { STATUS_CONTRACT_ADDRESS } from "../../constants/addresses";

import { createThirdwebClient, getContract,} from "thirdweb";
import { defineChain } from "thirdweb/chains";


const style = {
    wrapper: `flex-[2] bg-[#242936] border-r border-l border-black overflow-y-scroll`,
    header: `sticky top-0  z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
  }

const posts = [
    {
        user: '0x1234',
        avatar: '',
        text:'gm',
        timestamp:'',

    }
]
function Feed() {

    //const contract = getContract(STATUS_CONTRACT_ADDRESS);
    const {contract} = useContract(STATUS_CONTRACT_ADDRESS);
    const {
        data: statusEvents,
        isLoading: isStatusEventsLoading,
    } = useContractEvents(
        contract, 
        "StatusUpdated",
    {
        subscribe: true,
    }
    );
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
                    walletAddress={event.data.walletAddress}
                    newStatus={event.data.newStatus}
                    timestamp={event.data.timestamp}/>
        )))}
        </div>
    </div>
  );
}

export default Feed;