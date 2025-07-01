// Simple MongoDB Connection Test for Zodongo International Limited

import { MongoClient, ServerApiVersion } from "mongodb";

// Your MongoDB connection string (directly from .env.local)
const uri = "mongodb+srv://peterpaulwagidoso:T8tcc2uKSZ1kMiKL@cluster0.xjiutih.mongodb.net/zodongo?retryWrites=true&w=majority&appName=Cluster0";

// MongoDB Client Configuration with Stable API
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function testConnection() {
  console.log('🧪 Testing MongoDB Atlas Connection for Zodongo International Limited...\n');

  try {
    // Connect to the MongoDB cluster
    await client.connect();
    
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("✅ Pinged your deployment. You successfully connected to MongoDB!");
    
    // Test database operations
    const db = client.db("zodongo");
    const collections = await db.listCollections().toArray();
    console.log(`📊 Collections in 'zodongo' database: ${collections.length}`);
    
    if (collections.length > 0) {
      console.log(`📁 Collection names: ${collections.map(c => c.name).join(', ')}`);
    } else {
      console.log('📝 No collections yet - this is normal for a new database');
    }
    
    console.log('\n🎉 Database connection test successful!');
    console.log('🔗 Your Zodongo International Limited website can connect to MongoDB!');
    
  } catch (error) {
    console.error('❌ Connection test failed:', error.message);
    
    if (error.message.includes('authentication')) {
      console.log('\n💡 Authentication Error - Check:');
      console.log('   - Username: peterpaulwagidoso');
      console.log('   - Password in MongoDB Atlas');
      console.log('   - Database user permissions');
    }
    
    if (error.message.includes('network')) {
      console.log('\n💡 Network Error - Check:');
      console.log('   - Internet connection');
      console.log('   - IP whitelist in MongoDB Atlas (add 0.0.0.0/0)');
    }
  } finally {
    // Close the connection
    await client.close();
    console.log('🔌 Connection closed');
  }
}

// Run the test
testConnection();
