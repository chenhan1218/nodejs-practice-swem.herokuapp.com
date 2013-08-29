curl http://www.twse.com.tw/ch/trading/indices/twco/tai50i.php >tai50i.php
iconv -f big5 -t utf8 tai50i.php -o tai50i-utf8.php
node taidata2json.js >public/json/data.json
