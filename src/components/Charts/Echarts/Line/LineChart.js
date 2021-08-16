import React from 'react';
// import the core library.
import ReactEChartsCore from 'echarts-for-react/lib/core';
// Import the echarts core module, which provides the necessary interfaces for using echarts.
import * as echarts from 'echarts/core';
// Import charts, all with Chart suffix
import { LineChart } from 'echarts/charts';
// import components, all suffixed with Component
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  DataZoomComponent,
  ToolboxComponent
} from 'echarts/components';
// Import renderer, note that introducing the CanvasRenderer or SVGRenderer is a required step
import { CanvasRenderer } from 'echarts/renderers';
import PropTypes from 'prop-types';
import { merge } from 'lodash';

// Register the required components
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
  DataZoomComponent,
  ToolboxComponent
]);

const ELineChart = props => {
  const { chartOptions, loading } = props;
  const options = merge(
    {
      // title: {
      //   text: '',
      // },
      tooltip: {
        trigger: 'axis'
      },
      dataZoom: [
        {
          type: 'inside',
          start: 0,
          end: 10
        },
        {
          start: 0,
          end: 10
        }
      ],
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: chartOptions.labels
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: chartOptions.series,
          type: 'line',
          smooth: true
        }
      ]
    },
    chartOptions.optional
  );
  return (
    <ReactEChartsCore
      showLoading={loading}
      echarts={echarts}
      option={options}
      notMerge={true}
      lazyUpdate={true}
    />
  );
};

ELineChart.propTypes = {
  loading: PropTypes.bool,
  chartOptions: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string),
    series: PropTypes.array,
    optional: PropTypes.object
  }).isRequired
};

export default ELineChart;
