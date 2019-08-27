import React, { Component } from 'react';

import { Container, Form } from './style';

import logo from '../../assets/logo.png';
import CompareList from '../../components/CompareList'

export default class Main extends Component {
    state = {
        repositories: [],
        repositoryInput: ''
    };

    handleAddRepository = (e) => {
        e.preventDefault();
    };

    render() {
        return (
            <Container>
                <img src={logo} alt="GitHub Compare" />
                
                <Form onSubmit={this.handleAddRepository}>
                    <input 
                        value={this.state.repositoryInput}
                        type="text" 
                        placeholder="user/repository"
                        onChange={e => this.setState({repositoryInput: e.target.value})}
                    />
                    <button type="submit">OK</button>
                </Form>

                <CompareList repositories={this.state.repositories}/>
            </Container>
        );
    };
}