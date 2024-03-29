import { getTokenData } from "@/helpers/getTokenData";
import { NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(request) {
    try {
        const userId = await getTokenData(request);
        console.log("userId", userId);
        const user = await User.findOne({_id: userId}).select("-password");
        return NextResponse.json({
            message: "User found",
            data: user
        });
    } catch (error) {
        return NextResponse.json({error: error.message, status: 500});
    }
}