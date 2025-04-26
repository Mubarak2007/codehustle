import { useState } from "react";
import "./Bookform.css";
import { useAuth } from "../AuthContext";

export const BookForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [destination, setDestination] = useState("");
  const [people, setPeople] = useState(0);
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");

  const { isAuthenticated } = useAuth();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      alert("Please login first to book your trip!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          contactNumber: contact,
          destination,
          numberOfPeople: people,
          arrivalDate: arrival,
          departureDate: departure,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Booking successful! Confirmation email sent.");
        setName("");
        setEmail("");
        setContact("");
        setDestination("");
        setPeople(0);
        setArrival("");
        setDeparture("");
      } else {
        alert(`Failed: ${data.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleOnSubmit}>
        <div className="inputbox">
          <h3>Your Name*</h3>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            required
            name="name"
          />
        </div>
        <div className="inputbox">
          <h3>Email Address*</h3>
          <input
            className="!lowercase"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="abc@gmail.com"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            name="email"
          />
        </div>
        <div className="inputbox">
          <h3>Contact Number*</h3>
          <input
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            type="tel"
            placeholder="Number"
            required
            maxLength="10"
            pattern="[0-9]{10}"
            name="contact"
          />
        </div>
        <div className="inputbox">
          <h3>Enter Your Destination*</h3>
          <input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            type="text"
            placeholder="Destination"
            required
            name="destination"
          />
        </div>
        <div className="inputbox">
          <h3>Enter the Number of People</h3>
          <input
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            type="number"
            min="1"
            max="15"
            placeholder="Number"
            required
            name="people"
          />
        </div>
        <div className="inputbox">
          <h3>Arrival</h3>
          <input
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
            type="date"
            required
            name="arrival"
          />
        </div>
        <div className="inputbox">
          <h3>Departure</h3>
          <input
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            type="date"
            required
            name="departure"
          />
        </div>
        <div className="sub-btn">
          <button type="submit" className="subbtn">
            Book now
          </button>
        </div>
      </form>
    </>
  );
};
