import { useState } from "react";
import { db } from "../Firebase/Firebase";
import { collection, addDoc } from "firebase/firestore";
import styles from "./BookTicket.module.css";

function BookTicket() {
  const [formData, setFormData] = useState({
    name: "",
    movie: "",
    seat: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const generateTicketId = () => {
    return "TKT" + Date.now().toString().slice(-6);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.movie || !formData.seat) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const ticket = {
        ticketId: generateTicketId(),
        name: formData.name,
        movie: formData.movie,
        seat: formData.seat.toUpperCase(),
        status: "Booked",
        bookedAt: new Date().toLocaleString(),
      };

      await addDoc(collection(db, "tickets"), ticket);

      alert("🎉 Ticket Booked Successfully");

      setFormData({
        name: "",
        movie: "",
        seat: "",
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }

    setLoading(false);
  };

 return (
  <div className={styles.container}>
    <div className={styles.card}>

      <div className={styles.ticketIcon}>
        🎟️
      </div>

      <h1 className={styles.title}>Ticket Booking</h1>

      <p className={styles.subtitle}>
        Book your favourite movie in seconds
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>

        <div className={styles.group}>
          <label>Customer Name</label>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className={styles.group}>
          <label>Movie Name</label>
          <input
            className={styles.input}
            type="text"
            name="movie"
            placeholder="Movie name"
            value={formData.movie}
            onChange={handleChange}
          />
        </div>

        <div className={styles.group}>
          <label>Seat Number</label>
          <input
            className={styles.input}
            type="text"
            name="seat"
            placeholder="Example : A12"
            value={formData.seat}
            onChange={handleChange}
          />
        </div>

        <button className={styles.button}>
          {loading ? "Booking..." : "Book Ticket"}
        </button>

      </form>

      <div className={styles.footer}>
        Powered by Firebase 🔥
      </div>

    </div>
  </div>
);
}

export default BookTicket;