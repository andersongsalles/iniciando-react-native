import React, { Component } from 'react'
import { View, Text, Button, Alert } from 'react-native'

class Counter extends Component{
    constructor(props){
        super(props)

        this.state = {
            counter: 0
        }

        this.descEvent = this.descEvent.bind(this)
        this.incEvent = this.incEvent.bind(this)
    }

    descEvent(){
        let { counter } = this.state

        if (counter == 0){
            this.setState({ counter: 0 })
        }else {
            this.setState({
                counter: counter - 1
            })
        }
        // Alert.alert('Title', 'Hello from first Event binded')

    }

    incEvent(){
        this.setState({
            counter: this.state.counter + 1
        })
        // Alert.alert('Title', 'Hello from second Event binded')

    }

    render(){
        let { counter } = this.state
        return(
            <View>
                <Button title = "Desc" onPress = {() => this.descEvent()}/>

                <Text></Text>
                <Text>{ counter }</Text>
                <Button title = "Inc" onPress = {() => this.incEvent()}/>
            </View>
        )
    }
}

export default Counter
