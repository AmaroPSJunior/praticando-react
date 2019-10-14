import {reduxForm, Field} from 'redux-form'
import { connect } from 'react-redux'
import React from 'react'
import {submitUserAction} from '../../actions/user/UserAction'


const UserFormFunc = props => {
    const {handleSubmit} = props

    const submit = (data, submitUserAction) =>{
        submitUserAction(data)
    }

    return (
        <form onSubmit={handleSubmit((fields) => submit(fields, submitUserAction))}>
            <label>
                Name: 
            </label>
            <Field
                type='text'
                component='input'
                name='nome'
            />

            <br>
            </br>
            <label>
                Email: 
            </label>
            <Field
                type='email'
                component='input'
                name='email'
            />

            <br></br>
            <button type='submit'>Submit</button>

        </form>
    )
}

const UserForm = (
    reduxForm(
        { form:'formUser' }   
    )
)(UserFormFunc)

const mapStateToProps = state =>({

})

export default connect(mapStateToProps, {submitUserAction})(UserForm)