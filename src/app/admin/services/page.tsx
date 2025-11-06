"use client";
import Navbar from "../../components/Navbar";
import FadeIn from "../../components/FadeIn";

export default function AdminServicesPage() {
  return (
    <main style={{ paddingTop: 120 }}>
      <Navbar isAdmin />
      <FadeIn delay={0.2}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px" }}>
          <h1 style={{ color: "#1A237E", marginBottom: "24px" }}>Admin Services</h1>
          <p style={{ fontSize: "16px", color: "#333" }}>
            This is the admin services dashboard. Add, edit, or manage services here.
          </p>
        </div>
      </FadeIn>
    </main>
  );
}
