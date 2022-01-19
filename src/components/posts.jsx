import { useLogin } from "../context/Authorization.js"
import { Redirect } from "react-router-dom"
import { useEffect } from "react"
const Posts = () => {
  const [ token ] = useLogin();

  useEffect(()=>{
    fetch("http://localhost:8000/posts", { 
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${token}`
      }
    })
    .then(res => res.json())
    .then(data => console.log(data))

  }, [])

  if(!token) return <Redirect to ="/login"/>
  return (
    <div>
      <h1>posts</h1>
    </div>
  )
}

export default Posts;
