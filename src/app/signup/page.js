"use client";
import Link from "next/link";
import React, { useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        if (user.username.length > 0 && user.email.length > 0 && user.password.length > 0){
            setButtonDisabled(false);
        }
        else{
            setButtonDisabled(true);
        }
    }, [user])

    const onSignup = async () => {
        try {
            const response = await axios.post("api/users/signup", user);
            console.log("signup success", response.data);
            router.push("/login");
        } catch (error) {
            console.log("signup failed", error.message);

        }
    }

    return (
        <div className="w-3/12 border mx-auto p-5">
            <h1 className="font-semibold text-2xl">Signup</h1>
            <div className="my-2">
                <label htmlFor="username">Username</label>
                <br/>
                <input 
                    className="text-black p-2"
                    id="username" 
                    type="text" 
                    value={user.username} 
                    placeholder="username"
                    onChange={(e) => setUser({...user, username: e.target.value})}
                />
            </div>
            <div className="my-2">
                <label htmlFor="email">Email</label>
                <br/>
                <input 
                    className="text-black p-2"
                    id="email" 
                    type="text" 
                    value={user.email} 
                    placeholder="email"
                    onChange={(e) => setUser({...user, email: e.target.value})}
                />
            </div>
            <div className="my-2">                
                <label htmlFor="password">Password</label>
                <br/>
                <input 
                    className="text-black p-2"
                    id="password" 
                    type="password" 
                    value={user.password} 
                    placeholder="password"
                    onChange={(e) => setUser({...user, password: e.target.value})}
                />
            </div>
            <button 
                className="p-2 my-1 border border-white rounded-md"
                onClick={onSignup}>
                {buttonDisabled ? "Not Valid Signup" : "Signup"}
            </button>
            <div>
                Already have an account? 
                <Link href="/login" className="pl-1 underline font-semibold">Login</Link>
            </div>
        </div>
    )
}