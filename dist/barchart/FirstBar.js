import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Bar } from 'react-chartjs-2';
export const FirstBar = () => {
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
    const optionsBar = {
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
    return (_jsx(_Fragment, { children: _jsxs("div", { className: 'chartWrapper', children: [_jsx("div", { className: 'chartTitle', children: "Bar" }), _jsx("div", { className: 'chart-explanation', children: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." }), _jsx("div", { className: 'chartCorpus', children: _jsx(Bar, { data: dataBar, options: optionsBar }) })] }) }));
};
