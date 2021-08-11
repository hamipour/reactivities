import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, Icon, List } from 'semantic-ui-react';


class App extends Component {

  state = {
    values: []
  }
  componentDidMount(){
    axios.get('http://localhost:5000/values')
    .then((res) => {
      this.setState({
      values: res.data
    })
    })
    
  }
    render() {
        return (
            <div className="App">
                <Header as="h2">
                    <Icon name="users" />
                    <Header.Content>Reactivities</Header.Content>
                </Header>
                <List>
                    <List.Item>Apples</List.Item>
                    <List.Item>Pears</List.Item>
                    <List.Item>Oranges</List.Item>
                </List>
            </div>
        );
    }
}

export default App;
