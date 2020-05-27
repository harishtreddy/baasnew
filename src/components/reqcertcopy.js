import React, { Component } from 'react'
import { Card, ButtonGroup,Dropdown,DropdownButton} from 'react-bootstrap';
import axios from 'axios';



class ReqCertificate extends Component {
	state = {
		mba:false,
		a1:false,
		a123:false,
		m01:false,
		apply:false,
		aiwithmba:false,
		a221:false,
		a17:false,
		a12:false,
		m02:false,
		md99:false,
		applyOne221:false,
		applyTwo221:false
	}
	clickNIIT = () =>{
		this.setState({
			mba:true,
			aiwithmba:false,
			a221:false,
			a17:false,
			a12:false,
			m02:false,
			md99:false,
			applyOne221:false,
			applyTwo221:false,
		})
	}
	clickMBA = () =>{
		this.setState({
			a1:true,
			a123:true,
			m02:false,
			md99:false,
			applyOne221:false,
			applyTwo221:false,
		})
	}
	clickA1 = () =>{
		this.setState({
			m01:true,
			apply:true,
			m02:false,
			md99:false,
			applyOne221:false,
			applyTwo221:false,
		})
	}
	clickA123 = () =>{
		this.setState({
			m01:false,
			apply:false,
			m02:false,
			md99:false,
			applyOne221:false,
			applyTwo221:false,
		})
	}
	clickVIIT = () => {
		this.setState({
			mba:false,
			aiwithmba:true,
			a1:false,
			a123:false,
			m01:false,
			apply:false,
			m02:false,
			md99:false,
			applyOne221:false,
			applyTwo221:false,
		})
	}
	clickAIWITHMBA = () =>{
		this.setState({
			a1:false,
			a123:false,
			a221:true,
			a17:true,
			a12:true,
			m02:false,
			md99:false,
			applyOne221:false,
			applyTwo221:false,
		})
	}
	clickA221 = () =>{
		this.setState({
			m02:true,
			md99:true,
			applyOne221:true,
			applyTwo221:true,
			m01:false,
			apply:false
		})
	}

	componentDidMount(){

		axios.get( 'http://206.189.129.133:8000/getInstituteList')
		.then(response=>{
console.log('getlist',response)
		  })
		
	
		}

render() {
return (
<div className="mobileclass" style={{width:"100%"}}>
<div style={{width:"100%"}}>

<Card className="p-3" >
<input placeholder="Search Institute Name" style={{textAlign:"center"}}></input>
</Card>
</div>



<div style={{width:"100%"}}>
<Card className="p-3" style={{minHeight:"50vh"}}>
<div class="table-responsive">
<table class="table">
  <thead>
    <tr>
	<th scope="col"
	 style={{ backgroundColor:"#9e9e9e6e", border:"1px solid darkgrey"
, borderRadius:"0.3rem", height:"2.2rem", textAlign:"center", 
fontWeight:"500"}}> Institute Name</th>
<th scope="col" style={{ backgroundColor:"#9e9e9e6e",
border:"1px solid darkgrey"
, borderRadius:"0.3rem",
 height:"2.2rem", textAlign:"center", fontWeight:"500"}}> 
 Course Name</th>

<th scope="col" style={{ backgroundColor:"#9e9e9e6e",border:"1px solid darkgrey"
, borderRadius:"0.3rem", height:"2.2rem", textAlign:"center", fontWeight:"500"}}> Class No</th>

<th scope="col" style={{ backgroundColor:"#9e9e9e6e",border:"1px solid darkgrey"
, borderRadius:"0.3rem", height:"2.2rem", textAlign:"center", fontWeight:"500"}}> Batch No</th>

<th scope="col" style={{ backgroundColor:"#9e9e9e6e",border:"1px solid darkgrey"
, borderRadius:"0.3rem", height:"2.2rem", textAlign:"center", fontWeight:"500"}}>Request Certification</th>
    </tr>
  </thead>
  <tbody>
    <tr>
	  <th scope="row p-0" ><button onClick={this.clickNIIT} 
	  type="button" class="btn btn-primary w-100">NIIT 
	  <i style={{float:"right", marginTop:"2px"}} 
	  class="lni lni-chevron-right"></i></button>
	  </th> 


	  <td>{this.state.mba?<button onClick={this.clickMBA} 
	  type="button" class="btn btn-primary w-100">MBA 
	  <i style={{float:"right", marginTop:"2px"}} 
	  class="lni lni-chevron-right"></i></button>:null}
	  
	  {this.state.aiwithmba?<button onClick={this.clickAIWITHMBA}
	   type="button" class="btn btn-primary w-100">AI WITH MBA
	  <i style={{float:"right", marginTop:"2px"}} 
	  class="lni lni-chevron-right"></i></button>:null}</td>

      <td>{this.state.a1?<button onClick={this.clickA1} type="button" class="btn btn-primary w-100">A1 <i style={{float:"right", marginTop:"2px"}} class="lni lni-chevron-right"></i></button>:null}{this.state.a221?<button onClick={this.clickA221} type="button" class="btn btn-primary w-100">A221
	  <i style={{float:"right", marginTop:"2px"}} class={this.state.m02?"lni lni-chevron-right":"lni lni-chevron-down"}></i></button>:null}</td>
      <td>{this.state.m01?<button type="button" class="btn btn-primary w-100">M01 <i style={{float:"right", marginTop:"2px"}} class="lni lni-chevron-right"></i></button>:null}{this.state.m02?<button type="button" class="btn btn-primary w-100">M02</button>:null}</td>
	  <td>{this.state.apply?<button type="button" class="btn btn-primary w-100">APPLY </button>:null} {this.state.applyOne221?
	  <button type="button" class="btn btn-primary w-100">APPLY</button>:null}</td>
    </tr>
    <tr>
      <th scope="row p-0"><button onClick={this.clickVIIT} type="button" class="btn btn-primary w-100">VIIT <i style={{float:"right", marginTop:"2px"}} class="lni lni-chevron-right"></i></button></th>
      <td></td>
      <td>{this.state.a123?<button onClick={this.clickA123} type="button" class="btn btn-primary w-100">A123 <i style={{float:"right", marginTop:"2px"}} class="lni lni-chevron-right"></i>
	  </button>:null}{this.state.a17?<button type="button" class="btn btn-primary w-100">A17<i style={{float:"right", marginTop:"2px"}} class="lni lni-chevron-down"></i></button>:null}</td>
      <td>{this.state.md99?<button type="button" class="btn btn-primary w-100">MD99 </button>:null}</td>
	  <td>{this.state.apply?<button type="button" class="btn btn-primary w-100">APPLY</button>:null}
	   {this.state.applyTwo221?<button type="button" class="btn btn-primary w-100">APPLY</button>:null}</td>
    </tr>
    <tr className="lasttr">
      <th scope="row p-0"></th>
      <td></td>
      <td>{this.state.a12?<button type="button" class="btn btn-primary w-100">A12 <i style={{float:"right", marginTop:"2px"}} class="lni lni-chevron-down"></i></button>:null}</td>
      <td></td>
    </tr>
  </tbody>
</table>
</div>




</Card>
</div>
</div>
)
}
}

export default ReqCertificate