import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Counter from './Counter'

class App extends Component {
  constructor(props){
    super(props)
    // this.state = { msg: 'Hello World'}
  }
  
  // componentDidMount(){
  //   this.setState({
  //     msg : 'hello state Anderson'
  //   })
  // }

  render() {
    // let { msg } = this.state
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>


        <Counter></Counter>
      </View>
    );
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
