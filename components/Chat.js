import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GiftedChat } from "react-native-gifted-chat"
import Firebase from "../Firebase"

class Chat extends React.Component {

    // const [messageList, setMessageList] = useState([])

    // useEffect(() => {
    //     ////////////////////////
    //     Firebase.shared.on(message => {
    //         setMessageList(GiftedChat.append(...messageList, message))
    //     })
    //     /////////////////////////
    // }, [])


    state = {
        messages: []
    };

    get user() {
        let name = this.props.route.params.name
        console.log(name);

        return {
            name: name,
            _id: Firebase.shared.uid
        };
    }

    componentDidMount() {
        Firebase.shared.on(message =>
            this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, message)
            }))
        );
    }

    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                user={this.user}
                onSend={Firebase.shared.send}
            />
        );
    }
}


export default Chat;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
