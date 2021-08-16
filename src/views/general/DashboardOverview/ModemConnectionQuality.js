import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { EStackedBarChart } from '~/components/Charts/ECharts';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, Box } from '@material-ui/core';
import { modemConnectQualityData } from '../../../data/chart/modemConnectQuality';
import { uniq } from 'lodash';

// ----------------------------------------------------------------------

const useStyles = makeStyles(() => ({
  root: {}
}));

// ----------------------------------------------------------------------

ModemConnectionQuality.propTypes = {
  className: PropTypes.string
};

function ModemConnectionQuality({ className, ...other }) {
  const classes = useStyles();
  const chartLegend = uniq(modemConnectQualityData.map(d => d.signal_segment));
  const chartData = chartLegend.map(k => {
    return {
      name: k,
      type: 'bar',
      stack: 'total',
      emphasis: {
        focus: 'series'
      },
      data: modemConnectQualityData
        .filter(tempt => tempt.signal_segment === k)
        .map(item => item.total_connection)
    };
  });
  const chartLabel = uniq(modemConnectQualityData.map(item => item.model));

  return (
    <Card className={clsx(classes.root, className)} {...other}>
      <CardHeader
        title="Modem Connection Quality"
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

export default ModemConnectionQuality;
