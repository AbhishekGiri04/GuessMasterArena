#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 GuessMaster Arena - Production Setup');
console.log('=====================================\n');

// Check if .env files exist
const backendEnvPath = path.join(__dirname, 'backend', '.env');
const frontendEnvPath = path.join(__dirname, 'frontend', '.env');

console.log('📋 Checking environment files...\n');

if (!fs.existsSync(backendEnvPath)) {
  console.log('❌ Backend .env file not found');
  console.log('📝 Please copy backend/.env.example to backend/.env and fill in your values\n');
} else {
  console.log('✅ Backend .env file found');
}

if (!fs.existsSync(frontendEnvPath)) {
  console.log('❌ Frontend .env file not found');
  console.log('📝 Please copy frontend/.env.example to frontend/.env and fill in your values\n');
} else {
  console.log('✅ Frontend .env file found');
}

console.log('🔧 Next Steps:');
console.log('1. Set up MongoDB Atlas database');
console.log('2. Deploy backend to Render');
console.log('3. Deploy frontend to Vercel');
console.log('4. Update environment variables with production URLs');
console.log('\n📖 See DEPLOYMENT.md for detailed instructions');