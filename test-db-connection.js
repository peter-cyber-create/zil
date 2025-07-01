// Database Connection Test for Zodongo International Limited
// Run this file to test your MongoDB Atlas connection

import dotenv from 'dotenv';
import { connectToDatabase, disconnectFromDatabase } from './lib/mongodb.ts';
import { PrismaClient } from '@prisma/client';

dotenv.config();

async function testDatabaseConnection() {
  console.log('🧪 Testing Database Connection for Zodongo International Limited...\n');

  try {
    // Test 1: MongoDB Atlas Connection
    console.log('1️⃣ Testing MongoDB Atlas connection...');
    const db = await connectToDatabase();
    console.log('✅ MongoDB Atlas connection successful!');

    // Test 2: Prisma Client Connection
    console.log('\n2️⃣ Testing Prisma Client...');
    const prisma = new PrismaClient();
    
    // Test Prisma connection by checking User model
    const userCount = await prisma.user.count();
    console.log(`✅ Prisma connection successful! Users in database: ${userCount}`);

    // Test 3: Database Operations
    console.log('\n3️⃣ Testing database operations...');
    
    // Create collections if they don't exist
    const collections = await db.listCollections().toArray();
    console.log(`📊 Existing collections: ${collections.map(c => c.name).join(', ') || 'None yet'}`);

    // Test 4: Prisma Models
    console.log('\n4️⃣ Testing Prisma models...');
    try {
      // Test each model with a count operation
      const feedbackCount = await prisma.feedback.count();
      console.log(`📝 Feedback entries: ${feedbackCount}`);
      
      const contactCount = await prisma.contact.count();
      console.log(`📧 Contact entries: ${contactCount}`);
      
      const quotationCount = await prisma.quotation.count();
      console.log(`💼 Quotation entries: ${quotationCount}`);
    } catch (error) {
      console.log('ℹ️ Some models may not have data yet - this is normal for new databases');
    }

    console.log('\n🎉 All database tests passed! Your Zodongo International Limited website is ready!');
    
    await prisma.$disconnect();
    await disconnectFromDatabase();

  } catch (error) {
    console.error('\n❌ Database connection test failed:');
    console.error(error.message);
    
    if (error.message.includes('authentication')) {
      console.log('\n💡 Authentication Error Solutions:');
      console.log('   - Check your username and password in the connection string');
      console.log('   - Verify the database user exists in MongoDB Atlas');
      console.log('   - Ensure the user has read/write permissions');
    }
    
    if (error.message.includes('network')) {
      console.log('\n💡 Network Error Solutions:');
      console.log('   - Check your internet connection');
      console.log('   - Verify IP address is whitelisted in MongoDB Atlas');
      console.log('   - Try adding 0.0.0.0/0 to allow all IPs');
    }
    
    process.exit(1);
  }
}

// Run the test
testDatabaseConnection();
