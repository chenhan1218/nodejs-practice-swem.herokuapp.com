T_tbody = _.template($('#t-stocks').html());
var targets = $.ajax({
    'async': false,
    'global': false,
    'url': 'json/data.json',
    'dataType': "json"
});

targets = JSON.parse(targets.responseText);

function calculate() {
    var sum = targets.reduce(function(sum, target) {
        if (target.wanted) {
            sum += target.portion;
        }
        return sum;
    }, 0);

    $('#stocks').html(T_tbody({
        stocks: targets.map(function(target) {
            if (target.wanted) {
                target['ownPercentage'] = target.portion / sum * 100;
            } else {
                target['ownPercentage'] = 0;
            }
            target['ownPercentage'] = target['ownPercentage'].toFixed(3);
            target['amount'] = 0;
            return target;
        })
    }));

    $('span').text('the checked values are: ' +
        targets.filter(function(target, i) {
        return target.wanted;
    }).map(function(target, i) {
        return target.name;
    }));

}

$(function() {
    // init
    targets.sort(function(a, b) {
        return b.portion - a.portion;
    });
    targets = targets.map(function(target, index) {
        target['wanted'] = true;
        target['index'] = index;
        return target;
    });
    calculate();

    window.toggleStop = function(index) {
        targets[index].wanted = !targets[index].wanted;
        calculate();
    }
});
