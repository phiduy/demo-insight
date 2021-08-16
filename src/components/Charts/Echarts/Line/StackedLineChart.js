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
  ToolboxComponent,
  LegendComponent
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
  ToolboxComponent,
  LegendComponent
]);

const EStackedLineChart = props => {
  const { chartOptions, loading } = props;
  const options = merge(
    {
      // title: {
      //   text: '折线图堆叠'
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
      legend: {
        data: chartOptions.legend
      },
      // grid: {
      //   left: '3%',
      //   right: '4%',
      //   bottom: '3%',
      //   containLabel: true
      // },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: chartOptions.labels
      },
      yAxis: {
        type: 'value'
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

EStackedLineChart.propTypes = {
  loading: PropTypes.bool,
  chartOptions: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string),
    series: PropTypes.array,
    legend: PropTypes.arrayOf(PropTypes.string),
    optional: PropTypes.object
  }).isRequired
};

export default EStackedLineChart;
