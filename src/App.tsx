// src/App.tsx
import React from 'react';
import './styles/style.css'
import CategoryDistributionChart from './components/CategoryDistributionChart';
import ResponseTimesChart from './components/ResponseTimesChart';
import UserSatisfactionChart from './components/UserSatisfactionChart';
import UsageStatisticsChart from './components/UsageStatisticsChart';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>AI Insights DashBoard</h1>
      <div className='category-distribution'>
        <h2>Category Distribution</h2>
        <CategoryDistributionChart />
      </div>
      <div className='response-time'>
        <h2>Response Times</h2>
        <ResponseTimesChart />
      </div>
      <div className='user-satisfaction'>
        <h2>User Satisfaction</h2>
        <UserSatisfactionChart />
      </div>
      <div className='usage-statistics'>
        <h2>Usage Statistics</h2>
        <UsageStatisticsChart />
      </div>
    </div>
  );
};

export default App;

