import React, { useEffect, useState } from 'react';
import {View, ScrollView} from 'react-native';
import Ispan from './pages/Ispan';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import Communication from './pages/Communication';

const App = () => {
  const [isShow, SetIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() =>{
      SetIsShow(false);
    },6000);
  }, [])
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent/> */}
        {/* <StylingComponent/> */}
        {/* <FlexBox/> */}
        {/* <Position/> */}
        {/* <PropsDinamis/> */}
        {/* <StateDinamis/> */}
        <Communication/>
        {/* <Ispan/> */}
      </ScrollView>
    </View>
  );
};

export default App;