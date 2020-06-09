import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Form, Input, Item, Button, Label } from "native-base"

export default function Home({ navigation }) {

    const [name, setName] = useState("")

    return (
        <Container style={styles.container}>
            <Form>
                <Item floatingLabel>
                    <Label>UserName</Label>
                </Item>
                <Input autoCorrect={false} autoCapitalize="none"
                    onChangeText={(name) => setName(name)}
                />
                <Button style={{ marginTop: 20 }} full rounded success onPress={() => {
                    navigation.navigate("Chat", { name: name })
                }} >
                    <Text style={{ color: "#FFF" }} >Start Chat</Text>
                </Button>
            </Form>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        justifyContent: 'center',
    },
});
