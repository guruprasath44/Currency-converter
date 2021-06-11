import React from "react";

class ConvertCurrency extends React.Component {
  state = {
    BaseCurrency: "",
    valueBase: "",
    SecondCurrency: "",
    value: ""
  };

  add = (e) => {
    e.preventDefault();
    if (
      this.state.BaseCurrency === "" ||
      this.state.valueBase === "" ||
      this.state.SecondCurrency === "" ||
      this.state.value === ""
    ) {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addCurrencyHandler(this.state);
    this.setState({ cuurencyName: "", value: "" });
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Currency</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Base Currency</label>
            <select style={{ width: " 300px" }}>
              <option
                value="INR"
                name="BaseCurrency"
                onChange={(e) =>
                  this.setState({ BaseCurrency: e.target.value })
                }
              >
                INR{" "}
              </option>
            </select>
          </div>
          <div className="field">
            <label>Value of Base Currency</label>
            <input
              style={{ width: " 300px" }}
              type="number"
              name="valueBase"
              placeholder=""
              value={this.state.valueBase}
              onChange={(e) => this.setState({ valueBase: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Secondary Currency</label>
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
            </select>
          </div>
          <button className="ui button blue" style={{ marginLeft: " 200px" }}>
            Convert
          </button>

          <div className="field">
            <label>Equivalent</label>
            <input
              style={{ width: " 300px" }}
              type="text"
              name="Equivalent"
              placeholder=""
              value=""
              // onChange={(e) =>
              //   this.setState({ SecondCurrency: e.target.value })
              // }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default ConvertCurrency;
