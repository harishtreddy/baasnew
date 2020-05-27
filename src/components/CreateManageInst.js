import React, { Component } from 'react'
import { Card, Table, Modal, Form} from 'react-bootstrap';



class CreateManageInst extends Component {

     state = {
          show:false
      }
      setShow = () =>{
          this.setState({
              show:true
          })
      }
      hideFn = () =>{
          this.setState({
              show:false
          })
      }


    render() {
        return (
		<>
             <Card size="lg" className="mobcard p-3"  >

<Card.Body>  
<button onClick={this.setShow} 
style={{backgroundColor:"rgb(61, 73, 192)", border:"0px", 
height:"2.5rem", color:"#FFF",borderRadius:"1.5rem"}}

>Create Certificate</button>


<br/>
<br/>

<Table responsive>
  <thead>
    <tr>
      <th style={{width:"2rem"}}>S.no <br/>
      </th>
      <th style={{width:"10rem"}}>Name <br/>
     </th>
      <th  style={{width:"25rem"}}>Description <br/>
      </th>
      <th style={{width:"10rem"}}>Action <br/>
    </th>
    </tr>

  </thead>
  <br/>


  <tbody>
    <tr>
      <td >1</td>
      <td>Marble Cake</td>
      <td>wedding Cake with flowers and decor macaroons and blueberries</td>
 
      <td>
          <button style={{width:"4rem", height:"2.2rem", 
          backgroundColor:"#20b38e",color:"white",
     borderWidth:"thin", borderRadius:"1.5rem" }}>Edit</button>
          <button style={{width:"4rem", height:"2.2rem", backgroundColor:"red",marginLeft:"2px",
     borderWidth:"thin", borderRadius:"1.5rem", borderColor:"red" , color:"white"}}>Delete</button>
          </td> 
    
    </tr>
    <br/>



    <tr>
      <td>2</td>
      <td>Marble Cake</td>
      <td>wedding Cake with flowers and decor macaroons and blueberries</td>
 
      <td>
      <button style={{width:"4rem", height:"2.2rem", 
          backgroundColor:"#20b38e",color:"white",
     borderWidth:"thin", borderRadius:"1.5rem" }}>Edit</button>
          <button style={{width:"4rem", height:"2.2rem", backgroundColor:"red",marginLeft:"2px",
     borderWidth:"thin", borderRadius:"1.5rem", borderColor:"red" , color:"white"}}>Delete</button>
          </td>
 
   
    </tr>
    <br/>


    
    <tr>
      <td>3</td>
      <td>Marble Cake</td>
      <td>wedding Cake with flowers and decor macaroons and blueberries</td>
 
      <td>
      <button style={{width:"4rem", height:"2.2rem", 
          backgroundColor:"#20b38e",color:"white",
     borderWidth:"thin", borderRadius:"1.5rem" }}>Edit</button>
          <button style={{width:"4rem", height:"2.2rem", backgroundColor:"red",marginLeft:"2px",
     borderWidth:"thin", borderRadius:"1.5rem", borderColor:"red" , color:"white"}}>Delete</button>
          </td>
    </tr>
    
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
  style={{color:"#32062c",marginTop:"2rem", marginBottom:"-1rem"}}>
          Create Certificate   
          </Modal.Title>
         
      
        <Modal.Body style={{marginLeft:"0px"}}>
      
<br/>

<label> Certificate Name   </label> 
<br/>
<input style={{width:"100%", height:"6vh"}} placeholder="Enter Certificate Name "></input>
<br/>
<br/>
<Form>
  <Form.File 
    id="custom-file"
    label="Select Logo"
    custom
  />
</Form>
<br/>
<Form>
  <Form.File 
    id="custom-file"
    label="Select Signature"
    custom
  />
</Form>
<br/>

<label> Institute Name   </label><br/>
<input  style={{width:"100%", height:"6vh"}}  placeholder="Institute Name"></input>
<br/>
<br/>

<label> Description   </label><br/>
<input  style={{width:"100%", height:"6vh"}}  placeholder="Enter Description"></input>
<br/>



<br/><br/>
<button   style={{border:"0px", borderRadius:"1.5rem",color:"#fff",height:"2rem",
backgroundColor:"rgb(19, 130, 23)", fontSize:"0.8rem"
}}>Create Certificate</button>
<button  show={this.state.show}
        onClick={this.hideFn}
 style={{border:"0px", borderRadius:"1.5rem",color:"#fff", width:"4rem",height:"2rem",
backgroundColor:"rgb(202, 69, 69)", fontSize:"0.8rem", marginLeft:"3px"
}}
>Cancel</button>
        </Modal.Body>
      </Modal>



</>
        )
    }
}

export default CreateManageInst
