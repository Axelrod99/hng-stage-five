// Home.js
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Card from "./Card";
import "./home.css";
import { FaSearch } from 'react-icons/fa';


function Home() {
  return (
    <div className="home">
      <Header />

      <div className="user-search-container">
        <div className="user-container">
          <div className="username">John Doe</div>
        </div>
        <div className="search-container"><span className="search-icon"> <FaSearch className="search-icon" /></span>
  
  <input
    type="text"
    className="search-input"
    placeholder="Search for a particular video"
  /> 
</div>
      </div>

      <hr className="divider" />

      <main>
        <div className="scroll-container">
          {/* Container 1 */}
          <div className="container">
            <div className="container-header">Recent files</div>
            <div className="cards">
              <Card title="Card 1" content="Content for Card 1" />
              <Card title="Card 2" content="Content for Card 2" />
            </div>
          </div>

          {/* Container 2 */}
          <div className="container">
            <div className="container-header">Files from last week</div>
            <div className="cards">
              <Card title="Card 1" content="Content for Card 1" />
              <Card title="Card 2" content="Content for Card 2" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
