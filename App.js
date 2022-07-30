import React from 'react';
import { MoralisProvider } from 'react-moralis';
import Moralis from 'moralis/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { enableViaWalletConnect } from './misc/moralis-tools/enableViaWalletConnect';
import WalletConnectProvider from './misc/wc-tools';
import {MoralisDappProvider} from './misc/providers/MoralisDappProvider/MoralisDappProvider';
import { NavigationContainer } from '@react-navigation/native';
import AppWrapper from './AppWrapper'
import { Button } from 'react-native';
import { callStorage } from './contractUtils';

const appId = 'YjvDhD0bAVXWYKxRxXKNPk9Dm0iKlQEhbpVuFMPN';
const serverUrl = 'https://ynlly4ziyexj.usemoralis.com:2053/server';
const environment = 'native';
Moralis.setAsyncStorage(AsyncStorage);
Moralis.enable = enableViaWalletConnect;
const walletConnectOptions = {
  storageOptions: { asyncStorage: AsyncStorage },
  qrcodeModalOptions: { mobileLinks: [
    'rainbow',
    'metamask',
    'argent',
    'trust',
    'imtoken',
    'pillar',
  ]},
}

export default function App({children}) {
  return (
    <WalletConnectProvider {...walletConnectOptions}>
      <MoralisProvider appId={appId} serverUrl={serverUrl} environment={environment}>
        <MoralisDappProvider>
          <NavigationContainer>
            <AppWrapper/>
            <Button onPress={callStorage}>Click Me</Button>
          </NavigationContainer>
        </MoralisDappProvider>
      </MoralisProvider>
    </WalletConnectProvider>
  )
}