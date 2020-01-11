import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LandingSVG } from "../../assets/landing-page.image.svg";

const HomePageContainer = styled.div`
.home-page{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 400px;
    margin: auto;
    font-family: Sans-Serif;
}
`
const LandingSVGContainer = styled(LandingSVG)`
    border-radius: 50%;
    height: 250px;
    width: 250px;
    margin: auto;
    border: rgba(0,0,0,0.08) solid;
`

const subtitleContainer = styled.p`

`

const titleContainer = styled.h1`
    margin-top: 10px;
`

const buttonContainer = styled.button`
    border-radius: 50%;
    height: 250px;
    width: 250px;
    margin: auto;
    border: rgba(0,0,0,0.08) solid;
`
const HomePage = () => (
    <div className="home-page">
        <LandingSVG />
        <p>Marks manager</p>
        <h1>Manage your marks, save your progress and only focus in the important</h1>
        <button>
            <Link to="/manager">Start to improve</Link>
        </button>
    </div>
);

export default HomePage;
