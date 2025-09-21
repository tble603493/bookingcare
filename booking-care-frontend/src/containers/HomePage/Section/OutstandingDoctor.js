import React, { Component } from "react";
import { connect } from "react-redux";
import "./OutstandingDoctor.scss";
import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../../utils/constant";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as actions from "../../../store/actions";
import { withRouter } from "react-router";

class OutstandingDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrDoctors: [],
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topDoctorsRedux !== this.props.topDoctorsRedux) {
            this.setState({
                arrDoctors: this.props.topDoctorsRedux,
            });
        }
    }
    componentDidMount() {
        this.props.loadTopDoctors();
    }

    handleViewDetailDoctor = (doctor) => {
        if (this.props.history) {
            this.props.history.push(`/detail-doctor/${doctor.id}`);
        }
    };
    render() {
        let settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            swipeToSlide: true,
            draggable: true,
            swipe: true,
            // afterChange: this.handleAfterChange,
            // nextArrow: <SampleNextArrow />,
            // prevArrow: <SamplePrevArrow />,
        };
        let arrDoctors = this.state.arrDoctors;
        let { language } = this.props;
        return (
            <div className="section-outstanding-doctor">
                <div className="outstanding-doctor-container">
                    <div className="outstanding-doctor-header">
                        <span className="title-section">
                            <FormattedMessage
                                id={"homepage.out-standing-doctor"}
                            />
                        </span>
                        <button className="btn-section">
                            <FormattedMessage id={"homepage.more-infor"} />
                        </button>
                    </div>
                    <div className="outstanding-doctor-body">
                        <Slider {...settings}>
                            {arrDoctors &&
                                arrDoctors.length > 0 &&
                                arrDoctors.map((item, index) => {
                                    let imageBase64 = "";
                                    if (item.image) {
                                        imageBase64 = new Buffer(
                                            item.image,
                                            "base64"
                                        ).toString("binary");
                                    }
                                    let nameVi = `${item.positionData.valueVi} ${item.lastName} ${item.firstName}`;
                                    let nameEn = `${item.positionData.valueEn} ${item.firstName} ${item.lastName}`;
                                    return (
                                        <div
                                            className="img-customize"
                                            onClick={() =>
                                                this.handleViewDetailDoctor(
                                                    item
                                                )
                                            }
                                        >
                                            <img
                                                src={imageBase64}
                                                alt="doctor"
                                            />
                                            <div className="doctor">
                                                {language === LANGUAGES.VI
                                                    ? nameVi
                                                    : nameEn}
                                            </div>
                                            <div className="specialty">
                                                Cơ xương khớp, nội khoa
                                            </div>
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
        topDoctorsRedux: state.admin.topDoctors,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadTopDoctors: () => dispatch(actions.fetchTopDoctor()),
    };
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor)
);
