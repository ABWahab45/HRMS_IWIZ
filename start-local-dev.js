#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting HRMS Local Development Environment...\n');

// Start backend
console.log('📡 Starting Backend Server...');
const backend = spawn('npm', ['run', 'dev'], {
  cwd: path.join(__dirname, 'backend'),
  stdio: 'inherit',
  shell: true
});

// Start frontend after a short delay
setTimeout(() => {
  console.log('🎨 Starting Frontend Server...');
  const frontend = spawn('npm', ['start'], {
    cwd: path.join(__dirname, 'frontend'),
    stdio: 'inherit',
    shell: true
  });

  // Handle process termination
  process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down development servers...');
    backend.kill('SIGINT');
    frontend.kill('SIGINT');
    process.exit(0);
  });

}, 2000);

// Handle backend process termination
backend.on('close', (code) => {
  console.log(`Backend process exited with code ${code}`);
});

console.log('✅ Development environment started!');
console.log('📡 Backend: http://localhost:5000');
console.log('🎨 Frontend: http://localhost:3000');
console.log('👤 Admin Login: irtazamadadnaqvi@iwiz.com / 03145372506');
console.log('\nPress Ctrl+C to stop both servers');
