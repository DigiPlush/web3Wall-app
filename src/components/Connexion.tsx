import { ConnectButton } from "thirdweb/react";
import { client } from "@/app/client";

import {createWallet} from "thirdweb/wallets";


const wallets = [
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    createWallet("me.rainbow"),
    createWallet("io.rabby"),
    createWallet("io.zerion.wallet"),
  ];

export default function Connexion() {
  return (
    <div className=" flex-col justify-between items-center mb-6">

        <div className="flex justify-center m-4 ">
          <ConnectButton 
            client={client}
            wallets={wallets}
            connectModal={{
                size : "compact",
                showThirdwebBranding : false,
            }} />
        </div>
    </div>
  );
}