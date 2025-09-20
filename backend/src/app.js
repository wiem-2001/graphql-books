import express from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import typeDefs from "./graphql/schema.js";
import resolvers from "./graphql/resolvers.js";

dotenv.config();

// Function to setup ApolloServer
async function setupApolloServer(app) {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app, path: "/graphql" }); 
  // applyMiddleware({ app, path }) = “plug Apollo into Express at a specific URL”
  // Other counters (REST routes) can exist in the same post office without interfering.
  // The Apollo server is now a part of the Express application.
}


// Function to setup REST routes (empty for now)
function setupRestRoutes(app) {
  // Example: future REST endpoints
  // app.get("/api/hello", (req, res) => res.json({ message: "Hello from REST!" }));
}


async function createServer() {
  const app = express();

  // Setup REST routes (ready for future use)
  setupRestRoutes(app);

  // Setup ApolloServer
  await setupApolloServer(app);

  // Connect to MongoDB
  await mongoose.connect(process.env.MONGO_URI);

  return app;
}

export default createServer;
