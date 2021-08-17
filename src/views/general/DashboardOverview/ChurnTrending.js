import { merge } from 'lodash';
import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { EChartLine } from '~/components/Charts/Echarts';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, Box } from '@material-ui/core';
import { churnTrendData } from '../../../data/chart/churnTrend';

// ----------------------------------------------------------------------

const useStyles = makeStyles(() => ({
  root: {}
}));

// ----------------------------------------------------------------------

ChurnTrending.propTypes = {
  className: PropTypes.string
};

function ChurnTrending({ className, ...other }) {
  const classes = useStyles();
  const chartData = churnTrendData.map(item => item.churn_contract);
  const chartLabel = churnTrendData.map(item => item.date);

  return (
    <Card className={clsx(classes.root, className)} {...other}>
      <CardHeader title="Churn Trending Contract" />
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

export default ChurnTrending;
