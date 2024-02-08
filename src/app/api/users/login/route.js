import { connect } from "@/dbConfig/dbConfig";
// "../../../../dbConfig/dbConfig"
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request) {
    try {
        
    } catch (error) {
        return NextResponse.json({error: error.message, status: 500});
    }
}