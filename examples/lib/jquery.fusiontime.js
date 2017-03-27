(function($) {

	$.fn.fusiontime = function(options) {

		var chartConfig = $.extend({
			type: "timeseries",
			plottype: "line",
			renderAt: this.get(0),
			width: 800,
			height: 600,
			dataFormat: "json",
			containerBackgroundOpacity: 0,
			dataSource: {}
		}, options);

		if ($.isEmptyObject(chartConfig.dataSource)) {
			return console.error("DataSource is needed");
		}

		var tsChart = null;
		if (tsChart && tsChart.dispose) {
			tsChart.dispose();
		}
		tsChart = new FusionCharts(chartConfig);
		tsChart.render();

		return this;
	};

}(jQuery));
