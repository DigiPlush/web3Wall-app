import { BigNumber } from "@ethersproject/bignumber";
import Link from "next/link";
import { truncateAddress } from "../../utils/truncateAddress";

type PostEventCardProps = {
    walletAddress: string;
    newStatus: string;
    timestamp: BigInt;
};

const style = {
    wrapper: 'flex p-3 border-b border-[#242936]',
    postHeader: "flex justify-between items-center w-full mb-5",
    postBody: 'flex center flex-col items-start bg-[#1F2430] no-underline rounded-[10px]  transition-colors ease-in-out duration-150 overflow-hidden p-4 mb-2.5 w-full text-base',
    address: 'text-center text-[#8899a6] bg-[#242936] rounded-[20px] px-4 py-2 mb-2.5 text-xs max-w-[125px]',
    date: 'text-[#8899a6] text-xs',
    message: 'flex p-3 text-center  text-s ml-4'
}

export default function PostEventCard({ walletAddress, newStatus, timestamp }: PostEventCardProps) {

    const date = new Date(Number(timestamp) * 1000);

    return (
        <div className={style.wrapper}>
            <div className={style.postBody}>
                <div className={style.postHeader}>
                <Link href={`account/${walletAddress}`}>
                        <p className={style.address}>{truncateAddress(walletAddress)}</p>
                    </Link>
                    <p className={style.date}>{date.toLocaleDateString()}</p>
                </div>

                <div className={style.message}>{newStatus}</div>
            </div>
        </div>
    );
}