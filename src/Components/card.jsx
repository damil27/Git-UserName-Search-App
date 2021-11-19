import React, { Component } from "react";

const Card = (props) => {
  console.log(props.userName);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-md-8 offset mx-auto align-self-center ">
            <table className="table table-striped table-dark justify-content-center align-items-center ">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">UserName</th>
                  <th scope="col">biography</th>
                  <th scope="col">Public Repos</th>
                  <th scope="col">location</th>
                </tr>
              </thead>

              <tbody>
                {props.userName.map((gitUser) => (
                  <tr key={gitUser.id}>
                    <td className="col-2">
                      <img src={gitUser.avatar_url} alt="Check" width="70" />
                    </td>
                    <td className="col-2">{gitUser.login}</td>
                    <td className="col-3">
                      {gitUser.name === !null
                        ? "Bio Not Available"
                        : gitUser.name}
                    </td>
                    <td className="col-2">{gitUser.public_repos}</td>
                    <td className="col">{gitUser.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

// class Card extends React.Component {
//   render() {
//     const { onImage, onName, onCompany } = this.props;
//     return (
//       <div>

//       </div>
//     );
//   }
// }

// export default Card;
