import { getContract } from "thirdweb";
import { client } from "@/app/client";
import { defineChain } from "thirdweb/chains";

export const STATUS_CONTRACT_ADDRESS = "0x9957A3b7f91357f5411Cf3E4e71a585344C5A6f9";

export const statusContract = getContract({
    client: client,
    chain:defineChain(80002),
    address : STATUS_CONTRACT_ADDRESS,
});