import { MongoClient, MongoClientOptions } from "mongodb";

if (!process.env.MONGODB_URI) {
    throw new Error("Please add your Mongo URI to .env.local");
}

const uri: string = process.env.MONGODB_URI;
const options: MongoClientOptions = {};

// A global variable for maintaining connection across hot reloads in development
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// clientPromise = client.connect();
// if (process.env.MODE === "development") {
//     clientPromise = client.connect();
// }

try {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
    console.log("MongoDB client successfully initialized and connected");
} catch (error) {
    console.error("Failed to initialize or connect MongoDB client:", error);
    throw new Error("MongoDB client initialization or connection failed");
}

export default clientPromise;
