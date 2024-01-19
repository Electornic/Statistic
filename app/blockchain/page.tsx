import { useConnect } from "wagmi";
import { injected } from 'wagmi/connectors';

export default function Blockchain() {

  return (
    <div>
      <div>
        Blockchain
      </div>
      {/*<button onClick={() => connectAsync({ connector: injected() })}>*/}
      {/*  Connect Wallet*/}
      {/*</button>*/}
    </div>
  )
}