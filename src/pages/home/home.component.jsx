import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LandingSVG } from "../../assets/landing-page.image.svg";

const HomePage = () => (
    <div className="home-page">
        <div className="side">

        <LandingSVG />
        </div>
        <div className="form">
            <p>Marks manager</p>
            <h1>Manage your marks, save your progress and only focus in the important</h1>
            <button>
                <Link to="/manager">Start to improve</Link>
            </button>

        </div>
    </div>
);

export default HomePage;
