// src/EmployeeDirectory.jsx
import React, { useState } from "react";
import "./StudentDirectory.css";

const employees = [
    { id: 1, name: "Johnson Wood", email: "johnsonwood@edu.com", rollno: Math.floor(Math.random() * 100) + 1 },
    { id: 2, name: "John Doe", email: "johndoe@edu.com", rollno: Math.floor(Math.random() * 100) + 1 },
    { id: 3, name: "Fakhar Naveed", email: "fakhar@edu.com", rollno: Math.floor(Math.random() * 100) + 1 },
    { id: 4, name: "Alex Made", email: "alexmade@edu.com", rollno: Math.floor(Math.random() * 100) + 1 },
    { id: 5, name: "Anna Taylor", email: "annataylor@edu.com", rollno: Math.floor(Math.random() * 100) + 1 },
    { id: 6, name: "Sara Smith", email: "sarasmith@edu.com", rollno: Math.floor(Math.random() * 100) + 1 },
  ];
  

export default function EmployeeDirectory() {
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter employees based on search query
  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <header className="header">
        <div className="search-and-filters">
          <input
            type="text"
            placeholder="Search..."
            className="search-bar"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <div className="hed">Student Information</div>
          <div className="profile-and-filter">
            <div className="profile">
              <img
                src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"
                alt="Profile"
                className="profile-pic"
              />
              <div className="prof">Teacher</div>
              <div className="dropdown">
                <button className="dropdown-button">▼</button>
                <div className="dropdown-menu">
                  <a href="#">View Profile</a>
                  <a href="#">Settings</a>
                  <a href="#">Logout</a>
                </div>
              </div>
            </div>
            <div className="filter">
              <button className="filter-button active">All</button>
              <button className="filter-button">Active</button>
              <button className="filter-button">Inactive</button>
            </div>
          </div>
        </div>
      </header>
      <div className="employee-grid">
        {filteredEmployees.map((employee) => (
          <div className="employee-card" key={employee.id}>
            <div className="employee-info">
              <img
                src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"
                alt="Avatar"
                className="avatar"
              />
              <div className="employee-details">
                <h3>{employee.name}</h3>
                <p className="title">{employee.title}</p>
                <p className="email">Email: {employee.email}</p>
                <p className="email">Roll_No: {employee.rollno}</p>
              </div>
            </div>

            <div className="actions">
              <button className="block-button">Block</button>
              <button className="details-button">Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
