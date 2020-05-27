import React, { Component } from 'react'
import { Card, Form, Row, Col} from 'react-bootstrap';
import axios from 'axios'

class CreateCourse extends Component {
state = {
    institute_ID:'',
	institute_Name:'',
	course_name:''
}

handlechange=(e) =>{
this.setState({
[e.target.name]: e.target.value
})
}


handleSubmit =(e) =>{
e.preventDefault()
    axios.post('http://165.22.219.87:8000/create_Course',this.state)
    .then(
      Response=>{
        console.log("responseCreatecourse", Response)
      }
    )
    
    }
    




render() {
return (
<div>
<Card size="lg" className="mobcard p-3" >
<h2>Create Course</h2>
<Card.Body>

<Form>


<Form.Group as={Row} >
<Form.Label column sm="4">
Institute Name
</Form.Label>
<Col sm="8">
<Form.Control onChange={this.handlechange}
name="institute_Name"
type="text" placeholder="Enter the Institute Name " />
</Col>
</Form.Group>

<Form.Group as={Row} controlId="formPlaintextPassword">
<Form.Label column sm="4">
Institute ID
</Form.Label>
<Col sm="8">
<Form.Control name="institute_ID" onChange={this.handlechange} type="text" placeholder=" Institute ID " />
</Col>
</Form.Group>



<Form.Group as={Row} controlId="formPlaintextPassword">
<Form.Label column sm="4">
Name of the course
</Form.Label>
<Col sm="8">
<Form.Control name="course_name" onChange={this.handlechange}
type="text" placeholder="Enter the Name of the course " />
</Col>
</Form.Group>
<br/>



<div className="col-md-12 text-center">
<button  onClick={this.handleSubmit}
style={{border:"0px", borderRadius:"1.5rem",color:"#fff",height:"2rem",width:"4rem",
backgroundColor:"blue", fontSize:"0.8rem"
}}>Add</button>

<button
style={{border:"0px", borderRadius:"1.5rem",color:"#fff", width:"4rem",height:"2rem",
backgroundColor:"rgb(202, 69, 69)", fontSize:"0.8rem", marginLeft:"3px"
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

export default CreateCourse