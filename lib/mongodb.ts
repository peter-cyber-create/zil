// MongoDB Configuration for Zodongo International Limited
// Based on official MongoDB Node.js driver documentation

import dotenv from 'dotenv';
import { MongoClient, ServerApiVersion } from "mongodb";

// Load environment variables
dotenv.config();

// Connection URI with proper formatting
const uri = process.env.DATABASE_URL;

if (!uri) {
  throw new Error('DATABASE_URL environment variable is not defined');
}

// MongoDB Client Configuration with Stable API
const clientOptions = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  // Connection pool settings for production
  maxPoolSize: 50, // Maximum number of connections
  minPoolSize: 5,  // Minimum number of connections
  maxIdleTimeMS: 30000, // Close connections after 30 seconds of inactivity
  serverSelectionTimeoutMS: 5000, // How long to try to select a server
  socketTimeoutMS: 45000, // How long a socket stays open
  family: 4 // Use IPv4, skip trying IPv6
};

// Create MongoDB client
const client = new MongoClient(uri, clientOptions);

// Database connection function
async function connectToDatabase() {
  try {
    // Connect to MongoDB
    await client.connect();
    
    // Test the connection
    await client.db("admin").command({ ping: 1 });
    console.log("✅ Successfully connected to MongoDB Atlas!");
    
    return client.db("zodongo"); // Return the specific database
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
}

// Graceful disconnect function
async function disconnectFromDatabase() {
  try {
    await client.close();
    console.log("🔌 Disconnected from MongoDB");
  } catch (error) {
    console.error("❌ Error disconnecting from MongoDB:", error);
  }
}

// Direct database access function
const getDatabase = () => client.db("zodongo");

// Export the functions and client
export {
  connectToDatabase,
  disconnectFromDatabase,
  client,
  getDatabase
};

// Handle process termination
process.on('SIGINT', async () => {
  await disconnectFromDatabase();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await disconnectFromDatabase();
  process.exit(0);
});
