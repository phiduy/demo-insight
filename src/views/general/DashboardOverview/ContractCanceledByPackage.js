import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { EStackedBarChart } from '~/components/Charts/Echarts';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, Box } from '@material-ui/core';
import { contractCanceledByPackageData } from '../../../data/chart/contractCanceledByPackage';
import { uniq } from 'lodash';

// ----------------------------------------------------------------------

const useStyles = makeStyles(() => ({
  root: {}
}));

// ----------------------------------------------------------------------

ContractCanceledByPackage.propTypes = {
  className: PropTypes.string
};

function ContractCanceledByPackage({ className, ...other }) {
  const classes = useStyles();
  const chartLegend = uniq(
    contractCanceledByPackageData.map(d => d.age_segment)
  );
  const chartData = chartLegend.map(k => {
    return {
      name: k,
      type: 'bar',
      stack: 'total',
      emphasis: {
        focus: 'series'
      },
      data: contractCanceledByPackageData
        .filter(tempt => tempt.age_segment === k)
        .map(item => item.num_contract)
    };
  });
  const chartLabel = uniq(contractCanceledByPackageData.map(item => item.date));

  return (
    <Card className={clsx(classes.root, className)} {...other}>
      <CardHeader title="Contract canceled by package" />
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

export default ContractCanceledByPackage;
