import React from "react";
import TaskForm from "../../components/task-form/task-form.component";
import {
    subjectsSelector
} from "../../redux/marks-manager/manager.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import TaskList from "../../components/tasks-list/task-list.component";

import './subject.styles.scss';
import SubjectForm from "../../components/subject-form/subject-form.component";

const SubjectPage = ({ subjects, match }) => {
    const subject = subjects[match.params.subjectName]
    return (
        <div className="subject-page" >
            {subject ? (
                <div className="inner">
                    <h1>Subjevt Page</h1>
                    <div>your are in 7.8 you can improve!</div>
                    <TaskForm subjectId={subject.id} />
                    <TaskList tasks={subject.tasks}/>
                </div>
            ) : (
                <div className="subject-not-exisit">
                    <p>Sorry the subject that you are searchinf for, doesn't exist</p>
                    <p>But you can create one</p>
                    <SubjectForm />
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state, ownProps) =>
    createStructuredSelector({
        subjects: subjectsSelector
    });

export default connect(mapStateToProps)(SubjectPage);
