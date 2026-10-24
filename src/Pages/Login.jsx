import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase/Firebase";

function Login() {
  const navigate = useNavigate();

  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

 const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const studentRef = doc(db, "students", studentId);
    const studentSnap = await getDoc(studentRef);

    if (!studentSnap.exists()) {
      alert("Student not found");
      return;
    }

    const student = studentSnap.data();

    if (student.password !== password) {
      alert("Invalid Password");
      return;
    }

    alert(`Welcome ${student.name}`);

    navigate("/dashboard", {
      state: {
        student,
      },
    });

  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
};

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Student Login</h1>

        <p>Login to access your academic records.</p>

        <form onSubmit={handleLogin}>
          <div className={styles.inputGroup}>
            <label>Student ID</label>

            <input
              type="text"
              placeholder="Enter Student ID"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">
            Login
          </button>
        </form>

        <button
          className={styles.backBtn}
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

export default Login;