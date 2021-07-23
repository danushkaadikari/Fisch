import React from 'react';
import {faHeart,faClock,faStopwatch,faUndo,faExternalLinkSquareAlt} from "@fortawesome/free-solid-svg-icons";
import {faQuestionCircle,faCalendarAlt} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './App.css';

function App() {
  return (
   <div style={{backgroundImage:'url(/image/skyfinal.png)', width:'100%', height:'1000px'}}>

          <div>

            <table border="0" style={{marginLeft:'250px',position:'absolute'}}>

              <tr>
                <td>
                 <p style={{color:'yellow',fontWeight:'600',paddingTop:'50px'}}>Deposit an Earn Money</p> 
                </td>
                <td style={{paddingLeft:'150px'}}>
                  <img style={{zIndex:'1'}} src="/image/fischlogo2.png"/>
                </td>
                <td style={{paddingLeft:'150px',color:'yellow',fontWeight:'600',paddingTop:'50px'}}>
                  TVL: $101,000,000
                </td>
              </tr>
            </table>
           
        
     
    
            <div className="Box">
              
                      <div className="content">
                        <ul>
                            <li className="active"><a href="#">Earn</a></li>
                            <li><a href="#">Exchange</a></li>
                            <li><a href="#">Create LP</a></li>
                            <li><a href="#">Learn V</a></li>

                        </ul>
                      </div>

                      <div className="content2" style={{opacity:0.9}}>
                        <table>
                          <tr>
                            <td>
                              
                            </td>
                            <td>
                              <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                            </td>
                            <td>
                              <span style={{fontWeight:'700'}}>Earn BONDLY</span><br/>
                               <span style={{fontSize:'12px'}}>Stake CAKE</span>
                            </td>
                            <td style={{paddingLeft:'70px',fontSize:'12px'}}>
                              BONDLY Earned<br/>
                              0.0
                            </td>
                            <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                              APR<br/>
                              96.48%
                              <FontAwesomeIcon icon={faCalendarAlt}  style={{marginLeft:'10px',fontSize:'15px'}}/>
                            </td>
                            <td style={{paddingLeft:'60px',fontSize:'12px'}}>
                             Total Staked<br/>
                             69,018 CAKE
                            </td>

                            <td style={{paddingLeft:'100px',fontSize:'12px'}}>
                            Ends in<br/>
                            1,664,873 blocks
                            <FontAwesomeIcon icon={faStopwatch}  style={{marginLeft:'10px',fontSize:'15px'}}/>
                            
                            </td>

                            <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                              <select style={{backgroundColor:'black', color:'yellow', border:'none'}}>
                                <option value="hide" >
                                Hide
                                </option>
                              </select>
                             
                            </td>
                            
                          </tr>
                        </table>
                        <hr style={{opacity:'0.5'}}/>

                        <div className="content3">
                          <table>
                          <tr>
                            <td>
                            <p style={{lineHeight:'10px'}}>Max stake per user: 100 CAKE</p>
                              <p style={{lineHeight:'10px'}}>Ends in: <span style={{color:'yellow'}}>16000,000 blocks
                              <FontAwesomeIcon icon={faStopwatch}  style={{marginLeft:'10px',fontSize:'15px'}}/></span>
                               </p>
                              <p style={{lineHeight:'10px',color:'yellow'}}>info site: 
                              <FontAwesomeIcon icon={faExternalLinkSquareAlt}  style={{marginLeft:'10px',fontSize:'15px'}}/>
                              </p>
                              <p style={{lineHeight:'10px',color:'yellow'}}>project site:
                              <FontAwesomeIcon icon={faExternalLinkSquareAlt}  style={{marginLeft:'10px',fontSize:'15px'}}/>
                              </p>
                              <table>
                               <tr>
                                 <td>
                                 <p style={{lineHeight:'5px',color:'yellow'}}>Add to Metamask:
                              
                              </p>
                                 </td>
                                 <td>
                                 <img src="/image/dog.png " style={{marginLeft:'10px',width:'30px'}}/>
                                 </td>
                              
                               </tr>
                              
                              </table>
                            
                              <button style={{border:'1px solid yellow', borderRadius:'20px',backgroundColor:'#323131',color:'white',width:'100px',padding:'5px'}}>
                              <FontAwesomeIcon icon={faUndo}  />
                               <span style={{marginLeft:'10px'}}> Manual</span>
                              </button>
                              <FontAwesomeIcon icon={faQuestionCircle} style={{marginLeft:'10px'}} />

                              
                            </td>

                            <td style={{paddingLeft:'100px'}}>
                              <p style={{fontSize:'10px'}}>
                                <span style={{color:'pink'}}>BONDLY</span> EARNED
                              </p>
                              0.000000
                            </td>

                            <td style={{paddingLeft:'100px'}}>
                              <br/><br></br>
                              <button style={{padding:'8px',border:'none', borderRadius:'6px',backgroundColor:'gray',color:'white'}}>
                                Harvest
                              </button>
                            </td>

                                     
                            <td style={{paddingLeft:'80px'}}>
                            <p style={{fontSize:'10px'}}>ENABLE POOL</p>
                              <button style={{padding:'8px',border:'1px solid yellow', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                                Enable
                              </button>
                            </td>
                          </tr>
                          
                          </table>
                               
                        </div>
                        <table style={{marginTop:'50px'}}> 
                          <tr>
                            <td>
                              
                            </td>
                            <td>
                              <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                            </td>
                            <td>
                              <span style={{fontWeight:'700'}}>Earn MARSH</span><br/>
                               <span style={{fontSize:'12px'}}>Stake CAKE</span>
                            </td>
                            <td style={{paddingLeft:'70px',fontSize:'12px'}}>
                              MARSH Earned<br/>
                              0.0
                            </td>
                            <td style={{paddingLeft:'70px',fontSize:'12px'}}>
                              APR<br/>
                              88.40%
                              <FontAwesomeIcon icon={faCalendarAlt}  style={{marginLeft:'10px',fontSize:'15px'}}/>
                            </td>
                            <td style={{paddingLeft:'70px',fontSize:'12px'}}>
                             Total Staked<br/>
                             154,298 CAKE
                            </td>

                            <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                            Ends in<br></br>
                            1,664,873 blocks
                            <FontAwesomeIcon icon={faStopwatch}  style={{marginLeft:'10px',fontSize:'15px'}}/>
                            
                            </td>

                            <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                              <select style={{backgroundColor:'rgba(0, 0, 0, 0.1)',color:'yellow', border:'none'}}>
                                <option value="hide" >
                                Details
                                </option>
                              </select>
                             
                            </td>
                            
                          </tr>
                        </table>

                        <table>
                          <tr>
                            <td>
                              
                            </td>
                            <td>
                              <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                            </td>
                            <td>
                              <span style={{fontWeight:'700'}}>Earn MBOX</span><br/>
                               <span style={{fontSize:'12px'}}>Stake CAKE</span>
                            </td>
                            <td style={{paddingLeft:'87px',fontSize:'12px'}}>
                              MBOX  Earned<br/>
                              0.0
                              
                            </td>
                            <td style={{paddingLeft:'70px',fontSize:'12px'}}>
                              APR<br/>
                              85.23%
                              <FontAwesomeIcon icon={faCalendarAlt}  style={{marginLeft:'10px',fontSize:'15px'}}/>
                            </td>
                            <td style={{paddingLeft:'70px',fontSize:'12px'}}>
                             Total Staked<br/>
                             305,620 CAKE
                            </td>

                            <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                            Ends in<br></br>
                            1,664,873 blocks
                            <FontAwesomeIcon icon={faStopwatch}  style={{marginLeft:'10px',fontSize:'15px'}}/>
                            </td>

                            <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                              <select style={{backgroundColor:'rgba(0, 0, 0, 0.1)', color:'yellow', border:'none'}}>
                                <option value="hide" >
                                Details
                                </option>
                              </select>
                             
                            </td>
                            
                          </tr>
                        </table>

                      </div>
            </div>
            </div>

   </div>
  );
}

export default App;
