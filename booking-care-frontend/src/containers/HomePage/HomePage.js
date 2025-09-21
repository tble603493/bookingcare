import React, { Component } from "react";
import { connect } from "react-redux";
import HomeHeader from "./HomeHeader";
import Specialty from "./Section/Specialty";
import MedicalFacility from "./Section/MedicalFacility";
import OutstandingDoctor from "./Section/OutstandingDoctor";
import HandBook from "./Section/HandBook";
import About from "./Section/About";
import HomeFooter from "./HomeFooter";

class HomePage extends Component {
    render() {
        return (
            <div>
                <HomeHeader isShowBanner={true} />
                <Specialty />
                <MedicalFacility />
                <OutstandingDoctor />
                <HandBook />
                <About />
                <HomeFooter />
                {/* <div style={{ height: "300px" }}></div> */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
