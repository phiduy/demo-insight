import { merge } from 'lodash';
import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { EChartLine } from '~/components/Charts/Echarts';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, Box } from '@material-ui/core';
import { combinationServiceTypeChangeData } from '../../../data/chart/combinationServiceTypeChange';

// ----------------------------------------------------------------------

const useStyles = makeStyles(() => ({
  root: {}
}));
// [
//   {
//     name: 'a'
//   },
//   {
//     name: 'b'
//   },
//   {
//     name: 'a1'
//   },
//   {
//     name: 'a2'
//   },
//   {
//     name: 'b1'
//   },
//   {
//     name: 'c'
//   }
// ]

// [
//   {
//     source: 'a',
//     target: 'a1',
//     value: 5
//   },
//   {
//     source: 'a',
//     target: 'a2',
//     value: 3
//   },
//   {
//     source: 'b',
//     target: 'b1',
//     value: 8
//   },
//   {
//     source: 'a',
//     target: 'b1',
//     value: 3
//   },
//   {
//     source: 'b1',
//     target: 'a1',
//     value: 1
//   },
//   {
//     source: 'b1',
//     target: 'c',
//     value: 2
//   }
// ]

// ----------------------------------------------------------------------

CombinationServiceTypeChange.propTypes = {
  className: PropTypes.string
};

function CombinationServiceTypeChange({ className, ...other }) {
  const classes = useStyles();
  const chartData = combinationServiceTypeChangeData.map(
    item => item.num_contract
  );
  const chartLabel = combinationServiceTypeChangeData.map(item => item.date);
  const chartLegend = combinationServiceTypeChangeData.map(item => item.status);

  return (
    <Card className={clsx(classes.root, className)} {...other}>
      <CardHeader
        title="Changing of combination service type"
        // subheader="(+43%) than last year"
      />
      <Box sx={{ mx: 3, mb: 1 }}></Box>
    </Card>
  );
}

export default CombinationServiceTypeChange;
