// eslint-disable-next-line import/prefer-default-export
export function init($) {
  // eslint-disable-next-line no-param-reassign
  $.fn.fusiontime = function fusiontime(options) {
    let tsChart = null;
    const chartConfig = $.extend({
      type: 'timeseries',
      plottype: 'line',
      renderAt: this.get(0),
      width: 800,
      height: 400,
      dataFormat: 'json',
      containerBackgroundOpacity: 0,
      dataSource: {},
    }, options);

    if ($.isEmptyObject(chartConfig.dataSource)) {
      // eslint-disable-next-line no-console
      return console.error('DataSource is needed');
    }

    if (tsChart && tsChart.dispose) {
      tsChart.dispose();
    }
    tsChart = new FusionCharts(chartConfig);
    tsChart.render();

    return this;
  };
}

if (typeof window === 'object' && (window.$ || window.jQuery)) {
  init($);
}
