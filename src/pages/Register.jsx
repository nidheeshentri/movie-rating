import axios from 'axios'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    cpassword: ""
  })

  const registerHandler = (event) => {
    event.preventDefault()
    axios.post("https://movie-rating-backend-xe3v.onrender.com/user/register", {
      email: userData.email,
      password: userData.password
    })
    .then(res => {
      alert(res.data.message)
      navigate("/login")
    }).catch(err => {
      alert(err.response.data.message)
      console.log(err)
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
        <form onSubmit = {registerHandler}>
            <input type = "email" placeholder = "Email ID" name = "email" value = {userData.email} onChange = {changeHandler}/><br />
            <input type = "password" placeholder = "Password" name = "password" value = {userData.password} onChange = {changeHandler}/><br />
            <input type = "password" placeholder = "Confirm Password" name = "cpassword" value = {userData.cpassword} onChange = {changeHandler}/><br />
            <input type="submit" value="Register" />

            <p>Already have an account? <Link to = "/login">Login</Link></p>
        </form>
    </div>
  )
}

export default Register