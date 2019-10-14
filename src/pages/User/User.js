import React, { Component } from 'react'
 
class User extends Component {

    render() {

        let list = [
            {
                name: 'amaro',
                email: 'email'
            },
            {
                nome: 'junior', 
                email: 'outro'
            }
        ]

        return (
            <div>
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
