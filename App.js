import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Router, Scene} from "react-native-router-flux";
import Splash from "./src/components/splash";
import Disclaimer from "./src/components/disclaimer";
import Computations from "./src/components/computations";

export default function App() {

    return (
        <Router >
          <Scene key="root"  hideNavBar={true}>

            <Scene key="disclaimer"
                     component={Disclaimer}
          /><Scene key="compute"
                     component={Computations}
          />

              <Scene key="splash"
                     panHandlers={null}
                     component={Splash}
              />
          </Scene>
        </Router>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
