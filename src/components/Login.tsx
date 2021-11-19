import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeUser } from "../redux/userSlice";
import { LoginContainer } from "../style";

const Login = () => {
    const [name, setName] = useState("")
    const dispatch = useDispatch()

    const handleLogin = () => {
        dispatch(changeUser(name))
    }

    return(
        <LoginContainer>
            <h1>Login</h1>
            <div>
                <section>
                    <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                </section>

                <section className="loginBtn">
                    <input type="button" onClick={handleLogin} value="login"/>
                </section>
            </div>
            <hr />
        </LoginContainer>
    )
}

export default Login