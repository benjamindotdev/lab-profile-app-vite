import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [state, setState] = useState({
    username: '',
    password: '',
    campus: '',
    course: '',
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5005/auth/signup',
        state
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-section">
          <h1>Sign Up</h1>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={state.username}
            onChange={(e) => setState({ ...state, username: e.target.value })}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={state.password}
            onChange={(e) => setState({ ...state, password: e.target.value })}
          />
          <select
            name="campus"
            value={state.campus}
            onChange={(e) => setState({ ...state, campus: e.target.value })}
          >
            <option value="">Select Campus</option>
            <option value="Madrid">Madrid</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Miami">Miami</option>
            <option value="Paris">Paris</option>
            <option value="Berlin">Berlin</option>
            <option value="Amsterdam">Amsterdam</option>
            <option value="Mexico">Mexico</option>
            <option value="Sao Paulo">Sao Paulo</option>
          </select>
          <select
            name="course"
            value={state.course}
            onChange={(e) => setState({ ...state, course: e.target.value })}
          >
            <option value="">Select Course</option>
            <option value="WebDev">WebDev</option>
            <option value="UX/UI">UX/UI</option>
            <option value="Data Analytics">Data Analytics</option>
            <option value="Cyber Security">Cyber Security</option>
          </select>
        </div>
        <div className="form-section">
          <div>
            <h2>Hello!!</h2>
            <h3>Welcome to IronProfile!</h3>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              voluptates vero minus eum voluptas! Aspernatur hic voluptatum
              tempore est ipsum!
            </p>
            <button type="submit">Create the Account!</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default App;
