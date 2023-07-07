// src/data/assignments.js
import { useState } from 'react';

export const useAssignments = () => {
  const [assignments, setAssignments] = useState([]);

  const addAssignment = (assignment) => {
    setAssignments([...assignments, assignment]);
  };

  // Add other functions like updateAssignment, deleteAssignment, etc.

  return {
    assignments,
    addAssignment,
    // Return other functions
  };
};
