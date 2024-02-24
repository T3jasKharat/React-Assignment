// src/components/UserSatisfactionChart.tsx

import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Chart from 'chart.js/auto';
import { fetchAIData } from '../services/dataService';

const UserSatisfactionChart: React.FC = () => {
  const userSatisfactionData = useSelector((state: any) => state.aiData?.user_satisfaction?.ratings);
  const dispatch = useDispatch();
  const chartRef = useRef<Chart>();

  useEffect(() => {
    const fetchUserSatisfactionData = async () => {
      const data = await fetchAIData();
      dispatch({ type: 'SET_AI_DATA', payload: data });
    };

    fetchUserSatisfactionData();
  }, [dispatch]);

  useEffect(() => {
    if (userSatisfactionData) {
      if (chartRef.current) {
        chartRef.current.destroy(); // Destroy existing chart if it exists
      }

      const ctx = document.getElementById('userSatisfactionChart') as HTMLCanvasElement;
      chartRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: userSatisfactionData.map((item: any) => item.count),
          datasets: [{
            label: 'User Satisfaction Ratings',
            data: userSatisfactionData.map((item: any) => item.rating),
            backgroundColor: 'rgb(54, 262, 35)',
            borderColor: 'rgb(54, 262, 35)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              max: 5 // Assuming ratings are on a scale of 1 to 5
            }
          }
        }
      });
    }
  }, [userSatisfactionData]);

  return <canvas id="userSatisfactionChart" width={200} height={200} />;
};

export default UserSatisfactionChart;
