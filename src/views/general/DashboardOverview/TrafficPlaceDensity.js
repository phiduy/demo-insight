import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { EStackedBarChart } from '~/components/Charts/Echarts';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, Box } from '@material-ui/core';
import { trafficPlaceDensityData } from '../../../data/chart/trafficPlaceDensity';
import { uniq } from 'lodash';

// ----------------------------------------------------------------------

const useStyles = makeStyles(() => ({
  root: {}
}));

// ----------------------------------------------------------------------

TrafficPlaceDensity.propTypes = {
  className: PropTypes.string
};

function TrafficPlaceDensity({ className, ...other }) {
  const classes = useStyles();
  const chartLegend = uniq(trafficPlaceDensityData.map(d => d.status));
  const chartData = chartLegend.map(k => {
    return {
      name: k,
      type: 'bar',
      stack: 'total',
      emphasis: {
        focus: 'series'
      },
      data: trafficPlaceDensityData
        .filter(tempt => tempt.status === k)
        .map(item => item.num_contract)
    };
  });
  const chartLabel = uniq(trafficPlaceDensityData.map(item => item.date));

  return (
    <Card className={clsx(classes.root, className)} {...other}>
      <CardHeader
        title="Traffic Place Density"
        // subheader="(+43%) than last year"
      />
      <Box sx={{ mx: 3, mb: 1 }}>
        <EStackedBarChart
          chartOptions={{
            labels: chartLabel,
            series: chartData,
            legend: chartLegend
          }}
        />
      </Box>
    </Card>
  );
}

export default TrafficPlaceDensity;
