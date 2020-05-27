import React, { Component } from 'react'
import university from '../Images/university.jpg';
import './image.css'


import {  Card } from 'react-bootstrap';
class LoginPage extends Component {

    state={
        userName:'',
        password:'',
     
        
        }


        userName = (e) => {
            this.setState({
            
            userName: e.target.value,
            }) }
            
            
            password = (e) => {
            
            this.setState({
            
            password: e.target.value,
            })
            }


            handleSubmit = (e) =>{
     
     
                window.location.href = "/SideBar"
       
        }
        

    render() {
        return (
            
            <div style={{backgroundColor:"rgba(158, 158, 158, 0.06)",minHeight:"100vh"}}>
          


          <div class="container-fluid">
  <div class="row"  style={{paddingTop:"8rem"}}>

    <div class="col-sm-4" style={{paddingLeft:"5rem"}}>
        <card>
        <p style={{color:"grey", fontSize:"4rem" }}> A Great Place</p>
<p style={{color:"black", fontSize:"4rem"}}> To Start. </p>
 
        </card>

    </div>

    <div class="col-sm-2">


    <Card style={{marginTop:"10rem"}}>
<div className="imageCSS"  >
  <img   style={{backgroundColor:"white", marginTop:"15px", 
     width:"100%", height:"14rem",borderRadius:"11rem"}} 
     src={university}  alt="university" /> 

 </div>
</Card>

    </div>
    <br/>
    <div class="col-sm-6">   

    <Card style={{marginTop:"8rem"}} >
   
  <Card.Body >
    
    <input  type="text" style={{width:"90%",height:"2.3rem"}}
value={this.state.userName}
placeholder='Enter Email' onChange={this.userName} required/><br />
<br></br>


<input  type="password" style={{width:"90%",height:"2.3rem"}}
value={this.state.password} placeholder='Enter Password' 
onChange={this.password} required/><br />

<button onClick={this.handleSubmit} 
style={{backgroundColor:"rgb(34, 164, 189)", borderColor:"rgb(31, 188, 219)", color:"white",height:"40px",
width:"80px",
border:"1px solid", borderRadius:"3rem", fontSize:"15px",  marginTop:"1rem"}}
>Login </button> <br/>

<text>forgot password?</text>
    
  </Card.Body>
</Card>






    </div>
  </div>
</div>
 
 


            </div>
        )
    }
}

export default LoginPage
