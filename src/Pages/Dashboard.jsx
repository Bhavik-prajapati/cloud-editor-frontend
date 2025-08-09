import React, { useState } from "react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      {/* Sidebar */}
      <nav style={{
        width: "220px",
        background: "#2c3e50",
        color: "white",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
      }}>
        <h2 style={{ marginBottom: "30px" }}>My Dashboard</h2>
        <button 
          style={buttonStyle(activeTab === "home")} 
          onClick={() => setActiveTab("home")}
        >
          Home
        </button>
        <button 
          style={buttonStyle(activeTab === "profile")} 
          onClick={() => setActiveTab("profile")}
        >
          Profile
        </button>
        <button 
          style={buttonStyle(activeTab === "settings")} 
          onClick={() => setActiveTab("settings")}
        >
          Settings
        </button>
      </nav>

      {/* Main content */}
      <main style={{ flexGrow: 1, padding: "20px" }}>
        <Header />
        <Content activeTab={activeTab} />
      </main>
    </div>
  );
};

const buttonStyle = (active) => ({
  background: active ? "#2980b9" : "transparent",
  color: active ? "white" : "#ecf0f1",
  border: "none",
  padding: "10px 15px",
  marginBottom: "10px",
  textAlign: "left",
  cursor: "pointer",
  fontSize: "16px",
  borderRadius: "4px",
});

const Header = () => (
  <header style={{
    borderBottom: "1px solid #ccc",
    paddingBottom: "10px",
    marginBottom: "20px",
  }}>
    <h1>Dashboard</h1>
  </header>
);

const Content = ({ activeTab }) => {
  switch (activeTab) {
    case "profile":
      return <div><h2>Your Profile</h2><p>Profile details go here.</p></div>;
    case "settings":
      return <div><h2>Settings</h2><p>Settings options here.</p></div>;
    default:
      return <div><h2>Home</h2><p>Welcome to your dashboard!</p></div>;
  }
};

export default Dashboard;
