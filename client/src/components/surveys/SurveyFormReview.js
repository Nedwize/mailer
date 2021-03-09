import React from "react";
import { connect } from "react-redux";

const SurveyFormReview = (props) => {
  return (
    <div>
      <h5>Form Review</h5>
      <div>
        <div>
          <label>Survey Title</label>
          <div>
            <h6>{props.formValues.title}</h6>
          </div>
        </div>
        <div>
          <label>Subject Line</label>
          <div>{props.formValues.subject}</div>
        </div>
        <div>
          <label>Email Body</label>
          <div>{props.formValues.body}</div>
        </div>
        <div>
          <label>Recipient List</label>
          <div>{props.formValues.emails}</div>
        </div>
      </div>
      <button
        className="yellow darken-3 btn-flat white-text"
        onClick={props.onCancel}
      >
        Cancel
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { formValues: state.form.surveyForm.values };
};

export default connect(mapStateToProps)(SurveyFormReview);
