# Local Development Setup Guide

## Prerequisites
- Node.js (version 16 or higher)
- npm or yarn
- MongoDB Atlas account (already configured)

## Setup Instructions

### 1. Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a `.env` file in the backend directory with the following content:
   ```env
   # Database Configuration
   MONGODB_URI=mongodb+srv://ehsanhayatiwiz:Qwerty1122%40@cluster0.49i8d9j.mongodb.net/hrms_iwiz?retryWrites=true&w=majority&appName=Cluster0

   # JWT Configuration
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   JWT_EXPIRE=7d

   # Server Configuration
   PORT=5000
   NODE_ENV=development

   # CORS Configuration for local development
   CORS_ORIGINS=http://localhost:3000,http://localhost:3001

   # Rate Limiting (relaxed for development)
   RATE_LIMIT_WINDOW_MS=900000
   RATE_LIMIT_MAX_REQUESTS=1000

   # Failsafe Admin (auto-create/ensure admin on every boot)
   ADMIN_EMAIL=irtazamadadnaqvi@iwiz.com
   ADMIN_PASSWORD=03145372506
   ADMIN_NAME=Failsafe Admin
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

   The backend will be available at: http://localhost:5000

### 2. Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Create a `.env.local` file in the frontend directory with the following content:
   ```env
   # API Configuration for Local Development
   REACT_APP_API_URL=http://localhost:5000/api

   # Environment
   REACT_APP_NODE_ENV=development

   # Feature Flags
   REACT_APP_ENABLE_ANALYTICS=false
   REACT_APP_ENABLE_DEBUG=true
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the frontend development server:
   ```bash
   npm start
   ```

   The frontend will be available at: http://localhost:3000

## Running Both Services

### Option 1: Two Terminal Windows
1. Open Terminal 1: `cd backend && npm run dev`
2. Open Terminal 2: `cd frontend && npm start`

### Option 2: Using npm scripts (if available)
From the root directory:
```bash
# Install dependencies for both
npm install
cd backend && npm install
cd ../frontend && npm install
cd ..

# Start both services (you'll need to run these in separate terminals)
npm run dev:backend  # if available
npm run dev:frontend # if available
```

## Default Login Credentials

The system will automatically create a failsafe admin account with these credentials:
- **Email**: irtazamadadnaqvi@iwiz.com
- **Password**: 03145372506

## Troubleshooting

### CORS Issues
If you encounter CORS issues, make sure:
1. The backend `.env` file has `CORS_ORIGINS=http://localhost:3000,http://localhost:3001`
2. The frontend `.env.local` file has `REACT_APP_API_URL=http://localhost:5000/api`

### Port Conflicts
- Backend runs on port 5000
- Frontend runs on port 3000
- If these ports are in use, you can change them in the respective `.env` files

### Database Connection
The system uses MongoDB Atlas, so you need an internet connection. The connection string is already configured in the backend `.env` file.

## Development Features

- Hot reloading for both frontend and backend
- Automatic admin account creation
- Relaxed rate limiting for development
- Debug logging enabled
- CORS configured for local development
