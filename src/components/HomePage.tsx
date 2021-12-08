import { Fragment } from 'react';
import { Typography, Col, Statistic } from 'antd';

const { Title } = Typography;

const HomePage = () => {
  return (
    <Fragment>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Col span={12}>
        {/* TODO: fetch and pass `value`s */}
        <Statistic title="Total Cryptocurencies" value="5" />
        <Statistic title="Total Exchanges" value="5" />
        <Statistic title="Total Market Cap" value="5" />
        <Statistic title="Total 24h Volume" value="5" />
        <Statistic title="Total Markets" value="5" />
      </Col>
    </Fragment>
  )
}

export default HomePage;
