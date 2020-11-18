export const generateLineChartHTMLFromTheModelDistributionData = ({
  canvasElement,
  chartRef,
  chartConfig,
  modelNegativeCasesData,
  modelPositiveCasesData,
}) => {
  const ctx = canvasElement.getContext('2d');
  chartRef = new Chart(ctx, chartConfig);

  chartConfig.data.datasets[0].data = modelNegativeCasesData;
  chartConfig.data.datasets[1].data = modelPositiveCasesData;
  chartRef.update();
}

export const generateScatterChartHTMLFromTheModelROCData = ({
  containerElement,
  modelROCData
}) => {
  Plotly.newPlot(containerElement, [{
    x:  modelROCData.map(([x,_]) => x),
    y:  modelROCData.map(([_,y]) => y),
    mode: 'lines+markers',
    type: 'scatter',
    fill: 'tozeroy',
    fillColor: '#f44336',
  }]);
}

export const generateLineChartHTMLFromTheModelYoudenData = ({
  canvasElement,
  chartRef,
  chartConfig,
  modelYoudenData,
}) => {
  const ctx = canvasElement.getContext('2d');
  chartRef = new Chart(ctx, chartConfig);

  chartConfig.data.datasets[0].data = modelYoudenData.map(([_,[fvn,]]) => fvn);
  chartConfig.data.datasets[1].data = modelYoudenData.map(([_,[,fvp]]) => fvp);
  chartConfig.data.datasets[2].data = modelYoudenData.map(([_,[,,youdenIndex]]) => youdenIndex);
  chartRef.update();
}

export const generateLineChartHTMLFromTheModelAccuracyData = ({
  canvasElement,
  chartRef,
  chartConfig,
  modelAccuracyData,
}) => {
  const ctx = canvasElement.getContext('2d');
  chartRef = new Chart(ctx, chartConfig);

  chartConfig.data.datasets[0].data = modelAccuracyData.map(([_,accuracy]) => accuracy);
  chartRef.update();
}

export const generateScatterChartHTMLFromTheModelPRData = ({
  canvasElement,
  modelPRData
}) => {
  Plotly.newPlot(canvasElement, [{
    x: modelPRData.map(([x,_]) => x),
    y: modelPRData.map(([_,y]) => y),
    mode: 'lines+markers',
    type: 'scatter',
    fill: 'tozeroy',
    fillColor: '#f44336',
  }]);
}