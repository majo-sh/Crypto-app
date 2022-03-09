import axios from "axios";
import {  useEffect, useState } from "react";
import "./Login.scss"
import Cookies from "universal-cookie";
import {useNavigate} from "react-router-dom"

const baseUrl = "https://fakeapi-majo.herokuapp.com/usuarios"
const cookies = new Cookies()

export default function Login () {
     const navigate  = useNavigate();

     useEffect (() => {
         if (cookies.get('username')){
             navigate('./home')
         }
     },)


    const [form, setForm] = useState({
        username: "",
        password: "",
    })

    const handrlerChange = (e) => {
        e.preventDefault();
       
        setForm ({...form,[e.target.name]: e.target.value})

        
        console.log(form)
    }
    
    const iniciarSecion = async (e) => {
        e.preventDefault()
        await axios.get(baseUrl, { params: { username: form.username, password:form.password} })
        .then (response => {
            return response.data;
        })
        .then(response => {
            if (response.length > 0) {
                let responseData = response[0];
                cookies.set("id", responseData.id,{path: '/'})
                cookies.set("username", responseData.username,{path: '/'})
                navigate('/home')
            }else{
                alert ('el usuario o la contraseña no son correctos')
            }
        })
        .catch(err => {
            console.log(err);
        })

    }
    

    return (
        <section className="login">
            <form className="login-card" >
                <h3>Iniciar sesión</h3>
                <p>usuario</p>
                <input 
                type="text"  
                name="username"
                onChange={handrlerChange}
                
                />
                <p>contraseña</p>
                <input 
                type="password"  
                name="password"
                onChange={handrlerChange}
                />
                <div>
                    <button  className="button" onClick={iniciarSecion}>Iniciar sesión</button>
                </div>
            </form>
        </section>
    )
}