'use client'
import React, { useState } from 'react';
import styles from '@/components/dashboard/submission/style.module.css'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import { Button } from 'react-bootstrap';
import { useSession } from 'next-auth/react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

const options: Chart.ChartOptions = {
  responsive: true,
  tension: 0.5,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

const labels: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const data: Chart.ChartData = {
  labels,
  datasets: [
    {
      label: 'Dataset 2',
      type: 'line',
      data: [65, 85, 90, 65, 45, 80, 50],
      fill: true,
      backgroundColor: '#FF718B',
      borderColor: '#FF718B',
      fill: (context: Chart.ChartContext) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, 'rgba(250,174,50,1)');
        gradient.addColorStop(1, 'rgba(250,174,50,0)');
        return gradient;
      },
    },
    {
      label: 'Dataset 1',
      type: 'bar',
      data: [60, 80, 90, 70, 40, 75, 45],
      backgroundColor: '#2576EF',
    },
  ],
};

const SubmissionChart: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('');
  const [selectedTimeline, setSelectedTimeline] = useState<string>('');
//   const { data: session } = useSession();

  const handleDepartmentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDepartment(event.target.value);
  };

  const handleTimelineChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTimeline(event.target.value);
  };

  function callTimeApi() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + session?.user?.access_token);
    myHeaders.append("Content-Type", "application/json");

    var graphql = JSON.stringify({
      query: "query {\r\n    submissions {\r\n        time\r\n        totalScore\r\n    }\r\n}\r\n",
      variables: {}
    })
    var requestOptions = {
      method: 'POST', 
      headers: myHeaders,
      body: graphql
    };

    fetch("http://localhost:9000/assessment-tool/admin", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  const handleTestButtonClick = () => {
    callTimeApi();
  };
  
  return (
    <div>
      {/* <Button onClick={handleTestButtonClick}>Time</Button> */}
      <div className={styles.topBar}>
        <h5 className={`${styles.topscoreheading}`}>Submission</h5>
        <div className={styles.dropdowns}>

          <select id="categoryDropdown" value={selectedDepartment} onChange={handleDepartmentChange}>
            <option value="category1">Development</option>
            <option value="category2">HR</option>
            <option value="category3">Infra 2</option>
          </select>

          <select id="intervalDropdown" value={selectedTimeline} onChange={handleTimelineChange}>
            <option value="interval1">Weekly</option>
            <option value="interval2">Monthly</option>
            <option value="interval3">Custom Range</option>
          </select>
        </div>
      </div>
      <Line options={options} data={data} />
    </div>
  );
};

export default SubmissionChart;
