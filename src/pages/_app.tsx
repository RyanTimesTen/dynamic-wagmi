import type { AppProps } from 'next/app';
import NextHead from 'next/head';
import * as React from 'react';
import { WagmiConfig } from 'wagmi';
import { DynamicContextProvider } from '@dynamic-labs/sdk-react';
import { ConnectDynamicWagmi } from '@dynamic-labs/wagmi-connector';

import { client } from '../wagmi';

function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <DynamicContextProvider
      settings={{
        environmentId: '67ddb74b-e30f-4039-9a25-f033c79f1207',
        multiWallet: true,
      }}
    >
      <WagmiConfig client={client}>
        <ConnectDynamicWagmi>
          <NextHead>
            <title>wagmi</title>
          </NextHead>

          {mounted && <Component {...pageProps} />}
        </ConnectDynamicWagmi>
      </WagmiConfig>
    </DynamicContextProvider>
  );
}

export default App;
