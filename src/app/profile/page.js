"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfilePage() {
    const router = useRouter();
    const [data, setData] = useState("");

    const onLogout = async () => {
        try {
            await axios.get("/api/users/logout");
            router.push("/login");
        } catch (error) {
            console.log(error.message);
        }
    }

    const getUserDetails = async () => {
        const response = await axios.get('/api/users/me');
        console.log(response.data);
        setData(response.data.data._id);
    }

    return (
        <div>
            <h1>Profile</h1>
            <p>Welcome to Profile page</p>
            <h2 className="p-2 m-1 bg-green-500">
                {data === "" ? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link> }
            </h2>
            <button 
                className="mt-4 p-2 bg-blue-500 text-white"
                onClick={onLogout}>
                    Logout
            </button>
            <button 
                className="mt-4 p-2 bg-lime-500 text-white"
                onClick={getUserDetails}>
                    Get User's Details
            </button>
        </div>
    )
}

