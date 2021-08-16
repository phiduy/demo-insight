import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { EBasicPieChart } from '~/components/Charts/ECharts';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, Box } from '@material-ui/core';
import { contractByRegionData } from '../../../data/chart/contractByRegion';
import { uniq } from 'lodash';

// ----------------------------------------------------------------------

const useStyles = makeStyles(() => ({
  root: {}
}));

// ----------------------------------------------------------------------

ContractByRegion.propTypes = {
  className: PropTypes.string
};

function ContractByRegion({ className, ...other }) {
  const classes = useStyles();
  const chartLegend = uniq(contractByRegionData.map(item => item.region));
  const chartData = chartLegend.map(r => {
    return {
      name: r,
      value: contractByRegionData
        .filter(tempt => tempt.region === r)
        .map(item => item.num_contract)
        .reduce((a, b) => a + b)
    };
  });
  console.log(chartData);

  return (
    <Card className={clsx(classes.root, className)} {...other}>
      <CardHeader
        title="Contract By Region"
        // subheader="(+43%) than last year"
      />
      <Box sx={{ mx: 3, mb: 1 }}>
        <EBasicPieChart
          chartOptions={{
            series: chartData,
            legend: chartLegend
          }}
        />
      </Box>
    </Card>
  );
}

export default ContractByRegion;
