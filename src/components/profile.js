import Navbar from './navBar';
import icon1 from "../assests/images/2.png";
import p1 from "../assests/images/p.jpg";
import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";

function Profile() {
    let profile = JSON.parse(localStorage.getItem('profile'));
    const history = useHistory();
    useEffect(() => {
        document.querySelectorAll(".form-control").forEach(elem => elem.disabled = true);

        document.getElementById("fname").value=profile.firstName;
        document.getElementById("email").value=profile.email;
        document.getElementById("dob").value=profile.dateOfBirth.split('T')[0];
        document.getElementById("height").value=profile.height;
        // document.getElementById("like").value=profile.
        // document.getElementById("dislike").value=profile.
        // document.getElementById("city").value=profile.
        // document.getElementById("address").value=profile.
        document.getElementById("e-mail").innerHTML=profile.email;
        document.getElementById("fulll-name").innerHTML=profile.firstName + " " +profile.lastName;

    }, []);

let btnValue ="Following";
const handleFollow=(e)=>{
if(e.target.textContent==='Following'){
    e.target.textContent='UnFollowed';
    e.target.className='UnFollow';
}
else{
    e.target.textContent='Following';
    e.target.className='Following';

}
    }

    const save= ()=>{

        let fname = document.getElementById("fname").value;
        let email = document.getElementById("email").value;
        let dob = document.getElementById("dob").value;   
        let height = document.getElementById("height").value;   
        // let dob = document.getElementById("dob").value;   
        // let dob = document.getElementById("dob").value;   
        // let dob = document.getElementById("dob").value; 
        let url = "http://localhost:8080/api/v1/profile/"+profile.profileId;
        fetch(url,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    "email":email,
                    "firstName":fname,
                    "lastName":profile.lastName,
                    "dateOfBirth":dob,
                    "gender":null,
                    "height": height,
                    "likesList":[{
                        "subCategory":{
                            "name":"",
                            "category":{
                            "name":""
                        }
                        }
                    },
                    {
                            "category":{
                            "name":""
                        }
                    }
                    ],
                    "dislikesList":[{
                        "subCategory":{
                            "name":"",
                            "category":{
                            "name":""
                        }
                        }
                    }]
                }
            )
        }).then(response => response.json())
        .then(data => {
            if (data.profileId != undefined) {
                localStorage.setItem('profile', JSON.stringify(data));
                history.push("/profile");
            }else if(data.violations.length>0){
                console.log(data.violations[0].message);

            }      
        })
    
    
    }
    
const connections=[
    {icon:"/assets/2.png",name:"Mary Johnson",city:"Delhi"},
    {icon:"/assets/2.png",name:"Mary Johnson",city:"Delhi"},
    {icon:"/assets/2.png",name:"Mary Johnson",city:"Delhi"},
    {icon:"/assets/2.png",name:"Mary Johnson",city:"Delhi"},

]
const editForm=()=>{
    document.querySelectorAll(".form-control").forEach(elem => elem.disabled = false);
}


  return (
     <>
       <Navbar></Navbar>
       <div className="pageBody">
           <div className="formSection">
               <div className="row mb-30 mt-15">
               <div className="col-sm-8">
               <div className="sectionHeading">Profile</div>
               </div>
               <div className="col-sm-4 text-right">
                   <span onClick={editForm}><i class="fa fa-edit editIcon"></i>Edit</span>
               </div>
               </div>   

               <div className="row">
               <div className="col-sm-4">
                   <div className="profilCard">
                        <img alt="icon" src="https://bootdey.com/img/Content/avatar/avatar7.png"/>
                   <div id="fulll-name" className="pt-20">Sam Maxwell</div>
                   <div id="e-mail">Sam.maxwell@yahoo.com</div>
                   </div>
               </div>
               <div className="col-sm-8 pr-30">
                    <div className="row profileDetail">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Full Name:</label>
                            <input type="text" className="form-control"  id="fname" placeholder="Enter First Name" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="mail" className="form-control" id="email" placeholder="Enter Email" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>DOB:</label>
                            <input type="date" className="form-control" id="dob" placeholder="Enter DOB" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Height:</label>
                            <input type="number" className="form-control" id="height" placeholder="Enter Height" />
                        </div>
                    </div>                   
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Likes:</label>
                            <input type="text" className="form-control" id="like" placeholder="Enter Likes" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Dislikes:</label>
                            <input type="text" className="form-control" id="dilike" placeholder="Enter Dislikes" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>City:</label>
                            <input type="text" className="form-control" id="city" placeholder="Enter City" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Address:</label>
                            <textarea row= "2" className="form-control" id="address" placeholder="Enter Address" />
                        </div>
                    </div>
                  </div>
                  <button onClick={save}>Save</button>

               </div>
                   </div>            
        
      

            <div className="sectionHeading mb-30 mt-45">Connections</div>
            <div className="row">
                {
                    connections.map(i=>{
                        return(
                            <div className="col-sm-6">
                                <div className="row connectionRow">
                                    <div className="col-sm-3">
                                        <img alt="icon" src={i.icon} className="connectionImg"/>
                                    </div>
                                    <div className="col-sm-5">
                                        <div>{i.name}</div>
                                        <div>{i.city}</div>
                                    </div>
                                    <div className="col-sm-3">
                                    <button className={btnValue} onClick={handleFollow}>{btnValue}</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }            
            </div>
          
        </div>
    </div>
     </>
  );
 
}

export default Profile;
