// import clientPromise from "../../../lib/mongo/index";
import clientPromise from "@/app/lib/mongo";
// import { NextApiRequest } from "next";
import { NextRequest } from "next/server";
// import { NextApiRequest, NextApiResponse } from "next";

// type ResponseData = {
//     message: string;
// };

// export default function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<ResponseData>
// ) {
//     res.status(200).json({ message: "Hello from Next.js!" });
// }

export const GET = async () => {
    try {
        const client = await clientPromise;
        // console.log("connected successful", client);
        const db = client.db("profile"); // Replace with your database name
        // console.log("database connected successful", db);

        const collection = db.collection("port"); // Replace with your collection name
        console.log("collection connected successful", collection);
        const data = await collection.find({}).toArray();
        return Response.json(
            { message: "get data", data: data },
            { status: 200 }
        );
    } catch (error) {
        console.error("Database connection error:", error);
        return Response.json({ message: "fail to connect" }, { status: 500 });
    }
};
export const POST = async (req: NextRequest) => {
    const body = await req.json();
    const { name, age, email } = body;
    console.log(body);
    console.log(req.method);

    if (!name || !age || !email) {
        // if (true) {
        return Response.json(
            {
                success: false,
                message: "Missing required fields: name, age, or email",
            },
            { status: 400 }
        );
    }
    try {
        const client = await clientPromise;
        const db = client.db("profile");
        const result = await db.collection("port").insertOne({
            name,
            age,
            email,
            createdAt: new Date(),
        });
        return Response.json(
            { message: "get data", insertedId: result.insertedId.toString() },
            { status: 200 }
        );
    } catch (error) {
        console.error("Database connection error:", error);
        return Response.json({ message: "fail to connect" }, { status: 500 });
    }
};
