import React, { useState } from 'react';
import { render } from 'react-dom';
import ReactDOM from "react-dom";
import ExpandCollapse from 'react-expand-collapse';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Button
} from "react-bootstrap";
import web3 from 'web3';
import FISCH from "./build/FISCH.json";
import RewardPool from "./build/RewardPool.json";
import RewardPool2 from "./b1/RewardPool.json";
import RewardPool3 from "./b2/RewardPool.json";
import Main from "./Main";

import getBlockchain from './ethereum.js';

import {faHeart,faClock,faStopwatch,faUndo,faExternalLinkSquareAlt,faExclamationCircle,faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {faQuestionCircle,faCalendarAlt} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


//es6
import { BncClient } from "@binance-chain/javascript-sdk"

//const client = new BncClient("https://data-seed-prebsc-2-s3.binance.org:8545")
//client.initChain()

//console.log(client.address.toString())
//common
//const { BncClient } = require("@binance-chain/javascript-sdk")

const address = "0xD22505D1CfbB0aa1668edA17AE547f39e7a8445F"

// const { rpc } = require("@binance-chain/javascript-sdk")
// new rpc("https://data-seed-prebsc-2-s3.binance.org:8545")
//   .getAccount("0xD22505D1CfbB0aa1668edA17AE547f39e7a8445F")
//   .then((x) => console.log("abcc", JSON.stringify(x)))


// client.chooseNetwork("testnet")


//client.getTxs(...);
console.log("abssc"+RewardPool)

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class Section extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = { username: '' };
    var rewardPool= {};
    
    var rewardPoolData= {};
    var rewardPool2= {};
    
    var rewardPoolData2= {};
    var rewardPool3= {};
    
    var rewardPoolData3= {};
    var stake ='0';
    this.state = {
      account: "0xD22505D1CfbB0aa1668edA17AE547f39e7a8445F",
      y: {},
      simpleStorage:(undefined),
      data:(undefined),
      fischTokenBalance:"0",
      sharesAdd: "0",
      withdrawBalance: "0",
      balances:"0",
      loading: true,  
      Staked:"0",
      amount1:"",
      amount2:"",
      amount3:"",
      amount4:"",
      inputRef:"0",
      total:0,
      withdraw:'0',
      /*withdraw1:'0',
      withdraw2:'0',
      withdraw3:'0', */  
      staked:'0',
      ent_amount:'0'
    };
  }
 



  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }

  async componentDidMount() {
    
     //  const { simpleStorage } = await getBlockchain();
        //const data = await simpleStorage.readData();
     // setSimpleStorage(simpleStorage);
     //  setData(data);
    
    
    
  
   
    //console.log("avvbc"+simpleStorage)
    await this.loadWeb3();
    await this.loadBlockchainData();
  }


  
  async loadBlockchainData() {
   const web3 = window.web3;

    const account = await web3.eth.getAccounts();
    this.setState({ account: account[0] });
    console.log('Account' + this.state.account);
    
    const networkId = await web3.eth.net.getId();

    console.log('netword' + networkId);
    //Load FISCH
     const FischTokenData = FISCH.networks[networkId];
    if(FischTokenData) {
      console.log('Fisch Token is available')
      const y = new web3.eth.Contract(
        FISCH.abi,
        FischTokenData.address
      );
     // balanceOf
      this.setState({ y });
      let fischTokenBalance = await y.methods
        .balanceOf( this.state.account )
        .call();
       this.setState({ fischTokenBalance: fischTokenBalance.toString() });
    }
    else{
      window.alert("FISCH contract not deployed to detected network.");
    } 

    //Load RewardPool 
    var rewardPoolData = RewardPool.networks[networkId];
    if(rewardPoolData) {
      console.log('reward pool is available',rewardPoolData)
      var rewardPool = new web3.eth.Contract(
        RewardPool.abi,
        rewardPoolData.address
      );
      console.log("aa",rewardPool)
     this.setState({ rewardPool });
     // let balances = await rewardPool
      //  .call();
      //  this.setState({ balances: balances.toString() });
        
    }else {
      window.alert("Rewardool contract not deployed to detected network.");
    }

    
    this.setState({ loading: false });

    //Load RewardPool 
    var rewardPoolData2 = RewardPool2.networks[networkId];
    if(rewardPoolData2) {
      console.log('reward pool is available',rewardPoolData2)
      var rewardPool2 = new web3.eth.Contract(
        RewardPool2.abi,
        rewardPoolData2.address
      );
      console.log("aa",rewardPool2)
     this.setState({ rewardPool2 });
     // let balances = await rewardPool
      //  .call();
      //  this.setState({ balances: balances.toString() });
        
    }else {
      window.alert("Rewardool contract not deployed to detected network.");
    }

    
    this.setState({ loading: false });

    //Load RewardPool 
    var rewardPoolData3 = RewardPool3.networks[networkId];
    if(rewardPoolData3) {
      console.log('reward pool is available',rewardPoolData3)
      var rewardPool3 = new web3.eth.Contract(
        RewardPool3.abi,
        rewardPoolData3.address
      );
      console.log("aa",rewardPool3)
     this.setState({ rewardPool3 });
     // let balances = await rewardPool
      //  .call();
      //  this.setState({ balances: balances.toString() });
        
    }else {
      window.alert("Rewardool contract not deployed to detected network.");
    }

    
    this.setState({ loading: false });

  }
  
  ///////////////////////////////////////////////




 
  /* onStake1 = async (rewardPool) => {
    var amount1 = this.inputRef;
    console.log('amount',amount1)
    //let new_amount = parseInt(amount)
   var amount = web3.utils.toWei((amount1), "Ether");
   const tx = await rewardPool.stake(amount);
   // this.rewardPool.stake(amount);
  };*/

//------------------------------------withdraw----------------------
  onWithdraw =  (amount)  => {
    this.withdraw();
    /*this.withdraw1();
    this.withdraw2();
    this.withdraw3();*/
  };
  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new web3(web3.currentProvider);
    } else {
      window.alert("Non-ethereum brwoser detected.");
    }
  }


  
  //harvest (Dep)
  harvest = (amount) => {

    this.amount1 = "3";
    console.log('amount',this.amount1);
    this.setState({ loading: true });
    //let new_amount = parseInt(amount)
   var amount = web3.utils.toWei((this.amount1), "Ether");
    const { rewardPool } = this.state;
  // const tx2= await rewardPool.methods.getReward();
    //const tx = rewardPool.methods.stake(amount);
    
    rewardPool.methods
          .getReward()
          .send({ from: this.state.account })
          .on("transactionHash", (hash) => {
            this.setState({ loading: false });
          });

    
    window.alert("Deoposited");
   // console.log("mm",tx)
      
  };

  harvest1 = (amount) => {

    this.amount2 = "3";
    console.log('amount',this.amount2);
    this.setState({ loading: true });
    //let new_amount = parseInt(amount)
   var amount = web3.utils.toWei((this.amount2), "Ether");
    const { rewardPool } = this.state;
  // const tx2= await rewardPool.methods.getReward();
    //const tx = rewardPool.methods.stake(amount);
    
    rewardPool.methods
          .getReward()
          .send({ from: this.state.account })
          .on("transactionHash", (hash) => {
            this.setState({ loading: false });
          });

    
    window.alert("Deoposited");
   // console.log("mm",tx)
      
  };
  harvest2 = (amount) => {

    this.amount3 = "3";
    console.log('amount',this.amount3);
    this.setState({ loading: true });
    //let new_amount = parseInt(amount)
   var amount = web3.utils.toWei((this.amount3), "Ether");
    const { rewardPool2 } = this.state;
  // const tx2= await rewardPool.methods.getReward();
    //const tx = rewardPool.methods.stake(amount);
    
    rewardPool2.methods
          .getReward()
          .send({ from: this.state.account })
          .on("transactionHash", (hash) => {
            this.setState({ loading: false });
          });

    
    window.alert("Deoposited");
   // console.log("mm",tx)
      
  };

  harvest3 = (amount) => {

    this.amount4 = "3";
    console.log('amount',this.amount4);
    this.setState({ loading: true });
    //let new_amount = parseInt(amount)
   var amount = web3.utils.toWei((this.amount4), "Ether");
    const { rewardPool3 } = this.state;
  // const tx2= await rewardPool.methods.getReward();
    //const tx = rewardPool.methods.stake(amount);
    
    rewardPool3.methods
          .getReward()
          .send({ from: this.state.account })
          .on("transactionHash", (hash) => {
            this.setState({ loading: false });
          });

    
    window.alert("Deoposited");
   // console.log("mm",tx)
      
  };
  //Staking (Dep)--------------------------------------------------------------
  onStake = (amount) => {

   this.amount1 = this.state.username;
   this.total= this.total+parseInt(this.amount1);
    console.log('amount1',this.total);
    this.setState({ loading: true });
    //let new_amount = parseInt(amount)
   var amount = web3.utils.toWei((this.amount1), "Ether");
    const { rewardPool } = this.state;
  // const tx2= await rewardPool.methods.getReward();
    //const tx = rewardPool.methods.stake(amount);
    
    rewardPool.methods
          .stake(amount)
          .send({ from: this.state.account })
          .on("transactionHash", (hash) => {
            this.setState({ loading: false });
          });

    
    window.alert("Deoposited");
   // console.log("mm",tx)
      
  };

  //2//----------------------
  onStake1 = (amount) => {

    this.amount2 = this.state.username;
    this.total= this.total+parseInt(this.amount2);
     console.log('amount2',this.total);
     this.setState({ loading: true });
     //let new_amount = parseInt(amount)
    var amount = web3.utils.toWei((this.amount2), "Ether");
     const { rewardPool } = this.state;
   // const tx2= await rewardPool.methods.getReward();
     //const tx = rewardPool.methods.stake(amount);
     
     rewardPool.methods
           .stake(amount)
           .send({ from: this.state.account })
           .on("transactionHash", (hash) => {
             this.setState({ loading: false });
           });
 
     
     window.alert("Deoposited");
    // console.log("mm",tx)
       
   };

     //3//----------------------
  onStake2 = (amount) => {

    this.amount3 = this.state.username;
    this.total= this.total+parseInt(this.amount3);
     console.log('amount3',this.total);
     this.setState({ loading: true });
     //let new_amount = parseInt(amount)
    var amount = web3.utils.toWei((this.amount3), "Ether");
     const { rewardPool2 } = this.state;
   // const tx2= await rewardPool.methods.getReward();
     //const tx = rewardPool.methods.stake(amount);
     
     rewardPool2.methods
           .stake(amount)
           .send({ from: this.state.account })
           .on("transactionHash", (hash) => {
             this.setState({ loading: false });
           });
 
     
     window.alert("Deoposited");
    // console.log("mm",tx)
       
   };
//4-------------------
   onStake3 = (amount) => {

    this.amount4 = this.state.username;
    this.total= this.total+parseInt(this.amount4);
     console.log('amount4',this.total);
     this.setState({ loading: true });
     //let new_amount = parseInt(amount)
    var amount = web3.utils.toWei((this.amount4), "Ether");
     const { rewardPool3 } = this.state;
   // const tx2= await rewardPool.methods.getReward();
     //const tx = rewardPool.methods.stake(amount);
     
     rewardPool3.methods
           .stake(amount)
           .send({ from: this.state.account })
           .on("transactionHash", (hash) => {
             this.setState({ loading: false });
           });
 
     
     window.alert("Deoposited");
    // console.log("mm",tx)
       
   };

   

   //----------------------------------------------------------------------------------------

  //Withdraw
  withdraw = () => {
    
    this.amount1 = "3";
    console.log('amount',this.amount1);
    this.setState({ loading: true });
    //let new_amount = parseInt(amount)
   var amount = web3.utils.toWei((this.amount1), "Ether");
    const { rewardPool } = this.state;
  // const tx2= await rewardPool.methods.getReward();
    //const tx = rewardPool.methods.stake(amount);
    
    rewardPool.methods
          .withdraw(amount)
          .send({ from: this.state.account })
          .on("transactionHash", (hash) => {
            this.setState({ loading: false });
          });

    
    window.alert("Withdrawn");
  };

  withdraw1 = () => {
    
    this.amount2 = "3";
    console.log('amount',this.amount2);
    this.setState({ loading: true });
    //let new_amount = parseInt(amount)
   var amount = web3.utils.toWei((this.amount2), "Ether");
    const { rewardPool } = this.state;
  // const tx2= await rewardPool.methods.getReward();
    //const tx = rewardPool.methods.stake(amount);
    
    rewardPool.methods
          .withdraw(amount)
          .send({ from: this.state.account })
          .on("transactionHash", (hash) => {
            this.setState({ loading: false });
          });

    
    window.alert("Withdrawn");
  };

  //------3---
  withdraw2 = () => {
    
    this.amount3 = "3";
    console.log('amount',this.amount3);
    this.setState({ loading: true });
    //let new_amount = parseInt(amount)
   var amount = web3.utils.toWei((this.amount3), "Ether");
    const { rewardPool2 } = this.state;
  // const tx2= await rewardPool.methods.getReward();
    //const tx = rewardPool.methods.stake(amount);
    
    rewardPool2.methods
          .withdraw(amount)
          .send({ from: this.state.account })
          .on("transactionHash", (hash) => {
            this.setState({ loading: false });
          });

    
    window.alert("Withdrawn");
  };

  //--------4---------
  withdraw3 = () => {
    
    this.amount4 = "3";
    console.log('amount',this.amount4);
    this.setState({ loading: true });
    //let new_amount = parseInt(amount)
   var amount = web3.utils.toWei((this.amount4), "Ether");
    const { rewardPool3 } = this.state;
  // const tx2= await rewardPool.methods.getReward();
    //const tx = rewardPool.methods.stake(amount);
    
    rewardPool3.methods
          .withdraw(amount)
          .send({ from: this.state.account })
          .on("transactionHash", (hash) => {
            this.setState({ loading: false });
          });

    
    window.alert("Withdrawn");
  };



  render() {
  
    let content;

 
      content = (
   
        
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
                      <span style={{fontWeight:'700'}}>Fisch - BNB</span><br/>
                       <span style={{fontSize:'12px'}}>Fisch</span>
                    </td>
                    <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                     <span style={{marginLeft:'20px'}}>{(this.balances)} </span> <br/>
                      <span style={{opacity:'0.5'}}>Balance</span>
                    </td>
    
                    <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                     <span style={{marginLeft:'20px'}}>{this.amount1}</span> <br/>
                      <span style={{opacity:'0.5'}}>Deposited</span>
                    </td>
                    <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                    
                      <span style={{color:'yellow'}}><marquee width="86%" behavior="alternate" direction="up" height="30px">
171%
</marquee></span><br/>
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
    
                       <input  type='text' onChange={this.myChangeHandler} required type="text" placeholder="0   MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white', marginTop:'3px'}}/>
                       <br></br><br></br>
    
                      <button onClick={this.onStake} style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                        Deposit to Vault
                      </button>
    
                     </div>
                   </td>
                   <td style={{paddingLeft:'5px'}}>
                     <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                           <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                        
                           <br></br><br></br>
    
                   
                           <input ref={this.ent_amount}  type="text"  placeholder="0                                                MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white'}}/>
                       <br></br><br></br>
    
    
                      <button onClick={this.withdraw} style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
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
                           <span></span> <span style={{color:'gray'}}> {this.amount1}</span>
                           </td>
                         </tr>
                       </table>
    
    
                          
                     
                      <br></br>
    
                      <button  onClick={this.harvest} style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
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
                       <span style={{fontWeight:'700'}}>Fisch </span><br/>
                        <span style={{fontSize:'12px'}}>Fisch</span>
                     </td>
                     <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                      <span style={{marginLeft:'20px'}}>{(this.balances)}</span> <br/>
                       <span style={{opacity:'0.5'}}>Balance</span>
                     </td>
    
                     <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                      <span style={{marginLeft:'20px'}}>{this.amount2}</span> <br/>
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
    
                      
                            <input type="text" onChange={this.myChangeHandler} required type="text" placeholder="0                                MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white', marginTop:'3px'}}/>
                        <br></br><br></br>
    
                       <button onClick={this.onStake1} style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                         Deposit to Vault
                       </button>
    
                      </div>
                    </td>
                    <td style={{paddingLeft:'5px'}}>
                      <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                            <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                         
                            <br></br><br></br>
    
                   
                        <input ref={this.ent_amount} type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white'}}/>
                        <br></br><br></br>
    
                       <button onClick={this.withdraw1} style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
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
                            <span></span> <span style={{color:'gray'}}>{this.amount2}</span>
                            </td>
                          </tr>
                        </table>
    
    
                           
                      
                       <br></br>
    
                       <button onClick={this.harvest1}style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
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
                       <span style={{fontWeight:'700'}}>Fisch - BUSD</span><br/>
                        <span style={{fontSize:'12px'}}>Fisch</span>
                     </td>
                     <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                      <span style={{marginLeft:'20px'}}>{(this.balances)}</span> <br/>
                       <span style={{opacity:'0.5'}}>Balance</span>
                     </td>
    
                     <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                      <span style={{marginLeft:'20px'}}>{this.amount3}</span> <br/>
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
    
                      
                            <input type="text" onChange={this.myChangeHandler} placeholder="0              MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white', marginTop:'3px'}}/>
                        <br></br><br></br>
    
                       <button onClick={this.onStake2} style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                         Deposit to Vault
                       </button>
    
                      </div>
                    </td>
                    <td style={{paddingLeft:'5px'}}>
                      <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                            <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                         
                            <br></br><br></br>
    
                   
                        <input ref={this.ent_amount} type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white'}}/>
                        <br></br><br></br>
    
                       <button onClick={this.withdraw2}style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
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
                            <span></span> <span style={{color:'gray'}}>{this.amount3}</span>
                            </td>
                          </tr>
                        </table>
    
    
                           
                      
                       <br></br>
    
                       <button onClick={this.harvest2}style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
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
                       <span style={{fontWeight:'700'}}>BNB - BUSD</span><br/>
                        <span style={{fontSize:'12px'}}>Fisch</span>
                     </td>
                     <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                      <span style={{marginLeft:'20px'}}>{(this.balances)}</span> <br/>
                       <span style={{opacity:'0.5'}}>Balance</span>
                     </td>
    
                     <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                      <span style={{marginLeft:'20px'}}>{this.amount4}</span> <br/>
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
    
                      
                            <input type="text"  onChange={this.myChangeHandler} placeholder="0                                     MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white', marginTop:'3px'}}/>
                        <br></br><br></br>
    
                       <button onClick={this.onStake3} style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                         Deposit to Vault
                       </button>
    
                      </div>
                    </td>
                    <td style={{paddingLeft:'5px'}}>
                      <div style={{width:'270px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                            <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                         
                            <br></br><br></br>
    
                   
                        <input ref={this.ent_amount} type="text"  placeholder="0                                                  MAX" style={{width:'225px' ,height:'33px', borderRadius:'10px', backgroundColor:'#323131', border:'1px solid white', color:'white'}}/>
                        <br></br><br></br>
    
                       <button  onClick={this.withdraw3} style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
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
                            <span></span> <span style={{color:'gray'}}>{this.amount4}</span>
                            </td>
                          </tr>
                        </table>
    
    
                           
                      
                       <br></br>
    
                       <button onClick={this.harvest3}style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
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
                      <span style={{marginLeft:'20px'}}>{(this.balances)}</span> <br/>
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
    
  
return (
  
  <div>
      
          {content}
        
 </div>

);
}


};

render(<Section />, document.getElementById('root'));


