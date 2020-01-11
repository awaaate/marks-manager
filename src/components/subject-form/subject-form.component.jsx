import React from "react";
import FormControl from "../form-control/form-contorl.component";
import { pushSubject } from "../../redux/marks-manager/manager.actions";
import { connect } from "react-redux";

class SubjectForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            subjectName: ""
        };
    }
    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();

        const {subjectName} = this.state
        const { subjectIdAndName, pushSubject } = this.props;
       
        pushSubject(subjectName)
    };

    render() {
        const { handleChange, handleSubmit } = this;
        const { subjectName } = this.state;
        return (
            <form onSubmit={handleSubmit}>
                <FormControl
                    type="text"
                    label="Subject Name"
                    handleChange={handleChange}
                    name="subjectName"
                    value={subjectName}
                />
            </form>
        );
    }
}

const mapDisptachToProps = dispatch => ({
    pushSubject: subjectToPush => dispatch(pushSubject(subjectToPush))
});
export default connect(null, mapDisptachToProps)(SubjectForm);
