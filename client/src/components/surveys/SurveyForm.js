import React from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";

const SurveyForm = (props) => {
  const renderFields = () => {
    return (
      <div>
        <Field
          type="text"
          name="title"
          component={SurveyField}
          label="Survey Title"
        />
        <Field
          type="text"
          name="subject"
          component={SurveyField}
          label="Subject Line"
        />
        <Field
          type="text"
          name="body"
          component={SurveyField}
          label="Email Body"
        />
        <Field
          type="text"
          name="emails"
          component={SurveyField}
          label="Recipient List"
        />
      </div>
    );
  };

  return (
    <div>
      <form onSubmit={props.handleSubmit((values) => console.log(values))}>
        {renderFields()}
        <Link to="/surveys" className="red btn-flat white-text">
          Cancel
        </Link>
        <button type="submit" className="teal btn-flat right white-text">
          Next
          <i className="material-icons right">done</i>
        </button>
      </form>
    </div>
  );
};

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = "You must provide a title";
  }

  return errors;
};

export default reduxForm({
  validate,
  form: "surveyForm",
})(SurveyForm);
