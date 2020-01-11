import React from "react";
import TaskForm from "../../components/task-form/task-form.component";
import {
    subjectsSelector
} from "../../redux/marks-manager/manager.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import TaskList from "../../components/tasks-list/task-list.component";

const SubjectPage = ({ subjects, match }) => {
    const subject = subjects[match.params.subjectName]
    return (
        <div>
            {subject ? (
                <div>
                    <h1>Subjevt Page</h1>
                    <div>your are in 7.8 you can improve!</div>
                    <TaskForm subjectId={subject.id} />
                    <TaskList tasks={subject.tasks}/>
                </div>
            ) : (
                <div>Subject dosent existsF</div>
            )}
        </div>
    );
};

const mapStateToProps = (state, ownProps) =>
    createStructuredSelector({
        subjects: subjectsSelector
    });

export default connect(mapStateToProps)(SubjectPage);
