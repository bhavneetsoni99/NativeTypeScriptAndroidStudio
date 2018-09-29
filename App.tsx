import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Picker, PermissionsAndroid } from 'react-native';
import { Header, SearchBar } from 'react-native-elements';

import AddressSearchComponent from './components/AddressSearchComponent';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
interface State {
  typeOfTrip: string;
  startingPoint: string;
  destinationPoint: string;
}
export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      typeOfTrip: '',
      startingPoint: '',
      destinationPoint: '',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Road Trip', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <Picker
          selectedValue={this.state.typeOfTrip}
          style={{ height: 50, width: 320, margin: 15, }}
          prompt={'Primary purpose of the trip'}
          mode={'dropdown'}
          onValueChange={(itemValue, itemIndex) => this.setState({ typeOfTrip: itemValue })}>
          <Picker.Item label="Business" value="business" />
          <Picker.Item label="Leisure" value="avoidHighways" />
          <Picker.Item label="Get Me Their Quickest" value="fast" />
          <Picker.Item label="Avoid Tolls" value="noTolls" />
          <Picker.Item label="Lets Explore" value="siteseing" />
        </Picker>
        <AddressSearchComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});
