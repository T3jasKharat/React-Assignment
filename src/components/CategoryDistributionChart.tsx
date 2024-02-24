// src/components/CategoryDistributionChart.tsx

import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Chart from 'chart.js/auto';
import { fetchAIData } from '../services/dataService';

const CategoryDistributionChart: React.FC = () => {
  const categoryData = useSelector((state: any) => state.aiData?.category_distribution);
  const dispatch = useDispatch();
  const chartRef = useRef<Chart>();

  useEffect(() => {
    const fetchCategoryData = async () => {
      const data = await fetchAIData();
      dispatch({ type: 'SET_AI_DATA', payload: data });
    };

    fetchCategoryData();
  }, [dispatch]);

  useEffect(() => {
    if (categoryData) {
      if (chartRef.current) {
        chartRef.current.destroy(); // Destroy existing chart if it exists
      }

      const ctx = document.getElementById('categoryChart') as HTMLCanvasElement;
      chartRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: Object.keys(categoryData),
          datasets: [{
            label: 'Category Distribution',
            data: Object.values(categoryData),
            backgroundColor: 'rgba(54, 162, 235)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
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
  }, [categoryData]);

  return <canvas id="categoryChart" width={200} height={200} />;
};

export default CategoryDistributionChart;
