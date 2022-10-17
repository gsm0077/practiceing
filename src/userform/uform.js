import React from "react";
import SimpleReactValidator from "simple-react-validator";

export class Userform extends React.Component {
  constructor(props) {
    super(props);

    this.validator = new SimpleReactValidator();

    this.state = {
      userObjectlist: {
        name: "",
        dob: "",
        email: "",
        phone: "",
        password: "",
      },
    };
  }

  handleInputChange = (c) => {
    const name = c.target.name;
    this.setState({
      userObjectlist: { ...this.state.userObjectlist, [name]: c.target.value },
    });
  };



  handleSubmit = () => {
    if (this.validator.allValid()) {
      this.state.userTabledata.push(this.state.userObjectlist);
      console.log(this.state.userTabledata);
      this.setState({ userTabledata: this.state.userTabledata });
    } else {
      this.validator.showMessages();
      this.forceUpdate(); 
      
    }
  };

  render() {
    return (
      <>
        <h4> User form</h4>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label class="form-label">Name</label>
              <input
                type="text"
                class="form-control"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
              {this.validator.message(
                "name",
                this.state.userObjectlist.name,
                "required|alpha_space|min:3|max:25",
                { className: "text-danger" }
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label class="form-label">Dob</label>
              <input
                type="date"
                class="form-control"
                name="dob"
                value={this.state.userObjectlist.dob}
                onChange={this.handleInputChange}
              />
              {this.validator.message(
                "Dob",
                this.state.userObjectlist.dob,
                "required",
                { className: "text-danger" }
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                name="email"
                value={this.state.userObjectlist.email}
                onChange={this.handleInputChange}
              />
              {this.validator.message(
                "Email",
                this.state.userObjectlist.email,
                "required|email",
                { className: "text-danger" }
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label class="form-label">Phone</label>
              <input
                type="number"
                class="form-control"
                name="phone"
                value={this.state.userObjectlist.phone}
                onChange={this.handleInputChange}
              />
              {this.validator.message(
                "Phone",
                this.state.userObjectlist.phone,
                "required|phone",
                { className: "text-danger" }
              )}
            </div>
          </div>
          <div className="col-md-12">
            <div className="mb-3">
              <label class="form-label">Password</label>
              <input
                type="text"
                class="form-control"
                name="password"
                value={this.state.userObjectlist.password}
                onChange={this.handleInputChange}
              />
              {this.validator.message(
                "password",
                this.state.userObjectlist.password,
                "required|regex:sai@123",
                { className: "text-danger" }
              )}
            </div>
          </div>
          <br />
          <button
            type="submit"
            className="btn btn-danger"
            onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
      </>
    );
  }
}
