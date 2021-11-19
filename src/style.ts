import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
`;

export const UserContainer = styled.div`
    padding: 20px;

`;

export const LogoutConatiner = styled.div`
    button{
        margin-top: 15px;
                width: 5rem;
                height: 25px;
                border: none;
                background: #ff0000;
                border-radius: 25px;
                color: black;
                font-size: 1rem;
                text-transform: capitalize;
                cursor: pointer;

                :hover{
                    background: #ff4040;
                    font-weight: 800;
                }

    }
`;

export const LoginContainer = styled.form `
    div{
        padding: 10px 0;

        .loginBtn{
            input[type="button"]{
                margin-top: 15px;
                width: 5rem;
                height: 25px;
                border: none;
                background: #a0a0a0;
                border-radius: 25px;
                color: black;
                font-weight: bold;
                font-size: 1rem;
                text-transform: capitalize;
                cursor: pointer;

                :hover{
                    background: #666666;
                    color: #fff;
                }
            }
        }


        section{
            input[type="text"]{
                outline: none;
                border: none;
                border-bottom: 1px solid red;
            }
        }
    }
`;