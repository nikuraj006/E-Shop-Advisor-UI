import Navbar from './navBar';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

function Category(){
    const { type } = useParams();
    let [categoryDetail, saveCategoryDetail] = useState([]);
    
const fashionMen=[
    {image:"https://5.imimg.com/data5/HY/TV/MY-17286568/mens-kurta-500x500.jpg",name:"Manyavar Green Cotton Kurta",price:"2500"},
    {image:"https://www.mytailorstore.com/image/cache/catalog/jacketandblazers/8040-men-mens-blazer-jacket-blaser-slim-short-men-525x700.jpg",name:"Van Heusen Blue Blazer",price:"4999"},
    {image:"https://cdn.shopify.com/s/files/1/0310/3765/3128/products/S20RBCMS048-INDIGO-4_500x500.jpg?v=1587384473",name:"Flying Machine Shirt",price:"1999"},
    {image:"https://5.imimg.com/data5/SA/MQ/MY-45275458/mens-dhoti-kurta-500x500.jpg",name:"Manyavar Dhotin Kurta Set",price:"6999"},
    {image:"https://cdn10.montecarlo.in/images/ProductImages/medium/1-aMa-053028-NOn.JPG",name:"Levis Half Sleeve Sweater",price:"2299"},
    {image:"https://4.imimg.com/data4/RB/DX/MY-25044844/men-s-suit-500x500.jpg",name:"Louis Philippe Suit",price:"9999"},

]

const fashionWomen=[
    {image:"https://www.looksgud.in/upload/item-image/487/agbb/agbb-little-lady-sarees-womens-clothing-saree-for-women-latest_500x500_0.jpg",name:"W for Women Saree",price:"2999"},
    {image:"https://4.imimg.com/data4/TV/TR/ANDROID-23098544/product-500x500.jpeg",name:"Fab Alley Blue Polkadot Dress",price:"1499"},
    {image:"https://m.media-amazon.com/images/I/41-E8qi2B2L.jpg",name:"Aurelia Salwa Kurta Dupatta Set",price:"1999"},
    {image:"https://static.fibre2fashion.com/MemberResources/LeadResources/1/2019/4/Buyer/19162591/Images/19162591_0_ladies-salwar-suit.jpg",name:"Biba Kurti",price:"1499"},
    {image:"https://m.media-amazon.com/images/I/81nM1k00MBL._UX569_.jpg",name:"Fab India Kurti",price:"899"},
    {image:"https://www.looksgud.in/upload/item-image/1072/mzif/mzif-boldgal-women-s-western-bodycon-midi-formal-office-dress-black_500x500_0.jpg",name:"Zara Black Dress",price:"4999"},
]

const food=[
    {image:"https://i1.fnp.com/images/pr/l/v20200707221035/designer-floral-chocolate-cake-1-kg_1.jpg",name:"Strawberry Cake 1 Kg",price:"799"},
    {image:"https://media.istockphoto.com/photos/isolated-chocolate-milkshake-picture-id1164000394?k=20&m=1164000394&s=612x612&w=0&h=nqK6l4mjTRVYXWOLj3jSQAsm3tHRKCawijj9GnyCsac=",name:"Snickers Kitkat Milkshake",price:"299"},
    {image:"https://t3.ftcdn.net/jpg/01/71/15/88/360_F_171158857_a2KMfaveiYPSRPocbpZSKmx4Yiacb3I1.jpg",name:"Chamcham 1Kg",price:"600"},
    {image:"https://ak.picdn.net/shutterstock/videos/10985924/thumb/1.jpg",name:"Blackcurrent Kesar Pista Scoop",price:"200"},
    {image:"https://img.freepik.com/free-photo/chocolate-cakes-isolated-white-background_74190-1836.jpg?size=626&ext=jpg",name:"Chocolate Mousse Cake 1Kg",price:"999"},
    {image:"https://t3.ftcdn.net/jpg/04/15/99/26/360_F_415992666_VLdWWhUlNHrilVsZD7otZBKzEknzTm4o.jpg",name:"Chocolate Milkshake",price:"149"},
]

const flowers=[
    {image:"https://img5.goodfon.com/wallpaper/nbig/a/30/rozy-buket-belyi-fon-1.jpg",name:"20 Red Rose Bouquet",price:"499"},
    {image:"https://media.istockphoto.com/photos/colorful-tulips-in-a-glass-vase-isolated-on-white-background-picture-id628790862?b=1&k=20&m=628790862&s=170667a&w=0&h=PbOIvoyvfK7UlNOGPXv5YBz3Jbv3kgB80zruhLDC3LU=",name:"Colorful Tulip Bouquet with Vase",price:"1499"},
    {image:"https://image.freepik.com/free-photo/beautiful-tulips-bouquet-white-background_24972-77.jpg",name:"10 White Tulips",price:"999"},
    {image:"https://images.unsplash.com/photo-1535850836387-0f9dfce30846?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGlnaHQlMjBwaW5rJTIwcm9zZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",name:"Pink Rose Bouquet",price:"399"},
    {image:"https://npr.brightspotcdn.com/dims4/default/3cdb4c1/2147483647/strip/true/crop/1254x658+0+89/resize/1200x630!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fvpr%2Ffiles%2F202001%2Forchid-istock-wjarek.jpg",name:"5 Purple Orchid Bunch ",price:"545"},
    {image:"https://i1.fnp.com/images/pr/l/v20161115162428/exotic-bouquet-standard_1.jpg",name:"White Orchid Bouquet with Vase",price:"1949"},
]

const gadgets=[
    {image:"https://www.businessinsider.in/thumb.cms?msid=80039794&width=1200&height=900",name:"Samsung S21",price:"69999"},
    {image:"https://images.firstpost.com/fpimages/1200x800/fixed/jpg/2020/04/Apple-iPhone-SE-720.jpg",name:"Iphone SE",price:"39999"},
    {image:"https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/xps_notebooks/xps_17_9700/media-gallery/xs9700nt_cnb_00055lf110_bk_hero_cropped.jpg?fmt=pjpg&amp;pscan=auto&amp;scl=1&amp;hei=402&amp;wid=402&amp;qlt=85,0&amp;resMode=sharp2&amp;op_usm=1.75,0.3,2,0&amp;size=402,402",name:"Dell XPS 9305",price:"1,17,262"},
    {image:"https://cdn.shopify.com/s/files/1/0244/8444/6286/products/3660491005198_1000x.jpg?v=1572804425",name:"Philips Bluetooth Speak",price:"1499"},
    {image:"https://st4.depositphotos.com/10614052/i/600/depositphotos_252516756-stock-photo-modern-washing-machine-and-laundry.jpg",name:"LG Washing Machine",price:"24999"},
    {image:"https://cdn.shopify.com/s/files/1/0104/9211/7092/products/6_ee65974a-6a14-4a7c-9d07-a26a428f4f5f_400x.jpg?v=1584611822",name:"Wonderchef Juicer",price:"1299"},
]

const accessories=[
    {image:"https://i.pinimg.com/originals/dd/5d/17/dd5d1788d12006ebf43e295d299b03b8.jpg",name:"Gold Bangle",price:"19949"},
    {image:"https://cdn.pixabay.com/photo/2016/10/11/12/36/sunglasses-1731454_960_720.jpg",name:"Vincent Chase Glasses",price:"2499"},
    {image:"https://media.istockphoto.com/photos/leather-wallet-on-a-white-background-picture-id599908252?b=1&k=20&m=599908252&s=170667a&w=0&h=mTC8estfF1-9UMho5sjdx7OvRb6QVlRtZ4djIGRagAQ=",name:"Tommy Hilfiger Wallet",price:"2199"},
    {image:"https://i.pinimg.com/originals/58/0a/f3/580af3d8da75982c94e92abe61d0a7b3.jpg",name:"Gold Pendant",price:"29999"},
    {image:"https://m.media-amazon.com/images/I/619E+T7FqiL._SY355_.jpg",name:"Beard Hair Care Kit",price:"699"},
    {image:"https://m.media-amazon.com/images/I/61H1ks1+yPL._SY450_.jpg",name:"Ustara Gift Kit",price:"1199"},
]
    useEffect(() => {
        // fetch('url' + type + '/', {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     }
        // }).then(response => response.json())
        //     .then(data => {
        //         // saveCategoryDetail(data)
        //     })

        if(type==="fashion"){
            saveCategoryDetail(fashionWomen);     
         }
         else if(type==="food"){
            saveCategoryDetail(food);   
         }
         else if(type==="flowers"){
            saveCategoryDetail(flowers);   
         }
         else if(type==="gadgets"){
            saveCategoryDetail(gadgets);   
         }
         else if(type==="accessories"){
            saveCategoryDetail(accessories);   
         }
    }, [])



    let category;

    return(
        <>
        <Navbar></Navbar>
          <div className="pageBody">
        <div className="sectionHeading" style={{marginBottom:40}}>{type}</div>
        <div className="row">
            {
                categoryDetail.map(item=>{
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

export default Category;