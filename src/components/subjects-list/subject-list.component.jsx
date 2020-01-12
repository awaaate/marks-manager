import React from "react";
import ParsedLink from "../parsed-link/parsed-link.component";
import { SubjectListContainer } from "./subject-list.styled";

const SubjectsList = ({ subjects }) => (
    <SubjectListContainer>
        <ul>
            {subjects.map(({ subjectName, id }) => (
                <li key={id}>
                    <ParsedLink to={`/manager/${subjectName}`}>{subjectName} </ParsedLink>
                </li>
            ))}
        </ul>
    </SubjectListContainer>
);
export default SubjectsList;
