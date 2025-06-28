import axios from 'axios'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate()
    
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    
  const loginHandler = (event) => {
    event.preventDefault()
    axios.post("http://localhost:3000/user/login", {
      email: userData.email,
      password: userData.password
    })
    .then(res => {
        alert(res.data.message)
        localStorage.setItem("access_token", res.data.token)
        navigate("/")
    })
    .catch(err => {
        console.log("Error")
        alert(err.response.data)
    })
  }

  
  const changeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value

    const tempUserData = {...userData}
    tempUserData[name] = value

    setUserData(tempUserData)
  }
    
  return (
    <div>
        <form onSubmit = {loginHandler}>
            <input type = "email" placeholder = "Email ID" name = "email" value = {userData.email} onChange = {changeHandler}/><br />
            <input type = "password" placeholder = "Password" name = "password" value = {userData.password} onChange = {changeHandler}/><br />
            
            <input type="submit" value="Login" />

            <p>Create an account? <Link to = "/register">Register</Link></p>
        </form>
    </div>
  )
}

export default Login