import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, ArcElement, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, defaults } from 'chart.js';
// Register the things you use
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, RadialLinearScale, Filler, Title, Tooltip, Legend);
defaults.font.family = "'Inter', sans-serif";
defaults.color = 'red';
// ehscan-react-charts entries
export { FirstBar } from './barchart/FirstBar';
