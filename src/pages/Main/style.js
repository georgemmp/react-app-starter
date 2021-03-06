import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
`;

export const Form = styled.form`
    margin-top: 20px;
    width: 100%;
    max-width: 400px;
    display: flex;

    input {
        flex: 1;
        padding: 0 20px;
        height: 55px;
        background: #FFF;
        border: ${props => (props.withError ? '2px solid #F00' : 0)};
        font-size: 18px;
        color: #444;
    }

    button {
        width: 80px;
        height: 55px;
        padding: 0 20px;
        margin-left: 10px;
        background: #63F5B8;
        color: #FFF;
        border: 0;
        font-size: 20px;
        font-weight: bold;
        border-radius: 3px;

        &:hover {
            background: #52D89F;
        }
    }
`;
