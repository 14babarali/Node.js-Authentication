# Node.js Authentication API (ES6 Modules)

## Project Structure

The project is organized as follows:

auth-api/
├── config/           # Configuration files
├── controllers/      # Business logic
├── models/           # Database schemas
├── middleware/       # Authentication middleware
├── routes/           # API routes
├── utils/            # Helper functions
├── .env              # Environment variables
├── package.json      # Dependencies and scripts
├── server.js         # Main server file
└── README.md         # Documentation

## Prerequisites

To run this project, ensure you have the following installed:

- Node.js (version 16 or higher)
- MongoDB (either a local or cloud instance)
- Git

## Setup

Follow these steps to set up the project:

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd auth-api
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the following content:
   ```plaintext
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   PORT=8080
   ```

4. Run the application:
   ```bash
   npm start
  
   npm run dev
   ```

## API Endpoints

### Register User

- **Endpoint**: `POST /api/auth/register`
- **Request Body**:
  ```json
  {
      "username": "your_username",
      "password": "your_password"
  }
  ```

### Login User

- **Endpoint**: `POST /api/auth/login`
- **Request Body**:
  ```json
  {
      "username": "your_username",
      "password": "your_password"
  }
  ```

### Protected Route

- **Endpoint**: `GET /api/auth/protected`
- **Headers**:
  ```plaintext
  Authorization: Bearer your_token
  ```

## Testing

 test the API using Postman :

- **Register**: `POST http://localhost:8080/api/auth/register`
- **Login**: `POST http://localhost:8080/api/auth/login`
- **Protected**: `GET http://localhost:8080/api/auth/protected`

## Usage Instructions

1. Create a GitHub repository for your project.
2. Execute the following commands:
   ```bash
   git init
   git remote add origin [your-repository-url]
   git add .
   git commit -m "Complete ES6 auth API with controllers and helpers"
   git push -u origin main
   ```

3. Update the `.env` file with your credentials.

The GitHub repository link will be: `https://github.com/your-username/auth-api`.

This structure promotes scalability and adheres to better software architecture principles while maintaining essential functionalities such as registration, login, JWT authentication, and protected routes.