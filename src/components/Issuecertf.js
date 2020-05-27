import React, { Component } from 'react'
import { Card, Table, Modal, Form, Row, Col, Button} from 'react-bootstrap';
import axios from 'axios'
 class Issuecertf extends Component {

  state = {
    show:false,
    showStatus:false,
info:[],
clickedData:{},
ClickedID:''
  }
  setShow = (index) =>{
      this.setState({
          show:true,
          showStatus:false,
          clickedData:index.Result
         
      })
  
  }

    

  setShowStatus=  () =>{
    this.setState({
        show:false,
        showStatus:true
       
    })
  
  }



  componentDidMount(){

    axios.get( 'http://165.22.219.87:8000/get_Request_Certificates')
    .then(response=>{
      this.setState({
      info:response.data.Result
    
       
      })
      console.log("resooooo", this.state.info)
    })
    
    }




    onView=async(index)=>{
      console.log("rezzzzs",index.Record)
  await this.setState({
    ClickedID:index
  })
      await axios.get
    
  (`http://165.22.219.87:8000/Query_certificate_create_details?student_Id=${this.state.ClickedID.Record.Student_Id}`)
      .then(approveRes=>{
        this.setState({show:true,
     clickedData:approveRes.data.Result,
     
            })
            console.log("responseONviewbutton",this.state.clickedData)
      })
      }



      onApprove=()=>{
 axios.post('http://165.22.219.87:8000/issue_Certificate',
         {request_Id:this.state.clickedData.id})
        .then(approveRes=>{
          this.setState({
          showStatus:true
          })
          console.log("onclickkof CREATEBUTTON",approveRes)
        })
        }
        


  hideFn = () =>{
    this.setState({
        show:false,
        showStatus:false
    })
}


  render() {
      return (
    <div>

     <Card size="lg" className="mobcard p-3"  >

<h2>Issue Certificate</h2>
<Card.Body>  


<Table responsive>
<thead>
  <tr>
  <th  >Request ID <br/>
    </th>
    <th >Student ID <br/>
   </th>
   
  
    <th > Status <br/>
  </th>
 
  <th > Action <br/>
  </th>
  </tr>

</thead>
<br/>


<tbody>
{this.state.info.map((index) =>{
    return(
      <>
  <tr>
    <td >{index.Record.id}</td>
    <td>{index.Record.Student_Id}</td>
  
    <td>
    {index.Record.status}
   </td>



<td><button onClick={() => this.onView(index)}
style={{backgroundColor:"#20b38e", 
border:"0px", color:"#FFF",borderRadius:"1.5rem"}}

>View</button> </td>
  </tr>
  <br/>

  </>

  
)
})}
  
 
  
</tbody>
</Table>

</Card.Body>
</Card>


{this.state.info.map((index) =>{
    return(
      <>
 
<Modal show={this.state.show} onHide={this.hideFn}>
        <Modal.Header closeButton>
          <Modal.Title>Action </Modal.Title>
        </Modal.Header>
        <Modal.Body>

    

        <Form>
 
    
  

 
   <Form.Group as={Row} >
   <Form.Label column sm="5">
  Req id
   </Form.Label>
   <Col sm="7" style={{display:"flex", alignItems:"center"}}>
   <p style={{color:"black"}}> {index.Record.id}  </p>
   </Col>
 </Form.Group>


 <Form.Group as={Row} >
   <Form.Label column sm="5">
   Name of the Student 
   </Form.Label>
   <Col sm="7" style={{display:"flex", alignItems:"center"}}>
   <p style={{color:"black"}}> {this.state.clickedData.Student_Name}  </p>
   </Col>
 </Form.Group>



 <Form.Group as={Row} >
   <Form.Label column sm="5">
     Student ID
   </Form.Label>
   <Col sm="7">
   <p style={{color:"black"}}> {this.state.clickedData.Student_Id}  </p>
   </Col>
 </Form.Group>



 <Form.Group as={Row} >
   <Form.Label column sm="5">
     Name of the Institute
   </Form.Label>
   <Col sm="7">
   <p style={{color:"black"}}> {this.state.clickedData.Institute_Name}  </p>
   </Col>
 </Form.Group>


 <Form.Group as={Row} >
   <Form.Label column sm="5">
    Institute ID
   </Form.Label>
   <Col sm="7">
   <p style={{color:"black"}}> {this.state.clickedData.Institute_ID}  </p>
   </Col>
 </Form.Group>

 <Form.Group as={Row} >
   <Form.Label column sm="5">
   Course Name
   </Form.Label>
   <Col sm="7">
   <p style={{color:"black"}}> {this.state.clickedData.Course_Name}  </p>
   </Col>
 </Form.Group>

 <Form.Group as={Row} >
   <Form.Label column sm="5">
 Batch 
   </Form.Label>
   <Col sm="7">
   <p style={{color:"black"}}> {this.state.clickedData.Batch_No}  </p>
   </Col>
 </Form.Group>


 <Form.Group as={Row} >
   <Form.Label column sm="5">
 Class 
   </Form.Label>
   <Col sm="7">
   <p style={{color:"black"}}> {this.state.clickedData.class_No}  </p>
   </Col>
 </Form.Group>

</Form>



        </Modal.Body>
        <div className="col-md-12 text-center">
    
        <Button variant="primary" 
        onClick={this.onApprove} 
        style={{border:"0px", borderRadius:"1.5rem",color:"#fff",height:"2rem",width:"4rem",
        backgroundColor:"blue", fontSize:"0.8rem"
        }}
        >
           Create
          </Button>
          <Button
          style={{border:"0px", borderRadius:"1.5rem",color:"#fff",height:"2rem",width:"4rem",
          backgroundColor:"rgb(202, 69, 69)", fontSize:"0.8rem"
          }}
          show={this.state.show}
           onClick={this.hideFn}>
        Cancel
          </Button>
        <br/>
       
        </div>
        <br/>
        <br/>
      </Modal>
      </>
       )
})}


      <Modal size="lg" show={this.state.showStatus} onHide={this.hideFn}>
  


        <Modal.Body>


        <Card size="lg" className=" p-3" >


<div class="row">






<div className="col-md-12 text-center">

<text style={{ fontSize:"1.5rem", marginTop:"-10px",fontStyle:"inherit",
fontWeight:"600", fontFamily:"initial" }}>
CERTIFICATE <br/>
OF APPRECIATION </text>
<br/>


<hr />

<br/>


<p>
This is to Certify that <br/>
RAMESH <br/>
has successfully completed the <br/>
BLOCKCHAIN course<br/>
in the class C2020-jan of batch 2019-20 <br/>
offered by <br/>
Oxford University.
</p>
<hr/>





<Row>

<Col>
<div className="col-md-4 text-center">
 <input style={{borderTop:"0", borderRight:"0",borderLeft:"0",
  borderBottom:"1px solid grey"}}></input><br/>
<p >DATE</p>
</div>
</Col>
<div className="col-md-4 text-center">
<Col><Card.Img style={{ height:"9rem"}} variant="top"
src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/0018/2124/brand.gif?itok=FMMm9a26" />



</Col>
</div>

<Col>
<div className="col-md-4 text-center">
<input style={{borderTop:"0", borderRight:"0",borderLeft:"0",
 borderBottom:"1px solid grey"}}></input><br/>
<p >SIGN </p>
</div>
</Col>

</Row>

</div>


<hr />
</div>


</Card>

        </Modal.Body>
        
      </Modal>







</div>

  
        )
    }
}

export default Issuecertf
