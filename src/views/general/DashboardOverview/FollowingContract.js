import { merge } from 'lodash';
import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { EChartLine } from '~/components/Charts/Echarts';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, Box } from '@material-ui/core';
import { followingContractData } from '../../../data/chart/followingContact';

// ----------------------------------------------------------------------

const useStyles = makeStyles(() => ({
  root: {}
}));

// ----------------------------------------------------------------------

FollowingContract.propTypes = {
  className: PropTypes.string
};

function FollowingContract({ className, ...other }) {
  const classes = useStyles();
  const chartData = followingContractData.map(item => item.num_contract);
  const chartLabel = followingContractData.map(item => item.date);
  const chartLegend = followingContractData.map(item => item.status);

  return (
    <Card className={clsx(classes.root, className)} {...other}>
      <CardHeader
        title="Following Contract"
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

export default FollowingContract;
