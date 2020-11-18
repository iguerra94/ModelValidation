class ModelValidation {
  constructor(initialData = {}) {
    // initialData = {
    //   "valor de corte": [valores negativos, valores positivos]
    //   "9": [25,0],
    //   "10": [75,0],
    //   "11": [100,0],
    //   ..
    //   ..
    // }
    this.initialData = initialData;
    this.ct = new ContingenceTable(initialData);
  }

  getDistributionCurveDataForNegativeCases() {
    return Object.entries(this.initialData)
             .map(([_,v]) => v[0])
  }

  getDistributionCurveDataForPositiveCases() {
    return Object.entries(this.initialData)
             .map(([_,v]) => v[1])
  }

  getCTIndicatorsForEachVC() {
    return Object.entries(this.initialData)
             .map(([k,_]) => [k,this.ct.getTableIndicators(k)])
  }

  getROCCurveDataForEachVC() {
    return Object.entries(this.initialData)
             .map(([k,_]) => [k,this.ct.getROCCurveIndicators(k)])
  }

  getROCAreaUnderCurve() {
    const valuesArray = this.getROCCurveDataForEachVC()
      .map(([_,v]) => v.slice(0,2))
      .reverse();
      
    const rectArea = 1 - (valuesArray.find(a => a[1] > 0.999)[0]);
    
    let auc = rectArea;
    
    const firstIndex = valuesArray.findIndex(a => a[0] > 0.000);
    const lastIndex = valuesArray.findIndex(a => a[1] == 1.000);

    for (let i = firstIndex; i <= lastIndex; i++) {
      const prev = valuesArray[i-1];
      const curr = valuesArray[i];

      auc += (curr[1] + prev[1]) * (curr[0] - prev[0]) / 2;
    }

    return Number(auc.toFixed(3));
  }

  getGiniCoefficient() {
    const auc = this.getROCAreaUnderCurve();

    const giniCoefficient = (2 * auc) - 1

    return Number(giniCoefficient.toFixed(3));
  }

  getYoudenCurveDataForEachVC() {
    return Object.entries(this.initialData)
             .map(([k,_]) => [k,this.ct.getYoudenCurveIndicators(k)])
  }

  getMaxYoudenIndexData() {
    const modelYoudenIndexData = this.getYoudenCurveDataForEachVC();
    
    const maxYoudenIndex = Math.max(...modelYoudenIndexData.map(([_,v]) => v[2]));

    return modelYoudenIndexData.find(([_,v]) => v[2] === maxYoudenIndex).flat().filter((_, i, arr) => i === 0 || i === (arr.length-1));
  }

  getAccuracyCurveDataForEachVC() {
    return Object.entries(this.initialData)
             .map(([k,_]) => [k,this.ct.getAccuracyIndex(k)])
  }

  getMaxAccuracyData() {
    const modelAccuracyData = this.getAccuracyCurveDataForEachVC();

    const maxAccuracy = Math.max(...modelAccuracyData.map(([_,v]) => v));

    return modelAccuracyData.find(([_,v]) => v === maxAccuracy);
  }

  getPRCurveDataForEachVC() {
    return Object.entries(this.initialData)
             .map(([k,_]) => [k,this.ct.getPRCurveIndicators(k)])
  }
}

class ContingenceTable {
  constructor(data = {}) {
    // data = {
    //   "valor de corte": [valores negativos, valores positivos]
    //   "9": [25,0],
    //   "10": [75,0],
    //   "11": [100,0],
    //   ..
    //   ..
    // }
    this.data = data;
  }

  getVP(vc = 1) {
    return Object.entries(this.data)
             .map(([k,v]) => [k,v[1]])
             .filter(([k,_]) => k > vc)
             .map(([k,v]) => v)
             .reduce((a,b) => a+b,0);
  }

  getFN(vc = 1) {
    return Object.entries(this.data)
      .map(([k,v]) => [k,v[1]])
      .filter(([k,_]) => k <= vc)
      .map(([k,v]) => v)
      .reduce((a,b) => a+b,0);
  }

  getFP(vc = 1) {
    return Object.entries(this.data)
      .map(([k,v]) => [k,v[0]])
      .filter(([k,_]) => k >= vc)
      .map(([k,v]) => v)
      .reduce((a,b) => a+b,0);
  }

  getVN(vc = 1) {
    return Object.entries(this.data)
      .map(([k,v]) => [k,v[0]])
      .filter(([k,_]) => k < vc)
      .map(([k,v]) => v)
      .reduce((a,b) => a+b,0);
  }

  getFVP(vc = 1) {
    return Number((this.getVP(vc) / (this.getVP(vc) + this.getFN(vc))).toFixed(3));
  }

  getFVN(vc = 1) {
    return Number((this.getVN(vc) / (this.getVN(vc) + this.getFP(vc))).toFixed(3));
  }

  getFFP(vc = 1) {
    const fvn = (this.getVN(vc) / (this.getVN(vc) + this.getFP(vc)));
    return Number((1 - fvn).toFixed(3));
  }

  getPrecision(vc = 1) {
    return Number((this.getVP(vc) / (this.getVP(vc) + this.getFP(vc))).toFixed(3)) || 0;
  }

  getYoudenIndex(vc = 1) {
    return Number(Math.abs(
             this.getFVP(vc) + this.getFVN(vc) - 1
           ).toFixed(3));
  }

  getAccuracyIndex(vc = 1) {
    return Number((
      (this.getVP(vc) + this.getVN(vc) ) /
      (this.getVP(vc) + this.getFN(vc) + this.getVN(vc) + this.getFP(vc))
    ).toFixed(3));
  }

  getTableIndicators(vc = 1) {
    return [
      this.getVP(vc),
      this.getFN(vc),
      this.getFP(vc),
      this.getVN(vc),
    ]
  }

  getROCCurveIndicators(vc = 1) {
    return [
      this.getFFP(vc),
      this.getFVP(vc),
      this.getFVN(vc),
    ]
  }

  getYoudenCurveIndicators(vc = 1) {
    return [
      this.getFVN(vc),
      this.getFVP(vc),
      this.getYoudenIndex(vc)
    ]
  }

  getPRCurveIndicators(vc = 1) {
    return [
      this.getFVP(vc),
      this.getPrecision(vc),
    ]
  }
}

export { ModelValidation }