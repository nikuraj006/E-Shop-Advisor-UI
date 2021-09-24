import Navbar from './navBar';
import Profile from "./profile";
import { useEffect, useState } from 'react';

function Search(){
    let profileId =  document.getElementById("searchVal").innerText;
    let searchToBe = document.getElementById("appSearch").value;

    let [searchDetail, saveSearchDetail] = useState([]);
const search=[
    {image:"https://5.imimg.com/data5/HY/TV/MY-17286568/mens-kurta-500x500.jpg",name:"shgfsfd gusgd",price:"45646"},
    {image:"https://www.mytailorstore.com/image/cache/catalog/jacketandblazers/8040-men-mens-blazer-jacket-blaser-slim-short-men-525x700.jpg",name:"shgfsfd gusgd",price:"45646"},
    {image:"https://cdn.shopify.com/s/files/1/0310/3765/3128/products/S20RBCMS048-INDIGO-4_500x500.jpg?v=1587384473",name:"shgfsfd gusgd",price:"45646"},
    {image:"https://5.imimg.com/data5/SA/MQ/MY-45275458/mens-dhoti-kurta-500x500.jpg",name:"shgfsfd gusgd",price:"45646"},
    {image:"https://cdn10.montecarlo.in/images/ProductImages/medium/1-aMa-053028-NOn.JPG",name:"shgfsfd gusgd",price:"45646"},
    {image:"https://4.imimg.com/data4/RB/DX/MY-25044844/men-s-suit-500x500.jpg",name:"shgfsfd gusgd",price:"45646"},

]



    useEffect(() => {
        let url = "http://localhost:8080/api/v1/recommendation/"
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                 "ProfileId":profileId,
                 "searchInput": searchToBe
                }
                
            )
        }).then(response => response.json())
        .then(data => {
            saveSearchDetail(data)
            
        })
    
        saveSearchDetail(search)

    }, [])



    return(
        <>
        <Navbar></Navbar>
          <div className="pageBody">
        <div className="sectionHeading" style={{marginBottom:40}}>Search Results:</div>
        <div className="row">
            {
                searchDetail.map(item=>{
                    return(
                        <div className="col-sm-4">
                             <div className="categoryCard">
                            <div>
                                <img alt="icon" src={item.image}/>                              
                            </div>
                                <div className="pd-20">{item.name}</div>
                            <div className="categoryCardBody">
                                <div className="row no-margin text-center">
                                <div className="col-sm-6" style={{fontSize:18,padding:20,borderRight:'1px solid #bbb'}}><i class="fa fa-rupee iconRupee"></i>{item.price}</div>
                                <div className="col-sm-6"><button><i class="fa fa-shopping-cart iconCart"></i>Buy Now</button></div>
                                </div>
                            </div>
                        </div>
                        </div>
                    )
                })
            }
            <div className="col-sm-4">

            </div>
        </div>
        </div>
        </>
    )
}

export default Search;