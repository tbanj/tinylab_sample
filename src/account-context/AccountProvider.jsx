import React, { Component } from "react";
import Storage from "../service/storage.js";
const AccountContext = React.createContext();
export const AccountConsumer = AccountContext.Consumer;
const dataItem = new Storage();
class AccountProvider extends Component {
  state = {
    username: "",
    dateJoined: "",
    membershipLevel: "",
    addClass: "",

    updateAccount: updatedAccount => this.updateAccount(updatedAccount)
  };
  onUserInput = val => {
    this.setState({ username: val });
  };

  updateAccount = updatedAccount => {
    this.setState(prevState => ({
      ...prevState,
      ...updatedAccount
    }));
    console.log(updatedAccount);
    localStorage.setItem("josla_dataItem", JSON.stringify(updatedAccount));
  };

  updateOne = updatedOne => {
    localStorage.setItem("addClass", updatedOne);
  };

  componentDidMount() {
    if (!dataItem.getItemsFromStorage() !== null) {
      let data = dataItem.getItemsFromStorage();
      this.setData(data);
    }
    if (localStorage.getItem("addClass") !== null) {
      this.setState({ addClass: localStorage.getItem("addClass") });
    }
  }

  setData(data) {
    this.setState({
      username: data.username,
      dateJoined: data.dateJoined,
      membershipLevel: data.membershipLevel
    });
  }
  onUserInput = val => {
    this.setState({ username: val });
  };
  render() {
    return (
      <React.Fragment>
        <AccountContext.Provider
          value={{
            username: this.state.username,
            addClass: this.state.addClass,
            dateJoined: this.state.dateJoined,
            membershipLevel: this.state.membershipLevel,
            onUserInput: this.onUserInput,
            updateAccount: this.state.updateAccount,
            updateOne: this.updateOne
          }}
        >
          {this.props.children}
        </AccountContext.Provider>
      </React.Fragment>
    );
  }
}

export default AccountProvider;
