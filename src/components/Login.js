import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import myimage from "../assets/white_logo.png";
// import { useNavigate } from "react-router-dom";
// import "../../src/index.css"
import logimage from "../assets/log.svg";
import "../assets/mystyle.css";

const Login = () => {

  
  // const history=useNavigate();
  // const [email,setEmail]=useState('');
  // const [password, setPassword]=useState('')

  // const loginUser=async (e)=>{
  //   e.preventDefault();
    
  //   const res = await fetch("/signin",{
  //     method:"POST",
  //     headers:{
  //       "Content=Type":"application/json"
  //     },
  //     body:JSON.stringify({
  //       email,
  //       password
  //     })
  //   });

  //   const data= await res.json();
  //   if(data.status===400 || !data){
  //     window.alert("Invalid Credentials")
  //   }else{
  //     window.alert("Login Successfull")
  //     history.push("/")
  //   }
  // }

  return ( 
    <div>
                <div class="mycontainer">
        <div class="forms-container">
            <div class="signin-signup">

                
            <form action="" class="sign-in-form" id="signIn">
                    <h2 class="title">Sign in</h2>

                    <div class="input-field">
                        <i class="fas fa-envelope"></i>
                        <input type="text" name="email" id="email" autoComplete="off" placeholder="Email"/>
                    </div>

                    <div class="input-field">
                        <i class="fas fa-lock"></i>
                        <input type="password" name="password" id="password" autoComplete="off" placeholder="Password"/>
                    </div>

                    <input type="submit" value="Login" class="mybtn solid"/>
                    <p class="social-text">Or Sign in with social platforms</p>
                    <div class="social-media">
                        <a href="#" class="social-icon">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fab fa-google"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                    
                </form>
                

                
            </div>
        </div>    

        <div class="panels-container">
            <div class="panel left-panel" id="lP">
                <div class="content">
                    <h3>New here?</h3>
                    <p>Sign up now to Get started!</p>
                    <button class="mybtn transparent" id="sign-up-btn">Sign up</button>

                </div>

                <img src={logimage} class="image" alt="img"/>


            </div>


        </div>
    </div>
            </div>


    //  <section id='login' style={{background:"#012d3b",height:"700px"}}>
    //  <div className="  w-full grid grid-cols-1 md:grid-cols-2 bg-login bg-cover p-10 py-20">
    //            {/* <div className=" place-self-center">
    //      <img src={myimage} alt="" className="w-[50px] md:mb-6 " />
    //   </div> */}
    //    <form method="POST" 
    //     //  onSubmit={submitHandler}
    //     className="  mt-8 md:mt-0 md:place-self-left place-self-center w-[430px] min-h-[450px] bg-[#E6EFF8] rounded-lg p-10 flex flex-col items-center "
    //   >
    //     <span className=" text-3xl font-medium font-mono text-slate-900 mytext" >
    //       Login
    //     </span>
    //     <input className="text_email_password outline-none mt-10 rounded-md my-4 w-[250px] h-9 p-2"
    //       required
    //       type="email"
    //       name = "email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       placeholder="Email"
          
    //     />
    //     <input className="outline-none rounded-md  w-[250px] h-9 p-2 text_email_password" 
    //       required
    //       type="password"
    //       name="password"
          
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       placeholder="Password"
          
    //     />
    //     <a href="/" className=" text_email_password text-indigo-400 mt-2">
    //       {" "}
    //       Forgot Password ?
    //     </a>

    //     <div className="flex flex-col items-center mt-auto "   >
 
    //       <button 
    //         className=" text_email_password btn border-none w-full p-3 my-3 hover:bg-indigo-600 bg-indigo-500   text-white px-8 text-center"
    //         // onClick={()=>({loginUser})}
    //         onClick={loginUser}
    //         // disabled={}
    //       >
    //         Login
    //        </button>
           
    //      </div>
    //    </form>
    //  </div>
    // </section>
   );
};

export default Login;

