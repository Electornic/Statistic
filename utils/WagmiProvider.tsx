"use server";

import { createConfig, http, WagmiProvider as _WagmiProvider } from "wagmi";
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

export async function WagmiProvider({ children }: PropsWithChildren<{}>) {
  return (
    <_WagmiProvider config={wagmiConfig}>
      {children}
    </_WagmiProvider>
  )
}