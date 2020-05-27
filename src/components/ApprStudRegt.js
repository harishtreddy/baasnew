import React, { Component } from 'react'
import { Card, Table, Modal, Form, Row, Col, Container} from 'react-bootstrap';
import axios from 'axios'
 class ApprStudRegt extends Component {
    state = {
        show:false,
        list:[],
        resultApprove:'',
        clickedApprove:''
    }
    setShow = (index) =>{
      console.log("indexxxprint",index)
        this.setState({
            show:true
        })
    }
    hideFn = () =>{
        this.setState({
            show:false
        })
    }




    componentDidMount(){

      axios.get( 'http://165.22.219.87:8000/get_Student_List')
      .then(response=>{
        this.setState({
          list:response.data.Result
         
        })
      
      })
      
      }



      onView=(index)=>{
        axios.get(`http://165.22.219.87:8000/view_Student?student_Id=${index.Key}`)
        .then(approveRes=>{
          this.setState({show:true,
            resultApprove:approveRes.data.Result
              })
              console.log("dattta", this.state.resultApprove)
        })
        }

        onApprove=(e)=>{
          e.preventDefault()
          axios.post('http://165.22.219.87:8000/enroll_Student')
          .then(approveRes=>{
            console.log("res",approveRes)
          })
          }

    render() {
        return (
            <> 
           <Card size="lg" className="mobcard p-3"  >

<h2>Approve Student Registration</h2>
<Card.Body>  



<Table responsive>
<thead>
  <tr>
  
    <th >Student Name <br/>
   </th>
    <th  >Student ID <br/>
    </th>
    <th >Institute Name <br/>
  </th>

<th>Status</th>

  <th ><button 
style={{backgroundColor:"blue", border:"0px", 
color:"#FFF",borderRadius:"1.5rem"}}

>View</button> <br/>
  </th>

  </tr>

</thead>
<br/>


<tbody>
{this.state.list.map((index) =>{
  return(
    <>
  <tr>
 
    <td> {index.Record.Student_Name}</td>
    <td>{index.Record.id} </td>

    <td>
    {index.Record.Institute_ID}
   </td>

   <td>   {index.Record.status}</td>

   <td><button onClick={()=>this.onView(index)} 
style={{backgroundColor:"#20b38e", border:"0px", color:"#FFF",borderRadius:"1.5rem"}}

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

          

<Modal className="rightside"
      show={this.state.show}
      onHide={this.hideFn}
      dialogClassName="modal-20w "
      aria-labelledby="example-custom-modal-styling-title"
    >
<Modal.Title id="example-custom-modal-styling-title" 
style={{color:"#32062c",marginTop:"2rem", marginBottom:"-1rem", textAlign:"center"}}>
       Approve Certificate
        </Modal.Title>
       
    
      <Modal.Body style={{marginLeft:"0px"}}>
    
<br/>
<Form>
<Form.Group as={Row} >
    <Form.Label column sm="4">
    Student ID 
    </Form.Label>
    <Col sm="8">
<p>{this.state.resultApprove.id}</p>
    </Col>
  </Form.Group>

  <Form.Group as={Row} >
    <Form.Label column sm="4">
    Name of Student
    </Form.Label>
    <Col sm="8">
    <p>{this.state.resultApprove.Student_Name}</p>
    </Col>
  </Form.Group>


  <Form.Group as={Row} >
    <Form.Label column sm="4">
    DOB
    </Form.Label>
    <Col sm="8">
    <p>{this.state.resultApprove.Student_DOB}</p>
    </Col>
  </Form.Group>


  <Form.Group as={Row} >
    <Form.Label column sm="4">
    Email
    </Form.Label>
    <Col sm="8">
    <p>{this.state.resultApprove.email}</p>
    </Col>
  </Form.Group>


  <Form.Group as={Row} >
    <Form.Label column sm="4">
    Contact
    </Form.Label>
    <Col sm="8">
    <p>{this.state.resultApprove.Contact_Number}</p>
    </Col>
  </Form.Group>


  <Form.Group as={Row} >
    <Form.Label column sm="4">
    Alternate Contact
    </Form.Label>
    <Col sm="8">
    <p>{this.state.resultApprove.Alter_No}</p>
    </Col>
  </Form.Group>


  <Form.Group as={Row} >
    <Form.Label column sm="4">
    Address
    </Form.Label>
    <Col sm="8">
    <p>{this.state.resultApprove.address}</p>
    </Col>
  </Form.Group>

  


  <Form.Group as={Row} >
    <Form.Label column sm="4">
    Certificate ID 
    </Form.Label>
    <Col sm="8">
    <p>{this.state.resultApprove.Institute_ID}</p>
    </Col>
  </Form.Group>



  <Form.Group as={Row} >
    <Form.Label column sm="4">
    Certificate ID 
    </Form.Label>
    <Col sm="8">
    <p>{this.state.resultApprove.Certificate_Id}</p>
    </Col>
  </Form.Group>


  <Form.Group as={Row} >
    <Form.Label column sm="4">
    Batch ID  
    </Form.Label>
    <Col sm="8">
    <p>{this.state.resultApprove.Batch_No}</p>
    </Col>
  </Form.Group>



  <Form.Group as={Row} >
    <Form.Label column sm="4">
    Class Number
    </Form.Label>
    <Col sm="8">
    <p>{this.state.resultApprove.class_No}</p>
    </Col>
  </Form.Group>
 
<button 
onClick={this.onApprove}
style={{border:"0px", borderRadius:"1.5rem",color:"#fff",height:"2rem",
backgroundColor:"blue", fontSize:"0.8rem"
}}>Approve</button>

<button  
      onClick={this.hideFn}
style={{border:"0px", borderRadius:"1.5rem",color:"#fff",height:"2rem",
backgroundColor:"rgb(202, 69, 69)", fontSize:"0.8rem", marginLeft:"3px"
}}
>Disapprove</button>
</Form>

      </Modal.Body>
    </Modal>



</>

        )
    }
}

export default ApprStudRegt
