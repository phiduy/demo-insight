import { merge } from 'lodash';
import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { EStackedLineChart } from '~/components/Charts/Echarts';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, Box } from '@material-ui/core';
import { userReturnData } from '../../../data/chart/userReturn';

// ----------------------------------------------------------------------

const useStyles = makeStyles(() => ({
  root: {}
}));

// ----------------------------------------------------------------------

UserReturn.propTypes = {
  className: PropTypes.string
};

function UserReturn({ className, ...other }) {
  const classes = useStyles();
  const chartLegend = ['current_active_contract', 'new_contract', 'return'];
  const chartData = chartLegend
    .map(k => {
      return {
        name: k,
        type: 'line',
        smooth: true,
        data: userReturnData.map(item => item[k])
      };
    })
    .filter(item => item !== undefined);
  const chartLabel = userReturnData.map(item => item.date);

  return (
    <Card className={clsx(classes.root, className)} {...other}>
      <CardHeader title="User Return" />
      <Box sx={{ mx: 3, mb: 1 }}>
        <EStackedLineChart
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

export default UserReturn;
