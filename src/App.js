import React, { useState, useEffect } from "react";
import { SkynetClient } from 'skynet-js';
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [mySky, setMySky] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [userID, setUserID] = useState('');
  const [filePath, setFilePath] = useState('');
  const [dataKey] = useState(userID);
  const dataDomain = 'localhost';
  const portal = window.location.hostname === 'localhost' ? 'https://siasky.net' : undefined;
  const client  = new SkynetClient(portal);

  useEffect(() => {
    setFilePath(dataDomain + '/' + dataKey);
  }, [dataKey, filePath]);

  useEffect(() => {
    async function initMySky() {
      try {
        const mySky = await client.loadMySky(dataDomain);
        setMySky(mySky);
        const loggedIn = await mySky.checkLogin();
        setLoggedIn(loggedIn);
        if (loggedIn) {
          setUserID(await mySky.userID());
        }
      } catch (e) {
        console.error(e);
      }
    };
    initMySky();
  }, [mySky]);

  useEffect(() => {
    async function getData() {
      const { data } = await mySky.getJSON(filePath);
      if (data) {
        setTodos([...data]);
      } else {
        console.log(`can not retrieve data using getJSON`)
      }
    };
    if (mySky) {
      getData();
    }
  }, [filePath, mySky]);

  const handleMySkyLogin = async () => {
    const status = await mySky.requestLoginAccess();
    setLoggedIn(status);
    if (status) {
      setUserID(await mySky.userID());
    }
  }

  const handleMySkyLogout = async () => {
    await mySky.logout();
    setLoggedIn(false);
    setUserID('');
  }

  const handleMySkyAdd = async (data) => {
    try {
      await mySky.setJSON(filePath, data);
    } catch (error) {
      console.log(`could not set data: ${error.message}`);
    }
  }

  return (
    <div className="App">
      <div>
        {userID
          ? <section>
              <div className="glass"> 
                <h1 className="hero-text">What are you achieving today?</h1>
                <Form 
                  inputText={inputText}
                  setInputText={setInputText}
                  todos={todos}
                  setTodos={setTodos}
                  skyAdd={handleMySkyAdd}
                />
              </div>
              <div>
                <TodoList todos={todos} setTodos={setTodos} skyAdd={handleMySkyAdd}/>
              </div>
            </section>
          : <div className='login-prompt'>
            <h1>TODO SKAPP!</h1>
            <h2>Please login to get started.</h2>
            </div>
        }
      </div>
      <div>
        {!loggedIn
          ? <button className="log-btn" onClick={handleMySkyLogin}>Log In</button>
          : <button className="log-btn" onClick={handleMySkyLogout}>Log out</button>
        }
      </div>
    </div>
  );
}

export default App;
