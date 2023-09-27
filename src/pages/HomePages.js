import React, { Fragment } from "react"
import Header from "../components/Header";
import './HomePage.css'
import backgroundImage from '../assest/bgimg2.jpg' 
import { Link } from "react-router-dom";
import Appointment from "../components/Appointment";

const Home = () => {
    return (
        <Fragment>
            <Header/>
        <div className="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
           
         
                <div className='home__content'>

                        <div className="">
                        <p className="heading"><b>Welcome to Home Page</b></p>
                        <p className="para">Welcome to our Hospital Management System,<br />
                        your one-stop solution for efficient healthcare <br />
                        administration.
                        </p>
                        <div className="home__buttons">
                                <Link  to={"/appointment" } className="home__button">Book Appointment</Link>
                                <Link to={'/appointment/list-appointment'} className="home__button">View & Pay Bills</Link>
                                <Link to={'/appointment-history'} className="home__button">Appointment History</Link>
                            </div>
                        </div>



              
            </div>
              
        </div>
        </Fragment>
    );
}

export default Home;
