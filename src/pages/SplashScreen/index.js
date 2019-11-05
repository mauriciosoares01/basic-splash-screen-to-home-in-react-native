import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import {Container} from './styles';

export default class SplashScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    const {navigation} = this.props;
    setTimeout(() => navigation.navigate('Main'), 1000);
  }

  render() {
    return (
      <Container>
        <ActivityIndicator size={35} />
      </Container>
    );
  }
}
