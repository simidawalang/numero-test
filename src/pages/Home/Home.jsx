import React from "react";
import Navbar, { SmallNav } from "../../components/layout/Navbar/Navbar";
import Card from "../../components/ui/Card/Card";
import deposit from "../../assets/icons/deposit.svg";
import transfer from "../../assets/icons/transfer.svg";
import interest from "../../assets/icons/interest.svg";
import LineChart from "../../components/Chart/LineChart";
import Table from "../../components/Table/Table";

const Home = () => {
  return (
    <div className="dashboard-page">
      <SmallNav />
      <main className="App-page">
        <Navbar />
        <div className="dashboard-page__main">
          <div className="transaction-analytics">

          <h1 className="page-title">Dashboard</h1>
            <div className="transaction-analytics__chart">
              <div>
                <h3>Transaction analytics</h3>
                <LineChart />
              </div>
            </div>
          <Table />
          </div>
          <div className="transaction-summary">
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
              <Card
                icon={deposit}
                variant="purple"
                title="Total deposit"
                size="md"
                info="NGN 7,000,000"
              />
              <Card
                icon={transfer}
                variant="green"
                title="Total transfer"
                size="md"
                info="NGN 7,000,000"
              />
              <Card
                icon={interest}
                variant="purple"
                title="Accrued interest"
                size="md"
                info="NGN 7,000,000"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
