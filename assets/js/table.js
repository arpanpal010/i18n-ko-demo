/*
   Please consider that the JS part isn't production ready at all, I just code it to show the concept of merging filters and titles together !
   */
$(document).ready(function() {
	$('.filterable .btn-filter').click(function() {
		var $panel = $(this).parents('.filterable'),
		    $filters = $panel.find('.filters input'),
		    $tbody = $panel.find('.table tbody');
		if ($filters.prop('disabled') == true) {
			$filters.prop('disabled', false);
			$filters.first().focus();
		} else {
			$filters.val('').prop('disabled', true);
			$tbody.find('.no-result').remove();
			$tbody.find('tr').show();
		}
	});

	$('.filterable .filters input').keyup(function(e) {
		/* Ignore tab key */
		var code = e.keyCode || e.which;
		if (code == '9') return;
		/* Useful DOM data and selectors */
		var $input = $(this),
		    inputContent = $input.val().toLowerCase(),
		    $panel = $input.parents('.filterable'),
		    column = $panel.find('.filters th').index($input.parents('th')),
		    $table = $panel.find('.table'),
		    $rows = $table.find('tbody tr');
		/* Dirtiest filter function ever ;) */
		var $filteredRows = $rows.filter(function() {
			var value = $(this).find('td').eq(column).text().toLowerCase();
			return value.indexOf(inputContent) === - 1;
		});
		/* Clean previous no-result if exist */
		$table.find('tbody .no-result').remove();
		/* Show all rows, hide filtered ones (never do that outside of a demo ! xD) */
		$rows.show();
		$filteredRows.hide();
		/* Prepend no-result row if all rows are filtered */
		if ($filteredRows.length === $rows.length) {
			$table.find('tbody').prepend($('<tr class="no-result text-center"><td colspan="' + $table.find('.filters th').length + '">No result found</td></tr>'));
		}
	});
});

angular.module("TableDemo", []).controller("tableController", function() {

    this.showInfoOnTop = function(i) {
        this.selectedData = this.dataList[i];
    }

	this.pushUp = function(i) {
		var t = this.dataList[i];
		this.dataList.splice(i, 1);
		this.dataList.splice(i - 1, 0, t);
	}
	this.pullDown = function(i) {
		var t = this.dataList[i];
		this.dataList.splice(i, 1);
		this.dataList.splice(i + 1, 0, t);
	}

	this.remove = function(i) { this.dataList.splice(i, 1);};

	this.dataList = [
	    {
		    zone     : "zone1",
		    vame     : "Vame1",
		    lys      : "Lys1",
		    kamera   : "kamera1",
		    heatPump : "heatpump1"
	    },
	    {
		    zone     : "zone2",
		    vame     : "Vame2",
		    lys      : "Lys2",
		    kamera   : "kamera2",
		    heatPump : "heatpump2"
	    },
	    {
		    zone     : "zone3",
		    vame     : "Vame3",
		    lys      : "Lys3",
		    kamera   : "kamera3",
		    heatPump : "heatpump3"
	    },
	    {
		    zone     : "zone4",
		    vame     : "Vame4",
		    lys      : "Lys4",
		    kamera   : "kamera4",
		    heatPump : "heatpump4"
	    },
	    {
		    zone     : "zone5",
		    vame     : "Vame5",
		    lys      : "Lys5",
		    kamera   : "kamera5",
		    heatPump : "heatpump5"
	    },
	    {
		    zone     : "zone6",
		    vame     : "Vame6",
		    lys      : "Lys6",
		    kamera   : "kamera6",
		    heatPump : "heatpump6"
	    },
	]
})

