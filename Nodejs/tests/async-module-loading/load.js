let data1, data2;
let data = {};

function initData(callback) {
    setTimeout(function() {
        data.item1 = 'hello';
        data.item2 = 'goodbye';

        callback();
    }, 2000);
}

module.exports = {
    data: data,
    init: initData
};