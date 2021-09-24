import Navbar from './navBar';
import icon1 from "../assests/images/1.png";
import icon2 from "../assests/images/12.png";
import icon3 from "../assests/images/13.png";
import icon4 from "../assests/images/14.png";
import icon5 from "../assests/images/15.png";
import bday from "../assests/images/xx.png";
import anniversary from "../assests/images/ww.png";
import celebration from "../assests/images/yy.png";
import Recommendation from "./recommendation";
import Suggestion from "./suggestion";
import { Link } from 'react-router-dom';;

function Home() {
   
    return (
        <>
  <Navbar></Navbar>
  <div className="pageBody">
        <div className="sectionHeading">Upcoming Events</div>
        <div id="demo" className="carousel slide">
            <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" className="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
            </ul>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="eventCard">
                            <img alt="icon" src={bday} className="bdayImg" style={{height:141,top:0}}/>
                                <div>29 Sepetember 2021</div>
                                <div>Mary's</div>
                                <div><i className="fa fa-birthday-cake pdR-5"></i>Birthday</div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="eventCard">
                            <img alt="icon" src={anniversary} className="bdayImg" style={{height:70,top:60}}/>
                                <div>21 October 2021</div>
                                <div>Anthony's</div>
                                <div><i className='fa fa-gift pdR-5'></i>Anniversary</div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="eventCard">
                            <img alt="icon" src={bday} className="bdayImg" style={{height:141,top:0}}/>
                                <div>15 November 2021</div>
                                <div>Sam's</div>
                                <div><i className="fa fa-birthday-cake pdR-5"></i>Birthday</div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="eventCard">
                            <img alt="icon" src={celebration} className="bdayImg" style={{height:109,top:25}}/>
                                <div>01 January 2022</div>
                                <div>New Year's</div>
                                <div><i className='fa fa-tree pdR-5'></i>Celebration</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="carousel-item">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="eventCard">
                            <img alt="icon" src={anniversary} className="bdayImg" style={{height:70,top:60}}/>
                                <div>15 January 2022</div>
                                <div>Mary's</div>
                                <div><i className='fa fa-gift pdR-5'></i>Anniversary</div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="eventCard">
                            <img alt="icon" src={bday} className="bdayImg" style={{height:141,top:0}}/>
                                <div>25 March 2022</div>
                                <div>Sam's</div>
                                <div><i className="fa fa-birthday-cake pdR-5"></i>Birthday</div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="eventCard">
                            <img alt="icon" src={bday} className="bdayImg" style={{height:141,top:0}}/>
                                <div>08 April 2022</div>
                                <div>Jack's</div>
                                <div><i className="fa fa-birthday-cake pdR-5"></i>Birthday</div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="eventCard">
                            <img alt="icon" src={anniversary} className="bdayImg" style={{height:70,top:60}}/>
                                <div>01 May 2022</div>
                                <div>Sam's</div>
                                <div><i className='fa fa-gift pdR-5'></i>Anniversary</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon"></span>
            </a>
        </div>

        <div className="sectionHeading mt-45 mb-45">Shop by category</div>
        <div className="row">
            <div className="col-sm-2 offset-sm-1">
                <Link to ={"/category/food"}>
                <div className="circleImg"  style={{backgroundImage: `url(${icon1})`}}>
                Food
                </div>
                </Link>
            </div>
            <div className="col-sm-2">
                <Link to ={"/category/fashion"}>
                <div className="circleImg"  style={{backgroundImage: `url(${icon2})`}}>Fashion  
                </div>
                </Link>
            </div>
            <div className="col-sm-2">
                 <Link to ={"/category/flowers"}>
                <div className="circleImg" style={{backgroundImage: `url(${icon3})`}}>
                    Flowers
                </div>
                </Link>
            </div>
            <div className="col-sm-2" >
            <Link to ={"/category/gadgets"}>
                <div className="circleImg" style={{backgroundImage: `url(${icon4})`}}>
                    Gadgets
                </div>
                </Link>
            </div>
            <div className="col-sm-2">
            <Link to ={"/category/accessories"}>
                <div className="circleImg"  style={{backgroundImage: `url(${icon5})`}}>
                    Accessories
                </div>
                </Link>
            </div>
        </div>
        <div className="sectionHeading mt-45 mb-45">Recommendations</div>
        <Recommendation></Recommendation>
        <div className="sectionHeading mt-45 mb-45">You may also like</div>
        <Suggestion></Suggestion>

    </div>

        </>
    );
  }
  
  export default Home;
  