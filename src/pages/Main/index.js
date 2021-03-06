import React, { Component } from 'react';

import { Container, Form } from './style';

import logo from '../../assets/logo.png';
import moment from 'moment';

import CompareList from '../../components/CompareList';
import api from '../../services/api';

export default class Main extends Component {
    state = {
        repositories: [],
        repositoryInput: '',
        repositoryError: false,
        loading: false
    };

    handleAddRepository = async (e) => {
        e.preventDefault();

        this.setState({loading: true});

        try {
            const { data } = await api.get(`/repos/${this.state.repositoryInput}`);
            data.lastCommit = moment(data.pushed_at).fromNow();
            this.setState(
                { 
                    repositories: [...this.state.repositories, data], 
                    repositoryInput: '',
                    repositoryError: false
                }
            );
        } catch (error) {
            this.setState({repositoryError: true});
        } finally {
            this.setState({loading: false})
        }
    };

    render() {
        return (
            <Container>
                <img src={logo} alt="GitHub Compare" />
                
                <Form withError={this.state.repositoryError} onSubmit={this.handleAddRepository}>
                    <input 
                        value={this.state.repositoryInput}
                        type="text" 
                        placeholder="user/repository"
                        onChange={e => this.setState({repositoryInput: e.target.value})}
                    />
                    <button type="submit">{this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}</button>
                </Form>

                <CompareList repositories={this.state.repositories}/>
            </Container>
        );
    };
}