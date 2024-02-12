import React, {useState, useEffect} from 'react';
import Navigation from './src/navigation';
import {StatusBar, View} from 'react-native';
import {AppContextProvider} from './src/utils/context';
import {NoInternet} from './src/screens/noInternet';
import NetInfo from '@react-native-community/netinfo';

const App = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
  }, []);
  return (
    <AppContextProvider>
      <View style={{flex: 1}}>
        <StatusBar backgroundColor={'#0D121F'} />
        {isConnected ? <Navigation /> : <NoInternet />}
      </View>
    </AppContextProvider>
  );
};

export default App;
