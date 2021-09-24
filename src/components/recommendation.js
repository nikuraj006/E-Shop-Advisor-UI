
import Carousel from 'react-bootstrap/Carousel'
function Recommendation() {

    const recommendation=[
        {image:"https://5.imimg.com/data5/HY/TV/MY-17286568/mens-kurta-500x500.jpg",name:"Manyavar Green Cotton Kurta",price:"2500"},
        {image:"https://ak.picdn.net/shutterstock/videos/10985924/thumb/1.jpg",name:"Blackcurrent Kesar Pista Scoop",price:"200"},
        {image:"https://img5.goodfon.com/wallpaper/nbig/a/30/rozy-buket-belyi-fon-1.jpg",name:"20 Red Rose Bouquet",price:"499"},
        {image:"https://m.media-amazon.com/images/I/619E+T7FqiL._SY355_.jpg",name:"Beard Hair Care Kit",price:"699"},
        {image:"https://media.istockphoto.com/photos/colorful-tulips-in-a-glass-vase-isolated-on-white-background-picture-id628790862?b=1&k=20&m=628790862&s=170667a&w=0&h=PbOIvoyvfK7UlNOGPXv5YBz3Jbv3kgB80zruhLDC3LU=",name:"Colorful Tulip Bouquet with Vase",price:"1499"},
        {image:"https://m.media-amazon.com/images/I/81nM1k00MBL._UX569_.jpg",name:"Fab India Kurti",price:"899"},

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
export default Recommendation;
