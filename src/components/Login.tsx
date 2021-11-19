import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeUser } from "../redux/userSlice";

const Login = () => {
    const [name, setName] = useState("")
    const dispatch = useDispatch()

    const handleLogin = () => {
        dispatch(changeUser(name))
    }

    return(
        <form>
            <h1>Login</h1>
            <div>
                <section>
                    <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                </section>

                <section>
                    <input type="button" onClick={handleLogin} value="login"/>
                </section>
            </div>
            <hr />
        </form>
    )
}

export default Login