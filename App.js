import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Navigation!</Text>
        <Button
          onPress={() => navigate('Chat')}
          title="Chat with Lucy"
        />
        <Button
          onPress={() => navigate('Alternate', {user: 'raph'})}
          title="Go to the Alternate screen"
        />
      </View>
    )
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}

class AlternateScreen extends React.Component {
  static navigationOptions = {
    title: 'AlternateScreen',
  };
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Alternative screen that received {params.user} as a parameter</Text>
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
  Alternate: {screen: AlternateScreen},
});

AppRegistry.registerComponent('praccNavigation', () => SimpleApp);