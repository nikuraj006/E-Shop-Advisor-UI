import React, { useState, useRef ,useEffect} from "react";
import Navbar from './navBar';
import { useHistory } from "react-router-dom";
import Multiselect from 'multiselect-react-dropdown';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

function Profile() {
    const [show, setShow] = useState(false);
    let [connectionDetail, saveConnectionDetail] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const likesRef = useRef();
    const dislikesRef = useRef();
    const connectRef = useRef();
    let profile = JSON.parse(localStorage.getItem('profile'));
    const history = useHistory();
    
    useEffect(() => {
        let url = "http://localhost:8080/api/v1/connection/"+profile.profileId;
        fetch(url,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => response.json())
        .then(data => {
            if (data.length >0) {
                let connections = [];
                data.forEach(element => {
                    connections.push({ icon: "/assets/2.png", name: element.firstName+" "+element.lastName, city: element.email });
                });
                saveConnectionDetail(connections);

            }     
        })
 
    }, [])

    useEffect(() => {
        document.querySelectorAll(".form-control").forEach(elem => elem.disabled = true);
        document.getElementById("appSearch").disabled=false
        document.getElementById("searchBtn").disabled=false
        document.getElementById("saveBtn").disabled=true;

        document.getElementById("fname").value=profile.firstName;
        document.getElementById("email").value=profile.email;
        if(profile.dateOfBirth != null){
            document.getElementById("dob").value=profile.dateOfBirth.split('T')[0];
        }
        if(profile.height != null)
        {
            document.getElementById("height").value=profile.height;
        }
        document.getElementById("gender_Female").checked = true;
        if(profile.gender == "male"){
            document.getElementById("gender_Male").checked = true;
        }
        document.getElementById("weight").value=profile.w
        // document.getElementById("dislike").value=profile.
        // document.getElementById("city").value=profile.
        // document.getElementById("address").value=profile.
        document.getElementById("e-mail").innerHTML=profile.email;
        document.getElementById("fulll-name").innerHTML=profile.firstName + " " +profile.lastName;

    }, []);

let btnValue ="Following";
let addConnection = [];
const getAllProfile=()=>{

    let url = "http://localhost:8080/api/v1/profile/getAllProfile/"+profile.profileId;
        fetch(url,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => response.json())
        .then(data => {
            if (data.length >0) {
            
                data.forEach(element => {
                    addConnection.push({id:element.profileId, name: element.firstName+" ("+element.email+")", email: element.email},);
                });
                
            }    
        })

}



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
    
    const category = [
        { key: "Cakes", cat: "Food" },
        { key: "Icecreams", cat: "Food" },
        { key: "Shakes", cat: "Food" },
        { key: "Sweets", cat: "Food" },
        { key: "Western", cat: "Fashion" },
        { key: "Ethnic", cat: "Fashion" },
        { key: "Roses", cat: "Flowers" },
        { key: "Tulips", cat: "Flowers" },
        { key: "Orchids", cat: "Flowers" },
        { key: "Mobiles", cat: "Gadgets" },
        { key: "Laptops", cat: "Gadgets" },
        { key: "Home Appliances", cat: "Gadgets" },
        { key: "Jewellery", cat: "Accessories" },
        { key: "Sunglasses", cat: "Accessories" },
        { key: "Hair Accessories", cat: "Accessories" }
      ]
      getAllProfile();
      
      
    const editForm = () => {
        document.querySelectorAll(".form-control").forEach(elem => elem.disabled = false);
        document.getElementById("saveBtn").disabled=false;
        
    }
    const handleAddConnection = ()=>{
        var selectedItems = connectRef.current.getSelectedItems();
        var payload = [];
        selectedItems.forEach(element => {
            payload.push({"from":{"profileId":profile.profileId},"to":{"profileId":element.id}});
        });
        let url = "http://localhost:8080/api/v1/connection";
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        }).then(response => response.json())
        .then(data => {
            if (data[0].id >0) {
                console.log("pass");
            }else if(data.violations.length>0){
                console.log(data.violations[0].message);

            }      
        })  
        handleClose();

    }
    let likesProducts = [];
    const constructLike=(item, index)=>{
           let subCat ={ "subCategory":{
                "name":item.key,
                "category":{
                "name":item.cat
            }
            }
        }
        likesProducts.push(subCat);
    }
    
    let disLikesProducts = [];
    const constructDisLike=(item, index)=>{
           var subCat ={ "subCategory":{
                "name":item.key,
                "category":{
                "name":item.cat
            }
            }
        }
        disLikesProducts.push(subCat);
    }
    const handleSave=()=>{
        let likes = likesRef.current.getSelectedItems();
        let disLikes = dislikesRef.current.getSelectedItems();
        likes.forEach(constructLike);
        disLikes.forEach(constructDisLike);
          
        let fname = document.getElementById("fname").value;
        let email = document.getElementById("email").value;
        let dob = document.getElementById("dob").value;   
        let height = document.getElementById("height").value;   
        let gender = document.querySelector('input[name="gender"]:checked').value; 
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
                    "gender":gender,
                    "height": height,
                    "likesList":likesProducts,
                    "dislikesList":disLikesProducts
                }
            )
        }).then(response => response.json())
        .then(data => {
            if (data.profileId != undefined) {
                localStorage.setItem('profile', JSON.stringify(data));
                history.push("/home");
            }else if(data.violations.length>0){
                console.log(data.violations[0].message);

            }      
        })  
    
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
                        <div className="form-group radio ">
                            <label style={{ display: 'block' }}>Gender:</label>
                            <input type="radio" className="form-control" name="gender" id="gender_Male" value="male"/>Male
                            <input type="radio"className="form-control"  style={{ marginLeft: 20 }} name="gender" value="female" id="gender_Female" />Female
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
                            <label>Weight:</label>
                            <input type="number" className="form-control" id="weight" placeholder="Enter Weight" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                                    <div className="form-group categoryMaultiselect">
                                        <label>Likes:</label>
                                        <Multiselect 
                                            displayValue="key"
                                            groupBy="cat"
                                            options={category}
                                            showCheckbox
                                            closeOnSelect="true"
                                            placeholder="Select Category"
                                            ref={likesRef}
                                            // selectedValues={category}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group categoryMaultiselect">
                                        <label>Dislikes:</label>
                                        <Multiselect
                                            displayValue="key"
                                            groupBy="cat"
                                            options={category}
                                            showCheckbox
                                            closeOnSelect="true"
                                            placeholder="Select Category"
                                            ref={dislikesRef}
                                            // searchable={true} 
                                            // selectedValues={category}
                                        />
                                    </div>
                                </div>
                    <div className="col-sm-12"><button onClick={handleSave} className="saveBtn" id="saveBtn"><i class="fa fa-check"></i> Save</button></div>
                </div>
               </div>
               </div>
             <div className="row mb-30 mt-45 no-margin">
                    <div className="col-sm-6 sectionHeading">Connections</div>
                    <div className="col-sm-6" style={{textAlign:'right'}} >
                    <div onClick={handleShow}>
                        <div className="addConnection"><i className="fa fa-plus"></i></div><div className="addText">Add Connection</div>
                    </div>
                    </div>
             </div>
                    <div className="row">
                        {
                            connectionDetail.map(i => {
                                return (
                                    <div className="col-sm-6">
                                        <div className="row connectionRow">
                                            <div className="col-sm-3">
                                                <img alt="icon" src={i.icon} className="connectionImg" />
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
                <Modal show={show} onHide={handleClose} className="addConnectionModel" backdrop="static">
                    <Modal.Header closeButton>
                        <Modal.Title>Add Connection</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div className="form-group categoryMaultiselect">
                        <Multiselect
                            options={addConnection}
                            value="value"
                            displayValue="name"
                            closeOnSelect="false"
                            placeholder="Search People"
                            ref={connectRef}
                            searchable={true} 
                            // selectedValues={category}
                        />
                    </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="addModelBtn" onClick={handleAddConnection}>
                             Add
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
         
}
export default Profile;
