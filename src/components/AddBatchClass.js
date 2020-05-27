import React, { Component } from 'react'
import { Card,  Form, Row, Col} from 'react-bootstrap';

 class AddBatchClass extends Component {

    handlechange=(e) =>{
        this.setState({
          [e.target.name]: e.target.value
        })
      }




    render() {
        return (
            <div>
                 <Card size="lg" className="mobcard p-3"  >


<h2>Add Batch & Class</h2>
<Card.Body>  




<Form>
 

  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="4">
     Class ID
    </Form.Label>
    <Col sm="8">
      <Form.Control  name="name" onChange={this.handlechange} type="text" placeholder="Enter the class ID" />
    </Col>
  </Form.Group>



  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="4">
    Class Number
    </Form.Label>
    <Col sm="8">
      <Form.Control type="text" placeholder="Enter the Class Number" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="4">
  Batch ID
    </Form.Label>
    <Col sm="8">
      <Form.Control type="number" placeholder="Enter the Batch ID" />
    </Col>
  </Form.Group>
 
</Form>


<button  onClick={this.handleSubmit}
style={{border:"0px", borderRadius:"1.5rem",color:"#fff",height:"2rem",width:"4rem",
backgroundColor:"blue", fontSize:"0.8rem"}}
>Add</button>
<button  onClick={this.handleSubmit}
style={{border:"0px", borderRadius:"1.5rem",color:"#fff",height:"2rem",width:"4rem",
backgroundColor:"red", fontSize:"0.8rem"}}
>Cancel</button>
</Card.Body>
</Card>

            </div>
        )
    }
}

export default AddBatchClass
