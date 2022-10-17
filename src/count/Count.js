import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from "react";

// var count= 5; 

export class Count extends React.Component{

state={
     count:[0,0]
}




countIncrement=() =>{
    
    this.setState({count :[this.state.count[0] + 1,this.state.count[1] + 1]})
    

}
countDecrement=() =>{
    this.setState({count :[this.state.count[0] - 1,this.state.count[1] + 1]})
    
}

  render(){

    return(
        <div>

        <h1>count = {this.state.count[1]} & countfunction = {this.state.count[0]}</h1>

            <button className="btn btn-primary" onClick={this.countIncrement}> + </button>
            <button className="btn btn-primary" onClick={this.countDecrement}> - </button>

        </div>



    )
  }
    
    
    // render() {
    //     let counts = () =>{const [name,setName] = useState("sai mani");} 
    //     // let name = "saimani"
    //     function namechanger() {
    //         console.log("clicked");
    //         // name = "gsm"; 
    //         return setName('gsm');
    //     }
    //     return (
    //         <>
    //             <h1>HI i am {name}</h1>
    //             <button onClick={namechanger}>click me</button>
    //         </>
    //     );
    // }

 
}
