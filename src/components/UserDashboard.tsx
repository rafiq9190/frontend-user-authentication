import React from 'react';
import { useAuth } from '../Context/AuthContext';

const UserDashboard: React.FC = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1>User Dashboard</h1>
            <p>Welcome, User {user?.username}!</p>
        </div>
    );
};

export default UserDashboard;
