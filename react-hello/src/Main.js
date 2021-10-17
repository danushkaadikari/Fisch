import React, { useState } from 'react';
import { render } from 'react-dom';
import ReactDOM from "react-dom";
import ExpandCollapse from 'react-expand-collapse';
import Web3 from 'web3';
import FISCH from "./build/FISCH.json";
import RewardPool from "./build/RewardPool.json";

import {
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Button
} from "react-bootstrap";

import {faHeart,faClock,faStopwatch,faUndo,faExternalLinkSquareAlt,faExclamationCircle,faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {faQuestionCircle,faCalendarAlt} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { useRef } from 'react';



const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};



///////////////////////////////////////////////




const Main = ({
  stake,
  withdraw,
  fischTokenBalance,
  balances,
  staked,

}) => {
  const inputRef = useRef();


  const [ent_amount, setFullName] = useState();
 
  const onStake = () => {
    var amount1 = inputRef.current.value.toString();
    console.log('amount',amount1)
    //let new_amount = parseInt(amount)
   var amount = window.web3.utils.toWei((amount1), "Ether");
    stake(amount);
  };


  const onWithdraw = () => {
    withdraw();
  };

 

////////////////////////////////////////////
  const [depValue, setdepValue]=useState();
  const [withValue, setwithValue]=useState();
  


  return (
   
    <div style={{backgroundImage:'url(/image/bg.png)',backgroundRepeat:'no-repeat', width:'100%',height:'200%',backgroundAttachment:'fixed', backgroundSize:'cover'}}>
    <nav className="navbar navbar-fixed-top" >
      <div >
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1" style={{backgroundImage:'url(/image/bg.png)',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
        <table border="0" style={{width:'900px', position:'fixed',overflowY:'hidden',marginLeft:'50%', transform:'translate(-50%)', zIndex:'4'}}>

        <tr>
                <td>
                <p style={{color:'yellow',fontSize:'20px',fontWeight:'600',paddingTop:'160px'}}>Deposit an Earn Money</p> 
                </td>
                <td style={{paddingLeft:'150px'}}>
                  <img style={{zIndex:'1'}} src="/image/flogo1.png"/>
                </td>
                <td style={{paddingLeft:'138px',color:'yellow',fontSize:'20px',fontWeight:'600',paddingTop:'160px'}}>
                  TVL: $101,000,000
                </td>
              </tr>
        </table>
        <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> 
          <div style={{}}>

                 <ul className=" navbar-nav" style={{marginTop:'25px',marginLeft:'50%', transform:'translate(-50%)', width:'900px',backgroundColor:'rgba(0, 0, 0, 0.5)',borderRadius:'10px',height:'60px', borderBottom:'1px solid white'}}>
                     <li ><a href="#" style={{textDecoration:'none'}}>Earn</a></li>
                     <li><a href="#" style={{textDecoration:'none'}}>Exchange</a></li>
                     <li><a href="#" style={{paddingLeft:'260px',textDecoration:'none'}} >Create LP</a></li>
                     <li><a href="#"style={{textDecoration:'none'}}>Learn V</a></li>

                 </ul>
          </div>
           
    
        </div>
      </div>
    </nav>
    <br></br>
                   <br></br><br></br> <br></br><br></br> <br></br><br></br> <br></br><br></br>

    <div style={{backgroundImage:'url(/image/bg.png)',zIndex:'2',backgroundRepeat:'no-repeat', width:'100%',height:'200%',backgroundAttachment:'fixed', backgroundSize:'cover'}}>

    <div style={{width:'900px' ,marginLeft:'50%', transform:'translate(-50%)'}}>         
<ExpandCollapse
            previewHeight="176px"
            expandText="v"
            collapseText="v"
            ellipsisText=" "
            >

<div style={{width:'100%', height:'570px',backgroundRepeat:'no-repeat'}}>

  <div >
     <br></br><br></br><br></br><br></br>
               
              
            <div className="Box"  style={{height:'500px'}}>
               <div className="content2_2" style={{opacity:0.9}}>
               <table>
                <tr>
               
                <td>
                  <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                </td>
                <td>
                  <span style={{fontWeight:'700'}}>FISCH-BUSD</span><br/>
                   <span style={{fontSize:'12px'}}>Fisch</span>
                </td>
                <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                 <span style={{marginLeft:'20px'}}>{(balances)} </span> <br/>
                  <span style={{opacity:'0.5'}}>Balance</span>
                </td>

                <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                 <span style={{marginLeft:'20px'}}>{staked}</span> <br/>
                  <span style={{opacity:'0.5'}}>Deposited</span>
                </td>
                <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                  <span style={{color:'yellow'}}>171.80%</span><br/>
                 <span style={{opacity:'0.5'}}>Yearly</span>
             
                </td>
                <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                <span>0.47%</span><br/>
                 <span style={{opacity:'0.5'}}>Daily</span>
                </td>

                <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                <span>$1.60M</span><br/>
                 <span style={{opacity:'0.5'}}>TVL</span>
                
                </td>

                <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                <FontAwesomeIcon icon={faUndo}  />
                  </button>
               
                 
                </td>
                
              </tr>
            </table>
                 <hr style={{opacity:'0.5'}}/>

                 <div className="content_4" style={{opacity:0.9}} >
                   
                 <table border='0' style={{marginTop:'10px'}}>
             <tr>
               <td style={{paddingLeft:'20px'}}>
                 <div style={{width:'270px',height:'200px',padding:'10px 10px'}}>
                       <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                       <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                       <br></br><br></br>

                   <input ref={inputRef}  onChangeText={(text) => setFullName(text)} required type="text" placeholder="0   MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white', marginTop:'3px'}}/>
                   <br></br><br></br>

                  <button onClick={onStake} style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                    Deposit to Vault
                  </button>

                 </div>
               </td>
               <td style={{paddingLeft:'5px'}}>
                 <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                       <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                    
                       <br></br><br></br>

               
                       <input ref={ent_amount}  type="text"  placeholder="0                                                MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white'}}/>
                   <br></br><br></br>


                  <button onClick={onWithdraw} style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                   Withdraw to Wallet
                  </button>

                 </div>
               </td>
               <td style={{paddingLeft:'20px'}}>
                 <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                   <br></br>
                      <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                    
                       <br></br><br></br>
                   <table>

                     <tr>
                       <td style={{paddingLeft:'40px'}}>
                       <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                       </td>
                       <td>
                       <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                       </td>
                     </tr>
                   </table>


                      
                 
                  <br></br>

                  <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                   <span style={{color:'black'}}>Harvest</span>
                  </button>

                 </div>
               </td>
             </tr>

           </table> <br></br>
           <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
             <table style={{fontSize:'13px'}}>
               <tr>
                 
                 <td style={{padding:'20px 10px'}}>
                   <span>Farm</span><br></br><br></br>
                   <span style={{opacity:'0.5'}}>Weight:50%</span>
               
                   <br></br>
                   <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                 </td>

                 <td style={{paddingLeft:'350px'}}>
                   <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                   <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                   <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                 

                 </td>
               </tr>
             </table>


           </div>


                 </div>
               </div>
               
     </div>
     
     
     </div>
     
     


     
     

</div>
</ExpandCollapse>

<div style={{width:'900px' ,marginLeft:'50%', transform:'translate(-50%)'}}>         
<ExpandCollapse
            previewHeight="113px"
            expandText="v"
            collapseText="v"
            ellipsisText=" "
            >
<div style={{ width:'100%', height:'500px'}}>
<div>
 <div className="Box" style={{border:'1px solid yellow', height:'500px'}}>
   
           <div className="content_2">
           <table>
               <tr>
                 <td>
                   
                 </td>
                 <td>
                   <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                 </td>
                 <td>
                   <span style={{fontWeight:'700'}}>CAKE</span><br/>
                    <span style={{fontSize:'12px'}}>Fisch</span>
                 </td>
                 <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                  <span style={{marginLeft:'20px'}}>0</span> <br/>
                   <span style={{opacity:'0.5'}}>Balance</span>
                 </td>

                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                  <span style={{marginLeft:'20px'}}>0</span> <br/>
                   <span style={{opacity:'0.5'}}>Deposited</span>
                 </td>
                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                   <span style={{color:'yellow'}}>171.80%</span><br/>
                  <span style={{opacity:'0.5'}}>Yearly</span>
              
                 </td>
                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                 <span>0.47%</span><br/>
                  <span style={{opacity:'0.5'}}>Daily</span>
                 </td>

                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                 <span>$1.60M</span><br/>
                  <span style={{opacity:'0.5'}}>TVL</span>
                 
                 </td>

                 <td style={{paddingLeft:'80px',fontSize:'12px'}}>
                 <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                 <FontAwesomeIcon icon={faUndo}  />
                   </button>
                 
                  
                 </td>
                 
               </tr>
             </table>
           </div>

           <div className="content_3" style={{opacity:0.9}}>
            <table border='0' style={{marginTop:'20px'}}>
              <tr>
                <td style={{paddingLeft:'20px'}}>
                  <div style={{width:'270px',height:'200px',padding:'15px 15px'}}>
                        <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                        <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                        <br></br><br></br>

                  
                        <input type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white', marginTop:'3px'}}/>
                    <br></br><br></br>

                   <button style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                     Deposit to Vault
                   </button>

                  </div>
                </td>
                <td style={{paddingLeft:'5px'}}>
                  <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                        <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                     
                        <br></br><br></br>

               
                    <input type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white'}}/>
                    <br></br><br></br>

                   <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                    Withdraw to Wallet
                   </button>

                  </div>
                </td>
                <td style={{paddingLeft:'20px'}}>
                  <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                    <br></br>
                       <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                     
                        <br></br><br></br>
                    <table>

                      <tr>
                        <td style={{paddingLeft:'40px'}}>
                        <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                        </td>
                        <td>
                        <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                        </td>
                      </tr>
                    </table>


                       
                  
                   <br></br>

                   <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                    <span style={{color:'black'}}>Harvest</span>
                   </button>

                  </div>
                </td>
              </tr>

            </table>
            <br></br>

            <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
              <table style={{fontSize:'13px'}}>
                <tr>
                 
                  <td style={{padding:'20px 10px'}}>
                    <span>Farm</span><br></br><br></br>
                    <span style={{opacity:'0.5'}}>Weight:50%</span>
                
                    <br></br>
                    <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                  </td>

                  <td style={{paddingLeft:'350px'}}>
                    <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                    <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                    <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                  

                  </td>
                </tr>
              </table>


            </div>
           </div>

         
 </div>

 
 </div>

 

</div>
</ExpandCollapse>

<div style={{width:'900px' ,marginLeft:'50%', transform:'translate(-50%)'}}>         
<ExpandCollapse
            previewHeight="113px"
            expandText="v"
            collapseText="v"
            ellipsisText=" "
            >
<div style={{ width:'100%', height:'500px'}}>
<div>
 <div className="Box" style={{border:'1px solid yellow', height:'500px'}}>
   
           <div className="content_2">
           <table>
               <tr>
                 <td>
                   
                 </td>
                 <td>
                   <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                 </td>
                 <td>
                   <span style={{fontWeight:'700'}}>CAKE-BNB</span><br/>
                    <span style={{fontSize:'12px'}}>Fisch</span>
                 </td>
                 <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                  <span style={{marginLeft:'20px'}}>0</span> <br/>
                   <span style={{opacity:'0.5'}}>Balance</span>
                 </td>

                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                  <span style={{marginLeft:'20px'}}>0</span> <br/>
                   <span style={{opacity:'0.5'}}>Deposited</span>
                 </td>
                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                   <span style={{color:'yellow'}}>171.80%</span><br/>
                  <span style={{opacity:'0.5'}}>Yearly</span>
              
                 </td>
                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                 <span>0.47%</span><br/>
                  <span style={{opacity:'0.5'}}>Daily</span>
                 </td>

                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                 <span>$1.60M</span><br/>
                  <span style={{opacity:'0.5'}}>TVL</span>
                 
                 </td>

                 <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                 <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                 <FontAwesomeIcon icon={faUndo}  />
                   </button>
                 
                  
                 </td>
                 
               </tr>
             </table>
           </div>

           <div className="content_3" style={{opacity:0.9}}>
            <table border='0' style={{marginTop:'20px'}}>
              <tr>
                <td style={{paddingLeft:'20px'}}>
                  <div style={{width:'270px',height:'200px',padding:'15px 15px'}}>
                        <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                        <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                        <br></br><br></br>

                  
                        <input type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white', marginTop:'3px'}}/>
                    <br></br><br></br>

                   <button style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                     Deposit to Vault
                   </button>

                  </div>
                </td>
                <td style={{paddingLeft:'5px'}}>
                  <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                        <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                     
                        <br></br><br></br>

               
                    <input type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white'}}/>
                    <br></br><br></br>

                   <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                    Withdraw to Wallet
                   </button>

                  </div>
                </td>
                <td style={{paddingLeft:'20px'}}>
                  <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                    <br></br>
                       <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                     
                        <br></br><br></br>
                    <table>

                      <tr>
                        <td style={{paddingLeft:'40px'}}>
                        <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                        </td>
                        <td>
                        <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                        </td>
                      </tr>
                    </table>


                       
                  
                   <br></br>

                   <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                    <span style={{color:'black'}}>Harvest</span>
                   </button>

                  </div>
                </td>
              </tr>

            </table>
            <br></br>

            <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
              <table style={{fontSize:'13px'}}>
                <tr>
                 
                  <td style={{padding:'20px 10px'}}>
                    <span>Farm</span><br></br><br></br>
                    <span style={{opacity:'0.5'}}>Weight:50%</span>
                
                    <br></br>
                    <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                  </td>

                  <td style={{paddingLeft:'350px'}}>
                    <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                    <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                    <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                  

                  </td>
                </tr>
              </table>


            </div>
           </div>

         
 </div>

 
 </div>

 

</div>
</ExpandCollapse>

<div style={{width:'900px' ,marginLeft:'50%', transform:'translate(-50%)'}}>         
<ExpandCollapse
            previewHeight="113px"
            expandText="v"
            collapseText="v"
            ellipsisText=" "
            >
<div style={{ width:'100%', height:'500px'}}>
<div>
 <div className="Box" style={{border:'1px solid yellow', height:'500px'}}>
   
           <div className="content_2">
           <table>
               <tr>
                 <td>
                   
                 </td>
                 <td>
                   <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                 </td>
                 <td>
                   <span style={{fontWeight:'700'}}>BUSD-BNB</span><br/>
                    <span style={{fontSize:'12px'}}>Fisch</span>
                 </td>
                 <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                  <span style={{marginLeft:'20px'}}>0</span> <br/>
                   <span style={{opacity:'0.5'}}>Balance</span>
                 </td>

                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                  <span style={{marginLeft:'20px'}}>0</span> <br/>
                   <span style={{opacity:'0.5'}}>Deposited</span>
                 </td>
                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                   <span style={{color:'yellow'}}>171.80%</span><br/>
                  <span style={{opacity:'0.5'}}>Yearly</span>
              
                 </td>
                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                 <span>0.47%</span><br/>
                  <span style={{opacity:'0.5'}}>Daily</span>
                 </td>

                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                 <span>$1.60M</span><br/>
                  <span style={{opacity:'0.5'}}>TVL</span>
                 
                 </td>

                 <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                 <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                 <FontAwesomeIcon icon={faUndo}  />
                   </button>
                 
                  
                 </td>
                 
               </tr>
             </table>
           </div>

           <div className="content_3" style={{opacity:0.9}}>
            <table border='0' style={{marginTop:'20px'}}>
              <tr>
                <td style={{paddingLeft:'20px'}}>
                  <div style={{width:'270px',height:'200px',padding:'15px 15px'}}>
                        <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                        <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                        <br></br><br></br>

                  
                        <input type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white', marginTop:'3px'}}/>
                    <br></br><br></br>

                   <button style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                     Deposit to Vault
                   </button>

                  </div>
                </td>
                <td style={{paddingLeft:'5px'}}>
                  <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                        <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                     
                        <br></br><br></br>

               
                    <input type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white'}}/>
                    <br></br><br></br>

                   <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                    Withdraw to Wallet
                   </button>

                  </div>
                </td>
                <td style={{paddingLeft:'20px'}}>
                  <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                    <br></br>
                       <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                     
                        <br></br><br></br>
                    <table>

                      <tr>
                        <td style={{paddingLeft:'40px'}}>
                        <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                        </td>
                        <td>
                        <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                        </td>
                      </tr>
                    </table>


                       
                  
                   <br></br>

                   <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                    <span style={{color:'black'}}>Harvest</span>
                   </button>

                  </div>
                </td>
              </tr>

            </table>
            <br></br>

            <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
              <table style={{fontSize:'13px'}}>
                <tr>
                 
                  <td style={{padding:'20px 10px'}}>
                    <span>Farm</span><br></br><br></br>
                    <span style={{opacity:'0.5'}}>Weight:50%</span>
                
                    <br></br>
                    <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                  </td>

                  <td style={{paddingLeft:'350px'}}>
                    <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                    <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                    <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                  

                  </td>
                </tr>
              </table>


            </div>
           </div>

         
 </div>

 
 </div>

 

</div>
</ExpandCollapse>

<div style={{width:'900px' ,marginLeft:'50%', transform:'translate(-50%)'}}>         
<ExpandCollapse
            previewHeight="113px"
            expandText="v"
            collapseText="v"
            ellipsisText=" "
            >
<div style={{ width:'100%', height:'500px'}}>
<div>
 <div className="Box" style={{border:'1px solid yellow', height:'500px'}}>
   
           <div className="content_2">
           <table>
               <tr>
                 <td>
                   
                 </td>
                 <td>
                   <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                 </td>
                 <td>
                   <span style={{fontWeight:'700'}}>USDT-BUSD</span><br/>
                    <span style={{fontSize:'12px'}}>Fisch</span>
                 </td>
                 <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                  <span style={{marginLeft:'20px'}}>0</span> <br/>
                   <span style={{opacity:'0.5'}}>Balance</span>
                 </td>

                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                  <span style={{marginLeft:'20px'}}>0</span> <br/>
                   <span style={{opacity:'0.5'}}>Deposited</span>
                 </td>
                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                   <span style={{color:'yellow'}}>171.80%</span><br/>
                  <span style={{opacity:'0.5'}}>Yearly</span>
              
                 </td>
                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                 <span>0.47%</span><br/>
                  <span style={{opacity:'0.5'}}>Daily</span>
                 </td>

                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                 <span>$1.60M</span><br/>
                  <span style={{opacity:'0.5'}}>TVL</span>
                 
                 </td>

                 <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                 <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                 <FontAwesomeIcon icon={faUndo}  />
                   </button>
                 
                  
                 </td>
                 
               </tr>
             </table>
           </div>

           <div className="content_3" style={{opacity:0.9}}>
            <table border='0' style={{marginTop:'20px'}}>
              <tr>
                <td style={{paddingLeft:'20px'}}>
                  <div style={{width:'270px',height:'200px',padding:'15px 15px'}}>
                        <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                        <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                        <br></br><br></br>

                  
                        <input type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white', marginTop:'3px'}}/>
                    <br></br><br></br>

                   <button style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                     Deposit to Vault
                   </button>

                  </div>
                </td>
                <td style={{paddingLeft:'5px'}}>
                  <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                        <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                     
                        <br></br><br></br>

               
                    <input type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white'}}/>
                    <br></br><br></br>

                   <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                    Withdraw to Wallet
                   </button>

                  </div>
                </td>
                <td style={{paddingLeft:'20px'}}>
                  <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                    <br></br>
                       <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                     
                        <br></br><br></br>
                    <table>

                      <tr>
                        <td style={{paddingLeft:'40px'}}>
                        <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                        </td>
                        <td>
                        <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                        </td>
                      </tr>
                    </table>


                       
                  
                   <br></br>

                   <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                    <span style={{color:'black'}}>Harvest</span>
                   </button>

                  </div>
                </td>
              </tr>

            </table>
            <br></br>

            <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
              <table style={{fontSize:'13px'}}>
                <tr>
                 
                  <td style={{padding:'20px 10px'}}>
                    <span>Farm</span><br></br><br></br>
                    <span style={{opacity:'0.5'}}>Weight:50%</span>
                
                    <br></br>
                    <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                  </td>

                  <td style={{paddingLeft:'350px'}}>
                    <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                    <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                    <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                  

                  </td>
                </tr>
              </table>


            </div>
           </div>

         
 </div>

 
 </div>

 

</div>
</ExpandCollapse>
<div style={{width:'900px' ,marginLeft:'50%', transform:'translate(-50%)'}}>         
<ExpandCollapse
            previewHeight="113px"
            expandText="v"
            collapseText="v"
            ellipsisText=" "
            >
<div style={{ width:'100%', height:'500px'}}>
<div>
 <div className="Box" style={{border:'1px solid yellow', height:'500px'}}>
   
           <div className="content_2">
           <table>
               <tr>
                 <td>
                   
                 </td>
                 <td>
                   <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                 </td>
                 <td>
                   <span style={{fontWeight:'700'}}>btcb-eth</span><br/>
                    <span style={{fontSize:'12px'}}>Fisch</span>
                 </td>
                 <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                  <span style={{marginLeft:'20px'}}>0</span> <br/>
                   <span style={{opacity:'0.5'}}>Balance</span>
                 </td>

                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                  <span style={{marginLeft:'20px'}}>0</span> <br/>
                   <span style={{opacity:'0.5'}}>Deposited</span>
                 </td>
                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                   <span style={{color:'yellow'}}>171.80%</span><br/>
                  <span style={{opacity:'0.5'}}>Yearly</span>
              
                 </td>
                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                 <span>0.47%</span><br/>
                  <span style={{opacity:'0.5'}}>Daily</span>
                 </td>

                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                 <span>$1.60M</span><br/>
                  <span style={{opacity:'0.5'}}>TVL</span>
                 
                 </td>

                 <td style={{paddingLeft:'75px',fontSize:'12px'}}>
                 <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                 <FontAwesomeIcon icon={faUndo}  />
                   </button>
                 
                  
                 </td>
                 
               </tr>
             </table>
           </div>

           <div className="content_3" style={{opacity:0.9}}>
            <table border='0' style={{marginTop:'20px'}}>
              <tr>
                <td style={{paddingLeft:'20px'}}>
                  <div style={{width:'270px',height:'200px',padding:'15px 15px'}}>
                        <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                        <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                        <br></br><br></br>

                  
                        <input type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white', marginTop:'3px'}}/>
                    <br></br><br></br>

                   <button style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                     Deposit to Vault
                   </button>

                  </div>
                </td>
                <td style={{paddingLeft:'5px'}}>
                  <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                        <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                     
                        <br></br><br></br>

               
                    <input type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white'}}/>
                    <br></br><br></br>

                   <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                    Withdraw to Wallet
                   </button>

                  </div>
                </td>
                <td style={{paddingLeft:'20px'}}>
                  <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                    <br></br>
                       <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                     
                        <br></br><br></br>
                    <table>

                      <tr>
                        <td style={{paddingLeft:'40px'}}>
                        <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                        </td>
                        <td>
                        <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                        </td>
                      </tr>
                    </table>


                       
                  
                   <br></br>

                   <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                    <span style={{color:'black'}}>Harvest</span>
                   </button>

                  </div>
                </td>
              </tr>

            </table>
            <br></br>

            <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
              <table style={{fontSize:'13px'}}>
                <tr>
                 
                  <td style={{padding:'20px 10px'}}>
                    <span>Farm</span><br></br><br></br>
                    <span style={{opacity:'0.5'}}>Weight:50%</span>
                
                    <br></br>
                    <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                  </td>

                  <td style={{paddingLeft:'350px'}}>
                    <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                    <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                    <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                  

                  </td>
                </tr>
              </table>


            </div>
           </div>

         
 </div>

 
 </div>

 

</div>
</ExpandCollapse>
<div style={{width:'900px' ,marginLeft:'50%', transform:'translate(-50%)'}}>         
<ExpandCollapse
            previewHeight="113px"
            expandText="v"
            collapseText="v"
            ellipsisText=" "
            >
<div style={{ width:'100%', height:'500px'}}>
<div>
 <div className="Box" style={{border:'1px solid yellow', height:'500px'}}>
   
           <div className="content_2">
           <table>
               <tr>
                 <td>
                   
                 </td>
                 <td>
                   <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                 </td>
                 <td>
                   <span style={{fontWeight:'700'}}>usdc-busd</span><br/>
                    <span style={{fontSize:'12px'}}>Fisch</span>
                 </td>
                 <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                  <span style={{marginLeft:'20px'}}>0</span> <br/>
                   <span style={{opacity:'0.5'}}>Balance</span>
                 </td>

                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                  <span style={{marginLeft:'20px'}}>0</span> <br/>
                   <span style={{opacity:'0.5'}}>Deposited</span>
                 </td>
                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                   <span style={{color:'yellow'}}>171.80%</span><br/>
                  <span style={{opacity:'0.5'}}>Yearly</span>
              
                 </td>
                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                 <span>0.47%</span><br/>
                  <span style={{opacity:'0.5'}}>Daily</span>
                 </td>

                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                 <span>$1.60M</span><br/>
                  <span style={{opacity:'0.5'}}>TVL</span>
                 
                 </td>

                 <td style={{paddingLeft:'60px',fontSize:'12px'}}>
                 <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                 <FontAwesomeIcon icon={faUndo}  />
                   </button>
                 
                  
                 </td>
                 
               </tr>
             </table>
           </div>

           <div className="content_3" style={{opacity:0.9}}>
            <table border='0' style={{marginTop:'20px'}}>
              <tr>
                <td style={{paddingLeft:'20px'}}>
                  <div style={{width:'270px',height:'200px',padding:'15px 15px'}}>
                        <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                        <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                        <br></br><br></br>

                  
                        <input type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white', marginTop:'3px'}}/>
                    <br></br><br></br>

                   <button style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                     Deposit to Vault
                   </button>

                  </div>
                </td>
                <td style={{paddingLeft:'5px'}}>
                  <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                        <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                     
                        <br></br><br></br>

               
                    <input type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white'}}/>
                    <br></br><br></br>

                   <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                    Withdraw to Wallet
                   </button>

                  </div>
                </td>
                <td style={{paddingLeft:'20px'}}>
                  <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                    <br></br>
                       <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                     
                        <br></br><br></br>
                    <table>

                      <tr>
                        <td style={{paddingLeft:'40px'}}>
                        <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                        </td>
                        <td>
                        <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                        </td>
                      </tr>
                    </table>


                       
                  
                   <br></br>

                   <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                    <span style={{color:'black'}}>Harvest</span>
                   </button>

                  </div>
                </td>
              </tr>

            </table>
            <br></br>

            <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
              <table style={{fontSize:'13px'}}>
                <tr>
                 
                  <td style={{padding:'20px 10px'}}>
                    <span>Farm</span><br></br><br></br>
                    <span style={{opacity:'0.5'}}>Weight:50%</span>
                
                    <br></br>
                    <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                  </td>

                  <td style={{paddingLeft:'350px'}}>
                    <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                    <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                    <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                  

                  </td>
                </tr>
              </table>


            </div>
           </div>

         
 </div>

 
 </div>

 

</div>
</ExpandCollapse>
<div style={{width:'900px' ,marginLeft:'50%', transform:'translate(-50%)'}}>         
<ExpandCollapse
            previewHeight="113px"
            expandText="v"
            collapseText="v"
            ellipsisText=" "
            >
<div style={{ width:'100%', height:'500px'}}>
<div>
 <div className="Box" style={{border:'1px solid yellow', height:'500px'}}>
   
           <div className="content_2">
           <table>
               <tr>
                 <td>
                   
                 </td>
                 <td>
                   <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                 </td>
                 <td>
                   <span style={{fontWeight:'700'}}>usdt-bnb</span><br/>
                    <span style={{fontSize:'12px'}}>Fisch</span>
                 </td>
                 <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                  <span style={{marginLeft:'20px'}}>0</span> <br/>
                   <span style={{opacity:'0.5'}}>Balance</span>
                 </td>

                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                  <span style={{marginLeft:'20px'}}>0</span> <br/>
                   <span style={{opacity:'0.5'}}>Deposited</span>
                 </td>
                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                   <span style={{color:'yellow'}}>171.80%</span><br/>
                  <span style={{opacity:'0.5'}}>Yearly</span>
              
                 </td>
                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                 <span>0.47%</span><br/>
                  <span style={{opacity:'0.5'}}>Daily</span>
                 </td>

                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                 <span>$1.60M</span><br/>
                  <span style={{opacity:'0.5'}}>TVL</span>
                 
                 </td>

                 <td style={{paddingLeft:'65px',fontSize:'12px'}}>
                 <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                 <FontAwesomeIcon icon={faUndo}  />
                   </button>
                 
                  
                 </td>
                 
               </tr>
             </table>
           </div>

           <div className="content_3" style={{opacity:0.9}}>
            <table border='0' style={{marginTop:'20px'}}>
              <tr>
                <td style={{paddingLeft:'20px'}}>
                  <div style={{width:'270px',height:'200px',padding:'15px 15px'}}>
                        <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                        <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                        <br></br><br></br>

                  
                        <input type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white', marginTop:'3px'}}/>
                    <br></br><br></br>

                   <button style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                     Deposit to Vault
                   </button>

                  </div>
                </td>
                <td style={{paddingLeft:'5px'}}>
                  <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                        <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                     
                        <br></br><br></br>

               
                    <input type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white'}}/>
                    <br></br><br></br>

                   <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                    Withdraw to Wallet
                   </button>

                  </div>
                </td>
                <td style={{paddingLeft:'20px'}}>
                  <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                    <br></br>
                       <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                     
                        <br></br><br></br>
                    <table>

                      <tr>
                        <td style={{paddingLeft:'40px'}}>
                        <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                        </td>
                        <td>
                        <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                        </td>
                      </tr>
                    </table>


                       
                  
                   <br></br>

                   <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                    <span style={{color:'black'}}>Harvest</span>
                   </button>

                  </div>
                </td>
              </tr>

            </table>
            <br></br>

            <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
              <table style={{fontSize:'13px'}}>
                <tr>
                 
                  <td style={{padding:'20px 10px'}}>
                    <span>Farm</span><br></br><br></br>
                    <span style={{opacity:'0.5'}}>Weight:50%</span>
                
                    <br></br>
                    <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                  </td>

                  <td style={{paddingLeft:'350px'}}>
                    <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                    <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                    <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                  

                  </td>
                </tr>
              </table>


            </div>
           </div>

         
 </div>

 
 </div>

 

</div>
</ExpandCollapse>
<div style={{width:'900px' ,marginLeft:'50%', transform:'translate(-50%)'}}>         
<ExpandCollapse
            previewHeight="113px"
            expandText="v"
            collapseText="v"
            ellipsisText=" "
            >
<div style={{ width:'100%', height:'500px'}}>
<div>
 <div className="Box" style={{border:'1px solid yellow', height:'500px'}}>
   
           <div className="content_2">
           <table>
               <tr>
                 <td>
                   
                 </td>
                 <td>
                   <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                 </td>
                 <td>
                   <span style={{fontWeight:'700'}}>btcb-busd</span><br/>
                    <span style={{fontSize:'12px'}}>Fisch</span>
                 </td>
                 <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                  <span style={{marginLeft:'20px'}}>0</span> <br/>
                   <span style={{opacity:'0.5'}}>Balance</span>
                 </td>

                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                  <span style={{marginLeft:'20px'}}>0</span> <br/>
                   <span style={{opacity:'0.5'}}>Deposited</span>
                 </td>
                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                   <span style={{color:'yellow'}}>171.80%</span><br/>
                  <span style={{opacity:'0.5'}}>Yearly</span>
              
                 </td>
                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                 <span>0.47%</span><br/>
                  <span style={{opacity:'0.5'}}>Daily</span>
                 </td>

                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                 <span>$1.60M</span><br/>
                  <span style={{opacity:'0.5'}}>TVL</span>
                 
                 </td>

                 <td style={{paddingLeft:'60px',fontSize:'12px'}}>
                 <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                 <FontAwesomeIcon icon={faUndo}  />
                   </button>
                 
                  
                 </td>
                 
               </tr>
             </table>
           </div>

           <div className="content_3" style={{opacity:0.9}}>
            <table border='0' style={{marginTop:'20px'}}>
              <tr>
                <td style={{paddingLeft:'20px'}}>
                  <div style={{width:'270px',height:'200px',padding:'15px 15px'}}>
                        <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                        <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                        <br></br><br></br>

                  
                        <input type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white', marginTop:'3px'}}/>
                    <br></br><br></br>

                   <button style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                     Deposit to Vault
                   </button>

                  </div>
                </td>
                <td style={{paddingLeft:'5px'}}>
                  <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                        <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                     
                        <br></br><br></br>

               
                    <input type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white'}}/>
                    <br></br><br></br>

                   <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                    Withdraw to Wallet
                   </button>

                  </div>
                </td>
                <td style={{paddingLeft:'20px'}}>
                  <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                    <br></br>
                       <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                     
                        <br></br><br></br>
                    <table>

                      <tr>
                        <td style={{paddingLeft:'40px'}}>
                        <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                        </td>
                        <td>
                        <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                        </td>
                      </tr>
                    </table>


                       
                  
                   <br></br>

                   <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                    <span style={{color:'black'}}>Harvest</span>
                   </button>

                  </div>
                </td>
              </tr>

            </table>
            <br></br>

            <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
              <table style={{fontSize:'13px'}}>
                <tr>
                 
                  <td style={{padding:'20px 10px'}}>
                    <span>Farm</span><br></br><br></br>
                    <span style={{opacity:'0.5'}}>Weight:50%</span>
                
                    <br></br>
                    <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                  </td>

                  <td style={{paddingLeft:'350px'}}>
                    <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                    <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                    <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                  

                  </td>
                </tr>
              </table>


            </div>
           </div>

         
 </div>

 
 </div>

 

</div>
</ExpandCollapse>
<div style={{width:'900px' ,marginLeft:'50%', transform:'translate(-50%)'}}>         
<ExpandCollapse
            previewHeight="113px"
            expandText="v"
            collapseText="v"
            ellipsisText=" "
            >
<div style={{ width:'100%', height:'500px'}}>
<div>
 <div className="Box" style={{border:'1px solid yellow', height:'500px'}}>
   
           <div className="content_2">
           <table>
               <tr>
                 <td>
                   
                 </td>
                 <td>
                   <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                 </td>
                 <td>
                   <span style={{fontWeight:'700'}}>eth-bnb</span><br/>
                    <span style={{fontSize:'12px'}}>Fisch</span>
                 </td>
                 <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                  <span style={{marginLeft:'20px'}}>0</span> <br/>
                   <span style={{opacity:'0.5'}}>Balance</span>
                 </td>

                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                  <span style={{marginLeft:'20px'}}>0</span> <br/>
                   <span style={{opacity:'0.5'}}>Deposited</span>
                 </td>
                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                   <span style={{color:'yellow'}}>171.80%</span><br/>
                  <span style={{opacity:'0.5'}}>Yearly</span>
              
                 </td>
                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                 <span>0.47%</span><br/>
                  <span style={{opacity:'0.5'}}>Daily</span>
                 </td>

                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                 <span>$1.60M</span><br/>
                  <span style={{opacity:'0.5'}}>TVL</span>
                 
                 </td>

                 <td style={{paddingLeft:'75px',fontSize:'12px'}}>
                 <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                 <FontAwesomeIcon icon={faUndo}  />
                   </button>
                 
                  
                 </td>
                 
               </tr>
             </table>
           </div>

           <div className="content_3" style={{opacity:0.9}}>
            <table border='0' style={{marginTop:'20px'}}>
              <tr>
                <td style={{paddingLeft:'20px'}}>
                  <div style={{width:'270px',height:'200px',padding:'15px 15px'}}>
                        <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                        <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                        <br></br><br></br>

                  
                        <input type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white', marginTop:'3px'}}/>
                    <br></br><br></br>

                   <button style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                     Deposit to Vault
                   </button>

                  </div>
                </td>
                <td style={{paddingLeft:'5px'}}>
                  <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                        <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                     
                        <br></br><br></br>

               
                    <input type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white'}}/>
                    <br></br><br></br>

                   <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                    Withdraw to Wallet
                   </button>

                  </div>
                </td>
                <td style={{paddingLeft:'20px'}}>
                  <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                    <br></br>
                       <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                     
                        <br></br><br></br>
                    <table>

                      <tr>
                        <td style={{paddingLeft:'40px'}}>
                        <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                        </td>
                        <td>
                        <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                        </td>
                      </tr>
                    </table>


                       
                  
                   <br></br>

                   <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                    <span style={{color:'black'}}>Harvest</span>
                   </button>

                  </div>
                </td>
              </tr>

            </table>
            <br></br>

            <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
              <table style={{fontSize:'13px'}}>
                <tr>
                 
                  <td style={{padding:'20px 10px'}}>
                    <span>Farm</span><br></br><br></br>
                    <span style={{opacity:'0.5'}}>Weight:50%</span>
                
                    <br></br>
                    <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                  </td>

                  <td style={{paddingLeft:'350px'}}>
                    <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                    <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                    <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                  

                  </td>
                </tr>
              </table>


            </div>
           </div>

         
 </div>

 
 </div>

 

</div>
</ExpandCollapse>
<div style={{width:'900px' ,marginLeft:'50%', transform:'translate(-50%)'}}>         
<ExpandCollapse
            previewHeight="113px"
            expandText="v"
            collapseText="v"
            ellipsisText=" "
            >
<div style={{ width:'100%', height:'500px'}}>
<div>
 <div className="Box" style={{border:'1px solid yellow', height:'500px'}}>
   
           <div className="content_2">
           <table>
               <tr>
                 <td>
                   
                 </td>
                 <td>
                   <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                 </td>
                 <td>
                   <span style={{fontWeight:'700'}}>usdc-usdt</span><br/>
                    <span style={{fontSize:'12px'}}>Fisch</span>
                 </td>
                 <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                  <span style={{marginLeft:'20px'}}>0</span> <br/>
                   <span style={{opacity:'0.5'}}>Balance</span>
                 </td>

                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                  <span style={{marginLeft:'20px'}}>0</span> <br/>
                   <span style={{opacity:'0.5'}}>Deposited</span>
                 </td>
                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                   <span style={{color:'yellow'}}>171.80%</span><br/>
                  <span style={{opacity:'0.5'}}>Yearly</span>
              
                 </td>
                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                 <span>0.47%</span><br/>
                  <span style={{opacity:'0.5'}}>Daily</span>
                 </td>

                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                 <span>$1.60M</span><br/>
                  <span style={{opacity:'0.5'}}>TVL</span>
                 
                 </td>

                 <td style={{paddingLeft:'60px',fontSize:'12px'}}>
                 <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                 <FontAwesomeIcon icon={faUndo}  />
                   </button>
                 
                  
                 </td>
                 
               </tr>
             </table>
           </div>

           <div className="content_3" style={{opacity:0.9}}>
            <table border='0' style={{marginTop:'20px'}}>
              <tr>
                <td style={{paddingLeft:'20px'}}>
                  <div style={{width:'270px',height:'200px',padding:'15px 15px'}}>
                        <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                        <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                        <br></br><br></br>

                  
                        <input type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white', marginTop:'3px'}}/>
                    <br></br><br></br>

                   <button style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                     Deposit to Vault
                   </button>

                  </div>
                </td>
                <td style={{paddingLeft:'5px'}}>
                  <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                        <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                     
                        <br></br><br></br>

               
                    <input type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white'}}/>
                    <br></br><br></br>

                   <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                    Withdraw to Wallet
                   </button>

                  </div>
                </td>
                <td style={{paddingLeft:'20px'}}>
                  <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                    <br></br>
                       <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                     
                        <br></br><br></br>
                    <table>

                      <tr>
                        <td style={{paddingLeft:'40px'}}>
                        <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                        </td>
                        <td>
                        <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                        </td>
                      </tr>
                    </table>


                       
                  
                   <br></br>

                   <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                    <span style={{color:'black'}}>Harvest</span>
                   </button>

                  </div>
                </td>
              </tr>

            </table>
            <br></br>

            <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
              <table style={{fontSize:'13px'}}>
                <tr>
                 
                  <td style={{padding:'20px 10px'}}>
                    <span>Farm</span><br></br><br></br>
                    <span style={{opacity:'0.5'}}>Weight:50%</span>
                
                    <br></br>
                    <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                  </td>

                  <td style={{paddingLeft:'350px'}}>
                    <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                    <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                    <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                  

                  </td>
                </tr>
              </table>


            </div>
           </div>

         
 </div>

 
 </div>

 

</div>
</ExpandCollapse>
<div style={{width:'900px' ,marginLeft:'50%', transform:'translate(-50%)'}}>         
<ExpandCollapse
            previewHeight="113px"
            expandText="v"
            collapseText="v"
            ellipsisText=" "
            >
<div style={{ width:'100%', height:'500px'}}>
<div>
 <div className="Box" style={{border:'1px solid yellow', height:'500px'}}>
   
           <div className="content_2">
           <table>
               <tr>
                 <td>
                   
                 </td>
                 <td>
                   <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                 </td>
                 <td>
                   <span style={{fontWeight:'700'}}>btcb-bnb</span><br/>
                    <span style={{fontSize:'12px'}}>Fisch</span>
                 </td>
                 <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                  <span style={{marginLeft:'20px'}}>0</span> <br/>
                   <span style={{opacity:'0.5'}}>Balance</span>
                 </td>

                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                  <span style={{marginLeft:'20px'}}>0</span> <br/>
                   <span style={{opacity:'0.5'}}>Deposited</span>
                 </td>
                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                   <span style={{color:'yellow'}}>171.80%</span><br/>
                  <span style={{opacity:'0.5'}}>Yearly</span>
              
                 </td>
                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                 <span>0.47%</span><br/>
                  <span style={{opacity:'0.5'}}>Daily</span>
                 </td>

                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                 <span>$1.60M</span><br/>
                  <span style={{opacity:'0.5'}}>TVL</span>
                 
                 </td>

                 <td style={{paddingLeft:'65px',fontSize:'12px'}}>
                 <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                 <FontAwesomeIcon icon={faUndo}  />
                   </button>
                 
                  
                 </td>
                 
               </tr>
             </table>
           </div>

           <div className="content_3" style={{opacity:0.9}}>
            <table border='0' style={{marginTop:'20px'}}>
              <tr>
                <td style={{paddingLeft:'20px'}}>
                  <div style={{width:'270px',height:'200px',padding:'15px 15px'}}>
                        <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                        <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                        <br></br><br></br>

                  
                        <input type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white', marginTop:'3px'}}/>
                    <br></br><br></br>

                   <button style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                     Deposit to Vault
                   </button>

                  </div>
                </td>
                <td style={{paddingLeft:'5px'}}>
                  <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                        <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                     
                        <br></br><br></br>

               
                    <input type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white'}}/>
                    <br></br><br></br>

                   <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                    Withdraw to Wallet
                   </button>

                  </div>
                </td>
                <td style={{paddingLeft:'20px'}}>
                  <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                    <br></br>
                       <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                     
                        <br></br><br></br>
                    <table>

                      <tr>
                        <td style={{paddingLeft:'40px'}}>
                        <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                        </td>
                        <td>
                        <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                        </td>
                      </tr>
                    </table>


                       
                  
                   <br></br>

                   <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                    <span style={{color:'black'}}>Harvest</span>
                   </button>

                  </div>
                </td>
              </tr>

            </table>
            <br></br>

            <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
              <table style={{fontSize:'13px'}}>
                <tr>
                 
                  <td style={{padding:'20px 10px'}}>
                    <span>Farm</span><br></br><br></br>
                    <span style={{opacity:'0.5'}}>Weight:50%</span>
                
                    <br></br>
                    <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                  </td>

                  <td style={{paddingLeft:'350px'}}>
                    <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                    <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                    <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                  

                  </td>
                </tr>
              </table>


            </div>
           </div>

         
 </div>

 
 </div>

 

</div>
</ExpandCollapse>
<div style={{width:'900px' ,marginLeft:'50%', transform:'translate(-50%)'}}>         
<ExpandCollapse
            previewHeight="113px"
            expandText="v"
            collapseText="v"
            ellipsisText=" "
            >
<div style={{ width:'100%', height:'500px'}}>
<div>
 <div className="Box" style={{border:'1px solid yellow', height:'500px'}}>
   
           <div className="content_2">
           <table>
               <tr>
                 <td>
                   
                 </td>
                 <td>
                   <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                 </td>
                 <td>
                   <span style={{fontWeight:'700'}}>tusd-busd</span><br/>
                    <span style={{fontSize:'12px'}}>Fisch</span>
                 </td>
                 <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                  <span style={{marginLeft:'20px'}}>0</span> <br/>
                   <span style={{opacity:'0.5'}}>Balance</span>
                 </td>

                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                  <span style={{marginLeft:'20px'}}>0</span> <br/>
                   <span style={{opacity:'0.5'}}>Deposited</span>
                 </td>
                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                   <span style={{color:'yellow'}}>171.80%</span><br/>
                  <span style={{opacity:'0.5'}}>Yearly</span>
              
                 </td>
                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                 <span>0.47%</span><br/>
                  <span style={{opacity:'0.5'}}>Daily</span>
                 </td>

                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                 <span>$1.60M</span><br/>
                  <span style={{opacity:'0.5'}}>TVL</span>
                 
                 </td>

                 <td style={{paddingLeft:'60px',fontSize:'12px'}}>
                 <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                 <FontAwesomeIcon icon={faUndo}  />
                   </button>
                 
                  
                 </td>
                 
               </tr>
             </table>
           </div>

           <div className="content_3" style={{opacity:0.9}}>
            <table border='0' style={{marginTop:'20px'}}>
              <tr>
                <td style={{paddingLeft:'20px'}}>
                  <div style={{width:'270px',height:'200px',padding:'15px 15px'}}>
                        <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                        <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                        <br></br><br></br>

                  
                        <input type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white', marginTop:'3px'}}/>
                    <br></br><br></br>

                   <button style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                     Deposit to Vault
                   </button>

                  </div>
                </td>
                <td style={{paddingLeft:'5px'}}>
                  <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                        <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                     
                        <br></br><br></br>

               
                    <input type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white'}}/>
                    <br></br><br></br>

                   <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                    Withdraw to Wallet
                   </button>

                  </div>
                </td>
                <td style={{paddingLeft:'20px'}}>
                  <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                    <br></br>
                       <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                     
                        <br></br><br></br>
                    <table>

                      <tr>
                        <td style={{paddingLeft:'40px'}}>
                        <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                        </td>
                        <td>
                        <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                        </td>
                      </tr>
                    </table>


                       
                  
                   <br></br>

                   <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                    <span style={{color:'black'}}>Harvest</span>
                   </button>

                  </div>
                </td>
              </tr>

            </table>
            <br></br>

            <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
              <table style={{fontSize:'13px'}}>
                <tr>
                 
                  <td style={{padding:'20px 10px'}}>
                    <span>Farm</span><br></br><br></br>
                    <span style={{opacity:'0.5'}}>Weight:50%</span>
                
                    <br></br>
                    <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                  </td>

                  <td style={{paddingLeft:'350px'}}>
                    <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                    <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                    <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                  

                  </td>
                </tr>
              </table>


            </div>
           </div>

         
 </div>

 
 </div>

 

</div>
</ExpandCollapse>
<div style={{width:'900px' ,marginLeft:'50%', transform:'translate(-50%)'}}>         
<ExpandCollapse
            previewHeight="113px"
            expandText="v"
            collapseText="v"
            ellipsisText=" "
            >
<div style={{ width:'100%', height:'500px'}}>
<div>
 <div className="Box" style={{border:'1px solid yellow', height:'500px'}}>
   
           <div className="content_2">
           <table>
               <tr>
                 <td>
                   
                 </td>
                 <td>
                   <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                 </td>
                 <td>
                   <span style={{fontWeight:'700'}}>eth-usdc</span><br/>
                    <span style={{fontSize:'12px'}}>Fisch</span>
                 </td>
                 <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                  <span style={{marginLeft:'20px'}}>0</span> <br/>
                   <span style={{opacity:'0.5'}}>Balance</span>
                 </td>

                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                  <span style={{marginLeft:'20px'}}>0</span> <br/>
                   <span style={{opacity:'0.5'}}>Deposited</span>
                 </td>
                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                   <span style={{color:'yellow'}}>171.80%</span><br/>
                  <span style={{opacity:'0.5'}}>Yearly</span>
              
                 </td>
                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                 <span>0.47%</span><br/>
                  <span style={{opacity:'0.5'}}>Daily</span>
                 </td>

                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                 <span>$1.60M</span><br/>
                  <span style={{opacity:'0.5'}}>TVL</span>
                 
                 </td>

                 <td style={{paddingLeft:'60px',fontSize:'12px'}}>
                 <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                 <FontAwesomeIcon icon={faUndo}  />
                   </button>
                 
                  
                 </td>
                 
               </tr>
             </table>
           </div>

           <div className="content_3" style={{opacity:0.9}}>
            <table border='0' style={{marginTop:'20px'}}>
              <tr>
                <td style={{paddingLeft:'20px'}}>
                  <div style={{width:'270px',height:'200px',padding:'15px 15px'}}>
                        <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                        <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                        <br></br><br></br>

                  
                        <input type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white', marginTop:'3px'}}/>
                    <br></br><br></br>

                   <button style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                     Deposit to Vault
                   </button>

                  </div>
                </td>
                <td style={{paddingLeft:'5px'}}>
                  <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                        <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                     
                        <br></br><br></br>

               
                    <input type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white'}}/>
                    <br></br><br></br>

                   <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                    Withdraw to Wallet
                   </button>

                  </div>
                </td>
                <td style={{paddingLeft:'20px'}}>
                  <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                    <br></br>
                       <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                     
                        <br></br><br></br>
                    <table>

                      <tr>
                        <td style={{paddingLeft:'40px'}}>
                        <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                        </td>
                        <td>
                        <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                        </td>
                      </tr>
                    </table>


                       
                  
                   <br></br>

                   <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                    <span style={{color:'black'}}>Harvest</span>
                   </button>

                  </div>
                </td>
              </tr>

            </table>
            <br></br>

            <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
              <table style={{fontSize:'13px'}}>
                <tr>
                 
                  <td style={{padding:'20px 10px'}}>
                    <span>Farm</span><br></br><br></br>
                    <span style={{opacity:'0.5'}}>Weight:50%</span>
                
                    <br></br>
                    <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                  </td>

                  <td style={{paddingLeft:'350px'}}>
                    <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                    <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                    <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                  

                  </td>
                </tr>
              </table>


            </div>
           </div>

         
 </div>

 
 </div>

 

</div>
</ExpandCollapse>
<div style={{width:'900px' ,marginLeft:'50%', transform:'translate(-50%)'}}>         
<ExpandCollapse
            previewHeight="113px"
            expandText="v"
            collapseText="v"
            ellipsisText=" "
            >
<div style={{ width:'100%', height:'500px'}}>
<div>
 <div className="Box" style={{border:'1px solid yellow', height:'500px'}}>
   
           <div className="content_2">
           <table>
               <tr>
                 <td>
                   
                 </td>
                 <td>
                   <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                 </td>
                 <td>
                   <span style={{fontWeight:'700'}}>dai-busd</span><br/>
                    <span style={{fontSize:'12px'}}>Fisch</span>
                 </td>
                 <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                  <span style={{marginLeft:'20px'}}>0</span> <br/>
                   <span style={{opacity:'0.5'}}>Balance</span>
                 </td>

                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                  <span style={{marginLeft:'20px'}}>0</span> <br/>
                   <span style={{opacity:'0.5'}}>Deposited</span>
                 </td>
                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                   <span style={{color:'yellow'}}>171.80%</span><br/>
                  <span style={{opacity:'0.5'}}>Yearly</span>
              
                 </td>
                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                 <span>0.47%</span><br/>
                  <span style={{opacity:'0.5'}}>Daily</span>
                 </td>

                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                 <span>$1.60M</span><br/>
                  <span style={{opacity:'0.5'}}>TVL</span>
                 
                 </td>

                 <td style={{paddingLeft:'60px',fontSize:'12px'}}>
                 <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                 <FontAwesomeIcon icon={faUndo}  />
                   </button>
                 
                  
                 </td>
                 
               </tr>
             </table>
           </div>

           <div className="content_3" style={{opacity:0.9}}>
            <table border='0' style={{marginTop:'20px'}}>
              <tr>
                <td style={{paddingLeft:'20px'}}>
                  <div style={{width:'270px',height:'200px',padding:'15px 15px'}}>
                        <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                        <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                        <br></br><br></br>

                  
                        <input type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white', marginTop:'3px'}}/>
                    <br></br><br></br>

                   <button style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                     Deposit to Vault
                   </button>

                  </div>
                </td>
                <td style={{paddingLeft:'5px'}}>
                  <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                        <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                     
                        <br></br><br></br>

               
                    <input type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white'}}/>
                    <br></br><br></br>

                   <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                    Withdraw to Wallet
                   </button>

                  </div>
                </td>
                <td style={{paddingLeft:'20px'}}>
                  <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                    <br></br>
                       <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                     
                        <br></br><br></br>
                    <table>

                      <tr>
                        <td style={{paddingLeft:'40px'}}>
                        <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                        </td>
                        <td>
                        <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                        </td>
                      </tr>
                    </table>


                       
                  
                   <br></br>

                   <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                    <span style={{color:'black'}}>Harvest</span>
                   </button>

                  </div>
                </td>
              </tr>

            </table>
            <br></br>

            <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
              <table style={{fontSize:'13px'}}>
                <tr>
                 
                  <td style={{padding:'20px 10px'}}>
                    <span>Farm</span><br></br><br></br>
                    <span style={{opacity:'0.5'}}>Weight:50%</span>
                
                    <br></br>
                    <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                  </td>

                  <td style={{paddingLeft:'350px'}}>
                    <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                    <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                    <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                  

                  </td>
                </tr>
              </table>


            </div>
           </div>

         
 </div>

 
 </div>

 

</div>
</ExpandCollapse>
<div style={{width:'900px' ,marginLeft:'50%', transform:'translate(-50%)'}}>         
<ExpandCollapse
            previewHeight="113px"
            expandText="v"
            collapseText="v"
            ellipsisText=" "
            >
<div style={{ width:'100%', height:'500px'}}>
<div>
 <div className="Box" style={{border:'1px solid yellow', height:'500px'}}>
   
           <div className="content_2">
           <table>
               <tr>
                 <td>
                   
                 </td>
                 <td>
                   <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                 </td>
                 <td>
                   <span style={{fontWeight:'700'}}>cake-busd</span><br/>
                    <span style={{fontSize:'12px'}}>Fisch</span>
                 </td>
                 <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                  <span style={{marginLeft:'20px'}}>0</span> <br/>
                   <span style={{opacity:'0.5'}}>Balance</span>
                 </td>

                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                  <span style={{marginLeft:'20px'}}>0</span> <br/>
                   <span style={{opacity:'0.5'}}>Deposited</span>
                 </td>
                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                   <span style={{color:'yellow'}}>171.80%</span><br/>
                  <span style={{opacity:'0.5'}}>Yearly</span>
              
                 </td>
                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                 <span>0.47%</span><br/>
                  <span style={{opacity:'0.5'}}>Daily</span>
                 </td>

                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                 <span>$1.60M</span><br/>
                  <span style={{opacity:'0.5'}}>TVL</span>
                 
                 </td>

                 <td style={{paddingLeft:'60px',fontSize:'12px'}}>
                 <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                 <FontAwesomeIcon icon={faUndo}  />
                   </button>
                 
                  
                 </td>
                 
               </tr>
             </table>
           </div>

           <div className="content_3" style={{opacity:0.9}}>
            <table border='0' style={{marginTop:'20px'}}>
              <tr>
                <td style={{paddingLeft:'20px'}}>
                  <div style={{width:'270px',height:'200px',padding:'15px 15px'}}>
                        <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                        <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                        <br></br><br></br>

                  
                        <input type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white', marginTop:'3px'}}/>
                    <br></br><br></br>

                   <button style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                     Deposit to Vault
                   </button>

                  </div>
                </td>
                <td style={{paddingLeft:'5px'}}>
                  <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                        <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                     
                        <br></br><br></br>

               
                    <input type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white'}}/>
                    <br></br><br></br>

                   <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                    Withdraw to Wallet
                   </button>

                  </div>
                </td>
                <td style={{paddingLeft:'20px'}}>
                  <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                    <br></br>
                       <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                     
                        <br></br><br></br>
                    <table>

                      <tr>
                        <td style={{paddingLeft:'40px'}}>
                        <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                        </td>
                        <td>
                        <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                        </td>
                      </tr>
                    </table>


                       
                  
                   <br></br>

                   <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                    <span style={{color:'black'}}>Harvest</span>
                   </button>

                  </div>
                </td>
              </tr>

            </table>
            <br></br>

            <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
              <table style={{fontSize:'13px'}}>
                <tr>
                 
                  <td style={{padding:'20px 10px'}}>
                    <span>Farm</span><br></br><br></br>
                    <span style={{opacity:'0.5'}}>Weight:50%</span>
                
                    <br></br>
                    <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                  </td>

                  <td style={{paddingLeft:'350px'}}>
                    <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                    <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                    <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                  

                  </td>
                </tr>
              </table>


            </div>
           </div>

         
 </div>

 
 </div>

 

</div>
</ExpandCollapse>
<div style={{width:'900px' ,marginLeft:'50%', transform:'translate(-50%)'}}>         
<ExpandCollapse
            previewHeight="113px"
            expandText="v"
            collapseText="v"
            ellipsisText=" "
            >
<div style={{ width:'100%', height:'500px'}}>
<div>
 <div className="Box" style={{border:'1px solid yellow', height:'500px'}}>
   
           <div className="content_2">
           <table>
               <tr>
                 <td>
                   
                 </td>
                 <td>
                   <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                 </td>
                 <td>
                   <span style={{fontWeight:'700'}}>dot-bnb</span><br/>
                    <span style={{fontSize:'12px'}}>Fisch</span>
                 </td>
                 <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                  <span style={{marginLeft:'20px'}}>0</span> <br/>
                   <span style={{opacity:'0.5'}}>Balance</span>
                 </td>

                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                  <span style={{marginLeft:'20px'}}>0</span> <br/>
                   <span style={{opacity:'0.5'}}>Deposited</span>
                 </td>
                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                   <span style={{color:'yellow'}}>171.80%</span><br/>
                  <span style={{opacity:'0.5'}}>Yearly</span>
              
                 </td>
                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                 <span>0.47%</span><br/>
                  <span style={{opacity:'0.5'}}>Daily</span>
                 </td>

                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                 <span>$1.60M</span><br/>
                  <span style={{opacity:'0.5'}}>TVL</span>
                 
                 </td>

                 <td style={{paddingLeft:'70px',fontSize:'12px'}}>
                 <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                 <FontAwesomeIcon icon={faUndo}  />
                   </button>
                 
                  
                 </td>
                 
               </tr>
             </table>
           </div>

           <div className="content_3" style={{opacity:0.9}}>
            <table border='0' style={{marginTop:'20px'}}>
              <tr>
                <td style={{paddingLeft:'20px'}}>
                  <div style={{width:'270px',height:'200px',padding:'15px 15px'}}>
                        <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                        <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                        <br></br><br></br>

                  
                        <input type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white', marginTop:'3px'}}/>
                    <br></br><br></br>

                   <button style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                     Deposit to Vault
                   </button>

                  </div>
                </td>
                <td style={{paddingLeft:'5px'}}>
                  <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                        <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                     
                        <br></br><br></br>

               
                    <input type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white'}}/>
                    <br></br><br></br>

                   <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                    Withdraw to Wallet
                   </button>

                  </div>
                </td>
                <td style={{paddingLeft:'20px'}}>
                  <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                    <br></br>
                       <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                     
                        <br></br><br></br>
                    <table>

                      <tr>
                        <td style={{paddingLeft:'40px'}}>
                        <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                        </td>
                        <td>
                        <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                        </td>
                      </tr>
                    </table>


                       
                  
                   <br></br>

                   <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                    <span style={{color:'black'}}>Harvest</span>
                   </button>

                  </div>
                </td>
              </tr>

            </table>
            <br></br>

            <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
              <table style={{fontSize:'13px'}}>
                <tr>
                 
                  <td style={{padding:'20px 10px'}}>
                    <span>Farm</span><br></br><br></br>
                    <span style={{opacity:'0.5'}}>Weight:50%</span>
                
                    <br></br>
                    <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                  </td>

                  <td style={{paddingLeft:'350px'}}>
                    <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                    <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                    <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                  

                  </td>
                </tr>
              </table>


            </div>
           </div>

         
 </div>

 
 </div>

 

</div>
</ExpandCollapse>
<div style={{width:'900px' ,marginLeft:'50%', transform:'translate(-50%)'}}>         
<ExpandCollapse
            previewHeight="113px"
            expandText="v"
            collapseText="v"
            ellipsisText=" "
            >
<div style={{ width:'100%', height:'500px'}}>
<div>
 <div className="Box" style={{border:'1px solid yellow', height:'500px'}}>
   
           <div className="content_2">
           <table>
               <tr>
                 <td>
                   
                 </td>
                 <td>
                   <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                 </td>
                 <td>
                   <span style={{fontWeight:'700'}}>cake-usdt</span><br/>
                    <span style={{fontSize:'12px'}}>Fisch</span>
                 </td>
                 <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                  <span style={{marginLeft:'20px'}}>0</span> <br/>
                   <span style={{opacity:'0.5'}}>Balance</span>
                 </td>

                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                  <span style={{marginLeft:'20px'}}>0</span> <br/>
                   <span style={{opacity:'0.5'}}>Deposited</span>
                 </td>
                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                   <span style={{color:'yellow'}}>171.80%</span><br/>
                  <span style={{opacity:'0.5'}}>Yearly</span>
              
                 </td>
                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                 <span>0.47%</span><br/>
                  <span style={{opacity:'0.5'}}>Daily</span>
                 </td>

                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                 <span>$1.60M</span><br/>
                  <span style={{opacity:'0.5'}}>TVL</span>
                 
                 </td>

                 <td style={{paddingLeft:'60px',fontSize:'12px'}}>
                 <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                 <FontAwesomeIcon icon={faUndo}  />
                   </button>
                 
                  
                 </td>
                 
               </tr>
             </table>
           </div>

           <div className="content_3" style={{opacity:0.9}}>
            <table border='0' style={{marginTop:'20px'}}>
              <tr>
                <td style={{paddingLeft:'20px'}}>
                  <div style={{width:'270px',height:'200px',padding:'15px 15px'}}>
                        <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                        <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                        <br></br><br></br>

                  
                        <input type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white', marginTop:'3px'}}/>
                    <br></br><br></br>

                   <button style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                     Deposit to Vault
                   </button>

                  </div>
                </td>
                <td style={{paddingLeft:'5px'}}>
                  <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                        <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                     
                        <br></br><br></br>

               
                    <input type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white'}}/>
                    <br></br><br></br>

                   <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                    Withdraw to Wallet
                   </button>

                  </div>
                </td>
                <td style={{paddingLeft:'20px'}}>
                  <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                    <br></br>
                       <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                     
                        <br></br><br></br>
                    <table>

                      <tr>
                        <td style={{paddingLeft:'40px'}}>
                        <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                        </td>
                        <td>
                        <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                        </td>
                      </tr>
                    </table>


                       
                  
                   <br></br>

                   <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                    <span style={{color:'black'}}>Harvest</span>
                   </button>

                  </div>
                </td>
              </tr>

            </table>
            <br></br>

            <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
              <table style={{fontSize:'13px'}}>
                <tr>
                 
                  <td style={{padding:'20px 10px'}}>
                    <span>Farm</span><br></br><br></br>
                    <span style={{opacity:'0.5'}}>Weight:50%</span>
                
                    <br></br>
                    <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                  </td>

                  <td style={{paddingLeft:'350px'}}>
                    <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                    <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                    <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                  

                  </td>
                </tr>
              </table>


            </div>
           </div>

         
 </div>

 
 </div>

 

</div>
</ExpandCollapse>
<div style={{width:'900px' ,marginLeft:'50%', transform:'translate(-50%)'}}>         
<ExpandCollapse
            previewHeight="113px"
            expandText="v"
            collapseText="v"
            ellipsisText=" "
            >
<div style={{ width:'100%', height:'500px'}}>
<div>
 <div className="Box" style={{border:'1px solid yellow', height:'500px'}}>
   
           <div className="content_2">
           <table>
               <tr>
                 <td>
                   
                 </td>
                 <td>
                   <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                 </td>
                 <td>
                   <span style={{fontWeight:'700'}}>bunny-bnb</span><br/>
                    <span style={{fontSize:'12px'}}>Fisch</span>
                 </td>
                 <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                  <span style={{marginLeft:'20px'}}>0</span> <br/>
                   <span style={{opacity:'0.5'}}>Balance</span>
                 </td>

                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                  <span style={{marginLeft:'20px'}}>0</span> <br/>
                   <span style={{opacity:'0.5'}}>Deposited</span>
                 </td>
                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                   <span style={{color:'yellow'}}>171.80%</span><br/>
                  <span style={{opacity:'0.5'}}>Yearly</span>
              
                 </td>
                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                 <span>0.47%</span><br/>
                  <span style={{opacity:'0.5'}}>Daily</span>
                 </td>

                 <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                 <span>$1.60M</span><br/>
                  <span style={{opacity:'0.5'}}>TVL</span>
                 
                 </td>

                 <td style={{paddingLeft:'60px',fontSize:'12px'}}>
                 <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                 <FontAwesomeIcon icon={faUndo}  />
                   </button>
                 
                  
                 </td>
                 
               </tr>
             </table>
           </div>

           <div className="content_3" style={{opacity:0.9}}>
            <table border='0' style={{marginTop:'20px'}}>
              <tr>
                <td style={{paddingLeft:'20px'}}>
                  <div style={{width:'270px',height:'200px',padding:'15px 15px'}}>
                        <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                        <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                        <br></br><br></br>

                  
                        <input type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white', marginTop:'3px'}}/>
                    <br></br><br></br>

                   <button style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                     Deposit to Vault
                   </button>

                  </div>
                </td>
                <td style={{paddingLeft:'5px'}}>
                  <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                        <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                     
                        <br></br><br></br>

               
                    <input type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white'}}/>
                    <br></br><br></br>

                   <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                    Withdraw to Wallet
                   </button>

                  </div>
                </td>
                <td style={{paddingLeft:'20px'}}>
                  <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                    <br></br>
                       <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                     
                        <br></br><br></br>
                    <table>

                      <tr>
                        <td style={{paddingLeft:'40px'}}>
                        <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                        </td>
                        <td>
                        <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                        </td>
                      </tr>
                    </table>


                       
                  
                   <br></br>

                   <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                    <span style={{color:'black'}}>Harvest</span>
                   </button>

                  </div>
                </td>
              </tr>

            </table>
            <br></br>

            <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
              <table style={{fontSize:'13px'}}>
                <tr>
                 
                  <td style={{padding:'20px 10px'}}>
                    <span>Farm</span><br></br><br></br>
                    <span style={{opacity:'0.5'}}>Weight:50%</span>
                
                    <br></br>
                    <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                  </td>

                  <td style={{paddingLeft:'350px'}}>
                    <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                    <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                    <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                  

                  </td>
                </tr>
              </table>


            </div>
           </div>

         
 </div>

 
 </div>

 

</div>
</ExpandCollapse>
          




</div>
          




</div>
          




</div>
          




</div>
          




</div>
          




</div>
          




</div>
          




</div>
          




</div>
          




</div>
          




</div>
          




</div>
          




</div>
          




</div>
          




</div>
          




</div>
          




</div>
          




</div>
           </div>









 
 







 
 

</div>


 

</div>









   


      );
};

export default Main;
