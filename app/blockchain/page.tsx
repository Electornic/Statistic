"use client";
import {useAccount, useConnect, useDisconnect, usePublicClient} from "wagmi";
import styles from './page.module.css';
import {useEffect, useState} from "react";
import {formatEther} from "viem";

export default function Blockchain() {
  const { connect, connectors: [injectedConnector] } = useConnect();
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();
  const publicClient = usePublicClient();
  const [balance, setBalance] = useState(formatEther(BigInt(0)));

  useEffect(() => {
    if (!isConnected) return;

    async function getBalance() {
      if (!address || !publicClient) return;

      const _balance = await publicClient.getBalance({ address } );
      setBalance(formatEther(_balance));
    }

    getBalance();

    return () => {
      setBalance(formatEther(BigInt(0)));
    }
  }, [isConnected]);

  return (
    <div className={styles.test}>
      <div>
        Blockchain
      </div>
      {!isConnected ? (
        <button onClick={() => connect({connector: injectedConnector})}>
          Connect Wallet
        </button>
      ) : (
        <button onClick={() => disconnect()}>
          Disconnect Wallet
        </button>
      )}
      {isConnected && (
        <>
          <div>
            {address}
          </div>
          <div>
            {balance} ETH
          </div>
        </>
      )}
    </div>
  )
}