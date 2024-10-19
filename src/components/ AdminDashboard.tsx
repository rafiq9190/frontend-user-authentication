import React from 'react';
import { useAuth } from '../Context/AuthContext';

const AdminDashboard: React.FC = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <p>Welcome, Admin {user?.username}!</p>
        </div>
    );
};

export default AdminDashboard;
