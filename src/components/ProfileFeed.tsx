import { useContractEvents } from "thirdweb/react";
import { statusContract } from "@/constants/contracts";
import { prepareEvent } from "thirdweb";
import PostEventCard from "@/components/home/PostEventCard";
import Loading from "@/components/Loading";
import { truncate } from "fs";
import { truncateAddress } from "@/utils/truncateAddress";

const style = {
    wrapper: 'flex-[2] flex-col bg-[#242936] border-r border-l border-black overflow-y-scroll',
    header: 'sticky top-0  z-10 p-4 flex justify-between items-center',
    headerTitle: 'text-xl font-bold',
    loading: 'h-16 w-16 mx-auto',
}

interface profileFeedProps {
    address: string
}

const contract = statusContract;



export default function ProfileFeed({ address }: profileFeedProps) {

    const preparedEvent = prepareEvent({
        signature: "event StatusUpdated(address indexed user, string newStatus, uint256 timestamp)",
    });

    const { data: statusEvents, isLoading: isStatusEventsLoading, } = useContractEvents({
        contract,
        events: [preparedEvent],
        blockRange: 10000000,
    });

    const statusEventsFiltered = statusEvents?.filter((event) => event.args.user === address);

    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <h2 className={style.headerTitle}>Profile : {truncateAddress(address)}</h2>
            </div>
            <Loading />
            <div>
                {!isStatusEventsLoading && statusEventsFiltered && (
                    statusEventsFiltered.slice(0, 30).reverse().map((event, index) => (
                        <PostEventCard
                            key={index}
                            walletAddress={event.args.user}
                            newStatus={event.args.newStatus}
                            timestamp={event.args.timestamp} />
                    )))}
            </div>
        </div>
    )
}