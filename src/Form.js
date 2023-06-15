import { react } from 'react'


export default function Form(props) {

    // change callback function
    const Change = event => {
        const { name, value } = event.target
            props.change(name, value)

    }
    // submit callback function
    const Submit = event => {
            event.preventDefault();
            props.submit()
    }

    return (
        <form onSubmit={Submit}>
            <label>Name
                <input
                    // What shows up before field is filled out
                    placeholder='Enter Name'
                    // 
                    value={props.values.name}
                    // defined title of field
                    name='name'
                    // What to do when field is updated
                    onChange={Change}
                />
            </label>
            <label>Email
                <input 
                    placeholder='Enter Email'
                    value={props.values.email}
                    name='email'
                    onChange={Change}
                />
            </label>
            <label>Role
                <input
                    placeholder='Enter Role'
                    value={props.values.role}
                    name='role'
                    onChange={Change}
                />
            </label>
            <input type='submit' value="Submit Form"/>
        </form>
    )
}