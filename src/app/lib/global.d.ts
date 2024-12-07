import { MongoClient } from "mongodb";

declare global {
    // Extend the NodeJS Global interface
    namespace NodeJS {
        interface Global {
            _mongoClientPromise: Promise<MongoClient>;
        }
    }
}

// This is necessary to prevent TypeScript from treating this file as a module
export {};
