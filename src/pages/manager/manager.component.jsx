import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { mapSubjectsSelector } from "../../redux/marks-manager/manager.selectors";
import { Route } from "react-router-dom";

import SubjectForm from "../../components/subject-form/subject-form.component";
import SubjectPage from "../subject/subject.component";
import SubjectsList from "../../components/subjects-list/subject-list.component";

const ManagerPage = ({ match, subjectsList }) => {
    const { isExact } = match;
    console.log(subjectsList)
    return (
        <div>
            <h1>Manager Page</h1>
            <aside>
                <SubjectForm />
                <SubjectsList subjects={subjectsList} />
            </aside>
            {isExact ? (
                <h1>You are in excat page</h1>
            ) : (
                <Route
                    exact
                    path={"/manager/:subjectName"}
                    component={SubjectPage}
                />
            )}
        </div>
    );
};

const mapStateToProps = (state, ownProps) =>
    createStructuredSelector({
        subjectsList: mapSubjectsSelector
    });
export default connect(mapStateToProps)(ManagerPage);
