import styled from "styled-components";

export const SubjectListContainer = styled.div`
    margin-top: 10px;

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;

        li {
            padding: 10px 10px;
            transition: background-color .1s;
            a {
                text-decoration: none;
                font-size: 1.3rem;
                text-transform: capitalize;
            }
            &:hover {
                background-color: rgba(0,0,0,0.05);
            }
        }
    }
`;
