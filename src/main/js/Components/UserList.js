'use strict';

// tag::vars[]
const React = require('react');
// end::vars[]


// tag::user-list[]
export class UserList extends React.Component {
    render() {
        var users = this.props.users.map(user =>
            <User key={user._links.self.href} user={user} />
        );
        return (
            <table>
                <tbody>
                    <tr>
                        <th>First Xia</th>
                        <th>Last Name</th>
                    </tr>
                    {users}
                </tbody>
            </table>
        )
    }
}
// end::user-list[]

// tag::user[]
export class User extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.user.firstName}</td>
                <td>{this.props.user.lastName}</td>
            </tr>
        )
    }
}
// end::user[]
