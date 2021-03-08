import React from "react";

const SurveyReview = (props) => {
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

export default SurveyReview;
