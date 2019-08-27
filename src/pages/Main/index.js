import React, { Component } from 'react';

import { Container, Form } from './style';

import logo from '../../assets/logo.png';
import CompareList from '../../components/CompareList';
import api from '../../services/api';

export default class Main extends Component {
    state = {
        repositories: [],
        repositoryInput: ''
    };

    handleAddRepository = async (e) => {
        e.preventDefault();

        try {
            const response = await api.get(`/repos/${this.state.repositoryInput}`);
            this.setState({repositories: [...this.state.repositories, response.data]})
        } catch (error) {
            console.log(error);
        }
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