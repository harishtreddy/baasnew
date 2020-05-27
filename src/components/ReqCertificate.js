import React, { Component } from 'react'
import { Card, Form, Row, Col} from 'react-bootstrap';
import axios from 'axios'



class ReqCertificate extends Component {

  state={
    student_Id:''
  }





  handlechange=(e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }




  
handleSubmit =(e) =>{
e.preventDefault()
  axios.post('http://165.22.219.87:8000/request_Certificates',this.state)
  .then(
    Response=>{
      console.log("responseCertificateReq", Response)
    }
  )
  
  }
  

render() {
return(
	<div>

<Card size="lg" className="mobcard p-3"  >


<h2>Request Certificate</h2>

<Card.Body>  




<Form>
 

  <Form.Group as={Row} >
    <Form.Label column sm="4">
    Student ID
    </Form.Label>
    <Col sm="8">
      <Form.Control  name="student_Id" onChange={this.handlechange}
       type="text" placeholder="Enter the Student ID " />
    </Col>
  </Form.Group>



 



  <div className="col-md-12 text-center">
  <button   
   onClick={this.handleSubmit}
  style={{border:"0px", borderRadius:"1.5rem"
  ,color:"#fff",height:"2rem",width:"4rem",
backgroundColor:"blue", fontSize:"0.8rem"
}}>Request</button>

<button 
style={{border:"0px", borderRadius:"1.5rem",color:"#fff",
 width:"4rem",height:"2rem",
backgroundColor:"rgb(202, 69, 69)", fontSize:"0.8rem", 
marginLeft:"3px"
}}
>Cancel</button>
</div>

</Form>



</Card.Body>
</Card>



	</div>

)
}
}

export default ReqCertificate