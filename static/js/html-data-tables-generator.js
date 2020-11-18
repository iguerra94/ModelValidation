// Contingence Table
export const generateContingTableLoadingHTMLFromTheModelDataFirstSlice = ({
  modelCTDataFirstSlice,
  contingTableElementFirstSlice
}) => {
  modelCTDataFirstSlice.forEach(_ => {
    contingTableElementFirstSlice.innerHTML += `
      <div class="model-conting-table__item-row" style="background-color: #ddd;">
        <div class="model-conting-table__item-column column-flex-1">
          <strong>
            <i class="fas fa-spinner fa-spin"></i>
          </strong>
        </div>
        <div class="model-conting-table__item-column column-flex-1">
          <p>
            <i class="fas fa-spinner fa-spin"></i>
          </p>
        </div>
        <div class="model-conting-table__item-column column-flex-1">
          <p>
            <i class="fas fa-spinner fa-spin"></i>
          </p>
        </div>
        <div class="model-conting-table__item-column column-flex-1">
          <p>
            <i class="fas fa-spinner fa-spin"></i>
          </p>
        </div>
        <div class="model-conting-table__item-column column-flex-1">
          <p>
            <i class="fas fa-spinner fa-spin"></i>
          </p>
        </div>
      </div>
    `;
  })
}

export const generateContingTableFinalHTMLFromTheModelDataFirstSlice = ({
  modelCTDataFirstSlice,
  contingTableElementFirstSlice
}) => {
  modelCTDataFirstSlice.forEach(([k,v]) => {
    contingTableElementFirstSlice.innerHTML += `
      <div class="model-conting-table__item-row" style="background-color: #ddd;">
        <div class="model-conting-table__item-column column-flex-1">
          <strong>
            ${k}
          </strong>
        </div>
        <div class="model-conting-table__item-column column-flex-1">
          <p>
            ${v[0]}
          </p>
        </div>
        <div class="model-conting-table__item-column column-flex-1">
          <p>
            ${v[1]}
          </p>
        </div>
        <div class="model-conting-table__item-column column-flex-1">
          <p>
            ${v[2]}
          </p>
        </div>
        <div class="model-conting-table__item-column column-flex-1">
          <p>
            ${v[3]}
          </p>
        </div>
      </div>
    `;
  });
}

export const generateContingTableLoadingHTMLFromTheModelDataLastSlice = ({
  modelCTDataLastSlice,
  contingTableElementLastSlice
}) => {
  modelCTDataLastSlice.slice(20).forEach(_ => {
    contingTableElementLastSlice.innerHTML += `
      <div class="model-conting-table__item-row" style="background-color: #ddd;">
        <div class="model-conting-table__item-column column-flex-1">
          <strong>
            <i class="fas fa-spinner fa-spin"></i>
          </strong>
        </div>
        <div class="model-conting-table__item-column column-flex-1">
          <p>
            <i class="fas fa-spinner fa-spin"></i>
          </p>
        </div>
        <div class="model-conting-table__item-column column-flex-1">
          <p>
            <i class="fas fa-spinner fa-spin"></i>
          </p>
        </div>
        <div class="model-conting-table__item-column column-flex-1">
          <p>
            <i class="fas fa-spinner fa-spin"></i>
          </p>
        </div>
        <div class="model-conting-table__item-column column-flex-1">
          <p>
            <i class="fas fa-spinner fa-spin"></i>
          </p>
        </div>
      </div>
    `;
  })
}

export const generateContingTableFinalHTMLFromTheModelDataLastSlice = ({
  modelCTDataLastSlice,
  contingTableElementLastSlice
}) => {
  modelCTDataLastSlice.forEach(([k,v]) => {
    contingTableElementLastSlice.innerHTML += `
      <div class="model-conting-table__item-row" style="background-color: #ddd;">
        <div class="model-conting-table__item-column column-flex-1">
          <strong>
            ${k}
          </strong>
        </div>
        <div class="model-conting-table__item-column column-flex-1">
          <p>
            ${v[0]}
          </p>
        </div>
        <div class="model-conting-table__item-column column-flex-1">
          <p>
            ${v[1]}
          </p>
        </div>
        <div class="model-conting-table__item-column column-flex-1">
          <p>
            ${v[2]}
          </p>
        </div>
        <div class="model-conting-table__item-column column-flex-1">
          <p>
            ${v[3]}
          </p>
        </div>
      </div>
    `;
  });
}

// ROC Table
export const generateROCTableLoadingHTMLFromTheModelDataFirstSlice = ({
  modelROCDataFirstSlice,
  ROCTableElementFirstSlice
}) => {
  modelROCDataFirstSlice.forEach(_ => {
    ROCTableElementFirstSlice.innerHTML += `
      <div class="model-roc-table__item-row" style="background-color: #ddd;">
        <div class="model-roc-table__item-column column-flex-1">
          <p>
            <i class="fas fa-spinner fa-spin"></i>
          </p>
        </div>
        <div class="model-roc-table__item-column column-flex-1">
          <p>
            <i class="fas fa-spinner fa-spin"></i>
          </p>
        </div>
        <div class="model-roc-table__item-column column-flex-1">
          <p>
            <i class="fas fa-spinner fa-spin"></i>
          </p>
        </div>
        <div class="model-roc-table__item-column column-flex-1">
          <p>
            <i class="fas fa-spinner fa-spin"></i>
          </p>
        </div>
      </div>
    `;
  })
}

export const generateROCTableFinalHTMLFromTheModelDataFirstSlice = ({
  modelROCDataFirstSlice,
  ROCTableElementFirstSlice
}) => {
  modelROCDataFirstSlice.forEach(([k,v]) => {
    ROCTableElementFirstSlice.innerHTML += `
      <div class="model-roc-table__item-row" style="background-color: #ddd;">
        <div class="model-roc-table__item-column column-flex-1">
          <strong>
            ${k}
          </strong>
        </div>
        <div class="model-roc-table__item-column column-flex-1">
          <p>
            ${v[0]}
          </p>
        </div>
        <div class="model-roc-table__item-column column-flex-1">
          <p>
            ${v[1]}
          </p>
        </div>
        <div class="model-roc-table__item-column column-flex-1">
          <p>
            ${v[2]}
          </p>
        </div>
      </div>
    `;
  });
}

export const generateROCTableLoadingHTMLFromTheModelDataLastSlice = ({
  modelROCDataLastSlice,
  ROCTableElementLastSlice
}) => {
  modelROCDataLastSlice.forEach(_ => {
    ROCTableElementLastSlice.innerHTML += `
      <div class="model-roc-table__item-row" style="background-color: #ddd;">
        <div class="model-roc-table__item-column column-flex-1">
          <p>
            <i class="fas fa-spinner fa-spin"></i>
          </p>
        </div>
        <div class="model-roc-table__item-column column-flex-1">
          <p>
            <i class="fas fa-spinner fa-spin"></i>
          </p>
        </div>
        <div class="model-roc-table__item-column column-flex-1">
          <p>
            <i class="fas fa-spinner fa-spin"></i>
          </p>
        </div>
        <div class="model-roc-table__item-column column-flex-1">
          <p>
            <i class="fas fa-spinner fa-spin"></i>
          </p>
        </div>
      </div>
    `;
  })
}

export const generateROCTableFinalHTMLFromTheModelDataLastSlice = ({
  modelROCDataLastSlice,
  ROCTableElementLastSlice
}) => {
  modelROCDataLastSlice.forEach(([k,v]) => {
    ROCTableElementLastSlice.innerHTML += `
      <div class="model-roc-table__item-row" style="background-color: #ddd;">
        <div class="model-roc-table__item-column column-flex-1">
          <strong>
            ${k}
          </strong>
        </div>
        <div class="model-roc-table__item-column column-flex-1">
          <p>
            ${v[0]}
          </p>
        </div>
        <div class="model-roc-table__item-column column-flex-1">
          <p>
            ${v[1]}
          </p>
        </div>
        <div class="model-roc-table__item-column column-flex-1">
          <p>
            ${v[2]}
          </p>
        </div>
      </div>
    `;
  });
}

// Youden Table
export const generateYoudenTableLoadingHTMLFromTheModelDataFirstSlice = ({
  modelYoudenDataFirstSlice,
  youdenTableElementFirstSlice
}) => {
  modelYoudenDataFirstSlice.forEach(_ => {
    youdenTableElementFirstSlice.innerHTML += `
      <div class="model-youden-table__item-row" style="background-color: #ddd;">
        <div class="model-youden-table__item-column column-flex-1">
          <p>
            <i class="fas fa-spinner fa-spin"></i>
          </p>
        </div>
        <div class="model-youden-table__item-column column-flex-1">
          <p>
            <i class="fas fa-spinner fa-spin"></i>
          </p>
        </div>
        <div class="model-youden-table__item-column column-flex-1">
          <p>
            <i class="fas fa-spinner fa-spin"></i>
          </p>
        </div>
        <div class="model-youden-table__item-column column-flex-1">
          <p>
            <i class="fas fa-spinner fa-spin"></i>
          </p>
        </div>
      </div>
    `;
  })
}

export const generateYoudenTableFinalHTMLFromTheModelDataFirstSlice = ({
  modelYoudenDataFirstSlice,
  youdenTableElementFirstSlice
}) => {
  modelYoudenDataFirstSlice.forEach(([k,v]) => {
    youdenTableElementFirstSlice.innerHTML += `
      <div class="model-youden-table__item-row" style="background-color: #ddd;">
        <div class="model-youden-table__item-column column-flex-1">
          <strong>
            ${k}
          </strong>
        </div>
        <div class="model-youden-table__item-column column-flex-1">
          <p>
            ${v[0]}
          </p>
        </div>
        <div class="model-youden-table__item-column column-flex-1">
          <p>
            ${v[1]}
          </p>
        </div>
        <div class="model-youden-table__item-column column-flex-1">
          <p>
            ${v[2]}
          </p>
        </div>
      </div>
    `;
  });
}

export const generateYoudenTableLoadingHTMLFromTheModelDataLastSlice = ({
  modelYoudenDataLastSlice,
  youdenTableElementLastSlice
}) => {
  modelYoudenDataLastSlice.forEach(_ => {
    youdenTableElementLastSlice.innerHTML += `
      <div class="model-youden-table__item-row" style="background-color: #ddd;">
        <div class="model-youden-table__item-column column-flex-1">
          <p>
            <i class="fas fa-spinner fa-spin"></i>
          </p>
        </div>
        <div class="model-youden-table__item-column column-flex-1">
          <p>
            <i class="fas fa-spinner fa-spin"></i>
          </p>
        </div>
        <div class="model-youden-table__item-column column-flex-1">
          <p>
            <i class="fas fa-spinner fa-spin"></i>
          </p>
        </div>
        <div class="model-youden-table__item-column column-flex-1">
          <p>
            <i class="fas fa-spinner fa-spin"></i>
          </p>
        </div>
      </div>
    `;
  })
}

export const generateYoudenTableFinalHTMLFromTheModelDataLastSlice = ({
  modelYoudenDataLastSlice,
  youdenTableElementLastSlice
}) => {
  modelYoudenDataLastSlice.forEach(([k,v]) => {
    youdenTableElementLastSlice.innerHTML += `
      <div class="model-youden-table__item-row" style="background-color: #ddd;">
        <div class="model-youden-table__item-column column-flex-1">
          <strong>
            ${k}
          </strong>
        </div>
        <div class="model-youden-table__item-column column-flex-1">
          <p>
            ${v[0]}
          </p>
        </div>
        <div class="model-youden-table__item-column column-flex-1">
          <p>
            ${v[1]}
          </p>
        </div>
        <div class="model-youden-table__item-column column-flex-1">
          <p>
            ${v[2]}
          </p>
        </div>
      </div>
    `;
  });
}

// Accuracy Table
export const generateAccuracyTableLoadingHTMLFromTheModelDataFirstSlice = ({
  modelAccuracyDataFirstSlice,
  accuracyTableElementFirstSlice
}) => {
  modelAccuracyDataFirstSlice.forEach(_ => {
    accuracyTableElementFirstSlice.innerHTML += `
      <div class="model-accuracy-table__item-row" style="background-color: #ddd;">
        <div class="model-accuracy-table__item-column column-flex-1">
          <p>
            <i class="fas fa-spinner fa-spin"></i>
          </p>
        </div>
        <div class="model-accuracy-table__item-column column-flex-1">
          <p>
            <i class="fas fa-spinner fa-spin"></i>
          </p>
        </div>
      </div>
    `;
  })

}

export const generateAccuracyTableFinalHTMLFromTheModelDataFirstSlice = ({
  modelAccuracyDataFirstSlice,
  accuracyTableElementFirstSlice
}) => {
  modelAccuracyDataFirstSlice.forEach(([k,v]) => {
    accuracyTableElementFirstSlice.innerHTML += `
      <div class="model-accuracy-table__item-row" style="background-color: #ddd;">
        <div class="model-accuracy-table__item-column column-flex-1">
          <strong>
            ${k}
          </strong>
        </div>
        <div class="model-accuracy-table__item-column column-flex-1">
          <p>
            ${v}
          </p>
        </div>
      </div>
    `;
  });
}

export const generateAccuracyTableLoadingHTMLFromTheModelDataLastSlice = ({
  modelAccuracyDataLastSlice,
  accuracyTableElementLastSlice
}) => {
  modelAccuracyDataLastSlice.forEach(_ => {
    accuracyTableElementLastSlice.innerHTML += `
      <div class="model-accuracy-table__item-row" style="background-color: #ddd;">
        <div class="model-accuracy-table__item-column column-flex-1">
          <p>
            <i class="fas fa-spinner fa-spin"></i>
          </p>
        </div>
        <div class="model-accuracy-table__item-column column-flex-1">
          <p>
            <i class="fas fa-spinner fa-spin"></i>
          </p>
        </div>
      </div>
    `;
  })
}

export const generateAccuracyTableFinalHTMLFromTheModelDataLastSlice = ({
  modelAccuracyDataLastSlice,
  accuracyTableElementLastSlice
}) => {
  modelAccuracyDataLastSlice.forEach(([k,v]) => {
    accuracyTableElementLastSlice.innerHTML += `
      <div class="model-accuracy-table__item-row" style="background-color: #ddd;">
        <div class="model-accuracy-table__item-column column-flex-1">
          <strong>
            ${k}
          </strong>
        </div>
        <div class="model-accuracy-table__item-column column-flex-1">
          <p>
            ${v}
          </p>
        </div>
      </div>
    `;
  });
}

// PR Table
export const generatePRTableLoadingHTMLFromTheModelDataFirstSlice = ({
  modelPRDataFirstSlice,
  prTableElementFirstSlice
}) => {
  modelPRDataFirstSlice.forEach(_ => {
    prTableElementFirstSlice.innerHTML += `
      <div class="model-pr-table__item-row" style="background-color: #ddd;">
        <div class="model-pr-table__item-column column-flex-1">
          <p>
            <i class="fas fa-spinner fa-spin"></i>
          </p>
        </div>
        <div class="model-pr-table__item-column column-flex-1">
          <p>
            <i class="fas fa-spinner fa-spin"></i>
          </p>
        </div>
        <div class="model-pr-table__item-column column-flex-1">
          <p>
            <i class="fas fa-spinner fa-spin"></i>
          </p>
        </div>
      </div>
    `;
  })
}

export const generatePRTableFinalHTMLFromTheModelDataFirstSlice = ({
  modelPRDataFirstSlice,
  prTableElementFirstSlice
}) => {
  modelPRDataFirstSlice.forEach(([k,v]) => {
    prTableElementFirstSlice.innerHTML += `
      <div class="model-pr-table__item-row" style="background-color: #ddd;">
        <div class="model-pr-table__item-column column-flex-1">
          <strong>
            ${k}
          </strong>
        </div>
        <div class="model-pr-table__item-column column-flex-1">
          <p>
            ${v[0]}
          </p>
        </div>
        <div class="model-pr-table__item-column column-flex-1">
          <p>
            ${v[1]}
          </p>
        </div>
      </div>
    `;
  })
}

export const generatePRTableLoadingHTMLFromTheModelDataLastSlice = ({
  modelPRDataLastSlice,
  prTableElementLastSlice
}) => {
  modelPRDataLastSlice.forEach(_ => {
    prTableElementLastSlice.innerHTML += `
      <div class="model-pr-table__item-row" style="background-color: #ddd;">
        <div class="model-pr-table__item-column column-flex-1">
          <p>
            <i class="fas fa-spinner fa-spin"></i>
          </p>
        </div>
        <div class="model-pr-table__item-column column-flex-1">
          <p>
            <i class="fas fa-spinner fa-spin"></i>
          </p>
        </div>
        <div class="model-pr-table__item-column column-flex-1">
          <p>
            <i class="fas fa-spinner fa-spin"></i>
          </p>
        </div>
      </div>
    `;
  })
}

export const generatePRTableFinalHTMLFromTheModelDataLastSlice = ({
  modelPRDataLastSlice,
  prTableElementLastSlice
}) => {
  modelPRDataLastSlice.forEach(([k,v]) => {
    prTableElementLastSlice.innerHTML += `
      <div class="model-pr-table__item-row" style="background-color: #ddd;">
        <div class="model-pr-table__item-column column-flex-1">
          <strong>
            ${k}
          </strong>
        </div>
        <div class="model-pr-table__item-column column-flex-1">
          <p>
            ${v[0]}
          </p>
        </div>
        <div class="model-pr-table__item-column column-flex-1">
          <p>
            ${v[1]}
          </p>
        </div>
      </div>
    `;
  })
}

// Results Comparison Table
export const generateSolutionResultsComparisonTableLoadingHTML = ({
  targetElementsClass
}) => {
  document.querySelectorAll(`.${targetElementsClass}`).forEach((el) => {
    el.innerHTML = `
      <p>
        <i class="fas fa-spinner fa-spin"></i>
      </p>
    `;
  })
}

export const generateSolutionResultsComparisonTableFinalHTML = ({
  modelAData: {
    modelAMaxAccuracyValue,
    modelAMaxAccuracyValueVC,
    modelAAUC,
    modelAGini,
    modelAMaxYoudenValue,
    modelAMaxYoudenValueVC
  },
  modelBData: {
    modelBMaxAccuracyValue,
    modelBMaxAccuracyValueVC,
    modelBAUC,
    modelBGini,
    modelBMaxYoudenValue,
    modelBMaxYoudenValueVC
  }
}) => {
  window[modelAMaxAccuracyValue.targetElementId].innerHTML = `
    <p>
      ${modelAMaxAccuracyValue.data}
    </p>
  `;
  if (modelAMaxAccuracyValue.data > modelBMaxAccuracyValue.data) window[modelAMaxAccuracyValue.targetElementId].classList.add('best-value-bg-color');

  window[modelBMaxAccuracyValue.targetElementId].innerHTML = `
    <p>
      ${modelBMaxAccuracyValue.data}
    </p>
  `;
  if (modelBMaxAccuracyValue.data > modelAMaxAccuracyValue.data) window[modelBMaxAccuracyValue.targetElementId].classList.add('best-value-bg-color');

  window[modelAMaxAccuracyValueVC.targetElementId].innerHTML = `
    <p>
      ${modelAMaxAccuracyValueVC.data}
    </p>
  `;

  window[modelBMaxAccuracyValueVC.targetElementId].innerHTML = `
    <p>
      ${modelBMaxAccuracyValueVC.data}
    </p>
  `;

  window[modelAAUC.targetElementId].innerHTML = `
    <p>
      ${modelAAUC.data}
    </p>
  `;
  if (modelAAUC.data > modelBAUC.data) window[modelAAUC.targetElementId].classList.add('best-value-bg-color');

  window[modelBAUC.targetElementId].innerHTML = `
    <p>
      ${modelBAUC.data}
    </p>
  `;
  if (modelBAUC.data > modelAAUC.data) window[modelBAUC.targetElementId].classList.add('best-value-bg-color');

  window[modelAGini.targetElementId].innerHTML = `
    <p>
      ${modelAGini.data}
    </p>
  `;
  if (modelAGini.data > modelBGini.data) window[modelAGini.targetElementId].classList.add('best-value-bg-color');

  window[modelBGini.targetElementId].innerHTML = `
    <p>
      ${modelBGini.data}
    </p>
  `;
  if (modelBGini.data > modelAGini.data) window[modelBGini.targetElementId].classList.add('best-value-bg-color');

  window[modelAMaxYoudenValue.targetElementId].innerHTML = `
    <p>
      ${modelAMaxYoudenValue.data}
    </p>
  `;
  if (modelAMaxYoudenValue.data > modelBMaxYoudenValue.data) window[modelAMaxYoudenValue.targetElementId].classList.add('best-value-bg-color');

  window[modelBMaxYoudenValue.targetElementId].innerHTML = `
    <p>
      ${modelBMaxYoudenValue.data}
    </p>
  `;
  if (modelBMaxYoudenValue.data > modelAMaxYoudenValue.data) window[modelBMaxYoudenValue.targetElementId].classList.add('best-value-bg-color');

  window[modelAMaxYoudenValueVC.targetElementId].innerHTML = `
    <p>
      ${modelAMaxYoudenValueVC.data}
    </p>
  `;

  window[modelBMaxYoudenValueVC.targetElementId].innerHTML = `
    <p>
      ${modelBMaxYoudenValueVC.data}
    </p>
  `;
}