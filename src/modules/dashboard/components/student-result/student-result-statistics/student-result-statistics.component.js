import { hoc } from '@utils/hoc';

import ReactApexChart from 'react-apexcharts';

import {
  StudentResultStatisticsWrapper,
  StudentResultStatisticsTitle,
  StudentResultStatisticsSubtitle,
  StudentResultStatisticsLastOver
} from './student-result-statistics.style';

const studentResultStatisticsProps = ({
  countLessons,
  rating,
  color = '#BA8D5B'
}) => {
  const xList = countLessons;
  const yList = rating;

  const chartSeries = [
    {
      name: '',
      data: yList
    }
  ];

  const chartOptions = {
    chart: { toolbar: 'false' },
    dataLabels: { enabled: !1 },
    stroke: { curve: 'smooth', width: 0 },
    markers: { size: 0, style: 'hollow' },
    xaxis: {
      categories: xList
    },
    grid: {
      show: true, // you can either change hear to disable all grids
      xaxis: {
        lines: {
          show: false //or just here to disable only x axis grids
        }
      },
      yaxis: {
        lines: {
          show: true //or just here to disable only y axis
        }
      }
    },
    colors: [color],
    tooltip: {
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0,
          opacityTo: 0.16,
          stops: [0, 100]
        },
        gradientToColors: ['#BA8D5B'],
        colors: ['#BA8D5B']
      }
    }
  };

  return {
    chartSeries,
    chartOptions
  };
};

export const StudentResultStatistics = hoc(
  studentResultStatisticsProps,
  ({
    chartSeries,
    chartOptions,
    courseTitle = '',
    average = 0,
    lastStatistics = '0',
    countLessons,
    rating,
    color,
    height = 400
  }) => {
    // if(!chartOptions) {
    //   return null
    // }

    return (
      <StudentResultStatisticsWrapper>
        <StudentResultStatisticsTitle>
          {courseTitle}
        </StudentResultStatisticsTitle>

        <StudentResultStatisticsSubtitle>
          ({average}) o'rtacha baholash
        </StudentResultStatisticsSubtitle>

        <StudentResultStatisticsLastOver>
          ({lastStatistics}) o'tgan oy
        </StudentResultStatisticsLastOver>

        <ReactApexChart
          options={chartOptions}
          series={chartSeries}
          type='area'
          height={height}
        />
      </StudentResultStatisticsWrapper>
    );
  }
);
