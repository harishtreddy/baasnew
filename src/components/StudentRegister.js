import React, { Component } from 'react'
import { Card, Form, Row, Col} from 'react-bootstrap';
import axios from 'axios'

 class StudentRegister extends Component {


state={
  student_Name:'',
  student_DOB:'',
  email:'',
  contact_Number:'',
  alter_No:'',
  institute_ID:'',
  course_Id:[],
  Selectcourse_Id:'',
  address:''

}
handlechange=(e) =>{
  this.setState({
    [e.target.name]: e.target.value
  })
}



handleSubmit =(e) =>{
  e.preventDefault()
  
  axios.post('http://165.22.219.87:8000/take_Admission', 
  {student_Name:this.state.student_Name,student_DOB:this.state.student_DOB,
     email:this.state.email, contact_Number:this.state.contact_Number,alter_No:this.state.alter_No,address:this.state.address,
    institute_ID:this.state.institute_ID, course_Id:this.state.Selectcourse_Id
  })
  .then(
    Response=>{
      console.log("responstudRegister", Response)
    }
  )
  
  }




  componentDidMount(){

    axios.get( 'http://165.22.219.87:8000/get_Course_From_Institute?institute_ID=Institute-a0ddba4c-9fde-11ea-9752-0242ac170012')
    .then(response=>{
      this.setState({
  course_Id:response.data.Result
    
       
      })
   
    })
    
    }


SelectCourse=(e)=>{
this.setState({
  Selectcourse_Id:e.target.value
})
// console.log("inside",index)
}


    render() {
      console.log("resooooo", this.state.Selectcourse_Id)
        return (
            <div>
                 
                 <Card size="lg" className="mobcard p-3"  >


<h2>Student Register</h2>
<Card.Body>  

<Form>
 

  <Form.Group as={Row} >
    <Form.Label column sm="4">
      Name of the Student 
    </Form.Label>
    <Col sm="8">
      <Form.Control  name="student_Name" onChange={this.handlechange} type="text" placeholder="Enter the  Name of the Student " />
    </Col>
  </Form.Group>



  <Form.Group as={Row} >
    <Form.Label column sm="4">
   D-O-B
    </Form.Label>
    <Col sm="8">
      <Form.Control  name="student_DOB"  onChange={this.handlechange} type="text" placeholder="Enter DOB " />
    </Col>
  </Form.Group>



  <Form.Group as={Row} >
    <Form.Label column sm="4">
    Email 
    </Form.Label>
    <Col sm="8">
      <Form.Control name="email" onChange={this.handlechange}
      type="text" placeholder="Enter the Email" />
    </Col>
  </Form.Group>



  <Form.Group as={Row} >
    <Form.Label column sm="4">
    Addresss
    </Form.Label>
    <Col sm="8">
    <Form.Control 
    name="address" onChange={this.handlechange}
    type="text" placeholder="Enter the Address" />
    </Col>
  </Form.Group>



  <Form.Group as={Row} >
    <Form.Label column sm="4">
    Contact Number
    </Form.Label>
    <Col sm="8">
      <Form.Control
      name="contact_Number" onChange={this.handlechange}
      type="number" placeholder="Enter the Contact Number" />
    </Col>
  </Form.Group>


  <Form.Group as={Row} >
    <Form.Label column sm="4">
   Alternative Contact Number
    </Form.Label>
    <Col sm="8">
      <Form.Control 
      name="alter_No" onChange={this.handlechange}
      type="number" placeholder="Enter the Alternative Contact Number" />
    </Col>
  </Form.Group>


  <Form.Group as={Row} >
    <Form.Label column sm="4">
      Institute ID
    </Form.Label>
    <Col sm="8">
    <Form.Control 
    name="institute_ID" onChange={this.handlechange}
    type="text" placeholder="Enter the Institute ID" />
    </Col>
  </Form.Group>

  <Form.Group controlId="exampleForm.SelectCustomSizeSm">
    <Form.Label>Course ID</Form.Label>
    <Form.Control as="select" size="sm" value={this.state.Selectcourse_Id}
    onChange={this.SelectCourse}
    custom>
      {this.state.course_Id.map((index)=>{
        return(
        <option value={index.Record.id}>{index.Record.id}</option>
        )
      })}
    </Form.Control>
  </Form.Group>



  <button   
  onClick={this.handleSubmit}
  style={{border:"0px", borderRadius:"1.5rem",color:"#fff",height:"2rem",width:"4rem",
backgroundColor:"blue", fontSize:"0.8rem"
}}>Register</button>

<button 
style={{border:"0px", borderRadius:"1.5rem",color:"#fff", width:"4rem",height:"2rem",
backgroundColor:"rgb(202, 69, 69)", fontSize:"0.8rem", marginLeft:"3px"
}}
>Cancel</button>


</Form>



</Card.Body>
</Card>



            </div>
        )
    }
}

export default StudentRegister
