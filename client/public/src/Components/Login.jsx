import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState('');
  // const [email, setEmail] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to authenticate admin
    axios.post('/login', {
      username,
      password,
    })
    .then(response => {
      document.cookie = `jwt=${response.data.token}`;
      setLoggedIn(true); // Set loggedIn to true
      navigate("/loginasadmin/myadmin");
    })
    .catch(error => {
      console.error(error);
    });
  };

  useEffect(() => {
    if (!loggedIn) {
      navigate("/loginasadmin");
    }
  }, [loggedIn, navigate]);

  return (
    <div className='loginContainer'>

      <div className='loginCard'>
        <div className='loginAvatar'>
          <i className="ri-admin-fill">Admin</i>
        </div>
        <input
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
          placeholder="Enter username"
          required />
        {/* <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          placeholder="Enter email"
          required /> */}
        <div className="inputLoginBar">
          <i></i>
        </div>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Enter password"
          required />
        <button onClick={handleSubmit}>Sign in</button>
      </div>

    </div>
  );
}

export default Login;
