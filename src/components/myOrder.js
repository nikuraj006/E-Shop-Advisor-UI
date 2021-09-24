import Navbar from './navBar';
function MyOrder(){

    const order=[
        {image:"https://5.imimg.com/data5/HY/TV/MY-17286568/mens-kurta-500x500.jpg",name:"Manyavar Green Cotton Kurta",price:"2500", date:"15-Jan-2021"},
        {image:"https://www.businessinsider.in/thumb.cms?msid=80039794&width=1200&height=900",name:"Samsung S21",price:"69999", date:"26-Feb-2021"},
        {image:"https://i1.fnp.com/images/pr/l/v20200707221035/designer-floral-chocolate-cake-1-kg_1.jpg",name:"Strawberry Cake 1 Kg",price:"799", date:"08-March-2021"},
        {image:"https://m.media-amazon.com/images/I/61H1ks1+yPL._SY450_.jpg",name:"Ustara Gift Kit",price:"1199", date:"14-April-2021"},
        {image:"https://media.istockphoto.com/photos/colorful-tulips-in-a-glass-vase-isolated-on-white-background-picture-id628790862?b=1&k=20&m=628790862&s=170667a&w=0&h=PbOIvoyvfK7UlNOGPXv5YBz3Jbv3kgB80zruhLDC3LU=",name:"Colorful Tulip Bouquet with Vase",price:"1499",date:"14-May-2021"},
        {image:"https://4.imimg.com/data4/TV/TR/ANDROID-23098544/product-500x500.jpeg",name:"Fab Alley Blue Polkadot Dress",price:"1499", date:"23-June-2021"},    
    ]
    return(
        <>
        <Navbar></Navbar>
        <div className="pageBody">
        <div className="sectionHeading mb-45">Order History</div>
        <div className="row">
            {
                order.map(item=>{
                    return(
                        <div className="col-sm-12">
                            <div className="orderCard">
                                <div className="orderHeader">
                                   Order Date: {item.date}
                                </div>
                                <div className="orderBody">
                                    <div className="row" style={{alignItems:'center'}}>
                                        <div className="col-sm-2">
                                    <img alt="icon" src={item.image}/>
                                    </div>
                                    <div className="col-sm-3">
                                    <div>{item.name}</div>
                                    </div>
                                    <div className="col-sm-2">
                                    <div><i class="fa fa-rupee iconRupee"></i> {item.price}</div>
                                    </div>
                                    <div className="col-sm-5" style={{textAlign:'right'}}>
                                    <button className="orderAgainBtn"><i class="fa fa-refresh"></i> Buy it again</button>
                                    </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                })
            }
        </div>

        </div>
        </>
    )
}

export default MyOrder;