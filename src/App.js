import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Components/form";
import Card from "./Components/card";

const App = () => {
  const [users, setUsers] = useState([]);

  const [val, setValue] = useState(null);

  const handleForm = (res) => {
    setValue(res);
  };

  useEffect(() => {
    console.log(val);
    const getApi = async () => {
      const resp = await axios.get(`https://api.github.com/users/${val}`);
      setUsers((users) => [resp.data, ...users]);
    };
    if (val != null) {
      getApi();
    }
  }, [val]);

  return (
    <div>
      <Form handleForm={handleForm} />
      <Card userName={users} />
    </div>
  );
};

export default App;
