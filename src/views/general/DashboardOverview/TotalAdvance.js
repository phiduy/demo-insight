import { merge } from 'lodash';
import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { EChartLine } from '~/components/Charts/Echarts';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, Box } from '@material-ui/core';
import { totalAdvanceData } from '../../../data/chart/totalAdvance';

// ----------------------------------------------------------------------

const useStyles = makeStyles(() => ({
  root: {}
}));

// ----------------------------------------------------------------------

TotalAdvance.propTypes = {
  className: PropTypes.string
};

function TotalAdvance({ className, ...other }) {
  const classes = useStyles();
  const chartData = totalAdvanceData.map(item => item.total_advance);
  const chartLabel = totalAdvanceData.map(item => item.date);
  // const chartLegend = followingContractData.map(item => item.status);

  return (
    <Card className={clsx(classes.root, className)} {...other}>
      <CardHeader
        title="Total Advance"
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

export default TotalAdvance;
