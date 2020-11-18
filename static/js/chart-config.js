export const lineChartConfig = ({
  labels = [],
  datasets = [],
  xAxisLabelString = "",
  yAxisLabelString = ""
} = {}) => ({
  type: 'line',
  data: {
    labels,
    datasets
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: ''
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: xAxisLabelString
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: yAxisLabelString
        }
      }]
    }
  }
})