'use strict';
window.pl_com_rafalsonn_PivotTable = function () {

    var table = $(this.getElement());
    table.addClass("pivot-table");

    this.onStateChange = function () {
        var state = this.getState();
        if (state.csv) {
            var options = {};
            if (state.rows) options.rows = state.rows;
            if (state.cols) options.cols = state.cols;
	    if (state.aggregator) options.aggregator = state.aggregator;
	    if (state.vals) options.vals = state.vals;
	    if (state.rendererName) options.rendererName = state.rendererName;
            table.pivotUI($.csv.toArrays(state.csv), options);
        }
    }
};
