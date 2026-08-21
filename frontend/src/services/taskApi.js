
const API_URL = 'http://localhost:5000/api/tasks';

// Helper to handle standardizing responses safely
const handleResponse = async (response) => {
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Server error: Received HTML instead of JSON. Check if backend is running on port 5000.");
    }

    const data = await response.json();
    
    if (!response.ok) {
        const error = data.message || 'An error occurred';
        throw new Error(error);
    }
    
    return data;
}

const fetchTasks = async (status) => {
    // If status is 'all', we don't need to append the query string
    const url = status && status !== 'all' ? `${API_URL}?status=${status}` : API_URL;
    const response = await fetch(url);
    return handleResponse(response);
}

const createTask = async (taskData) => {
    const response = await fetch(API_URL, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
    });
    return handleResponse(response);
}   

const updateTaskStatus = async (id, status) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',    
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
    });
    return handleResponse(response);
}

const deleteTask = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    return handleResponse(response);
}

