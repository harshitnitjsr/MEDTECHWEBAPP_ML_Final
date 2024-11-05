import { useState } from "react";
import axios from "axios";

const Register1 = () => {
  const [qualification, setQualification] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [specialization, setSpecialization] = useState("");

  async function registerDoc(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/api/v1/auth/registerdoctor", {
        qualification,
        name,
        address,
        phone,
        email,
        specialization,
      });
      alert("Your registration was successful");
    } catch {
      alert("Your registration failed");
    }
  }

  return (
    <div
      style={{
        margin: "0",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f5f5",
        backgroundImage:
          "url('https://wallpapers.com/images/hd/medical-background-cjge7e89adg6ub8x.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <div>
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            borderRadius: "8px",
            width: "100%", // Set width to 100%
            minWidth: "30vw",

            textAlign: "center",
          }}
        >
          <form onSubmit={registerDoc}>
            <h1 style={{ color: "#333 ", fontWeight: 1000 }}>
              Doctor's Registration
            </h1>
            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="name"
                style={{
                  display: "block",
                  fontSize: "1rem",
                  fontWeight: "600",
                  margin: "5px",
                  color: "#333",
                }}
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{
                  width: "calc(100% - 20px)",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "1rem",
                }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="qualification"
                style={{
                  display: "block",
                  fontSize: "1rem",
                  fontWeight: "600",
                  margin: "5px",
                  color: "#333",
                }}
              >
                Qualification:
              </label>
              <input
                type="text"
                id="qualification"
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
                required
                style={{
                  width: "calc(100% - 20px)",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "1rem",
                }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="address"
                style={{
                  display: "block",
                  fontSize: "1rem",
                  fontWeight: "600",
                  margin: "5px",
                  color: "#333",
                }}
              >
                Address:
              </label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                style={{
                  width: "calc(100% - 20px)",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "1rem",
                }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="phone"
                style={{
                  display: "block",
                  fontSize: "1rem",
                  fontWeight: "600",
                  margin: "5px",
                  color: "#333",
                }}
              >
                Phone Number:
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                style={{
                  width: "calc(100% - 20px)",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "1rem",
                }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  fontSize: "1rem",
                  fontWeight: "600",
                  margin: "5px",
                  color: "#333",
                }}
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: "calc(100% - 20px)",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "1rem",
                }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="specialization"
                style={{
                  display: "block",
                  fontSize: "1rem",
                  fontWeight: "600",
                  margin: "5px",
                  color: "#333",
                }}
              >
                Specialization:
              </label>
              <input
                type="text"
                id="specialization"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                required
                style={{
                  width: "calc(100% - 20px)",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "1rem",
                }}
              />
            </div>

            <button
              type="submit"
              id="button"
              style={{
                backgroundColor: "#2196F3",
                color: "white",
                padding: "15px 20px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "1rem",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#0e77bf")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#2196F3")}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register1;
