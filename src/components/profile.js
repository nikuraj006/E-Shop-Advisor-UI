import Navbar from './navBar';
import icon1 from "../assests/images/2.png";
import p1 from "../assests/images/p.jpg";


function Profile() {
    
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
const connections=[
    {icon:"/assets/2.png",name:"Mary Johnson",city:"Delhi"},
    {icon:"/assets/2.png",name:"Mary Johnson",city:"Delhi"},
    {icon:"/assets/2.png",name:"Mary Johnson",city:"Delhi"},
    {icon:"/assets/2.png",name:"Mary Johnson",city:"Delhi"},

]
const editForm=()=>{
    document.querySelectorAll(".form-control").forEach(elem => elem.disabled = true);
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
                   <div className="pt-20">Sam Maxwell</div>
                   <div>Sam.maxwell@yahoo.com</div>
                   </div>
               </div>
               <div className="col-sm-8 pr-30">
                    <div className="row profileDetail">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Full Name:</label>
                            <input type="text" className="form-control" id="fname" placeholder="Enter Full Name" />
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
                            <input type="text" className="form-control" id="lname" placeholder="Enter Likes" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Dislikes:</label>
                            <input type="text" className="form-control" id="lname" placeholder="Enter Dislikes" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>City:</label>
                            <input type="text" className="form-control" id="lname" placeholder="Enter City" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Address:</label>
                            <textarea row= "2" className="form-control" id="address" placeholder="Enter Address" />
                        </div>
                    </div>
                  </div>
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
