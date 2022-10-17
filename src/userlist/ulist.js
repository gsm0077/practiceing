import React from "react";

export class Userlist extends React.Component {
  state = {
    userTabledata: [
      {
        name: "sai",
        dob: "mani",
        email: "asdad",
        phone: "asdsad",
        password: "sai@123",
      },
    ],
  };

  render() {
    return (
      <>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Name</th>
              <th scope="col">Dob</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Password</th>
            </tr>
          </thead>
          <tbody>
            {this.state.userTabledata.map((the, i) => (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{the.name}</td>
                <td>{the.dob}</td>
                <td>{the.email}</td>
                <td>{the.phone}</td>
                <td>{the.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
