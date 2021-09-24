
import Carousel from 'react-bootstrap/Carousel'
function Suggestion() {

    const recommendation=[
        {image:"https://i1.fnp.com/images/pr/l/v20161115162428/exotic-bouquet-standard_1.jpg",name:"White Orchid Bouquet with Vase",price:"1949"},
        {image:"https://i.pinimg.com/originals/dd/5d/17/dd5d1788d12006ebf43e295d299b03b8.jpg",name:"Gold Bangle",price:"19949"},
        {image:"https://images.unsplash.com/photo-1535850836387-0f9dfce30846?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGlnaHQlMjBwaW5rJTIwcm9zZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",name:"Pink Rose Bouquet",price:"399"},
        {image:"https://m.media-amazon.com/images/I/61H1ks1+yPL._SY450_.jpg",name:"Ustara Gift Kit",price:"1199"},
        {image:"https://4.imimg.com/data4/TV/TR/ANDROID-23098544/product-500x500.jpeg",name:"Fab Alley Blue Polkadot Dress",price:"1499"},
        {image:"https://t3.ftcdn.net/jpg/01/71/15/88/360_F_171158857_a2KMfaveiYPSRPocbpZSKmx4Yiacb3I1.jpg",name:"Chamcham 1Kg",price:"600"},

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
                                <button><i class="fa fa-shopping-cart iconCart"></i>Buy Now</button>
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
                                <button><i class="fa fa-shopping-cart iconCart"></i>Buy Now</button>
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
                                <button><i class="fa fa-shopping-cart iconCart"></i>Buy Now</button>
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
export default Suggestion;
