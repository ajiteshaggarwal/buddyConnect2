import React from "react";
import { Link } from "react-router-dom";


function Login() {
    const [user, setuser] = React.useState({
        email: '',
        password: '',

    })

const loginUser = async  ()=>{
    console.log(user);
}
    return (
        <div className="h-screen bg-primary flex items-center justify-center">
            <div className="bg-white shadow-md p-5 flex flex-col gap-5 w96">
                <h1 className="text-2xl  uppercase font-semibold text-primary"> Buddy Connect Login</h1>
                <hr />
                <input
                    type="text"
                    value={user.email}
                    onChange={(e) => setuser({ ...user, email: e.target.value })}
                    placeholder="Enter Your Email"
                />
                <input
                    type="passwword"
                    value={user.password}
                    onChange={(e) => setuser({ ...user, password: e.target.value })}
                    placeholder="Enter Your Password"
                />
                <button className="contained-btn" onClick={loginUser}>Login</button>
               {/* here the Link keyword is used and it will take us to the login page */}
               <Link
               to="/register"
               className="underline">
                New here? Lets get you registered first
               </Link>
            </div>
        </div>
    )
}

export default Login