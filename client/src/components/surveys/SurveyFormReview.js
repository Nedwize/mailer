import React from "react";
import { connect } from "react-redux";

const SurveyFormReview = (props) => {
  return (
    <div>
      <h1>Form Review</h1>
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
