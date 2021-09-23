import Navbar from './navBar';
import icon1 from "../assests/images/1.png";
import icon2 from "../assests/images/2.png";
import icon3 from "../assests/images/3.png";
import icon4 from "../assests/images/4.png";
import icon5 from "../assests/images/5.png";

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
                                <div>29 Sepetember 2021</div>
                                <div>Mary's</div>
                                <div><i className="fa fa-birthday-cake pr-5"></i>Birthday</div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="eventCard">
                                <div>21 October 2021</div>
                                <div>Anthony's</div>
                                <div><i className='fa fa-gift pr-5'></i>Anniversary</div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="eventCard">
                                <div>15 November 2021</div>
                                <div>Sam's</div>
                                <div><i className="fa fa-birthday-cake pr-5"></i>Birthday</div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="eventCard">
                                <div>01 January 2022</div>
                                <div>New Year's</div>
                                <div><i className='fa fa-tree pr-5'></i>Celebration</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="carousel-item">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="eventCard">
                                <div>15 January 2022</div>
                                <div>Mary's</div>
                                <div><i className='fa fa-gift pr-5'></i>Anniversary</div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="eventCard">
                                <div>25 March 2022</div>
                                <div>Sam's</div>
                                <div><i className="fa fa-birthday-cake pr-5"></i>Birthday</div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="eventCard">
                                <div>08 April 2022</div>
                                <div>Jack's</div>
                                <div><i className="fa fa-birthday-cake pr-5"></i>Birthday</div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="eventCard">
                                <div>01 May 2022</div>
                                <div>Sam's</div>
                                <div><i className='fa fa-gift pr-5'></i>Anniversary</div>
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
                <div className="circleImg"  style={{backgroundImage: `url(${icon1})`}}>
                    Food
                </div>
            </div>
            <div className="col-sm-2">
                <div className="circleImg"  style={{backgroundImage: `url(${icon2})`}}>
                    Men's Fashion
                </div>
            </div>
            <div className="col-sm-2">
                <div className="circleImg"  style={{backgroundImage: `url(${icon3})`}}>
                    Women's Fashion
                </div>
            </div>
            <div className="col-sm-2">
                <div className="circleImg" style={{backgroundImage: `url(${icon4})`}}>
                    Flowers
                </div>
            </div>
            <div className="col-sm-2" >
                <div className="circleImg" style={{backgroundImage: `url(${icon5})`}}>
                    Gadgets
                </div>
            </div>
        </div>
        <div className="sectionHeading mt-45 mb-45">Recommendations</div>
    </div>

        </>
    );
  }
  
  export default Home;
  