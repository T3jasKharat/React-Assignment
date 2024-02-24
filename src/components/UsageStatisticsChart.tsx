// src/components/UsageStatisticsChart.tsx
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Chart, { ChartConfiguration} from 'chart.js/auto'; // Import necessary types
import { fetchAIData } from '../services/dataService';

const UsageStatisticsChart: React.FC = () => {
  const usageData = useSelector((state: any) => state.aiData?.usage_statistics);
  const dispatch = useDispatch();

  // Refs for the two separate charts
  const platformChartRef = useRef<Chart>();
  const countryChartRef = useRef<Chart>();

  useEffect(() => {
    const fetchUsageData = async () => {
      const data = await fetchAIData();
      dispatch({ type: 'SET_AI_DATA', payload: data });
    };

    fetchUsageData();
  }, [dispatch]);

  useEffect(() => {
    if (usageData) {
      // Destroy existing charts if they exist
      if (platformChartRef.current) {
        platformChartRef.current.destroy();
      }
      if (countryChartRef.current) {
        countryChartRef.current.destroy();
      }

      // Chart configuration for platform usage
      const platformCtx = document.getElementById('platformChart') as HTMLCanvasElement;
      const platformChartConfig: ChartConfiguration<'bar'> = {
        type: 'bar',
        data: {
          labels: Object.keys(usageData.by_platform),
          datasets: [{
            label: 'Usage by Platform',
            data: Object.values(usageData.by_platform),
            backgroundColor: 'rgba(75, 192, 192)',
            borderColor: 'rgba(75, 192, 192, 1)',
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
      };

      // Chart configuration for country usage
      const countryCtx = document.getElementById('countryChart') as HTMLCanvasElement;
      const countryChartConfig: ChartConfiguration<'bar'> = {
        type: 'bar',
        data: {
          labels: Object.keys(usageData.by_country),
          datasets: [{
            label: 'Usage by Country',
            data: Object.values(usageData.by_country),
            backgroundColor: 'rgba(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 1)',
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
      };

      // Create new charts
      platformChartRef.current = new Chart(platformCtx, platformChartConfig);
      countryChartRef.current = new Chart(countryCtx, countryChartConfig);
    }
  }, [usageData]);

  return (
    <div>
      <canvas id="platformChart" width={400} height={200} />
      <canvas id="countryChart" width={400} height={200} />
    </div>
  );
};

export default UsageStatisticsChart;
