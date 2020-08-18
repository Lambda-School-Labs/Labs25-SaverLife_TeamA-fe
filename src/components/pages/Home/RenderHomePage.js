import React from 'react';
import Plot from 'react-plotly.js';
import { Button, Progress } from 'antd';
import { Navbar } from '../../common/index';

import '../../../styles/Navbar.css';

var data = [
  {
    type: 'pie',
    values: [2, 3, 4, 4],
    labels: ['Wages', 'Operating expenses', 'Cost of sales', 'Insurance'],
    textinfo: 'label+percent',
    textposition: 'inside',
    automargin: true,
  },
];

var layout = {
  height: 400,
  width: 400,
  margin: { t: 0, b: 0, l: 0, r: 0 },
  showlegend: false,
};

function RenderHomePage(props) {
  const { userInfo, authService } = props;
  return (
    <div className="pageContainer">
      <Navbar />
      <div className="contentContaier">
        <h1>Hi {userInfo.name}, Welcome to SaverLife</h1>
        <div className="progressBarDiv">
          <h2>Progress towards Goal</h2>
          <div className="progressDiv">
            <Progress
              strokeColor={{ '0%': '#ecb7db', '100%': '#c01089' }}
              percent={50}
              strokeWidth={16}
            />
          </div>
        </div>
        <h2>Deadline: 30 Days</h2>
        <div className="pieChartDiv">
          <Plot data={data} layout={layout} />
          <h2>Current Spending</h2>
        </div>
      </div>
      <Button type="primary" onClick={() => authService.logout()}>
        Logout
      </Button>
    </div>
  );
}
export default RenderHomePage;
