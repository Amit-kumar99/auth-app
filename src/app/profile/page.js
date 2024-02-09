"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
    const router = useRouter();

    const onLogout = async () => {
        try {
            await axios.get("/api/users/logout");
            router.push("/login");
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div>
            <h1>Profile</h1>
            <p>Welcome to Profile page</p>
            <button 
                className="mt-4 p-2 bg-blue-500 text-white"
                onClick={onLogout}>
                    Logout
            </button>
        </div>
    )
}

