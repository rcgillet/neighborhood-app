import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Tabs from 'react-native-tabs';

export default class NeighborhoodApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'first'
    };
  }

  render() {
    const { page } = this.state;
    return (
      <View style={styles.container}>
        <Tabs
          selected={page}
          style={styles.tabbar}
          selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}>
            <Text name="first">First</Text>
            <Text name="second">Second</Text>
            <Text name="third">Third</Text>
        </Tabs>

        <Text>CodeSharing App</Text>
        <Text>{page}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabbar: {
    backgroundColor:'white',
    height: 64,
    borderTopColor: 'red',
    borderTopWidth: 2
  }
});
