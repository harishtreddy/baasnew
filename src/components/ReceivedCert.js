import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

class ReceivedCert extends Component {

render() {
return (


    <div className="mobcard">

    
    <Card className=" p-3" style={{minHeight:"20vh"}}>


  <div class="row">


  <div class="col-md-2 col sm-12 text-center" >
  <Card.Img style={{ width: '100%',borderRadius:"15px"}} variant="top"
 src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/0018/2124/brand.gif?itok=FMMm9a26" />

 <p className="mt-2" style={{fontSize:"19px", fontWeight:"500"}}> Oxford University</p>

  </div>



  <div class="col-md-10 col sm-12">
  
  


<text style={{ fontSize:"1.5rem", marginTop:"-10px",fontStyle:"inherit", 
fontWeight:"600", fontFamily:"initial" }}>
CERTIFICATE OF APPRECIATION </text> 
<br/>


<hr />
<Row>
  <Col>
<p style={{marginBottom:"-2px", fontWeight:"600", marginRight:"4px"}}>GLADLY PRESENTED TO RAMESH </p>
  </Col>

</Row>
<br/>

<p>FOR AN EXCELLENT PERFORMANCE</p>

{/* <p style={{fontSixe:"1.3rem", fontWeight:"700"}}>Short Description</p> */}
<p>
This is to Certify that RAMESH  has successfully completed the 
BLOCKCHAIN course in the class C2020-jan of batch 2019-20 offered by Oxford University.
</p>
<hr/>




<Row>
    <Col> <input style={{borderTop:"0", borderRight:"0",borderLeft:"0", borderBottom:"1px solid grey"}}></input><br/>
<p >DATE</p></Col>

    <Col><input style={{borderTop:"0", borderRight:"0",borderLeft:"0", borderBottom:"1px solid grey"}}></input><br/>
 <p >SIGNATURE </p></Col>
  </Row>




<hr />
  </div>
  

</div>


</Card>

</div>

);
}
}

export default ReceivedCert;