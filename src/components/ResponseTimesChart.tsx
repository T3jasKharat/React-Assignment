// src/components/ResponseTimesChart.tsx

import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Chart from 'chart.js/auto';
import { fetchAIData } from '../services/dataService';

const ResponseTimesChart: React.FC = () => {
  const responseTimesData = useSelector((state: any) => state.aiData?.response_times?.day_wise);
  const dispatch = useDispatch();
  const chartRef = useRef<Chart>();

  useEffect(() => {
    const fetchResponseTimesData = async () => {
      const data = await fetchAIData();
      dispatch({ type: 'SET_AI_DATA', payload: data });
    };

    fetchResponseTimesData();
  }, [dispatch]);

  useEffect(() => {
    if (responseTimesData) {
      if (chartRef.current) {
        chartRef.current.destroy(); // Destroy existing chart if it exists
      }

      const ctx = document.getElementById('responseTimesChart') as HTMLCanvasElement;
      chartRef.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: responseTimesData.map((item: any) => item.date),
          datasets: [{
            label: 'Response Times (Day-wise)',
            data: responseTimesData.map((item: any) => item.average_time),
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }, [responseTimesData]);

  return <canvas id="responseTimesChart" width={200} height={200} />;
};

export default ResponseTimesChart;
