import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export class User extends React.Component {

  state = {
    List: {
      name: "",email:"",phone:""
    }
  }

  usernamechange = (event) => {
    this.setState({ List : { ...this.state.List,[event.target.name]: event.target.value} });
    console.log(this.state.List);
  } 

  render() {

 
    return (
      <div className="row">
        <div className="col-6">
          <h1>User form</h1>
          <div className="row">
            <div className="col-6    ">
              <div className="mb-3">
                <label class="form-label">Name</label>
                <input class="form-control" type="text" placeholder="name" name="name" value={this.state.List.name} onChange={this.usernamechange}  />
              </div>
              <div className="mb-3">
                <label class="form-label">Email</label>
                <input class="form-control" type="email" placeholder="email" name="email" value={this.state.List.email} onChange={this.usernamechange} />
              </div>
              <div className="mb-3">
                <label class="form-label">Phone</label>
                <input class="form-control" type="phone" placeholder="phone" name="phone"  value={this.state.List.phone} onChange={this.usernamechange} />
              </div>
              <div className="mb-3">
                <button className="btn btn-danger">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
