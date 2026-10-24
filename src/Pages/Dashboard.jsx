import styles from "./Dashboard.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import AgentProWidget from "../Components/AgentProWidget";

function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();

  const student = location.state?.student;

  if (!student) {
    navigate("/login", { replace: true });
    return null;
  }

  const handleLogout = () => {
    navigate("/login", { replace: true });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>🎓 Student Record Portal</h1>

        <h2>Welcome, {student.name} 👋</h2>

        <p>
          <strong>Student ID:</strong> {student.studentId}
        </p>

        <button
          className={styles.logoutBtn}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>👤 Student Profile</h3>
          <p>View your personal information.</p>
        </div>

        <div className={styles.card}>
          <h3>📅 Attendance</h3>
          <p>Check your attendance percentage.</p>
        </div>

        <div className={styles.card}>
          <h3>📚 Marks</h3>
          <p>View semester and subject marks.</p>
        </div>

        <div className={styles.card}>
          <h3>🏆 Result</h3>
          <p>View examination result.</p>
        </div>
      </div>

      <div className={styles.chatCard}>
        <h2>🤖 AI Academic Assistant</h2>

        <p>You can ask questions like:</p>

        <ul>
          <li>What are my marks?</li>
          <li>What is my attendance?</li>
          <li>Am I passed?</li>
          <li>Show my profile.</li>
        </ul>

        <div className={styles.chatPlaceholder}>
          <AgentProWidget student={student} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;