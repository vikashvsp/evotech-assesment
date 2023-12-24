import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const TransparentLineChart = ({ data, labels }) => {
     const chartRef = useRef(null);

     useEffect(() => {
          // const data = [10, 20, 15, 25, 18]
          const ctx = chartRef.current.getContext('2d');
          let chartInstance = null;

          if (chartInstance) {
               // Update the existing chart with new data
               chartInstance.data.labels = labels;
               chartInstance.data.datasets[0].data = data;
               chartInstance.update();
          } else {
               // Create a new chart instance
               chartInstance = new Chart(ctx, {
                    type: 'line',
                    data: {
                         labels: labels,
                         datasets: [
                              {
                                   label: 'SALES PROGRESS',
                                   data: [0, 10, 90],
                                   backgroundColor: 'rgba(75, 192, 192, 0.2)',
                                   borderWidth: 2,
                              },
                         ],
                    },
                    options: {
                         scales: {
                              x: {
                                   type: 'linear',
                                   position: 'bottom',
                              },
                              y: {
                                   min: 0,
                              },
                         },
                    },
               });
          }

          // Cleanup function
          return () => {
               if (chartInstance) {
                    chartInstance.destroy();
               }
          };
     }, [data, labels]);

     return <canvas ref={chartRef} width="400" height="200" />;
};

export default TransparentLineChart;
