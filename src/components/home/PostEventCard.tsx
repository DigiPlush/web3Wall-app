import { BigNumber } from "ethers";
import Link from "next/link";
import { truncateAddress } from "../../utils/truncateAddress";

type PostEventCardProps = {
    walletAddress: string;
    newStatus: string;
    timestamp: BigNumber;
};

export default function EventCard({ walletAddress, newStatus, timestamp }: PostEventCardProps) {

    const date = new Date(timestamp.toNumber() * 1000);

    return (
        <div className="flex items-center p-4 border-b border-[#38444d]">
            <div className="ml-4">
                <p className="text-lg">{newStatus}</p>
                <Link href={'/account/${walletAddress}'}>
                    <p className="">{truncateAddress(walletAddress)}</p>
                </Link>
                <p>{date.toLocaleDateString()}</p>
            </div>
            <p>{newStatus}</p>
        </div>
    );
}