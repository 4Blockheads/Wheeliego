import { configureChains, createConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { publicProvider } from 'wagmi/providers/public';

const rpcUrl =
  'http://aops-custom-202305-2crvsg-nlb-1d600174371701f9.elb.ap-northeast-2.amazonaws.com:9650/ext/bc/XpX1yGquejU5cma1qERzkHKDh4fsPKs4NttnS1tErigPzugx5/rpc';

const devNet = {
  id: 2000777,
  name: 'Dev Net',
  network: 'dev net',
  nativeCurrency: { decimals: 18, name: 'Dev Net', symbol: 'AVAX' },
  rpcUrls: { default: { http: [rpcUrl] }, public: { http: [rpcUrl] } },
  // blockExplorers: {
  //   etherscan: { name: 'SnowTrace', url: 'https://testnet.snowtrace.io' },
  //   default: { name: 'SnowTrace', url: 'https://testnet.snowtrace.io' }
  // },
  contracts: {
    // multicall3: {
    //   address: '0xca11bde05977b3631167028862be2a173976ca11',
    //   blockCreated: 7096959
    // }
  },
  testnet: process.env.NODE_ENV === 'development',
};

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    ...(process.env.NODE_ENV === 'development' ? [devNet] : []),
    devNet,
  ],
  [publicProvider()]
);

console.log(chains);

export const config = createConfig({
  autoConnect: true,
  connectors: [
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
});
