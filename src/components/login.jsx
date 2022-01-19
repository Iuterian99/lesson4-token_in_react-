import { useRef } from "react"
import { useLogin } from "../context/Authorization"
import { Redirect } from 'react-router-dom'
const Login = () => {

  const [ token, setToken ] = useLogin()

  const username = useRef()
  const password = useRef()

  const handleSubmit = e =>{
    e.preventDefault()

    console.log(password.current.value);
    fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username.current.value,
        password: password.current.value
      })
    })
    .then(res => res.json())
    .then(data => setToken(data.token))
    .catch(err => console.log(err))

  }
  
  if(token) return <Redirect to="/posts" />
  
  return (
   <div className="container">
      <h1 className="heading text-info text-center mt-3">
        Log in page of Najot Ta`lim🎉
      </h1>
      <main className="main">
        <form
          className="shadow-lg p-3 mt-5 bg-body rounded w-50 mx-auto"
          action="#"
          onSubmit={handleSubmit}
        >
          <h4 className="text-center text-primary mb-4">LOG IN</h4>
          <input
            className="form-control mb-4"
            type="text"
            placeholder="Name"
            ref = { username}
            required
          />
          <input
            className="form-control"
            type="password"
            placeholder="password"
            ref = { password }
            required
          />
          <button className="btn btn-primary mt-3 w-100" type="submit">
            Submit
          </button>
        </form>
      </main>
    </div>
  )
}

export default Login;
