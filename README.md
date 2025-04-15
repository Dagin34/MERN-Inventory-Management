# MERN Inventory Management

A full-stack inventory management system built with the MERN (MongoDB, Express, React, Node.js) stack.

## Features

- **CRUD Operations:** Create, Read, Update, and Delete products.
- **RESTful API:** Built with Express and Mongoose.
- **React Frontend:** Developed using React and Vite.
- **State Management:** Uses Zustand for local state management.
- **Styling:** Tailwind CSS for modern UI styling.
- **Dark Mode:** Toggleable dark mode support.

## Prerequisites

- Node.js (v16 or above)
- npm

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository_url>
cd MERN-Inventory-Management
```

### 2. Configure Environment Variables

Create a `.env` file in the `backend` folder with the following content (adjust as needed):

```env
MONGO_URI=your_mongodb_connection_string
PORT=5200
NODE_ENV=development
```

### 3. Install Dependencies

Install the backend dependencies:

```bash
cd backend
npm install
```

Install the frontend dependencies:

```bash
cd ../frontend
npm install
```

### 4. Running the Project

#### Development

Open two terminals:

- **Terminal 1:** Run the backend server:
  ```bash
  cd backend
  npm run dev
  ```
- **Terminal 2:** Run the frontend development server:
  ```bash
  cd frontend
  npm run dev
  ```

The frontend will be available at [http://localhost:3000](http://localhost:3000) (or the port specified by Vite) and API requests will be proxied to the backend at [http://localhost:5200](http://localhost:5200).

#### Production

1. Build the frontend:
   ```bash
   cd frontend
   npm run build
   ```
2. Start the backend server in production mode:
   ```bash
   cd ../backend
   npm start
   ```

The backend will serve the built frontend files from the `/frontend/dist` directory when `NODE_ENV` is set to `production`.

## Project Structure

- **backend/**
  - `config/db.js`: Database connection.
  - `controllers/`: API endpoint handlers.
  - `models/`: Mongoose models.
  - `routes/`: API routes.
  - `server.js`: Entry point for the backend server.
- **frontend/**
  - `src/`: React source code.
  - `public/`: Static files.
  - `vite.config.js`: Vite configuration.
  - `tailwind.config.js`: Tailwind configuration.

## Technologies Used

- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zustand](https://github.com/pmndrs/zustand)

## License

This project is licensed under the ISC License.