import React from "react";

class AddCurrency extends React.Component {
  state = {
    currencyName: "",
    value: ""
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.currencyName === "" || this.state.value === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ currencyName: "", value: "" });
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Currency</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Currency Name</label>
            <select style={{ width: " 300px" }}>
              <option
                value="EURO"
                name="SecondCurrency"
                onChange={(e) =>
                  this.setState({ SecondCurrency: e.target.value })
                }
              >
                EURO
              </option>

              <option
                value="CAD"
                name="SecondCurrency"
                onChange={(e) =>
                  this.setState({ SecondCurrency: e.target.value })
                }
              >
                CAD
              </option>
              <option
                value="INR"
                name="SecondCurrency"
                onChange={(e) =>
                  this.setState({ SecondCurrency: e.target.value })
                }
              >
                INR
              </option>
            </select>
          </div>
          <div className="field">
            <label>Value</label>
            <input
              style={{ width: " 300px" }}
              type="number"
              name="value"
              placeholder=""
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue">Save</button>
        </form>
      </div>
    );
  }
}

export default AddCurrency;
