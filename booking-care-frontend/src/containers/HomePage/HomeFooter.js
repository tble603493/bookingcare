import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import "./HomeFooter.scss";

class HomeFooter extends Component {
    render() {
        return (
            <div className="home-footer">
                <p>
                    &copy; 2025 Bảo-san tập code.{" "}
                    <b>Contact me for more details.</b>
                    <a
                        href="https://www.facebook.com/thaibao.le.716/"
                        target="_blank"
                    >
                        👉Click here!
                    </a>
                </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
