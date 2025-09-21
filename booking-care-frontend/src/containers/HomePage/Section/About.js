import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import "./About.scss";

class About extends Component {
    render() {
        return (
            <div className="section-about">
                <div className="section-about-header">All About me</div>
                <div className="section-about-content">
                    <div className="content-left">
                        <iframe
                            width="100%"
                            height="400px"
                            src="https://www.youtube.com/embed/HpUyplFKDlY"
                            title="自己紹介（レ・タイ・バオ）"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="content-right">
                        <p>
                            ' こんにちは、レ・タイ・バオと申します。
                            この動画では、私の自己紹介をさせていただきます。
                            学歴、これまでの経験、得意な技術（ReactJS、NodeJS、Java、PostgreSQLなど）、
                            そして今後のキャリア目標についてお話しします。
                            ぜひご覧いただき、よろしくお願いいたします。'
                        </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
