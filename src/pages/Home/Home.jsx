import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/layout/Navbar/Navbar";
import Card from "../../components/ui/Card/Card";

const Home = () => {
  return (
    <div className="dashboard-page">
      <nav className="auth-page__navbar">
        <a href="/">numero</a>
        <Link to="/auth/signup">tommy@gmail.com</Link>
      </nav>

      <main className="App-page">
        <Navbar />
        <div className="dashboard-page__main">
          <div>
            <h1 className="page-title">Dashboard</h1>
            <div>
              <h3>Transaction analytics</h3>
            </div>
          </div>
          <div>
            <h4>Transaction Summary</h4>
            <Card
              variant="purple"
              title="Total Balance"
              info="NGN7,000,000"
              size="lg"
              content={
                <Card
                  size="sm"
                  variant="dark-purple"
                  info={
                    <p>
                      Available Balance: <strong>NGN 7,000,000</strong>
                    </p>
                  }
                />
              }
            />
            <div className="account-summary">
                <p className="title">Account Summary</p>
              <Card variant="purple" title="Total deposit" size="md" info="NGN 7,000,000"/>
              <Card variant="green" title="Total transfer" size="md" info="NGN 7,000,000"/>
              <Card variant="purple" title="Accrued interest" size="md" info="NGN 7,000,000"/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
