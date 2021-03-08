import React from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";

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
      <form onSubmit={props.handleSubmit(props.onSurveySubmit)}>
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

  errors.emails = validateEmails(values.emails || "");

  if (!values.title) {
    errors.title = "You must provide a title";
  }
  if (!values.subject) {
    errors.subject = "You must provide a subject";
  }
  if (!values.body) {
    errors.body = "You must provide a body";
  }
  if (!values.emails) {
    errors.emails = "You must provide a recipient list";
  }

  return errors;
};

export default reduxForm({
  validate,
  form: "surveyForm",
})(SurveyForm);
