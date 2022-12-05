import { configureChains, createClient, defaultChains } from 'wagmi';

import { publicProvider } from 'wagmi/providers/public';

import { dynamicWagmiConnector } from '@dynamic-labs/wagmi-connector';

const { provider } = configureChains(defaultChains, [publicProvider()]);

export const client = createClient({
  connectors: [dynamicWagmiConnector],
  provider,
});
