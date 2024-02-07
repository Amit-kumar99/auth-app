"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    });

    const onLogin = async () => {}

    return (
        <div className="w-3/12 border mx-auto p-5">
            <h1 className="font-semibold text-2xl">Login</h1>
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
            <button className="p-2 my-1 border border-white rounded-md">Login</button>
            <div>
                Don't have an account? 
                <Link href="/signup" className="pl-1 underline font-semibold">Signup</Link>
            </div>
        </div>
    )
}