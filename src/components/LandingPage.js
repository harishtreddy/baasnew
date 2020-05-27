import React, { Component } from 'react'


import { Navbar, Card } from 'react-bootstrap';
import ibhaanLogo from '../Images/ibhaanLogo.png';
import certificate from '../Images/certificate.jpg';

 class LandingPage extends Component {


    handleSubmit = (e) =>{
     
     
                window.location.href = "/LoginPage"
       
        }
        


    render() {
        return (
            <div>
  <Navbar style={{backgroundColor:"rgb(54, 107, 126)"}}>
    <Navbar.Brand href="#home">

    <img  style={{backgroundColor:"Transparent", marginTop:"15px", marginLeft:"15px",
     marginBottom:"15px", height:"31px"}} src={ibhaanLogo}  alt="Ilogo" />    
  

    </Navbar.Brand>
  </Navbar>


  <div class="container">
  <div class="row">


    <div class="col-6" style={{marginTop:"60px"}} >
  <h1 style={{fontSize:"30px" ,color:"#2e5d52",
fontFamily:"sans-serif"}}>Trusted Certificates </h1>  

  <p  style={{color:"#21272a"}}>The authenticity of your academic certificates 
      are validated using <br/>Blockchain Technology.
      The issued certificates are registered on the <br/> Blockchain
      so that any one who need to verify the authenticity of a <br/> certificate
      can do so, independently of the academic institution </p>  

      <button onClick={this.handleSubmit} style={{backgroundColor:"teal", border:"0px",color:"#fff",height:"34px",
      width:"135px",fontFamily:"sans-serif",
      fontSize:"12px"
    }} >GET STARTED</button>   
 
        </div>
    <div class="col-6">
        
    <img  style={{backgroundColor:"white", marginTop:"15px", 
     width:"136%", height:"100%",borderRadius:"11rem"}} 
     src={certificate}  alt="certificate" /> </div>

  </div>

</div>
          


<Card style={{backgroundColor:"teal"}} className="text-center">
    <br/>
<Card.Title style={{color:"#fff", fontSize:"25px",textAlign:"center"}}>Verifier</Card.Title>
<br/>
  <Card.Body style={{backgroundColor:"#fff", borderRadius:"1rem", alignContent:"center"}}>
   

    <input   style={{textAlign:"center",height: "31px", width:"18%", borderRadius:"0.2rem",
    marginTop:"2rem"}}
      placeholder="Certificate ID"/>
    
           
    <button  style={{backgroundColor:"red",color:"#fff",
height:"34px", width:"11%", border:"0px", borderRadius:"1rem"}}> 
Submit</button>
 <br/>
<br/>
  </Card.Body>
  <br/>
<br/>
  <Card.Footer className="text-muted"></Card.Footer>
</Card>



            </div>
        )
    }
}

export default LandingPage
