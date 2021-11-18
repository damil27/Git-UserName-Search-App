import React, { Component } from "react";

class Card extends React.Component {
  render() {
    const { onImage, onName, onCompany } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col col-md-8 offset mx-auto align-self-center ">
            <table className="table table-striped table-dark justify-content-center align-items-center ">
              <tbody>
                <tr>
                  <td className="col-2">
                    <img src={onImage} alt="Check" width="70" />
                  </td>
                  <td className="col-2">{onName}</td>
                  <td className="text-center">{onCompany}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
