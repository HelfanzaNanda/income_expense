import { InputHTMLAttributes } from "react";
import React from 'react';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Pie } from 'react-chartjs-2';
// import { PieChart } from 'react-minimal-pie-chart';
import DonutChart from 'react-donut-chart';
import { Item } from "react-donut-chart/dist/DonutChart";


// ChartJS.register(ArcElement, Tooltip, Legend);

// export const data = {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [
//       {
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)',
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

interface Props {
    label : string;
    total : number;
    data : Item[];
}

export default function Chart({ label, total, data }: Props) {

    // const datas = [
    //     { label: 'Give you up', value: 25, },
    //     { label: '', value: 75, isEmpty: true, },
    //   ]
    return (
        <div className="bg-white rounded-md p-5 flex flex-col items-center">
            <p className="text-2xl mb-3">{label}</p>
            <p className="text-2xl mb-10">{total}</p>
            <DonutChart width={630} data={data} />;
            {/* <Pie data={data} height={10} width={10} /> */}
        </div>
    );

}
