import { ModelValidation } from './js/model-validation.js';
import { lineChartConfig } from './js/chart-config.js';
import { modelAData, modelBData } from './js/models-data.js';
import {
  generateLineChartHTMLFromTheModelDistributionData,
  generateScatterChartHTMLFromTheModelROCData,
  generateLineChartHTMLFromTheModelYoudenData,
  generateLineChartHTMLFromTheModelAccuracyData,
  generateScatterChartHTMLFromTheModelPRData
} from './js/html-data-charts-generator.js';
import {
  generateContingTableLoadingHTMLFromTheModelDataFirstSlice,
  generateContingTableFinalHTMLFromTheModelDataFirstSlice,
  generateContingTableLoadingHTMLFromTheModelDataLastSlice,
  generateContingTableFinalHTMLFromTheModelDataLastSlice,

  generateROCTableLoadingHTMLFromTheModelDataFirstSlice,
  generateROCTableFinalHTMLFromTheModelDataFirstSlice,
  generateROCTableLoadingHTMLFromTheModelDataLastSlice,
  generateROCTableFinalHTMLFromTheModelDataLastSlice,

  generateYoudenTableLoadingHTMLFromTheModelDataFirstSlice,
  generateYoudenTableFinalHTMLFromTheModelDataFirstSlice,
  generateYoudenTableLoadingHTMLFromTheModelDataLastSlice,
  generateYoudenTableFinalHTMLFromTheModelDataLastSlice,

  generateAccuracyTableLoadingHTMLFromTheModelDataFirstSlice,
  generateAccuracyTableFinalHTMLFromTheModelDataFirstSlice,
  generateAccuracyTableLoadingHTMLFromTheModelDataLastSlice,
  generateAccuracyTableFinalHTMLFromTheModelDataLastSlice,

  generatePRTableLoadingHTMLFromTheModelDataFirstSlice,
  generatePRTableFinalHTMLFromTheModelDataFirstSlice,
  generatePRTableLoadingHTMLFromTheModelDataLastSlice,
  generatePRTableFinalHTMLFromTheModelDataLastSlice,

  generateSolutionResultsComparisonTableLoadingHTML,
  generateSolutionResultsComparisonTableFinalHTML,
} from './js/html-data-tables-generator.js';

// Model validation calculus

// Instanciate Models

// Model "A"
const modelA = new ModelValidation(modelAData);

// Model "B"
const modelB = new ModelValidation(modelBData);

// Chart Configs

// Model "A"
const configModelADistribCurve = lineChartConfig({
  labels: Object.keys(modelAData),
  datasets: [{
    label: 'Piezas buenas',
    backgroundColor: 'rgba(229, 115, 115, 0.5)',
    borderColor: '#f44336',
    data: [],
    fill: 'start',
  }, {
    label: 'Piezas con fallas',
    backgroundColor: 'rgba(129, 199, 132, 0.5)',
    borderColor: '#4caf50',
    data: [],
    fill: 'start',
  }],
  xAxisLabelString: 'Indicador',
  yAxisLabelString: 'Cantidad'
})

const configModelAYoudenCurve = lineChartConfig({
  labels: Object.keys(modelAData),
  datasets: [{
    label: 'FVN',
    borderColor: '#f44336',
    data: [],
  }, {
    label: 'FVP',
    borderColor: '#4caf50',
    data: [],
  }, {
    label: 'Indice Youden',
    borderColor: '#000',
    data: [],
  }],
  xAxisLabelString: 'Indicador',
  yAxisLabelString: 'Valor'
})

const configModelAAccuracyCurve = lineChartConfig({
  labels: Object.keys(modelAData),
  datasets: [{
    label: 'Exactitud',
    borderColor: '#4caf50',
    data: [],
  }],
  xAxisLabelString: 'Indicador',
  yAxisLabelString: 'Exactitud'
})

// Model "B"
const configModelBDistribCurve = lineChartConfig({
  labels: Object.keys(modelBData),
  datasets: [{
    label: 'Piezas buenas',
    backgroundColor: 'rgba(229, 115, 115, 0.5)',
    borderColor: '#f44336',
    data: [],
    fill: 'start',
  }, {
    label: 'Piezas con fallas',
    backgroundColor: 'rgba(129, 199, 132, 0.5)',
    borderColor: '#4caf50',
    data: [],
    fill: 'start',
  }],
  xAxisLabelString: 'Indicador',
  yAxisLabelString: 'Cantidad'
})

const configModelBYoudenCurve = lineChartConfig({
  labels: Object.keys(modelBData),
  datasets: [{
    label: 'FVN',
    borderColor: '#f44336',
    data: [],
  }, {
    label: 'FVP',
    borderColor: '#4caf50',
    data: [],
  }, {
    label: 'Indice Youden',
    borderColor: '#000',
    data: [],
  }],
  xAxisLabelString: 'Indicador',
  yAxisLabelString: 'Valor'
})

const configModelBAccuracyCurve = lineChartConfig({
  labels: Object.keys(modelBData),
  datasets: [{
    label: 'Exactitud',
    borderColor: '#4caf50',
    data: [],
  }],
  xAxisLabelString: 'Indicador',
  yAxisLabelString: 'Exactitud'
})

// Models Info

// Model "A"
const modelA_CTData = modelA.getCTIndicatorsForEachVC();
const modelA_CTNegativeCasesData = modelA.getDistributionCurveDataForNegativeCases();
const modelA_CTPositiveCasesData = modelA.getDistributionCurveDataForPositiveCases();

const modelA_ROCData = modelA.getROCCurveDataForEachVC();

const modelA_ROCDataUpdated = modelA_ROCData
  .map(([_,v]) => v.slice(0,2));

const modelA_YoudenData = modelA.getYoudenCurveDataForEachVC();

const modelA_AccuracyData = modelA.getAccuracyCurveDataForEachVC();

const modelA_PRData = modelA.getPRCurveDataForEachVC();

const modelA_PRDataUpdated = modelA_PRData
  .map(([_,v]) => v);

// Model "B"
const modelB_CTData = modelB.getCTIndicatorsForEachVC();
const modelB_CTNegativeCasesData = modelB.getDistributionCurveDataForNegativeCases();
const modelB_CTPositiveCasesData = modelB.getDistributionCurveDataForPositiveCases();

const modelB_ROCData = modelB.getROCCurveDataForEachVC();

const modelB_ROCDataUpdated = modelB_ROCData
  .map(([_,v]) => v.slice(0,2));

const modelB_YoudenData = modelB.getYoudenCurveDataForEachVC();

const modelB_AccuracyData = modelB.getAccuracyCurveDataForEachVC();

const modelB_PRData = modelB.getPRCurveDataForEachVC();

const modelB_PRDataUpdated = modelB_PRData
  .map(([_,v]) => v);

// End Model validation calculus


window.onload = function() {
  window["model-A-distrib-curve"].innerHTML = "<i class='fas fa-spinner fa-spin'></i>";

  setTimeout(() => {
    window["model-A-distrib-curve"].innerHTML = "<canvas id='canvas-model-A-distrib-curve'></canvas>";

    generateLineChartHTMLFromTheModelDistributionData({
      canvasElement: window['canvas-model-A-distrib-curve'],
      chartRef: window.modelADistrCurve,
      chartConfig: configModelADistribCurve,
      modelNegativeCasesData: modelA_CTNegativeCasesData,
      modelPositiveCasesData: modelA_CTPositiveCasesData,
    })
  }, 1000);

  generateContingTableLoadingHTMLFromTheModelDataFirstSlice({
    modelCTDataFirstSlice: modelA_CTData.slice(0,20),
    contingTableElementFirstSlice: window[`model-A-conting-table-part-1`]
  })

  setTimeout(() => {
    window[`model-A-conting-table-part-1`].innerHTML = `
      <div class="model-conting-table__item-row">
        <div class="model-conting-table__item-column column-header column-flex-1">Indic.</div>
        <div class="model-conting-table__item-column column-header column-flex-1">VP</div>
        <div class="model-conting-table__item-column column-header column-flex-1">FN</div>
        <div class="model-conting-table__item-column column-header column-flex-1">FP</div>
        <div class="model-conting-table__item-column column-header column-flex-1">VN</div>
      </div>
    `;

    generateContingTableFinalHTMLFromTheModelDataFirstSlice({
      modelCTDataFirstSlice: modelA_CTData.slice(0,20),
      contingTableElementFirstSlice: window[`model-A-conting-table-part-1`]
    })
  }, 2000)

  generateContingTableLoadingHTMLFromTheModelDataLastSlice({
    modelCTDataLastSlice: modelA_CTData.slice(20),
    contingTableElementLastSlice: window[`model-A-conting-table-part-2`]
  })

  setTimeout(() => {
    window[`model-A-conting-table-part-2`].innerHTML = `
      <div class="model-conting-table__item-row">
        <div class="model-conting-table__item-column column-header column-flex-1">Indic.</div>
        <div class="model-conting-table__item-column column-header column-flex-1">VP</div>
        <div class="model-conting-table__item-column column-header column-flex-1">FN</div>
        <div class="model-conting-table__item-column column-header column-flex-1">FP</div>
        <div class="model-conting-table__item-column column-header column-flex-1">VN</div>
      </div>
    `;

    generateContingTableFinalHTMLFromTheModelDataLastSlice({
      modelCTDataLastSlice: modelA_CTData.slice(20),
      contingTableElementLastSlice: window[`model-A-conting-table-part-2`]
    })
  }, 3000)

  window["model-B-distrib-curve"].innerHTML = "<i class='fas fa-spinner fa-spin'></i>";

  setTimeout(() => {
    window["model-B-distrib-curve"].innerHTML = "<canvas id='canvas-model-B-distrib-curve'></canvas>";

    generateLineChartHTMLFromTheModelDistributionData({
      canvasElement: window['canvas-model-B-distrib-curve'],
      chartRef: window.modelBDistrCurve,
      chartConfig: configModelBDistribCurve,
      modelNegativeCasesData: modelB_CTNegativeCasesData,
      modelPositiveCasesData: modelB_CTPositiveCasesData
    })
  }, 4000);

  generateContingTableLoadingHTMLFromTheModelDataFirstSlice({
    modelCTDataFirstSlice: modelB_CTData.slice(0,20),
    contingTableElementFirstSlice: window[`model-B-conting-table-part-1`]
  })

  setTimeout(() => {
    window[`model-B-conting-table-part-1`].innerHTML = `
      <div class="model-conting-table__item-row">
        <div class="model-conting-table__item-column column-header column-flex-1">Indic.</div>
        <div class="model-conting-table__item-column column-header column-flex-1">VP</div>
        <div class="model-conting-table__item-column column-header column-flex-1">FN</div>
        <div class="model-conting-table__item-column column-header column-flex-1">FP</div>
        <div class="model-conting-table__item-column column-header column-flex-1">VN</div>
      </div>
    `;

    generateContingTableFinalHTMLFromTheModelDataFirstSlice({
      modelCTDataFirstSlice: modelB_CTData.slice(0,20),
      contingTableElementFirstSlice: window[`model-B-conting-table-part-1`]
    })
  }, 5000)

  generateContingTableLoadingHTMLFromTheModelDataLastSlice({
    modelCTDataLastSlice: modelB_CTData.slice(20),
    contingTableElementLastSlice: window[`model-B-conting-table-part-2`]
  })

  setTimeout(() => {
    window[`model-B-conting-table-part-2`].innerHTML = `
      <div class="model-conting-table__item-row">
        <div class="model-conting-table__item-column column-header column-flex-1">Indic.</div>
        <div class="model-conting-table__item-column column-header column-flex-1">VP</div>
        <div class="model-conting-table__item-column column-header column-flex-1">FN</div>
        <div class="model-conting-table__item-column column-header column-flex-1">FP</div>
        <div class="model-conting-table__item-column column-header column-flex-1">VN</div>
      </div>
    `;

    generateContingTableFinalHTMLFromTheModelDataLastSlice({
      modelCTDataLastSlice: modelB_CTData.slice(20),
      contingTableElementLastSlice: window[`model-B-conting-table-part-2`]
    })
  }, 6000)

  window["model-A-roc-curve"].innerHTML = "<i class='fas fa-spinner fa-spin'></i>";

  setTimeout(() => {
    window["model-A-roc-curve"].innerHTML = "";

    generateScatterChartHTMLFromTheModelROCData({
      containerElement: window["model-A-roc-curve"],
      modelROCData: modelA_ROCDataUpdated
    })
  }, 7000);

  generateROCTableLoadingHTMLFromTheModelDataFirstSlice({
    modelROCDataFirstSlice: modelA_ROCData.slice(0,20),
    ROCTableElementFirstSlice: window[`model-A-roc-table-part-1`]
  })

  setTimeout(() => {
    window[`model-A-roc-table-part-1`].innerHTML = `
      <div class="model-roc-table__item-row">
        <div class="model-roc-table__item-column column-header column-flex-1">Indic.</div>
        <div class="model-roc-table__item-column column-header column-flex-1">FFP</div>
        <div class="model-roc-table__item-column column-header column-flex-1">FVP</div>
        <div class="model-roc-table__item-column column-header column-flex-1">FVN</div>
      </div>
    `;

    generateROCTableFinalHTMLFromTheModelDataFirstSlice({
      modelROCDataFirstSlice: modelA_ROCData.slice(0,20),
      ROCTableElementFirstSlice: window[`model-A-roc-table-part-1`]
    })
  }, 8000)

  generateROCTableLoadingHTMLFromTheModelDataLastSlice({
    modelROCDataLastSlice: modelA_ROCData.slice(20),
    ROCTableElementLastSlice: window[`model-A-roc-table-part-2`]
  })

  setTimeout(() => {
    window[`model-A-roc-table-part-2`].innerHTML = `
      <div class="model-roc-table__item-row">
        <div class="model-roc-table__item-column column-header column-flex-1">Indic.</div>
        <div class="model-roc-table__item-column column-header column-flex-1">FFP</div>
        <div class="model-roc-table__item-column column-header column-flex-1">FVP</div>
        <div class="model-roc-table__item-column column-header column-flex-1">FVN</div>
      </div>
    `;

    generateROCTableFinalHTMLFromTheModelDataLastSlice({
      modelROCDataLastSlice: modelA_ROCData.slice(20),
      ROCTableElementLastSlice: window[`model-A-roc-table-part-2`]
    })
  }, 9000)

  window["model-B-roc-curve"].innerHTML = "<i class='fas fa-spinner fa-spin'></i>";

  setTimeout(() => {
    window["model-B-roc-curve"].innerHTML = "";

    generateScatterChartHTMLFromTheModelROCData({
      containerElement: window["model-B-roc-curve"],
      modelROCData: modelB_ROCDataUpdated
    })
  }, 10000);

  generateROCTableLoadingHTMLFromTheModelDataFirstSlice({
    modelROCDataFirstSlice: modelB_ROCData.slice(0,20),
    ROCTableElementFirstSlice: window[`model-B-roc-table-part-1`]
  })

  setTimeout(() => {
    window[`model-B-roc-table-part-1`].innerHTML = `
      <div class="model-roc-table__item-row">
        <div class="model-roc-table__item-column column-header column-flex-1">Indic.</div>
        <div class="model-roc-table__item-column column-header column-flex-1">FFP</div>
        <div class="model-roc-table__item-column column-header column-flex-1">FVP</div>
        <div class="model-roc-table__item-column column-header column-flex-1">FVN</div>
      </div>
    `;

    generateROCTableFinalHTMLFromTheModelDataFirstSlice({
      modelROCDataFirstSlice: modelB_ROCData.slice(0,20),
      ROCTableElementFirstSlice: window[`model-B-roc-table-part-1`]
    })
  }, 11000)

  generateROCTableLoadingHTMLFromTheModelDataLastSlice({
    modelROCDataLastSlice: modelB_ROCData.slice(20),
    ROCTableElementLastSlice: window[`model-B-roc-table-part-2`]
  })

  setTimeout(() => {
    window[`model-B-roc-table-part-2`].innerHTML = `
      <div class="model-roc-table__item-row">
        <div class="model-roc-table__item-column column-header column-flex-1">Indic.</div>
        <div class="model-roc-table__item-column column-header column-flex-1">FFP</div>
        <div class="model-roc-table__item-column column-header column-flex-1">FVP</div>
        <div class="model-roc-table__item-column column-header column-flex-1">FVN</div>
      </div>
    `;

    generateROCTableFinalHTMLFromTheModelDataLastSlice({
      modelROCDataLastSlice: modelB_ROCData.slice(20),
      ROCTableElementLastSlice: window[`model-B-roc-table-part-2`]
    })
  }, 12000)

  window["model-A-youden-curve"].innerHTML = "<i class='fas fa-spinner fa-spin'></i>";

  setTimeout(() => {
    window["model-A-youden-curve"].innerHTML = "<canvas id='canvas-model-A-youden-curve'></canvas>";

    generateLineChartHTMLFromTheModelYoudenData({
      canvasElement: window['canvas-model-A-youden-curve'],
      chartRef: window.modelAYoudenCurve,
      chartConfig: configModelAYoudenCurve,
      modelYoudenData: modelA_YoudenData
    })
  }, 13000);

  generateYoudenTableLoadingHTMLFromTheModelDataFirstSlice({
    modelYoudenDataFirstSlice: modelA_YoudenData.slice(0,20),
    youdenTableElementFirstSlice: window[`model-A-youden-table-part-1`]
  })

  setTimeout(() => {
    window[`model-A-youden-table-part-1`].innerHTML = `
      <div class="model-youden-table__item-row">
        <div class="model-youden-table__item-column column-header column-flex-1">Indic.</div>
        <div class="model-youden-table__item-column column-header column-flex-1">FVN</div>
        <div class="model-youden-table__item-column column-header column-flex-1">FVP</div>
        <div class="model-youden-table__item-column column-header column-flex-1">Youden</div>
      </div>
    `;

    generateYoudenTableFinalHTMLFromTheModelDataFirstSlice({
      modelYoudenDataFirstSlice: modelA_YoudenData.slice(0,20),
      youdenTableElementFirstSlice: window[`model-A-youden-table-part-1`]
    })
  }, 14000)

  generateYoudenTableLoadingHTMLFromTheModelDataLastSlice({
    modelYoudenDataLastSlice: modelA_YoudenData.slice(20),
    youdenTableElementLastSlice: window[`model-A-youden-table-part-2`]
  })

  setTimeout(() => {
    window[`model-A-youden-table-part-2`].innerHTML = `
      <div class="model-youden-table__item-row">
        <div class="model-youden-table__item-column column-header column-flex-1">Indic.</div>
        <div class="model-youden-table__item-column column-header column-flex-1">FFP</div>
        <div class="model-youden-table__item-column column-header column-flex-1">FVP</div>
        <div class="model-youden-table__item-column column-header column-flex-1">Youden</div>
      </div>
    `;

    generateYoudenTableFinalHTMLFromTheModelDataLastSlice({
      modelYoudenDataLastSlice: modelA_YoudenData.slice(20),
      youdenTableElementLastSlice: window[`model-A-youden-table-part-2`]
    })
  }, 15000)

  window["model-B-youden-curve"].innerHTML = "<i class='fas fa-spinner fa-spin'></i>";

  setTimeout(() => {
    window["model-B-youden-curve"].innerHTML = "<canvas id='canvas-model-B-youden-curve'></canvas>";

    generateLineChartHTMLFromTheModelYoudenData({
      canvasElement: window['canvas-model-B-youden-curve'],
      chartRef: window.modelBYoudenCurve,
      chartConfig: configModelBYoudenCurve,
      modelYoudenData: modelB_YoudenData
    })
  }, 16000);

  generateYoudenTableLoadingHTMLFromTheModelDataFirstSlice({
    modelYoudenDataFirstSlice: modelB_YoudenData.slice(0,20),
    youdenTableElementFirstSlice: window[`model-B-youden-table-part-1`]
  })

  setTimeout(() => {
    window[`model-B-youden-table-part-1`].innerHTML = `
      <div class="model-youden-table__item-row">
        <div class="model-youden-table__item-column column-header column-flex-1">Indic.</div>
        <div class="model-youden-table__item-column column-header column-flex-1">FVN</div>
        <div class="model-youden-table__item-column column-header column-flex-1">FVP</div>
        <div class="model-youden-table__item-column column-header column-flex-1">Youden</div>
      </div>
    `;

    generateYoudenTableFinalHTMLFromTheModelDataFirstSlice({
      modelYoudenDataFirstSlice: modelB_YoudenData.slice(0,20),
      youdenTableElementFirstSlice: window[`model-B-youden-table-part-1`]
    })
  }, 17000)

  generateYoudenTableLoadingHTMLFromTheModelDataLastSlice({
    modelYoudenDataLastSlice: modelB_YoudenData.slice(20),
    youdenTableElementLastSlice: window[`model-B-youden-table-part-2`]
  })

  setTimeout(() => {
    window[`model-B-youden-table-part-2`].innerHTML = `
      <div class="model-youden-table__item-row">
        <div class="model-youden-table__item-column column-header column-flex-1">Indic.</div>
        <div class="model-youden-table__item-column column-header column-flex-1">FFP</div>
        <div class="model-youden-table__item-column column-header column-flex-1">FVP</div>
        <div class="model-youden-table__item-column column-header column-flex-1">Youden</div>
      </div>
    `;

    generateYoudenTableFinalHTMLFromTheModelDataLastSlice({
      modelYoudenDataLastSlice: modelB_YoudenData.slice(20),
      youdenTableElementLastSlice: window[`model-B-youden-table-part-2`]
    })
  }, 18000)

  window["model-A-accuracy-curve"].innerHTML = "<i class='fas fa-spinner fa-spin'></i>";

  setTimeout(() => {
    window["model-A-accuracy-curve"].innerHTML = "<canvas id='canvas-model-A-accuracy-curve'></canvas>";

    generateLineChartHTMLFromTheModelAccuracyData({
      canvasElement: window['canvas-model-A-accuracy-curve'],
      chartRef: window.modelAAccuracyCurve,
      chartConfig: configModelAAccuracyCurve,
      modelAccuracyData: modelA_AccuracyData
    })
  }, 19000);

  generateAccuracyTableLoadingHTMLFromTheModelDataFirstSlice({
    modelAccuracyDataFirstSlice: modelA_AccuracyData.slice(0,20),
    accuracyTableElementFirstSlice: window[`model-A-accuracy-table-part-1`]
  })

  setTimeout(() => {
    window[`model-A-accuracy-table-part-1`].innerHTML = `
      <div class="model-accuracy-table__item-row">
        <div class="model-accuracy-table__item-column column-header column-flex-1">Indic.</div>
        <div class="model-accuracy-table__item-column column-header column-flex-1">Exact.</div>
      </div>
    `;

    generateAccuracyTableFinalHTMLFromTheModelDataFirstSlice({
      modelAccuracyDataFirstSlice: modelA_AccuracyData.slice(0,20),
      accuracyTableElementFirstSlice: window[`model-A-accuracy-table-part-1`]
    })
  }, 20000)

  generateAccuracyTableLoadingHTMLFromTheModelDataLastSlice({
    modelAccuracyDataLastSlice: modelA_AccuracyData.slice(20),
    accuracyTableElementLastSlice: window[`model-A-accuracy-table-part-2`]
  })

  setTimeout(() => {
    window[`model-A-accuracy-table-part-2`].innerHTML = `
      <div class="model-accuracy-table__item-row">
        <div class="model-accuracy-table__item-column column-header column-flex-1">Indic.</div>
        <div class="model-accuracy-table__item-column column-header column-flex-1">Exact.</div>
      </div>
    `;

    generateAccuracyTableFinalHTMLFromTheModelDataLastSlice({
      modelAccuracyDataLastSlice: modelA_AccuracyData.slice(20),
      accuracyTableElementLastSlice: window[`model-A-accuracy-table-part-2`]
    })
  }, 21000)

  window["model-B-accuracy-curve"].innerHTML = "<i class='fas fa-spinner fa-spin'></i>";

  setTimeout(() => {
    window["model-B-accuracy-curve"].innerHTML = "<canvas id='canvas-model-B-accuracy-curve'></canvas>";

    generateLineChartHTMLFromTheModelAccuracyData({
      canvasElement: window['canvas-model-B-accuracy-curve'],
      chartRef: window.modelBAccuracyCurve,
      chartConfig: configModelBAccuracyCurve,
      modelAccuracyData: modelB_AccuracyData
    })
  }, 22000);

  generateAccuracyTableLoadingHTMLFromTheModelDataFirstSlice({
    modelAccuracyDataFirstSlice: modelB_AccuracyData.slice(0,20),
    accuracyTableElementFirstSlice: window[`model-B-accuracy-table-part-1`]
  })

  setTimeout(() => {
    window[`model-B-accuracy-table-part-1`].innerHTML = `
      <div class="model-accuracy-table__item-row">
        <div class="model-accuracy-table__item-column column-header column-flex-1">Indic.</div>
        <div class="model-accuracy-table__item-column column-header column-flex-1">Exact.</div>
      </div>
    `;

    generateAccuracyTableFinalHTMLFromTheModelDataFirstSlice({
      modelAccuracyDataFirstSlice: modelB_AccuracyData.slice(0,20),
      accuracyTableElementFirstSlice: window[`model-B-accuracy-table-part-1`]
    })
  }, 23000)

  generateAccuracyTableLoadingHTMLFromTheModelDataLastSlice({
    modelAccuracyDataLastSlice: modelB_AccuracyData.slice(20),
    accuracyTableElementLastSlice: window[`model-B-accuracy-table-part-2`]
  })

  setTimeout(() => {
    window[`model-B-accuracy-table-part-2`].innerHTML = `
      <div class="model-accuracy-table__item-row">
        <div class="model-accuracy-table__item-column column-header column-flex-1">Indic.</div>
        <div class="model-accuracy-table__item-column column-header column-flex-1">Exact.</div>
      </div>
    `;

    generateAccuracyTableFinalHTMLFromTheModelDataLastSlice({
      modelAccuracyDataLastSlice: modelB_AccuracyData.slice(20),
      accuracyTableElementLastSlice: window[`model-B-accuracy-table-part-2`]
    })
  }, 24000)

  window["model-A-pr-curve"].innerHTML = "<i class='fas fa-spinner fa-spin'></i>";

  setTimeout(() => {
    window["model-A-pr-curve"].innerHTML = "";

    generateScatterChartHTMLFromTheModelPRData({
      canvasElement: window["model-A-pr-curve"],
      modelPRData: modelA_PRDataUpdated
    })
  }, 25000);

  generatePRTableLoadingHTMLFromTheModelDataFirstSlice({
    modelPRDataFirstSlice: modelA_PRData.slice(0,20),
    prTableElementFirstSlice: window[`model-A-pr-table-part-1`]
  })

  setTimeout(() => {
    window[`model-A-pr-table-part-1`].innerHTML = `
      <div class="model-pr-table__item-row">
        <div class="model-pr-table__item-column column-header column-flex-1">Indic.</div>
        <div class="model-pr-table__item-column column-header column-flex-1">FVP</div>
        <div class="model-pr-table__item-column column-header column-flex-1">Prec.</div>
        </div>
    `;

    generatePRTableFinalHTMLFromTheModelDataFirstSlice({
      modelPRDataFirstSlice: modelA_PRData.slice(0,20),
      prTableElementFirstSlice: window[`model-A-pr-table-part-1`]
    })
  }, 26000)

  generatePRTableLoadingHTMLFromTheModelDataLastSlice({
    modelPRDataLastSlice: modelA_PRData.slice(20),
    prTableElementLastSlice: window[`model-A-pr-table-part-2`]
  })

  setTimeout(() => {
    window[`model-A-pr-table-part-2`].innerHTML = `
      <div class="model-pr-table__item-row">
        <div class="model-pr-table__item-column column-header column-flex-1">Indic.</div>
        <div class="model-pr-table__item-column column-header column-flex-1">FVP</div>
        <div class="model-pr-table__item-column column-header column-flex-1">Prec.</div>
      </div>
    `;

    generatePRTableFinalHTMLFromTheModelDataLastSlice({
      modelPRDataLastSlice: modelA_PRData.slice(20),
      prTableElementLastSlice: window[`model-A-pr-table-part-2`]
    })
  }, 27000)

  window["model-B-pr-curve"].innerHTML = "<i class='fas fa-spinner fa-spin'></i>";

  setTimeout(() => {
    window["model-B-pr-curve"].innerHTML = "";

    generateScatterChartHTMLFromTheModelPRData({
      canvasElement: window["model-B-pr-curve"],
      modelPRData: modelB_PRDataUpdated
    })
  }, 28000);

  generatePRTableLoadingHTMLFromTheModelDataFirstSlice({
    modelPRDataFirstSlice: modelB_PRData.slice(0,20),
    prTableElementFirstSlice: window[`model-B-pr-table-part-1`]
  })

  setTimeout(() => {
    window[`model-B-pr-table-part-1`].innerHTML = `
      <div class="model-pr-table__item-row">
        <div class="model-pr-table__item-column column-header column-flex-1">Indic.</div>
        <div class="model-pr-table__item-column column-header column-flex-1">FVP</div>
        <div class="model-pr-table__item-column column-header column-flex-1">Prec.</div>
        </div>
    `;

    generatePRTableFinalHTMLFromTheModelDataFirstSlice({
      modelPRDataFirstSlice: modelB_PRData.slice(0,20),
      prTableElementFirstSlice: window[`model-B-pr-table-part-1`]
    })
  }, 29000)

  generatePRTableLoadingHTMLFromTheModelDataLastSlice({
    modelPRDataLastSlice: modelB_PRData.slice(20),
    prTableElementLastSlice: window[`model-B-pr-table-part-2`]
  })

  setTimeout(() => {
    window[`model-B-pr-table-part-2`].innerHTML = `
      <div class="model-pr-table__item-row">
        <div class="model-pr-table__item-column column-header column-flex-1">Indic.</div>
        <div class="model-pr-table__item-column column-header column-flex-1">FVP</div>
        <div class="model-pr-table__item-column column-header column-flex-1">Prec.</div>
      </div>
    `;

    generatePRTableFinalHTMLFromTheModelDataLastSlice({
      modelPRDataLastSlice: modelB_PRData.slice(20),
      prTableElementLastSlice: window[`model-B-pr-table-part-2`]
    })
  }, 30000)

  generateSolutionResultsComparisonTableLoadingHTML({
    targetElementsClass: 'solution-results-comparison-table-value'
  })

  setTimeout(() => {
    generateSolutionResultsComparisonTableFinalHTML({
      modelAData: {
        modelAMaxAccuracyValue: { targetElementId: "model-A-max-accuracy-value", data: modelA.getMaxAccuracyData()[1] },
        modelAMaxAccuracyValueVC: { targetElementId: "model-A-max-accuracy-vc-value", data: modelA.getMaxAccuracyData()[0] },
        modelAAUC: { targetElementId: "model-A-auc-value", data: modelA.getROCAreaUnderCurve() },
        modelAGini: { targetElementId: "model-A-gini-value", data: modelA.getGiniCoefficient() },
        modelAMaxYoudenValue: { targetElementId: "model-A-max-youden-value", data: modelA.getMaxYoudenIndexData()[1] },
        modelAMaxYoudenValueVC: { targetElementId: "model-A-max-youden-vc-value", data: modelA.getMaxYoudenIndexData()[0] }
      },
      modelBData: {
        modelBMaxAccuracyValue: { targetElementId: "model-B-max-accuracy-value", data: modelB.getMaxAccuracyData()[1] },
        modelBMaxAccuracyValueVC: { targetElementId: "model-B-max-accuracy-vc-value", data: modelB.getMaxAccuracyData()[0] },
        modelBAUC: { targetElementId: "model-B-auc-value", data: modelB.getROCAreaUnderCurve() },
        modelBGini: { targetElementId: "model-B-gini-value", data: modelB.getGiniCoefficient() },
        modelBMaxYoudenValue: { targetElementId: "model-B-max-youden-value", data: modelB.getMaxYoudenIndexData()[1] },
        modelBMaxYoudenValueVC: { targetElementId: "model-B-max-youden-vc-value", data: modelB.getMaxYoudenIndexData()[0] }
      }
    })
  }, 31000)
}