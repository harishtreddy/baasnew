import React, { Component } from 'react'
import { Card, Modal, Button, Table, Form, Row, Col} from 'react-bootstrap';
import axios from 'axios'

 class ApproveAfflcopy extends Component {


  state = {
    show:false,
    list:[],
    clickedData:''
}
setShow = (index) =>{
    this.setState({
        show:true,
        clickedData:index.Record
    })

}
   
hideFn = () =>{
    this.setState({
        show:false
    })
}





onApprove=()=>{
axios.post('http://206.189.129.133:8000/approveAffiliation',
 {institute_ID:this.state.clickedData.id})
.then(approveRes=>{
  console.log("res",approveRes)
})
}

componentDidMount(){

axios.get( 'http://206.189.129.133:8000/getInstituteList')
.then(response=>{
  this.setState({
    list:response.data.Result
  })

})
}


// 


    render() {
      console.log("dataall", this.state.clickedData)
        return (
            <div>
              <Card size="lg" className="mobcard p-3"  >

<Card.Body>  
<span> <h3 style={{float:"left", 
color:"#5b1667",fontFamily:"sans-serif", fontWeight:"540"
}}>Approve Affiliation</h3>


</span>

<br/>

<br/>



<Table responsive>
  <thead>
    <tr>
      <th >Institute ID<br/>
      </th>
      <th >Institute Name <br/>
     </th>
      <th>Action <br/>
    </th>
    </tr>

  </thead>
  <br/>


  <tbody>
    {this.state.list.map((index) =>{
      return(
        <>
        <tr>
        <td> {index.Record.id} </td>
      <td>{index.Record.Institute_name}</td>
     
  
        <td>
        <button onClick={() => this.setShow(index)} 
         style={{width:"4rem", height:"2.2rem", 
            backgroundColor:"#20b38e",color:"white",
       borderWidth:"thin", borderRadius:"1.5rem" }}>View</button>
            </td> 
      
      </tr>

      <br/>
      </>

      )
    })}

   
    



  
    
  </tbody>
</Table>
</Card.Body>
</Card>


<Modal show={this.state.show} onHide={this.hideFn}>
        <Modal.Header closeButton>
          <Modal.Title>Institute Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>



        <Form>
 

 <Form.Group as={Row} controlId="formPlaintextPassword">
   <Form.Label column sm="5">
   Institute Owner
   </Form.Label>
   <Col sm="7" style={{display:"flex", alignItems:"center"}}>
     <span> {this.state.clickedData.Institute_Owner}   </span>
   </Col>
 </Form.Group>


 <Form.Group as={Row} controlId="formPlaintextPassword">
   <Form.Label column sm="5">
   Name of the Institute 
   </Form.Label>
   <Col sm="7" style={{display:"flex", alignItems:"center"}}>
   <span> {this.state.clickedData.Institute_name}   </span>
   </Col>
 </Form.Group>

 <Form.Group as={Row} controlId="formPlaintextPassword">
   <Form.Label column sm="5">
   Contact Number
   </Form.Label>
   <Col sm="7">
     <Form.Control type="number" placeholder="Contact Number" />
   </Col>
 </Form.Group>


 <Form.Group as={Row} controlId="formPlaintextPassword">
   <Form.Label column sm="5">
   Website
   </Form.Label>
   <Col sm="7">
     <Form.Control type="text" placeholder="Website" />
   </Col>
 </Form.Group>

 <Form.Group as={Row} controlId="formPlaintextEmail">
   <Form.Label column sm="5">
     Email
   </Form.Label>
   <Col sm="7">
   <Form.Control type="text" placeholder="Email" />
   </Col>
 </Form.Group>

 <Form.Group as={Row} controlId="formPlaintextPassword">
   <Form.Label column sm="5">
   Short Description
   </Form.Label>
   <Col sm="7">
     <Form.Control type="text" placeholder="Short Description" />
   </Col>
 </Form.Group>


 <Form.Group as={Row} controlId="formPlaintextPassword">
   <Form.Label column sm="5">
  Upload a Document
   </Form.Label>
   <Col sm="7">
   <Form.File 
   id="custom-file"
   label="Upload Document"
   custom
 />
   </Col>
 </Form.Group>



</Form>



        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={this.onApprove}  >
           Approve
          </Button>
          <Button style={{backgroundColor:"red", color:"white"}} show={this.state.show}
           onClick={this.hideFn}>
        Decline
          </Button>
        
        </Modal.Footer>
      </Modal>


            </div>
        )
    }
}

export default ApproveAfflcopy
