import React, { Component } from 'react';
import './SideBar.css';
import Face from '../Images/face.jpg'
import IbhaanLogo from '../Images/ibhaanLogo.png'
import { Navbar, Nav, Form, NavDropdown, 
  FormControl, Fade, Button } from 'react-bootstrap';
import ReqCertificate from './ReqCertificate';
import CreateManageInst from './CreateManageInst';
import CreateCourse from './CreateCourse';
import ReceivedCert from './ReceivedCert';
import RegistrNewInstt from './RegistrNewInstt';
import ApproveAffl from './ApproveAffl';
import AddBatchClass from './AddBatchClass';
import StudentRegister from './StudentRegister'
import ApprStudRegt from './ApprStudRegt'
import Issuecertf from './Issuecertf'
import CreateCertif from './CreateCertif'
import CertificateStatus from './CertificateStatus'
const windowWidth = window.innerWidth

 class SideBar extends Component {
    state = {
        menuToggle:true,
        authuser:'',
        dashboard:false, 
        UserDashboard: false,
        ReqCertificate: false,
        uniqueId:false,
        NationalcollegeID:false,
        ReceivedCertificate: false,
        CreateManageInst:false,
        CreateCourse:false,
        ReceivedCert:false,
        RegistrNewInstt:false,
        ApproveAffl:false,
        AddBatchClass:false,
        StudentRegister:false,
        ApprStudRegt:false,
        Issuecertf:false,
        CreateCertif:false,
        CertificateStatus:false,
        sideName: 'ASDDF',
        open:false,
        openreport:false,
        open1:false,
        open2:true
     
      }




      
      expandFn = () =>{
          this.setState({
         
            open:true,
            open1:false,
            open2:false
          })
      }

  
      expandAdmin = () =>{
        this.setState({
          open:false,
          open1:false,
          open2:true
        })
    }
      
      expandRegisterManage = () =>{
          this.setState({
            open:false,
            open1:true,
            open2:false
          })
      }
    
      menuToggleFunc=()=>{
        this.setState({
            menuToggle:!this.state.menuToggle
        })
    }
    smallDeviceFunc = () =>{
      this.setState({
        smallDevice:!this.state.smallDevice
      })
    }

    
    
    
    
    combinefuncDashboard = () =>{
    this.smallDeviceFunc()
      this.dashboardHandler();
      
    }
    dashboardHandler = () =>{
      this.setState({
     
        dashboard:true,
        ReqCertificate: false,
   
        ReceivedCertificate: false,
        CreateManageInst:false,
        CreateCourse:false,
        ReceivedCert:false,
        RegistrNewInstt:false,
        ApproveAffl:false,
        AddBatchClass:false,
        StudentRegister:false,
        ApprStudRegt:false,
        Issuecertf:false,
        CreateCertif:false,
        CertificateStatus:false,
        // smallDevice:!this.state.smallDevice,
        sideName:"Dashboard",
      
      })
      
    }    




    ApproveAfflHandler = () =>{
      this.setState({
       
        dashboard:false,
        UserDashboard:false,
        ReqCertificate: false,
        ReceivedCertificate: false,
   
        CreateManageInst:false,
        CreateCourse:false,
        ReceivedCert:false,
        RegistrNewInstt:false,
        ApproveAffl:true,
        AddBatchClass:false,
        StudentRegister:false,
        ApprStudRegt:false,
        Issuecertf:false,
        CreateCertif:false,
        CertificateStatus:false,
        // smallDevice:!this.state.smallDevice,
        sideName:"Approve Affiliation",
 
       
      })
      
    }

    combineApproveAffl= () =>{
      this.smallDeviceFunc()
        this.ApproveAfflHandler();
        
      }

    UserDashboardHandler = () =>{
        this.setState({
      
       
          dashboard:false,
          UserDashboard:true,
          ReqCertificate: false,
   
        ReceivedCertificate: false,
        CreateManageInst:false,
        CreateCourse:false,
        ReceivedCert:false,
        RegistrNewInstt:false,
        ApproveAffl:false,
        AddBatchClass:false,
        StudentRegister:false,
        ApprStudRegt:false,
        Issuecertf:false,
        CreateCertif:false,
        CertificateStatus:false,
          // smallDevice:!this.state.smallDevice,
          sideName:"UserDashboard",
         
         
        })
        
      }
    
      combinefuncUserDashboard= () =>{
        this.smallDeviceFunc()
          this.UserDashboardHandler();
          
        }
        
        

uniqueID =() =>{
  this.setState({
    uniqueId:!this.state.uniqueId
  })
}
      

NationalcollegeID =() =>{
  this.setState({
    NationalcollegeID:!this.state.NationalcollegeID
  })
}
    


ReqCertificateHandler = () =>{
            this.setState({
           
              dashboard:false,
              UserDashboard:false,
              ReqCertificate: true,
         
              ReceivedCertificate: false,
              CreateManageInst:false,
              CreateCourse:false,
              ReceivedCert:false,
              RegistrNewInstt:false,
              ApproveAffl:false,
              AddBatchClass:false,
              StudentRegister:false,
              ApprStudRegt:false,
              Issuecertf:false,
              CreateCertif:false,
              CertificateStatus:false,
              // smallDevice:!this.state.smallDevice,
              sideName:"ReqCertificate",
          
            })
            
          }
        
          combineReqCertificate= () =>{
            this.smallDeviceFunc()
              this.ReqCertificateHandler();
              
            }
    
        
    
            StudentRegisterHandler = () =>{
              this.setState({
             
                dashboard:false,
                UserDashboard:false,
                ReqCertificate: false,
           
                ReceivedCertificate: false,
                CreateManageInst:false,
                CreateCourse:false,
                ReceivedCert:false,
                RegistrNewInstt:false,
                ApproveAffl:false,
                AddBatchClass:false,
                StudentRegister:true,
                ApprStudRegt:false,
                Issuecertf:false,
                CreateCertif:false,
                CertificateStatus:false,
                // smallDevice:!this.state.smallDevice,
                sideName:"Student Register",
            
              })
              
            }
          
            combineStudentRegister= () =>{
              this.smallDeviceFunc()
                this.StudentRegisterHandler();
                
              }
      


    
        ReceivedCertificateHandler = () =>{
            this.setState({
             
              dashboard:false,
              UserDashboard:false,
              ReqCertificate: false,
              ReceivedCertificate: true,
         
              CreateManageInst:false,
              CreateCourse:false,
              ReceivedCert:false,
              RegistrNewInstt:false,
              ApproveAffl:false,
              AddBatchClass:false,
              StudentRegister:false,
              ApprStudRegt:false,
              Issuecertf:false,
              CreateCertif:false,
              CertificateStatus:false,
              // smallDevice:!this.state.smallDevice,
              sideName:"Received Certificate",
       
             
            })
            
          }
    
          combinefuncMaker= () =>{
            this.smallDeviceFunc()
              this.ReceivedCertificateHandler();
              
            }
     

            ReceivedCertifStatus = () =>{
              this.setState({
               
                dashboard:false,
                UserDashboard:false,
                ReqCertificate: false,
                ReceivedCertificate: false,
           
                CreateManageInst:false,
                CreateCourse:false,
                ReceivedCert:false,
                RegistrNewInstt:false,
                ApproveAffl:false,
                AddBatchClass:false,
                StudentRegister:false,
                ApprStudRegt:false,
                Issuecertf:false,
                CreateCertif:false,
                CertificateStatus:true,
                // smallDevice:!this.state.smallDevice,
                sideName:"Received Certificate",
         
               
              })
              
            }
      
            combinefuncMaker= () =>{
              this.smallDeviceFunc()
                this.ReceivedCertifStatus();
                
              }









            CreateManageInstHandler = () =>{
              this.setState({
               
                dashboard:false,
                UserDashboard:false,
                ReqCertificate: false,
                ReceivedCertificate: false,
                StudentRegister:false,
           
                CreateManageInst:true,
                CreateCourse:false,
                ReceivedCert:false,
                RegistrNewInstt:false,
                ApproveAffl:false,
                AddBatchClass:false,
                ApprStudRegt:false,
                Issuecertf:false,
                CreateCertif:false,
                CertificateStatus:false,
                // smallDevice:!this.state.smallDevice,
                sideName:"Create Manage Institute",
         
               
              })
              
            }
      
            combineCreateManageInst= () =>{
              this.smallDeviceFunc()
                this.CreateManageInstHandler();
                
              }
    
      
             CreateCourseHandler = () =>{
                this.setState({
                 
                  dashboard:false,
                  UserDashboard:false,
                  ReqCertificate: false,
                  ReceivedCertificate: false,
                  StudentRegister:false,
                  CreateManageInst:false,
                  CreateCourse:true,
                  ReceivedCert:false,
                  RegistrNewInstt:false,
                  ApproveAffl:false,
                  AddBatchClass:false,
                  ApprStudRegt:false,
                  Issuecertf:false,
                  CreateCertif:false,
                  CertificateStatus:false,
                  // smallDevice:!this.state.smallDevice,
                  sideName:"Create Course",
           
                 
                })
                
              }
        
              combineCreateCourse= () =>{
                this.smallDeviceFunc()
                  this.CreateCourseHandler();
                  
                }








                CreateCertifHandler = () =>{
                  this.setState({
                   
                    dashboard:false,
                    UserDashboard:false,
                    ReqCertificate: false,
                    ReceivedCertificate: false,
                    StudentRegister:false,
                    CreateManageInst:false,
                    CreateCourse:false,
                    ReceivedCert:false,
                    RegistrNewInstt:false,
                    ApproveAffl:false,
                    AddBatchClass:false,
                    ApprStudRegt:false,
                    Issuecertf:false,
                    CreateCertif:true,
                    CertificateStatus:false,
                    // smallDevice:!this.state.smallDevice,
                    sideName:"Create Certificate",
             
                   
                  })
                  
                }
          
                combineCreateCertif= () =>{
                  this.smallDeviceFunc()
                    this.CreateCertifHandler();
                    
                  }
  



                AddBatchClassHandler = () =>{
                  this.setState({
                   
                    dashboard:false,
                    UserDashboard:false,
                    ReqCertificate: false,
                    ReceivedCertificate: false,
                    StudentRegister:false,
                    CreateManageInst:false,
                    CreateCourse:false,
                    ReceivedCert:false,
                    RegistrNewInstt:false,
                    ApproveAffl:false,
                    AddBatchClass:true,
                    ApprStudRegt:false,
                    Issuecertf:false,
                    CreateCertif:false,
                    CertificateStatus:false,
                    // smallDevice:!this.state.smallDevice,
                    sideName:"Add Batch/class",
             
                   
                  })
                  
                }
          
                combineAddBatchClass= () =>{
                  this.smallDeviceFunc()
                    this.AddBatchClassHandler();
                    
                  }



                  IssuecertfHandler = () =>{
                    this.setState({
                     
                      dashboard:false,
                      UserDashboard:false,
                      ReqCertificate: false,
                      ReceivedCertificate: false,
                      StudentRegister:false,
                      CreateManageInst:false,
                      CreateCourse:false,
                      ReceivedCert:false,
                      RegistrNewInstt:false,
                      ApproveAffl:false,
                      AddBatchClass:false,
                      ApprStudRegt:false,
                      Issuecertf:true,
                      CreateCertif:false,
                      CertificateStatus:false,
                      // smallDevice:!this.state.smallDevice,
                      sideName:"Issue Certificate",
               
                     
                    })
                    
                  }
            
                  combineIssuecertf= () =>{
                    this.smallDeviceFunc()
                      this.IssuecertfHandler();
                      
                    }
  

                    ApprStudRegtfHandler = () =>{
                      this.setState({
                       
                        dashboard:false,
                        UserDashboard:false,
                        ReqCertificate: false,
                        ReceivedCertificate: false,
                        StudentRegister:false,
                        CreateManageInst:false,
                        CreateCourse:false,
                        ReceivedCert:false,
                        RegistrNewInstt:false,
                        ApproveAffl:false,
                        AddBatchClass:false,
                        ApprStudRegt:true,
                        Issuecertf:false,
                        CreateCertif:false,
                        CertificateStatus:false,
                        // smallDevice:!this.state.smallDevice,
                        sideName:"Approve student register",
                 
                       
                      })
                      
                    }
              
                    combineApprStudRegt= () =>{
                      this.smallDeviceFunc()
                        this.ApprStudRegtfHandler();
                        
                      }
    




                  

                RegistrNewInsttHandler = () =>{
                  this.setState({
                   
                    dashboard:false,
                    UserDashboard:false,
                    ReqCertificate: false,
                    ReceivedCertificate: false,
                    StudentRegister:false,
                    CreateManageInst:false,
                    CreateCourse:false,
                    ReceivedCert:false,
                    RegistrNewInstt:true,
                    ApproveAffl:false,
                    AddBatchClass:false,
                    ApprStudRegt:false,
                    Issuecertf:false,
                    CreateCertif:false,
                    CertificateStatus:false,
                    // smallDevice:!this.state.smallDevice,
                    sideName:"Register a new instittue",
             
                   
                  })
                  
                }
          
                combineRegistrNewInstt= () =>{
                  this.smallDeviceFunc()
                    this.RegistrNewInsttHandler();
                    
                  }
        


            



  render(){
    console.log('abc',this.state.sideName)
const sidebarCond = this.state.menuToggle ?"sidebar" : "mini_Sidebar"

console.log("width",this.state.smallDevice)
  return (
<>
<Navbar style={{backgroundColor:"rgb(42, 69, 91)"}} expand="lg">

<i class="lni lni-grid-alt"></i>



<img  style={{backgroundColor:"white",
    width:"11%", marginLeft:"11px",
    height:"2rem"}} 
     src={IbhaanLogo}  alt="IbhaanLogo" /> 

  <Navbar.Brand href="#home"></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">

    <Nav className="mr-auto">
   
   
     
    </Nav>
    
   
    
    <Nav.Link href="#home">  <i  style={{color:"#9E9E9E"}}class="lni lni-alarm"></i></Nav.Link>



    <Nav.Link href="#home" style={{color:"#9E9E9E"}}>Settings</Nav.Link>

 
    <img  style={{backgroundColor:"white",
    width:"2.9rem",
    height:"2rem",borderRadius:"4rem"}} 
     src={Face}  alt="certificate" /> 
   
  </Navbar.Collapse>
</Navbar>



    <div className="d-flex" style={{backgroundColor:"#e4e5e6"}}>
     
      <div className={windowWidth>=500?sidebarCond:this.state.smallDevice?"mobile_SidebarOpen":"mobile_SidebarClose"} >
<div className="d-flex">




    <div className="leftclass" style={{height:"calc(100vh - 88px)"}}>



    <button  className= " custom p-0 leftcustom"  style={{width:"100%", height:"17vh", 
backgroundColor:this.state.sideName==='Admin'?"#turquoise":"#fff",
color: this.state.sideName==='Admin'? "#blue":"#0474fff5",
textAlign:"center", fontFamily:"sans-serif"}} 
onClick={this.expandAdmin}> <i  class="  lni lni-bulb"></i><br/>
<span>Admin </span></button>




<button  className= " custom p-0 leftcustom"  style={{width:"100%", height:"17vh", 
backgroundColor:this.state.sideName==='Register&ManageI'?"#turquoise":"#fff",
color: this.state.sideName==='Register&ManageI'? "#blue":"#0474fff5",
textAlign:"center", fontFamily:"sans-serif"}} 
onClick={this.expandRegisterManage}> <i  class="  lni lni-printer"></i><br/>
<span>Institute </span></button>


{this.state.menuToggle?


 
<button className= " custom p-0 leftcustom" 
 style={{width:"100%", height:"17vh", 
backgroundColor:this.state.sideName==='UserDashboard'?"#turquoise":"#fff",
color: this.state.sideName==='UserDashboard'?  "#blue":"#0474fff5",
textAlign:"center", fontFamily:"sans-serif"}} 
onClick={this.expandFn}> 
<i  class="lni lni-user"></i><br/>
<span>Student</span></button>


:
null
}





{/* 
<button  className= " custom p-0 leftcustom"  style={{ width:"100%",height:"17vh", 
backgroundColor:this.state.sideName==='Messages'?"#turquoise":"#fff",
color: this.state.sideName==='Messages'? "#blue":"#0474fff5",
textAlign:"center", fontFamily:"sans-serif"}} >
  <i class="  lni lni-user"></i><br/>
<span> User Dashboard </span></button> */}
 
{/* <button  className= " custom p-0 leftcustom"  style={{ width:"100%",height:"17vh", 
backgroundColor:this.state.sideName==='Messages'?"#turquoise":"#fff",
color: this.state.sideName==='Messages'? "#blue":"#0474fff5",
textAlign:"center", fontFamily:"sans-serif"}} >
  <i class="  lni lni-facebook-messenger"></i><br/>
<span> Messages </span></button>
  */}




 



</div>


<div className="rightclass" style={{borderLeft:"1px solid #0000003d"}}>




   
{this.state.open2?
<>



<div className="d-flex custom py-2">
  <div className="icon toCenter">
  <i class="lni lni-cog mr-1"></i>
  </div> 
  <div className="para">
<span i className= " custom toCenter" 
onClick={this.combineApproveAffl}
style={{width:"100%", height:"40px",justifyContent:"left"
}}>
  Approve Affiliation
</span>
</div>
</div>


</>
:
<>

</>
}




    
{this.state.open?
<>
{/* <p   i className= "custom toCenter " 

onClick={this.uniqueID}
style={{width:"100%", height:"40px",color:  "rgb(8, 55, 93)" }}>
<i  class="lni lni-chevron-down mr-1"></i>   Unique ID - Sandeep23jd83
</p> */}



<p className= "custom toCenter" onClick={this.combineStudentRegister} 
style={{width:"100%", height:"40px",color:  "rgb(8, 55, 93)",
 paddingLeft:"13px"
}}>
<i class="lni lni-cog mr-1"></i> Student Register
</p>

<p className= "custom toCenter" onClick={this.combineReqCertificate} 
style={{width:"100%", height:"40px",color:  "rgb(8, 55, 93)",
 paddingLeft:"13px"
}}>
<i class="lni lni-cog mr-1"></i> Request Certification
</p>

<p className= " custom toCenter"  onClick={this.ReceivedCertificateHandler} 
style={{width:"100%", height:"40px",color:  "rgb(8, 55, 93)", paddingLeft:"13px"}}>
<i class="lni lni-cog mr-1"></i>   Received Certificates

</p>


<p className= " custom toCenter"  onClick={this.ReceivedCertifStatus} 
style={{width:"100%", height:"40px",color:  "rgb(8, 55, 93)", paddingLeft:"13px"}}>
<i class="lni lni-cog mr-1"></i> Certificate Status

</p>



</>
:
<>

</>
}




{this.state.open1?
<>
{/* <div onClick={this.NationalcollegeID} className="d-flex custom py-2">
  <div className="icon text-center">
<i class="lni lni-chevron-down-circle" style={{marginTop:"12px"}}></i>
</div>
<div className="para">
<span className= "toCenter" 
style={{width:"100%", height:"40px",justifyContent:"left" }}>
 National College Unique ID - National23jd83
</span>
</div>
</div> */}








<div className="d-flex custom py-2">
  <div className="icon toCenter">
  <i class="lni lni-cog mr-1"></i>
  </div> 
  <div className="para">
<span i className= " custom toCenter" 
onClick={this.combineRegistrNewInstt}
style={{width:"100%", height:"40px",justifyContent:"left"
}}>
 Register a New Institute
</span>
</div>
</div>



<div className="d-flex custom py-2">
  <div className="icon toCenter">
  <i class="lni lni-enter mr-1"></i>
  </div>
  <div className="para">
<span i className= "toCenter" 
onClick={this.combineCreateCourse}
style={{width:"100%", height:"40px",justifyContent:"left"
}}>
Create Course/Enrolment
</span>
</div>
</div>


<div className="d-flex custom py-2">
  <div className="icon toCenter">
  <i class="lni lni-enter mr-1"></i>
  </div>
  <div className="para">
<span i className= "toCenter" 
onClick={this.combineCreateCertif}
style={{width:"100%", height:"40px",justifyContent:"left"
}}>
Create Certificate
</span>
</div>
</div>

<div className="d-flex custom py-2">
  <div className="icon toCenter">
  <i class="lni lni-checkmark-circle mr-1"></i>
  </div>
  <div className="para">
<span i className= "custom toCenter" 
onClick={this.combineAddBatchClass}
style={{width:"100%", height:"40px",justifyContent:"left"
}}>
Add Batch/Class
</span>
</div>
</div>


<div className="d-flex custom py-2">
  <div className="icon toCenter">
  <i class="lni lni-checkmark-circle mr-1"></i>
  </div>
  <div className="para">
<span i className= "custom toCenter" 
onClick={this.combineIssuecertf}
style={{width:"100%", height:"40px",justifyContent:"left"
}}>
 Issue Certificate
</span>
</div>
</div>



<div className="d-flex custom py-2">
  <div className="icon toCenter">
  <i class="lni lni-checkmark-circle mr-1"></i>
  </div>
  <div className="para">
<span i className= "custom toCenter" 
onClick={this.combineApprStudRegt}
style={{width:"100%", height:"40px",justifyContent:"left"
}}>
Approve Student Registration
</span>
</div>
</div>

{/* 
<div className="d-flex custom py-2">
  <div className="icon toCenter">
<i class="lni lni-certificate"></i>
</div>
<div className="para">
<span className= "toCenter" 
onClick={this.combineCreateManageInst}
style={{width:"100%", height:"40px",justifyContent:"left"
}}>
 Create/Manage Certificate
</span>
</div>
</div>


 */}



<div className="d-flex custom py-2">
  <div className="icon toCenter">
  <i class="lni lni-cog mr-1"></i>
  </div>
  <div className="para">
<span i className= " custom toCenter" 
style={{width:"100%", height:"40px",justifyContent:"left"
}}>
 Settings
</span>
</div>
</div>



</>
:
null
  }













{/* right class end */}
</div>

  </div>
  


    

</div>


{this.state.ReqCertificate?
<>
<ReqCertificate/>
</>
:
<>
</>
}


{this.state.CreateManageInst?
<>
<CreateManageInst/>
</>
:
<>
</>
}


{this.state.CreateCourse?
<>
<CreateCourse/>
</>
:
<>
</>
}


{this.state.ReceivedCertificate?
<>
<ReceivedCert/>
</>
:
<>
</>
}



{this.state.RegistrNewInstt?
<>
<RegistrNewInstt/>
</>
:
<>
</>
}


{this.state.ApproveAffl?
<>
<ApproveAffl/>
</>
:
<>
</>
}

{this.state.AddBatchClass?
<>
<AddBatchClass/>
</>
:
<>
</>
}


{this.state.StudentRegister?
<>
<StudentRegister/>
</>
:
<>
</>
}

{this.state.ApprStudRegt?
<>
<ApprStudRegt/>
</>
:
<>
</>
}


{this.state.Issuecertf?
<>
<Issuecertf/>
</>
:
<>
</>
}


{this.state.CreateCertif?
<>
<CreateCertif/>
</>
:
<>
</>
}


{this.state.CertificateStatus?
<>
<CertificateStatus/>
</>
:
<>
</>
}


    </div>
    </>
  )
  }
}
export default SideBar;
