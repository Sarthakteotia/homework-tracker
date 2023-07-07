// src/components/AssignmentForm.js
import { useState } from 'react';
import { useAssignments } from '../data/useAssignments';
import Notification from './Notifications.js';

const AssignmentForm = () => {
  const { addAssignment } = useAssignments();
  const [assignment, setAssignment] = useState({ name: '', dueDate: '', description: '' });
  const [notification, setNotification] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    addAssignment(assignment);
    setAssignment({ name: '', dueDate: '', description: '' });
    setNotification('Assignment added successfully!');
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <div>
      {notification && <Notification message={notification} />}
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <button type="submit">Add Assignment</button>
      </form>
    </div>
  );
};

export default AssignmentForm;
