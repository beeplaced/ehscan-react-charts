import { Bar, Line, Doughnut, PolarArea, Radar, Chart } from 'react-chartjs-2';
import { ChartOptions, Plugin, ChartDataset } from 'chart.js';
import React, { useEffect, useState } from "react";
import styles from '../style/chart.module.css';

export const FirstBar: React.FC = () => {

    const dataBar = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Sales',
                data: [120, 190, 170, 210, 180],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderRadius: 6,
            },
        ],
    };

    const optionsBar: ChartOptions<'bar'> = {
        responsive: true,
        maintainAspectRatio: false, // 🔑 THIS IS REQUIRED
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Sales ($)',
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Month',
                },
            },
        },
    };

    return (<>
        <div className='chartWrapper'>
            <div className='chartTitle'>Bar</div>
            <div className='chart-explanation'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
            <div className='chartCorpus'><Bar data={dataBar} options={optionsBar} /></div>
        </div>
    </>)
}