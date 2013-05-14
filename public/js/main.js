var targets = [{
        name: 'first trade',
        id: 1111,
        wanted: true
    }, {
        name: '1234',
        id: 1234,
        wanted: true
    }, {
        name: 'second trade',
        id: 2222,
        wanted: true
    }
];

T_tbody = _.template($('#t-stocks').html());
disabledStock = {};

function calculate() {
    var arr = $.map($('input:checkbox:checked'), function(e, i) {
        return +e.value;
    });

    $('span').text('the checked values are: ' + arr.join(','));
    var data = [];
    _.each(targets, function(target, index) {
        var row = target;
        row['index'] = index;
        row['percentage'] = 0;
        row['amount'] = 0;
        data.push(row);
    });
    $('#stocks').html(T_tbody({
        stocks: data
    }));

    var reduced = targets.filter(function(target, i) {
        return target.wanted;
    }).map(function(target, i) {
        return target.name;
    });
    $('span').text('the checked values are: ' + reduced);
}

$(function() {
    // init
    calculate();

    window.toggleStop = function(index) {
        targets[index].wanted = !targets[index].wanted;
        calculate();
    }
});
