import { merge } from 'lodash';
import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';
import { ApexChartsOption } from '~/components/Charts/Apexcharts';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, Box } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(() => ({
  root: {}
}));

// ----------------------------------------------------------------------

WebsiteVisits.propTypes = {
  className: PropTypes.string
};

function WebsiteVisits({ className, ...other }) {
  const classes = useStyles();
  const chartData = [
    {
      name: 'Team A',
      type: 'column',
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
    },
    {
      name: 'Team B',
      type: 'area',
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
    },
    {
      name: 'Team C',
      type: 'line',
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
    }
  ];
  const chartOptions = merge(ApexChartsOption(), {
    stroke: { width: [0, 2, 3] },
    plotOptions: { bar: { columnWidth: '12%', endingShape: 'rounded' } },
    fill: { type: ['solid', 'gradient', 'solid'] },
    labels: [
      '01/01/2003',
      '02/01/2003',
      '03/01/2003',
      '04/01/2003',
      '05/01/2003',
      '06/01/2003',
      '07/01/2003',
      '08/01/2003',
      '09/01/2003',
      '10/01/2003',
      '11/01/2003'
    ],
    xaxis: { type: 'datetime' },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function(y) {
          if (typeof y !== 'undefined') {
            return y.toFixed(0) + ' visits';
          }
          return y;
        }
      }
    }
  });

  return (
    <Card className={clsx(classes.root, className)} {...other}>
      <CardHeader title="Website Visits" subheader="(+43%) than last year" />
      <Box sx={{ mx: 3, mb: 1 }}>
        <ReactApexChart
          type="line"
          height={364}
          series={chartData}
          options={chartOptions}
        />
      </Box>
    </Card>
  );
}

export default WebsiteVisits;
