import { http, createConfig, Config } from 'wagmi';
import {
  arbitrumSepolia,
  avalancheFuji,
  baseSepolia,
  bscTestnet,
  optimismSepolia,
  polygonAmoy,
  sepolia,
  hederaTestnet
} from 'viem/chains';
import { injected } from 'wagmi/connectors';

export const wagmiConfig: Config = createConfig({
  chains: [
    arbitrumSepolia,
    avalancheFuji,
    baseSepolia,
    bscTestnet,
    sepolia,
    optimismSepolia,
    polygonAmoy,
    hederaTestnet,
  ],
  connectors: [injected()],
  transports: {
    [arbitrumSepolia.id]: http(),
    [avalancheFuji.id]: http(),
    [baseSepolia.id]: http(),
    [bscTestnet.id]: http(),
    [sepolia.id]: http(),
    [optimismSepolia.id]: http(),
    [polygonAmoy.id]: http(),
    [hederaTestnet.id]: http(),
  },
});
