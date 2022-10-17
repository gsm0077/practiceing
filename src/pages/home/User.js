import React from "react";
import { Userform } from "../../userform/uform";
import { Userlist } from "../../userlist/ulist";
import "./assets/mystyler.css";

export class User extends React.Component {

    render() {
      return (
        <div className="row">
          <div className="col-md-12"  class ="uf">
            <Userform userObjectlist={this.userObjectlist} />
          </div>
          <div className="col-md-12"  class="ul">
            <Userlist userTabledata={this.userTabledata} />
          </div>
        </div>
      );
    }
  }