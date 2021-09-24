
import Carousel from 'react-bootstrap/Carousel'
function Recommendation() {

    const recommendation=[
        {image:"/assets/2.png",name:"shgfsfd gusgd",price:"45646"},
        {image:"/assets/2.png",name:"shgfsfd gusgd",price:"45646"},
        {image:"/assets/2.png",name:"shgfsfd gusgd",price:"45646"},
        {image:"/assets/2.png",name:"shgfsfd gusgd",price:"45646"},
        {image:"/assets/2.png",name:"shgfsfd gusgd",price:"45646"},
        {image:"/assets/2.png",name:"shgfsfd gusgd",price:"45646"},

    ]

    let menuItem= [];
    for(var item=0; item<recommendation.length;item=item+3){
        menuItem.push(
            <Carousel.Item>
                    <div className="row">
                    <div className="col-sm-4">
                        <div className="rCard">
                            <div>
                                <img alt="icon" src={recommendation[item].image}/>                              
                            </div>
                            <div className="rCardBody">
                                <div>{recommendation[item].name}</div>
                                <div style={{fontSize:18,marginTop:5}}><i class="fa fa-rupee iconRupee"></i>{recommendation[item].price}</div>
                                <button><i class="fa fa-shopping-cart iconCart"></i>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="rCard">
                            <div>
                                <img alt="icon" src={recommendation[item+1].image}/>                              
                            </div>
                            <div className="rCardBody">
                                <div>{recommendation[item+1].name}</div>
                                <div style={{fontSize:18,marginTop:5}}><i class="fa fa-rupee iconRupee"></i>{recommendation[item+1].price}</div>
                                <button><i class="fa fa-shopping-cart iconCart"></i>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="rCard">
                            <div>
                                <img alt="icon" src={recommendation[item+2].image}/>                              
                            </div>
                            <div className="rCardBody">
                                <div>{recommendation[item+2].name}</div>
                                <div style={{fontSize:18,marginTop:5}}><i class="fa fa-rupee iconRupee"></i>{recommendation[item+2].price}</div>
                                <button><i class="fa fa-shopping-cart iconCart"></i>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </Carousel.Item>

        )
    }

    return(
        <>
        <Carousel>
             {menuItem}
        </Carousel>
        </>
    )
}
export default Recommendation;
