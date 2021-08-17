import { merge } from 'lodash';
import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { EChartLine } from '~/components/Charts/Echarts';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, Box } from '@material-ui/core';
import { acquisitionTrendData } from '../../../data/chart/acquisitionTrend';

// ----------------------------------------------------------------------

const useStyles = makeStyles(() => ({
  root: {}
}));

// ----------------------------------------------------------------------

AcquisitionTrend.propTypes = {
  className: PropTypes.string
};

function AcquisitionTrend({ className, ...other }) {
  const classes = useStyles();
  const chartData = acquisitionTrendData.map(item => item.new_contract);
  const chartLabel = acquisitionTrendData.map(item => item.date);
  // const chartLegend = followingContractData.map(item => item.status);

  return (
    <Card className={clsx(classes.root, className)} {...other}>
      <CardHeader
        title="Acquisition Trend"
        // subheader="(+43%) than last year"
      />
      <Box sx={{ mx: 3, mb: 1 }}>
        <EChartLine
          chartOptions={{
            labels: chartLabel,
            series: chartData
          }}
        />
      </Box>
    </Card>
  );
}

export default AcquisitionTrend;
