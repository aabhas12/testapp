/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Text } from 'native-base';
import {
  Platform,
  StyleSheet
} from 'react-native';
import PageContent from './Components/PageContent';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = { buttonselected:1 }
  }
  render() {
    return (
      <Container>
        <Content>
            <PageContent seletedtab={this.state.buttonselected}/>
        </Content>
        <Footer>
            <FooterTab>
                <Button active={(this.state.buttonselected === 1)} onPress={() => this.setState({ buttonselected:1 })}>
                    <Text>Apps</Text>
                </Button>
                <Button onPress={() => this.setState({ buttonselected:2 })}
                        active={(this.state.buttonselected === 2)}>
                    <Text>Camera</Text>
                </Button>
                <Button onPress={() => this.setState({ buttonselected:3 })}
                        active={(this.state.buttonselected === 3)}>
                    <Text>Navigate</Text>
                </Button>
                <Button onPress={() => this.setState({ buttonselected:4 })}
                        active={(this.state.buttonselected === 4)}>
                    <Text>Contact</Text>
                </Button>
            </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
