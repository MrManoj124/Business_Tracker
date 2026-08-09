# Weekly Report Task Tracker

A full-stack (MERN) web application built to help teams track daily work, prepare weekly reports, and manage task priorities. It provides a clear interface to create, display, filter, and update task progress.

# Features

Create Tasks: Add new tasks with a title and priority level (Low, Medium, High).
Task Status: Toggle tasks between 'Pending' and 'Completed'.
Filtering: Filter the task list to view All, Pending, or Completed tasks.
Delete Tasks: Remove obsolete or incorrect tasks.
Real-time Notifications: Success and error banners based on standard HTTP status codes (200, 201, 400, 404).
Responsive UI: Clean, modern, and mobile-friendly interface.

# Tech Stack

Frontend
- React.js (via `react-scripts`)
- React DOM
- React Icons
- CSS3
- Package Manager: `pnpm`

Backend
- Node.js (ES Modules)
- Express.js
- MongoDB & Mongoose
- CORS
- Nodemon (for development)
- Package Manager: `pnpm`

## 📁 Project Structure

```text
project/
├── backend/
│   ├── src/
│   │   ├── controllers/task.controller.js
│   │   ├── routes/task.routes.js
│   │   ├── services/task.service.js
│   │   └── app.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.jsx
│   │   │   ├── TaskItem.jsx
│   │   │   └── TaskList.jsx
│   │   ├── services/
│   │   │   └── taskApi.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
└── README.md