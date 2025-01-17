'use client';
import { useParams } from "next/navigation";
import { useContractEvents } from "thirdweb/react";
import { statusContract } from "@/constants/contracts";
import { getContractEvents, prepareEvent } from "thirdweb";



export default function Profile() {
  const { walletAddress } = useParams<{ walletAddress: string }>();
  const contract = statusContract;

  const preparedEvent = prepareEvent({ 
    signature: "event StatusUpdated(address indexed user, string newStatus, uint256 timestamp)",
  });

  const { data: statusEvents, isLoading: isStatusEventsLoading,} = useContractEvents({
    contract,
    events: [preparedEvent],
    blockRange: 100000,
  }); 

 

  return (<p>{walletAddress}</p>);


}