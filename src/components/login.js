import React from 'react';
import logo from "../assests/images/logo.png";
import { useHistory } from "react-router-dom";

function Login() {

const history = useHistory();

const handleLogin= ()=>{
        let email = document.getElementById("Lemail").value;
        let password = document.getElementById("Lpassword").value;
        if(email!= "" && password != ""){
            let url = "http://localhost:8080/api/v1/profile/"+email
            fetch(url,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(response => response.json())
            .then(data => {
                if (data.profileId != undefined) {
                    localStorage.setItem('profile', JSON.stringify(data));
                    history.push("/home");
                }else if(data.violations.length>0){
                    console.log(data.violations[0].message);

                }         
            })
        }else{
            console.log("enter userid/pwd");
        }
}

const handleSignUp= ()=>{

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;    
    let email = document.getElementById("email").value;    
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    if(password == confirmPassword){
        let url = "http://localhost:8080/api/v1/profile/";
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    "email":email,
                    "firstName":fname,
                    "lastName":lname,
                    "dateOfBirth":null,
                    "gender":null,
                    
                }
            )
        }).then(response => response.json())
        .then(data => {
            if (data.profileId != undefined) {
                localStorage.setItem('profile', JSON.stringify(data));
                history.push("/home");
            }      
        })
    }

}

  return (
    <div className="loginBg">
    <div className="row">
        <div className="col-sm-7" style={{margin: 'auto',padding: '0px 35px'}}>
            <img alt="logo" src={logo} className="mb-25" style={{width:125}}/>
            <div className="header">E-Shop Advisor</div>
            <div className="loginBody">
                An E-store with automated product recommendation for users and their connections based on their
                likes and dislikes with least human effort of filter selection. </div>
        </div>
        <div className="col-sm-5" style= {{ padding:'0px 20px'}}>
            <div className="tab_container">
                <input id="tab1" type="radio" name="tabs" checked/>
                <label className="loginLabel" for="tab1"><span>Log In</span></label>

                <input id="tab2" type="radio" name="tabs"/>
                <label className="loginLabel" for="tab2"><span>Sign
                        Up</span></label>

                <section id="content1" className="tab-content">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>*Email:</label>
                                    <input type="mail" className="form-control" id="Lemail" placeholder="Enter email" />
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>*Password:</label>
                                    <input type="password" className="form-control" id="Lpassword"
                                        placeholder="Enter password" />
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <button className="loginBtn" onClick={handleLogin}>
                                    LOG IN<i id="spin" className="fa fa-spinner fa-spin" style={{display:'none'}}></i>
                                </button>
                            </div>
                        </div>
                </section>

                <section id="content2" className="tab-content">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>*First Name:</label>
                                    <input type="text" className="form-control" id="fname"
                                        placeholder="Enter First Name" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>*Last Name:</label>
                                    <input type="text" className="form-control" id="lname"
                                        placeholder="Enter Last Name" />
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>*Email:</label>
                                    <input type="mail" className="form-control" id="email" placeholder="Enter Email" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>*Password:</label>
                                    <input type="password" className="form-control" id="password"
                                        placeholder="Enter password" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>*Confirm Password:</label>
                                    <input type="password" className="form-control" id="confirmPassword"
                                        placeholder="Enter password" />
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <button className="loginBtn" onClick={handleSignUp}> GET STARTED</button>
                            </div>
                        </div>
                </section>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Login;