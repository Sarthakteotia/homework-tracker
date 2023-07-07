// src/components/AssignmentList.js
import { useAssignments } from '../data/useAssignments';

const AssignmentList = () => {
  const { assignments } = useAssignments();

  return (
    <ul>
      {assignments.map((assignment) => (
        <li key={assignment.id}>
          {assignment.name} - Due Date: {assignment.dueDate}
          {/* Add complete/incomplete options */}
        </li>
      ))}
    </ul>
  );
};

export default AssignmentList;
