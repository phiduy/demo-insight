import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { EStackedBarChart } from '~/components/Charts/ECharts';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, Box } from '@material-ui/core';
import { mostPackageGrowthData } from '../../../data/chart/mostPackageGrowth';
import { uniq } from 'lodash';

// ----------------------------------------------------------------------

const useStyles = makeStyles(() => ({
  root: {}
}));

// ----------------------------------------------------------------------

MostPackageGrowth.propTypes = {
  className: PropTypes.string
};

function MostPackageGrowth({ className, ...other }) {
  const classes = useStyles();
  const chartLegend = uniq(mostPackageGrowthData.map(d => d.current_package));
  const chartData = chartLegend.map(k => {
    return {
      name: k,
      type: 'bar',
      stack: 'total',
      emphasis: {
        focus: 'series'
      },
      data: mostPackageGrowthData
        .filter(tempt => tempt.current_package === k)
        .map(item => item.num_contract)
    };
  });
  const chartLabel = uniq(mostPackageGrowthData.map(item => item.date));

  return (
    <Card className={clsx(classes.root, className)} {...other}>
      <CardHeader title="Most package growth" />
      <Box sx={{ mx: 3, mb: 1 }}>
        <EStackedBarChart
          chartOptions={{
            labels: chartLabel,
            series: chartData,
            legend: chartLegend,
            optional: {
              legend: {
                type: 'scroll',
                top: 20
              }
            }
          }}
        />
      </Box>
    </Card>
  );
}

export default MostPackageGrowth;
