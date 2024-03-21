import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Free from "./Components/Hassle-free";
import Collaborate from "./Components/Collaborate";
import Footer from "./Components/Footer";

function App() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [qrImageUrl, setQrImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleShortenUrl = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/shorten/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ original_url: originalUrl }),
      });
      if (!response.ok) {
        throw new Error("Failed to shorten URL");
      }
      const data = await response.json();
      setShortenedUrl(data.shortened_url);

      // Request to generate QR code image
      const qrResponse = await fetch("http://localhost:8000/generate_qr_code");
      if (!qrResponse.ok) {
        throw new Error("Failed to generate QR code");
      }
      const qrData = await qrResponse.blob(); // Convert response to Blob
      const qrImageUrl = URL.createObjectURL(qrData); // Create URL for Blob
      setQrImageUrl(qrImageUrl); // Set QR code image URL
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <Hero />
      <Free />
      <Collaborate />
      <Footer />
      <div className="url-shortener ">
        <input
          type="text"
          placeholder="Enter URL to shorten"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
        />
        <button onClick={handleShortenUrl} disabled={loading}>
          {loading ? "Shortening..." : "Shorten"}
        </button>
        {shortenedUrl && (
          <div>
            <p>Shortened URL:</p>
            <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
              {shortenedUrl}
            </a>
          </div>
        )}
        {qrImageUrl && (
          <div>
            <p>QR Code:</p>
            <img src={qrImageUrl} alt="QR Code" />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
