import React from 'react';
import {View, ScrollView} from 'react-native';
import PIC from './logo.jpg';
import SampleComponent from './SampleComponent';
import StylingRNComponent from './StylingRNComponent';

const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponent/>
        <StylingRNComponent/>
      </ScrollView>
    </View>
  );
};

export default App;