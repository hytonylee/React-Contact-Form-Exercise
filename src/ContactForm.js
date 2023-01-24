import "./ContactForm.css";
import { useState, useEffect } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [disable, setDisable] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (name && email) {
      setDisable(false);
    } else {
      setDisable(true);
      setMessage("");
    }
  }, [name, email]);

  function handleSubmit(e) {
    /** create async function and add post action here */
    e.preventDefault();

    setMessage("Subscribed!");
    setTimeout(() => setMessage(""), 5000);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Newsletter</h2>
      <div className="contact-form__fieldset">
        <label>Name:</label>
        <input
          id="name"
          value={name}
          placeholder="John Doe"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="contact-form__fieldset">
        <label>Email:</label>
        <input
          id="email"
          value={email}
          placeholder="john.doe@email.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {message !== "" ? (
        <div className="contact-form__success-message">{message}</div>
      ) : (
        ""
      )}
      <button className="contact-form__button" disabled={disable}>
        Subscribe
      </button>
    </form>
  );
}
