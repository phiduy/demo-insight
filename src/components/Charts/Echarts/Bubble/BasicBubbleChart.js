import React from 'react';
// import the core library.
import ReactEChartsCore from 'echarts-for-react/lib/core';
// Import the echarts core module, which provides the necessary interfaces for using echarts.
import * as echarts from 'echarts/core';
// Import charts, all with Chart suffix
import { ScatterChart } from 'echarts/charts';
// import components, all suffixed with Component
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent,
  ToolboxComponent,
  DataZoomComponent
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
  ScatterChart,
  CanvasRenderer,
  ToolboxComponent,
  LegendComponent,
  DataZoomComponent
]);

const EBasicBubbleChart = props => {
  const { chartOptions, loading } = props;
  const options = merge(
    {
      legend: {
        data: chartOptions.legend,
        left: 'right'
      },
      tooltip: {
        position: 'top'
        // formatter: function(params) {
        //   return (
        //     params.value[2] +
        //     ' canceled in ' +
        //     hours[params.value[0]] +
        //     ' of ' +
        //     days[params.value[1]]
        //   );
        // }
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
      xAxis: {
        type: 'category',
        data: chartOptions.labels,
        boundaryGap: false,
        splitLine: {
          show: true
        },
        axisLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: false
        }
      },
      series: chartOptions.series
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

EBasicBubbleChart.propTypes = {
  loading: PropTypes.bool,
  chartOptions: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string),
    series: PropTypes.array,
    legend: PropTypes.arrayOf(PropTypes.string),
    optional: PropTypes.object
  }).isRequired
};

export default EBasicBubbleChart;
