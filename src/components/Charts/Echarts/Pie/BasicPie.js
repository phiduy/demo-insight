import React from 'react';
// import the core library.
import ReactEChartsCore from 'echarts-for-react/lib/core';
// Import the echarts core module, which provides the necessary interfaces for using echarts.
import * as echarts from 'echarts/core';
// Import charts, all with Chart suffix
import { PieChart } from 'echarts/charts';
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
  PieChart,
  CanvasRenderer,
  DataZoomComponent,
  ToolboxComponent
]);

const EBasicPieChart = props => {
  const { chartOptions, loading } = props;
  const options = merge(
    {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: chartOptions.legend
      },
      series: [
        {
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          selectedMode: 'single',
          data: chartOptions.series,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
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

EBasicPieChart.propTypes = {
  loading: PropTypes.bool,
  chartOptions: PropTypes.shape({
    legend: PropTypes.arrayOf(PropTypes.string),
    series: PropTypes.array,
    optional: PropTypes.object
  }).isRequired
};

export default EBasicPieChart;
