(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = function (root, jQuery) {
      if (jQuery === undefined) {
        // require('jQuery') returns a factory that requires window to
        // build a jQuery instance, we normalize how we use modules
        // that require this pattern but the window provided is a noop
        // if it's defined (how jquery works)
        if (typeof window !== 'undefined') {
          jQuery = require('jquery');
        } else {
          jQuery = require('jquery')(root);
        }
      }
      factory(jQuery);
      return jQuery;
    };
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($) {
  $.fn.fusiontime = function (options) {
    var tsChart = null;
    var chartConfig = $.extend({
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
      return console.error('DataSource is needed');
    }

    if (tsChart && tsChart.dispose) {
      tsChart.dispose();
    }
    tsChart = new FusionCharts(chartConfig);
    tsChart.render();

    return this;
  };
}));
