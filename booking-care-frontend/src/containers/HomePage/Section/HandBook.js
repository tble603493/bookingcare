import React, { Component } from "react";
import { connect } from "react-redux";
import "./HandBook.scss";
import { FormattedMessage } from "react-intl";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HandBookImg from "../../../assets/handBook/handBook1.png";

class HandBook extends Component {
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
            // nextArrow: <SampleNextArrow />,
            // prevArrow: <SamplePrevArrow />,
        };
        return (
            <div className="section-handBook">
                <div className="handBook-container">
                    <div className="handBook-header">
                        <span className="title-section">Cẩm nang</span>
                        <button className="btn-section">Xem thêm</button>
                    </div>
                    <div className="handBook-body">
                        <Slider {...settings}>
                            <div className="img-customize">
                                <img src={HandBookImg} />
                                <div>
                                    Tầm soát đột quỵ ở đâu TPHCM? Chi tiết gói
                                    tầm soát đột quỵ{" "}
                                </div>
                            </div>
                            <div className="img-customize">
                                <img src={HandBookImg} />
                                <div>Bệnh viện 2</div>
                            </div>
                            <div className="img-customize">
                                <img src={HandBookImg} />
                                <div>Bệnh viện 3</div>
                            </div>
                            <div className="img-customize">
                                <img src={HandBookImg} />
                                <div>Bệnh viện 4</div>
                            </div>
                            <div className="img-customize">
                                <img src={HandBookImg} />
                                <div>Bệnh viện 5</div>
                            </div>
                            <div className="img-customize">
                                <img src={HandBookImg} />
                                <div>Bệnh viện 6</div>
                            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
