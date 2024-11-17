import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { IoEyeOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { FiInbox } from "react-icons/fi";
import { HiOutlineUsers } from "react-icons/hi2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
    // Line chart data
    const lineData = {
        labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
            {
                label: 'Total Revenue',
                data: [30, 50, 40, 60, 50, 70, 80, 90, 60, 75, 85],
                borderColor: '#4F46E5',
                backgroundColor: 'rgba(79, 70, 229, 0.1)',
                tension: 0.3, 
                pointBorderWidth: 3,
            },
            {
                label: 'Total Sales',
                data: [20, 40, 30, 50, 40, 60, 70, 80, 50, 65, 75],
                borderColor: '#38BDF8',
                backgroundColor: 'rgba(56, 189, 248, 0.1)',
                tension: 0.3,
                pointBorderWidth: 3,
            },
        ],
    };

    // Bar chart data
    const barData = {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [
            {
                label: 'Sales',
                data: [50, 60, 55, 70, 80, 75, 90],
                backgroundColor: '#4F46E5',
                borderRadius: 8,
            },
            {
                label: 'Revenue',
                data: [40, 50, 45, 65, 70, 60, 80],
                backgroundColor: '#38BDF8',
                borderRadius: 8,
            },
        ],
    };

    const filterButtons = ['Day', 'Week', 'Month'];

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                {/* Cards */}
                {[
                    { icon: <IoEyeOutline />, value: '3.456K', label: 'Total Views', change: '0.43%', changeType: 'up' },
                    { icon: <CiShoppingCart />, value: '$45,2K', label: 'Total Profit', change: '4.35%', changeType: 'up' },
                    { icon: <FiInbox />, value: '2.450', label: 'Total Product', change: '2.59%', changeType: 'up' },
                    { icon: <HiOutlineUsers />, value: '3.456', label: 'Total Users', change: '0.95%', changeType: 'down' },
                ].map((card, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded shadow-md flex flex-col relative"
                    >
                        <div
                            className="p-4 rounded-full text-blue-500 text-3xl mb-4"
                        >
                            {card.icon}
                        </div>
                       
                        <div className="text-2xl font-bold mb-1">{card.value}</div>

                  
                        <div className="text-sm text-gray-500">{card.label}</div>

                        <div
                            className={`absolute bottom-4 right-4 text-sm font-medium ${card.changeType === 'up' ? 'text-green-500' : 'text-blue-500'
                                }`}
                        >
                            {card.change} {card.changeType === 'up' ? '↑' : '↓'}
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Line Chart */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-800">Total Revenue & Sales</h2>
                            <p className="text-sm text-gray-500">12.04.2022 - 12.05.2022</p>
                        </div>
                        <div className="flex space-x-2">
                            {filterButtons.map((btn, index) => (
                                <button
                                    key={index}
                                    className={`px-4 py-1 rounded-md text-sm font-medium ${btn === 'Day'
                                        ? 'bg-gray-200 text-blue-600'
                                        : 'text-gray-500 hover:bg-gray-100'
                                        }`}
                                >
                                    {btn}
                                </button>
                            ))}
                        </div>
                    </div>
                    <Line
                        data={lineData}
                        options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                    display: true,
                                    position: 'top',
                                    labels: { color: '#6B7280' },
                                },
                                tooltip: { enabled: true },
                            },
                            scales: {
                                x: { grid: { display: false }, ticks: { color: '#9CA3AF' } },
                                y: { grid: { color: '#E5E7EB' }, ticks: { color: '#9CA3AF' } },
                            },
                        }}
                    />
                </div>

                {/* Bar Chart */}
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-lg font-semibold mb-4">Profit this week</h2>
                    <Bar data={barData} options={{
                        responsive: true,
                        plugins: {
                            legend: {
                                display: true,
                                position: 'top',
                                labels: { color: '#6B7280' },
                            },
                            tooltip: { enabled: true },
                        },
                        scales: {
                            x: {
                                grid: { display: false },
                                ticks: { color: '#9CA3AF' },
                            },
                            y: {
                                grid: { color: '#E5E7EB' },
                                ticks: { color: '#9CA3AF' },
                            },
                        },
                    }} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;