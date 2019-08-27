import React from 'react';

import { Container, Repository } from './style';

const CompareList = ({ repositories }) => (
    <Container>
        { repositories.map(item => (
            <Repository key={item.id}>
                <header>
                    <img src={item.owner.avatar_url} alt={item.owner.login}/>
                    <strong>{item.nome}</strong>
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
                        {item.pushed_at} <small>last commit</small>
                    </li>
                </ul>
            </Repository>
        )) }
    </Container>
);

export default CompareList
