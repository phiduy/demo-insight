import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { EBasicBubbleChart } from '~/components/Charts/Echarts';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, Box } from '@material-ui/core';
import { contractCanceledByAgeData } from '../../../data/chart/contractCanceledByAge';
import { uniq } from 'lodash';

// ----------------------------------------------------------------------

const useStyles = makeStyles(() => ({
  root: {}
}));

// ----------------------------------------------------------------------

ContractCanceledByAge.propTypes = {
  className: PropTypes.string
};

function ContractCanceledByAge({ className, ...other }) {
  const classes = useStyles();
  const chartLegend = uniq(contractCanceledByAgeData.map(d => d.age_segment));
  const chartData = chartLegend.map(k => {
    return {
      name: k,
      type: 'scatter',
      symbolSize: function(val) {
        return val / 100;
      },
      data: contractCanceledByAgeData
        .filter(tempt => tempt.age_segment === k)
        .map(item => item.num_contract),
      animationDelay: function(idx) {
        return idx * 5;
      }
    };
  });
  const chartLabel = uniq(contractCanceledByAgeData.map(item => item.date));

  return (
    <Card className={clsx(classes.root, className)} {...other}>
      <CardHeader title="Contract canceled by package" />
      <Box sx={{ mx: 3, mb: 1 }}>
        <EBasicBubbleChart
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

export default ContractCanceledByAge;
