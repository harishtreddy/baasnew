import React, { Component } from 'react'
import { Card, Modal, Button, Table, Form, Row, Col} from 'react-bootstrap';
import axios from 'axios'

 class ApproveAffl extends Component {


  state = {

    show:false,
    list:[],
   
    clickedData:{},
    ClickedID:''
 
}
setShow = (index) =>{
    this.setState({
        show:true,
        clickedData:index.Result
       
    })

}




componentDidMount(){

axios.get( 'http://165.22.219.87:8000/getAllInstituteList')
.then(response=>{
  this.setState({
    list:response.data.Result
   
  })

})

}




  onView=async(index)=>{

    console.log("res",index.Record)
await this.setState({
  ClickedID:index
})
    await axios.get
(`http://165.22.219.87:8000/queryInstitute?institute_ID=${this.state.ClickedID.Record.id}`)
    .then(approveRes=>{
      this.setState({show:true,
   clickedData:approveRes.data.Result,
   
          })
    })
    }


  onApprove=()=>{
    axios.post('http://165.22.219.87:8000/approveAffiliation',
     {institute_ID:this.state.clickedData.id})
    .then(approveRes=>{
      console.log("res",approveRes)
    })  
    }
    


hideFn = () =>{
    this.setState({
        show:false
    })
}



    render() {
     
      console.log("res",this.state.clickedData)
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

    <th>Status <br/>
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
        <button onClick={() => this.onView(index)} 
         style={{width:"4rem", height:"2.2rem", 
            backgroundColor:"#20b38e",color:"white",
       borderWidth:"thin", borderRadius:"1.5rem" }}>View</button>
            </td> 

            <td>
            {index.Record.status}
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
    
   
   
        <Form.Group as={Row} >
   <Form.Label column sm="5">
 Institute ID
   </Form.Label>
   <Col sm="7" style={{display:"flex", alignItems:"center"}}>
   <p style={{color:"black"}}> {this.state.clickedData.id}  </p>

   </Col>
 </Form.Group>
   
       

        <Form.Group as={Row} >
   <Form.Label column sm="5">
   Name of the Institute 
   </Form.Label>
   <Col sm="7" style={{display:"flex", alignItems:"center"}}>
   <p style={{color:"black"}}> {this.state.clickedData.Institute_name}  </p>

   </Col>
 </Form.Group>
 

 <Form.Group as={Row} >
   <Form.Label column sm="5">
   Institute Owner
   </Form.Label>
   <Col sm="7" style={{display:"flex", alignItems:"center"}}>
   <p style={{color:"black"}}> {this.state.clickedData.Institute_Owner}  </p>

   </Col>
 </Form.Group>


 
 <Form.Group as={Row} >
   <Form.Label column sm="5">
     Address
   </Form.Label>
   <Col sm="7">
   <p style={{color:"black"}}> {this.state.clickedData.address}  </p>
   </Col>
 </Form.Group>



 <Form.Group as={Row}>
   <Form.Label column sm="5">
   Contact Number
   </Form.Label>
   <Col sm="7">
   <p style={{color:"black"}}> {this.state.clickedData.Contact_Number}  </p>
   </Col>
 </Form.Group>


 <Form.Group as={Row} >
   <Form.Label column sm="5">
   Website
   </Form.Label>
   <Col sm="7">
   <p style={{color:"black"}}> {this.state.clickedData.website}  </p>
   </Col>
 </Form.Group>

 <Form.Group as={Row} >
   <Form.Label column sm="5">
     Email
   </Form.Label>
   <Col sm="7">
   <p style={{color:"black"}}> {this.state.clickedData.email}  </p>
   </Col>
 </Form.Group>

 <Form.Group as={Row} >
   <Form.Label column sm="5">
   Short Description
   </Form.Label>
   <Col sm="7">
   <p style={{color:"black"}}> {this.state.clickedData.Short_Description}  </p>
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

export default ApproveAffl
