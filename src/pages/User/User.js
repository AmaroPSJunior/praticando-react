import React, { Component } from 'react'
import UserForm from './UserForm'
 
class User extends Component {
    render() {
        let list = [
            {
                name: 'amaro',
                email: 'email'
            },
            {
                name: 'junior',
                email: 'email.junior'
            },
            {
                name: 'teste',
                email: 'emailteste'
            }
        ]

        return (
            <div>
                <UserForm></UserForm>
                <table border='1'>
                    <th>Nome</th>
                    <th>Email</th>
                    {list.map((item) => {
                        return <tr>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.email}
                            </td>
                        </tr>
                    })}
                </table>
            </div>
        )
    }
}

export default User;
