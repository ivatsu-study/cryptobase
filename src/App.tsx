import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Space, Typography } from 'antd';

import { Navbar, HomePage, Exchanges, Cryptocurrencies, CryptoDetails, News } from './components';

import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <footer className="footer">
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Cryptobase <br/ > All rights are reserved!</Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </footer>
      </div>
    </div>
  );
}

export default App;
