"use client";

import {createConfig, http, WagmiProvider} from "wagmi";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactNode, useState} from "react";
import {mainnet, sepolia} from "wagmi/chains";
import {injected} from "@wagmi/core";

const connectWallet = () => {
  let provider = null;

  if (typeof window.ethereum !== 'undefined') {
    provider = window.ethereum;

    // edge case if MM and CBW are both installed
    if (window.ethereum.providers?.length) {
      window.ethereum.providers.forEach((p: any) => {
        if (p.isMetaMask) provider = p;
      });
    }
  }

  return provider;
};

export default function Template({ children }: { children: ReactNode }) {
  const [queryClient] = useState(new QueryClient());
  const [wagmiConfig] = useState(createConfig({
    chains: [mainnet, sepolia],
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
    },
    connectors: [
      injected({
        target: {
          id: 'Metamask Provider',
          name: 'Metamask Provider',
          provider: connectWallet,
        },
      }),
    ],
    ssr: true,
    batch: {
      multicall: true,
    }
  }))

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}