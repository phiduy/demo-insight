import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { EStackedLineChart } from '~/components/Charts/ECharts';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, Box } from '@material-ui/core';
import { uniq } from 'lodash';
import { proportionData } from '../../../data/chart/proportion';
import { contractByPayTVdata } from '../../../data/chart/contractByPayTV';

// ----------------------------------------------------------------------

const useStyles = makeStyles(() => ({
  root: {}
}));

// ----------------------------------------------------------------------

ContractByPayTv.propTypes = {
  className: PropTypes.string
};

function ContractByPayTv({ className, ...other }) {
  const classes = useStyles();
  const chartLegend = uniq(contractByPayTVdata.map(d => d.current_package));
  const chartData = chartLegend.map(k => {
    return {
      name: k,
      type: 'line',
      data: contractByPayTVdata
        .filter(tempt => tempt.current_package === k)
        .map(item => item.num_contract)
    };
  });
  const chartLabel = uniq(proportionData.map(item => item.date));

  return (
    <Card className={clsx(classes.root, className)} {...other}>
      <CardHeader
        title="Contract By PayTv Service"
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

export default ContractByPayTv;
