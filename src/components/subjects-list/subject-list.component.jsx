import React from "react";
import ParsedLink from "../parsed-link/parsed-link.component";

const SubjectsList = ({ subjects }) => (
    <div>
        <ul>
            {subjects.map(({ subjectName, id }) => (
                <li key={id}>
                    <ParsedLink to={`/manager/${subjectName}`}>{subjectName} </ParsedLink>
                </li>
            ))}
        </ul>
    </div>
);
export default SubjectsList;
