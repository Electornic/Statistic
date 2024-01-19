'use client';

import {createConfig, http, WagmiConfig} from "wagmi";
import {mainnet, sepolia} from "wagmi/chains";
import {PropsWithChildren} from "react";

const wagmiConfig = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
  ssr: true
})

export function WagmiProvider({ children }: PropsWithChildren<{}>) {
  return (
    <WagmiConfig config={wagmiConfig}>
      {children}
    </WagmiConfig>
  )
}