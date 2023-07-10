import * as React from 'react';
import { View, useWindowDimensions,StatusBar } from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import Home from './Home';
import { primary, thirty } from '../style/Main';




const FirstRoute = () => (
  <View style={{ flex: 1}} />
);

const SecondRoute = () => (
  <View style={{ flex: 1}} />
);

const renderScene = SceneMap({
  home: Home,
  first: FirstRoute,
  second: SecondRoute,
});

const Onglet=()=>{
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'MUR' },
    { key: 'first', title: 'Favoris' },
    { key: 'second', title: 'Options' },
  ]);
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={{ backgroundColor: thirty }}
    />
  );

  return (
    <TabView
        
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      style={{marginTop:StatusBar.currentHeight}}
      initialLayout={{ width: layout.width, marginTop:45 }}
      
    />
  );
}
export default Onglet 