import { useEffect, useState } from 'react';
import { getContract } from 'viem';
import { usePublicClient, useWalletClient } from 'wagmi';

export function useContract(contractAddress: string, abi: any) {
  const publicClient = usePublicClient();
  const { data: walletClient } = useWalletClient();
  const [contract, setContract] = useState<any>(null);

  function createContract(_contractAddress: string, _abi: any) {
    if (!walletClient) return null;

    // @ts-ignore
    return getContract({
      address: _contractAddress as `0x${string}`,
      abi: _abi,
      client: { public: publicClient, wallet: walletClient },
    });
  }

  useEffect(() => {
    async function setupContract() {
      const _contract = await createContract(contractAddress, abi);
      setContract(_contract);
    }

    setupContract();
  }, [walletClient, contractAddress, abi]);

  return { contract, createContract };
}
