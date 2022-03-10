import React from 'react';
import { Field, reduxForm } from 'redux-form';
import "./styles.css"
class EntryForm extends React.Component {

    renderError({error, touched}){
        if(touched && error){
            return (
                <div className="text-danger">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = (formProps) =>{
        const { input, label, meta } = formProps;
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                <div>{this.renderError(meta)}</div>
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    };

    render(){   
        return (
            <form className="ui form error" 
            onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="API" component={this.renderInput} label="Enter API: " />
                <Field name="Auth" component={this.renderInput} label="Enter Auth: " />
                <Field name="Category" component={this.renderInput} label="Enter Category: " />
                <Field name="Description" component={this.renderInput} label="Enter descripiton: " />
                <Field name="Link" component={this.renderInput} label="Enter Link: " />
                <button className="btn btn-primary">Submit</button>
            </form>
        );
    }
};

const validate = (formValues) => {
    const errors = {};
    if(!formValues.API){
        errors.API = 'You must enter a API';
    }
    if(!formValues.Auth){
        errors.Auth = 'You must enter a Auth';
    }
    if(!formValues.Category){
        errors.Category = 'You must enter a Category';
    }
    if(!formValues.Description){
        errors.Description = 'You must enter a description';
    }
    if(!formValues.Link){
        errors.Link = 'You must enter a Link';
    }
    return errors;
};

export default reduxForm({
    form: 'EntryForm',
    validate
})(EntryForm);
