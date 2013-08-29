// Print all of the news items on hackernews
var jsdom = require("jsdom");
var fs = require("fs");
var jquery = fs.readFileSync("./jquery.js").toString();

ht = fs.readFileSync("./tai50i-utf8.php").toString();

jsdom.env({
    //html: 'http://www.twse.com.tw/ch/trading/indices/twco/tai50i.php',
    html: ht,
    src: jquery,
    done: function(errors, window) {
        var $ = window.$;
        info = [];


        $(".tb2 td").each(function(index, window) {
            var count = Math.floor(index / 6);
            if (info[count] === undefined) {
                info[count] = {};
            }
            switch (index % 6) {
                case 0:
                    info[count]["id"] = $(this).text();
                    break;
                case 1:
                    info[count]["name"] = $(this).text();
                    break;
                case 2:
                    info[count]["icb"] = $(this).text();
                    break;
                case 3:
                    info[count]["shares"] = parseInt($(this).text().split(',').join(''));
                    break;
                case 4:
                    info[count]["avaliblePercentage"] = parseFloat($(this).text());
                    break;
                case 5:
                    info[count]["portion"] = parseFloat($(this).text());
                    break;
            }
        });
        console.log(JSON.stringify(info))
    }
});
