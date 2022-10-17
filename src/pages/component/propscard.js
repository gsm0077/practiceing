import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';




export class Propscard extends React.Component{



  render(){
    return(
      
    <div class="card" >
       <img src={this.props.pic} class="card-img-top" alt="..."></img>
      <div class="card-body">
          <h5 class="card-title">{this.props.title}</h5>
          <p class="card-text">{this.props.context}</p>
          <a href={this.props.link} class="btn btn-dark" target='_blank'>Buy now</a>
      </div>
    </div>

    )
  }
}

