import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { EStackedBarChart } from '~/components/Charts/ECharts';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, Box } from '@material-ui/core';
import { totalBusinessHomeContractData } from '../../../data/chart/totalBusinessHomeContract';
import { uniq } from 'lodash';

// ----------------------------------------------------------------------

const useStyles = makeStyles(() => ({
  root: {}
}));

// ----------------------------------------------------------------------

TotalBusinessHomeContract.propTypes = {
  className: PropTypes.string
};

function TotalBusinessHomeContract({ className, ...other }) {
  const classes = useStyles();
  const chartLegend = uniq(
    totalBusinessHomeContractData.map(d => d.household_type_segment)
  );
  const chartData = chartLegend.map(k => {
    return {
      name: k,
      type: 'bar',
      stack: 'total',
      emphasis: {
        focus: 'series'
      },
      data: totalBusinessHomeContractData
        .filter(tempt => tempt.household_type_segment === k)
        .map(item => item.num_contract)
    };
  });
  const chartLabel = uniq(totalBusinessHomeContractData.map(item => item.date));

  return (
    <Card className={clsx(classes.root, className)} {...other}>
      <CardHeader
        title="Total business and home contract"
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

export default TotalBusinessHomeContract;
