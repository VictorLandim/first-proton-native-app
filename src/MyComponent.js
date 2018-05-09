import React, { Component } from 'react'; // import from react
import { render, Window, App, Box, TextInput, Text } from 'proton-native'; // import the proton-native components

export default class Example extends Component {
    state = {
        output: '',
        emojis: ['🤣', '😍', '😾', '👺', '🤑', '🤔', '💩', '👽']
    };

    handleText(text) {
        const { emojis } = this.state;
        let response = '';
        let options = ['a', 'd', 'e', 's', 't', 'r'];
        let subOptions = ['b', 'c', 'u', 'i', 'o'];

        for (let i = 0; i < text.length; i++) {
            if (options.indexOf(text[i]) !== -1) {
                response = response + emojis[i % emojis.length];
            }

            if (subOptions.indexOf(text[i]) !== -1) {
                response = response + emojis[(i * 3) % emojis.length];
            }
        }

        this.setState({
            output: response
        });
    }

    render() {
        // all Components must have a render method
        return (
            <App>
                {/*you must always include App around everything*/}
                <Window
                    title="My Proton Native app"
                    size={{ w: 600, h: 450 }}
                    menuBar={false}
                    margined={true}
                >
                    <Box>
                        <TextInput
                            onChange={text => {
                                this.handleText(text);
                            }}
                        />
                        <Text>{this.state.output}</Text>
                    </Box>
                </Window>
            </App>
        );
    }
}
