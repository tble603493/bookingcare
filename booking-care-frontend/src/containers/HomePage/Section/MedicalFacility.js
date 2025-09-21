import React, { Component } from "react";
import { connect } from "react-redux";
import "./MedicalFacility.scss";
import { FormattedMessage } from "react-intl";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getAllClinic } from "../../../services/userService";
import { withRouter } from "react-router";

class MedicalFacility extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataClinics: [],
        };
    }
    async componentDidMount() {
        let res = await getAllClinic();
        if (res && res.errCode === 0) {
            this.setState({
                dataClinics: res.data ? res.data : [],
            });
        }
    }
    handleViewDetailClinic = (item) => {
        if (this.props.history) {
            this.props.history.push(`/detail-clinic/${item.id}`);
        }
    };

    render() {
        let { dataClinics } = this.state;
        let settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            swipeToSlide: true,
            draggable: true,
            swipe: true,
            // nextArrow: <SampleNextArrow />,
            // prevArrow: <SamplePrevArrow />,
        };
        return (
            <div className="section-medical-facility">
                <div className="medical-facility-container">
                    <div className="medical-facility-header">
                        <span className="title-section">Cơ sở y tế</span>
                        <button className="btn-section">Xem thêm</button>
                    </div>
                    <div className="medical-facility-body">
                        <Slider {...settings}>
                            {dataClinics &&
                                dataClinics.length > 0 &&
                                dataClinics.map((item, index) => {
                                    return (
                                        <div
                                            className="img-customize"
                                            key={index}
                                            onClick={() =>
                                                this.handleViewDetailClinic(
                                                    item
                                                )
                                            }
                                        >
                                            <img src={item.image} />
                                            <div>{item.name}</div>
                                        </div>
                                    );
                                })}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(MedicalFacility)
);
