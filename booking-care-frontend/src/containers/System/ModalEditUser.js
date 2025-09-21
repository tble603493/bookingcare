import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import _ from "lodash";

class ModalEditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            address: "",
            phoneNumber: "",
            gender: "1",
            roleId: "1",
        };
    }

    componentDidMount() {
        let user = this.props.currentUser;
        if (user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                email: user.email,
                password: "hashcode",
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address,
                phoneNumber: user.phoneNumber,
                gender: user.gender,
                roleId: user.roleId,
            });
        }
        console.log("mounting modal", user);
    }

    toggle = () => {
        this.props.toggleFromParent();
    };
    handleOnChangeInput = (e, id) => {
        let copyState = { ...this.state };
        copyState[id] = e.target.value;
        this.setState(
            {
                ...copyState,
            },
            () => {
                console.log(this.state);
            }
        );
    };
    checkValidateInput = () => {
        let isValid = true;
        let arrInput = [
            "email",
            "password",
            "firstName",
            "lastName",
            "address",
            "phoneNumber",
        ];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert("Missing parameter: " + arrInput[i]);
                break;
            }
        }
        return isValid;
    };
    handleSaveUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid) {
            this.props.editUser(this.state);
        }
    };
    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => {
                    this.toggle();
                }}
                className={"modal-user-container"}
                size="lg"
                centered
            >
                <ModalHeader
                    toggle={() => {
                        this.toggle();
                    }}
                >
                    Edit User
                </ModalHeader>
                <ModalBody>
                    <div className="modal-user-body">
                        <div className="input-container">
                            <label>Email</label>
                            <input
                                type="text"
                                onChange={(e) => {
                                    this.handleOnChangeInput(e, "email");
                                }}
                                value={this.state.email}
                                disabled
                            />
                        </div>
                        <div className="input-container">
                            <label>Password</label>
                            <input
                                type="password"
                                onChange={(e) => {
                                    this.handleOnChangeInput(e, "password");
                                }}
                                value={this.state.password}
                                disabled
                            />
                        </div>
                        <div className="input-container">
                            <label>First name</label>
                            <input
                                type="text"
                                onChange={(e) => {
                                    this.handleOnChangeInput(e, "firstName");
                                }}
                                value={this.state.firstName}
                            />
                        </div>
                        <div className="input-container">
                            <label>Last name</label>
                            <input
                                type="text"
                                onChange={(e) => {
                                    this.handleOnChangeInput(e, "lastName");
                                }}
                                value={this.state.lastName}
                            />
                        </div>
                        <div className="input-container max-width-input">
                            <label>Address</label>
                            <input
                                type="text"
                                onChange={(e) => {
                                    this.handleOnChangeInput(e, "address");
                                }}
                                value={this.state.address}
                            />
                        </div>
                        <div className="input-container">
                            <label>Phone number</label>
                            <input
                                type="text"
                                onChange={(e) => {
                                    this.handleOnChangeInput(e, "phoneNumber");
                                }}
                                value={this.state.phoneNumber}
                            />
                        </div>
                        <div className="input-container min-width-input">
                            <label>Sex</label>
                            <select
                                onChange={(e) =>
                                    this.handleOnChangeInput(e, "gender")
                                }
                                value={this.state.gender}
                            >
                                <option value="1" selected>
                                    Male
                                </option>
                                <option value="0">Female</option>
                            </select>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={() => {
                            this.handleSaveUser();
                        }}
                        className="px-3"
                    >
                        Save changes
                    </Button>{" "}
                    <Button
                        color="secondary"
                        onClick={() => {
                            this.toggle();
                        }}
                        className="px-3"
                    >
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
