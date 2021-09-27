
import Carousel from 'react-bootstrap/Carousel'
function Recommendation() {

    let recommendation = JSON.parse(localStorage.getItem('likes'));

    let menuItem= [];
    for(var item=0; item<recommendation.length;item=item+3){
        try{
            menuItem.push(
                <Carousel.Item>
                        <div className="row">
                        <div className="col-sm-4">
                            <div className="rCard">
                                <div>
                                    <img alt="icon" src={recommendation[item].imgUrl}/>                              
                                </div>
                                <div className="rCardBody">
                                    <div>{recommendation[item].displayName}</div>
                                    <div style={{fontSize:18,marginTop:5}}><i class="fa fa-rupee iconRupee"></i>{recommendation[item].price}</div>
                                    <button><i class="fa fa-shopping-cart iconCart"></i>Buy Now</button>
                                </div>
                            </div>
                        </div>
                        {recommendation[item+1] != undefined &&
                        <div className="col-sm-4">
                            <div className="rCard">
                                <div>
                                    <img alt="icon" src={recommendation[item+1].imgUrl}/>                              
                                </div>
                                <div className="rCardBody">
                                    <div>{recommendation[item+1].displayName}</div>
                                    <div style={{fontSize:18,marginTop:5}}><i class="fa fa-rupee iconRupee"></i>{recommendation[item+1].price}</div>
                                    <button><i class="fa fa-shopping-cart iconCart"></i>Buy Now</button>
                                </div>
                            </div>
                        </div>
                        }
                         {recommendation[item+2] != undefined &&
                        <div className="col-sm-4">
                            <div className="rCard">
                                <div>
                                    <img alt="icon" src={recommendation[item+2].imgUrl}/>                              
                                </div>
                                <div className="rCardBody">
                                    <div>{recommendation[item+2].displayName}</div>
                                    <div style={{fontSize:18,marginTop:5}}><i class="fa fa-rupee iconRupee"></i>{recommendation[item+2].price}</div>
                                    <button><i class="fa fa-shopping-cart iconCart"></i>Buy Now</button>
                                </div>
                            </div>
                        </div>
                        }
                        </div>
                    </Carousel.Item>

            )
        }catch(e){
            console.log(e);
        }
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
