import React from "react";
import FormControl from "../form-control/form-contorl.component";
import { connect } from "react-redux";
import { pushTask } from "../../redux/marks-manager/manager.actions";

import "./task-form.styles.scss";
class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: "",
            mark: ""
        };
    }
    handleChange = event => {
        const { name, value } = event.target;
        console.log(this.props.subjectId);

        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();

        const { task, mark } = this.state;
        const { subjectId, pushTask } = this.props;

        const taskToAdd = { task, mark };

        pushTask(subjectId, taskToAdd);
    };

    render() {
        const { handleChange, handleSubmit } = this;
        const { task, mark } = this.state;
        return (
            <form className="task-form" onSubmit={handleSubmit}>
                <div className="inputs">
                    <FormControl
                        type="text"
                        label="Task Name"
                        handleChange={handleChange}
                        name="task"
                        value={task}
                    />
                    <FormControl
                        type="number"
                        label="Your Mark"
                        handleChange={handleChange}
                        name="mark"
                        value={mark}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    pushTask: (subjectId, taskToAdd) => dispatch(pushTask(subjectId, taskToAdd))
});
export default connect(null, mapDispatchToProps)(TaskForm);
