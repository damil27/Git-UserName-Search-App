import "./App.css";
import React from "react";
import Card from "./Components/card";
import Form from "./Components/form";

class App extends React.Component {
  state = {
    data: [
      {
        login: "mojombo",
        id: 1,
        node_id: "MDQ6VXNlcjE=",
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/mojombo",
        company: "https://github.com/mojombo",
      },
      {
        login: "defunkt",
        id: 2,
        node_id: "MDQ6VXNlcjE=",
        avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/mojombo",
        company: "Facebook",
      },
    ],
  };

  handleNewUser = (profileData) => {
    this.setState((prevState) => ({ data: [profileData, ...prevState.data] }));
    console.log(profileData);
  };

  render() {
    return (
      <div className="container">
        <Form onSubmit={this.handleNewUser} />
        {this.state.data.map((profile) => (
          <Card
            key={profile.id}
            onName={profile.login}
            onCompany={
              profile.company === null ? "Not available" : profile.company
            }
            onImage={profile.avatar_url}
          />
        ))}
      </div>
    );
  }
}

export default App;
