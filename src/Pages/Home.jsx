import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>🎓 Student Record Portal</h1>

        <h3>Secure Academic Management System</h3>

        <p>
          Welcome to the Student Record Portal. Students can securely access
          their academic information including profile, marks, attendance and
          examination results.
        </p>

        <p className={styles.note}>
          <strong>Demo Features</strong>
          <br />
          ✔ Student Login
          <br />
          ✔ View Academic Records
          <br />
          ✔ AI Assistant (AgentPro)
          <br />
          ✔ Verified Student Access
        </p>

        <button
          className={styles.loginBtn}
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Home;