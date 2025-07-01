#!/usr/bin/env node

import { prisma } from './lib/db.ts';

async function quickTest() {
  try {
    console.log('🔄 Testing SQLite database...');
    
    // Test connection
    await prisma.$connect();
    console.log('✅ Database connection successful!');
    
    // Test basic query
    await prisma.$queryRaw`SELECT 1 as test`;
    console.log('✅ Database query successful!');
    
    console.log('🎉 All database tests passed!');
    
  } catch (error) {
    console.error('❌ Database test failed:', error.message);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

quickTest();
