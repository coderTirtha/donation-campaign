import React from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer, Tooltip } from 'recharts';
import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../../utilities/localstorage";

const Statistics = () => {
    const donated = getStoredDonations();
    const donation = useLoaderData();
    const donationPercentage = parseFloat((((donated.length) / (donation.length)) * 100).toFixed(2));
    const remainingPercentage = 100 - donationPercentage;
    const data = [
        { name: 'Total Donation', value: remainingPercentage, color: '#FF444A' },
        { name: 'Your Donation', value: donationPercentage, color: '#00C49F' }
    ]
    return (
        <div className='w-full h-[80vh]'>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={600} height={600}>
                    <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={110} label>
                        {
                            data.map(entry => <Cell fill={entry.color}></Cell>)
                        }
                    </Pie>
                    <Legend></Legend>
                    <Tooltip></Tooltip>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;