import { Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
} from 'chart.js'

const Chart1 = () => {
  ChartJS.register(ArcElement, Tooltip, Legend)

  const data = {
    labels: ['Paid', 'Recieved', 'You Owed', 'You are Owe'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  return (
    <div className='h-full -ml-96 mt-14'>
      <Doughnut
        data={data}
        height='100%'
        width='100%'
        options={{ maintainAspectRatio: false }}
      />
    </div>
  )
}

export default Chart1
