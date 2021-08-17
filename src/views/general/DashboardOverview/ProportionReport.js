import { merge } from 'lodash';
import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { EStackedLineChart } from '~/components/Charts/Echarts';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, Box } from '@material-ui/core';
import { proportionData } from '../../../data/chart/proportion';

// ----------------------------------------------------------------------

const useStyles = makeStyles(() => ({
  root: {}
}));

// ----------------------------------------------------------------------

ProportionReport.propTypes = {
  className: PropTypes.string
};

function ProportionReport({ className, ...other }) {
  const classes = useStyles();
  const chartData = Object.keys(proportionData[0])
    .map(k => {
      if (k !== 'date') {
        return {
          name: k,
          type: 'line',
          smooth: true,
          data: proportionData.map(item => item[k])
        };
      }
    })
    .filter(item => item !== undefined);
  const chartLabel = proportionData.map(item => item.date);
  const chartLegend = ['current_active_contract', 'new_contract', 'return'];

  return (
    <Card className={clsx(classes.root, className)} {...other}>
      <CardHeader
        title="Proportion"
        // subheader="(+43%) than last year"
      />
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

export default ProportionReport;
