import React from 'react';
import PropTypes from 'prop-types';

import { Container, Repository } from './style';

const CompareList = ({ repositories }) => (
    <Container>
        { repositories.map(item => (
            <Repository key={item.id}>
                <header>
                    <img src={item.owner.avatar_url} alt={item.owner.login}/>
                    <strong>{item.name}</strong>
                    <small>{item.owner.login}</small>
                </header>

                <ul>
                    <li>
                        {item.stargazers_count} <small>stars</small>
                    </li>
                    <li>
                        {item.forks_count} <small>forks</small>
                    </li>
                    <li>
                        {item.open_issues_count} <small>issues</small>
                    </li>
                    <li>
                        {item.lastCommit} <small>last commit</small>
                    </li>
                </ul>
            </Repository>
        )) }
    </Container>
);

CompareList.propTypes = {
    repositories: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        owner: PropTypes.shape({
            login: PropTypes.string,
            avatar_url: PropTypes.string
        }),
        stargazers_count: PropTypes.number,
        forks_count: PropTypes.number,
        open_issues_count: PropTypes.number,
        pushed_at: PropTypes.string
    })).isRequired
};

export default CompareList
