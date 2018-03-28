var Mock = require('mockjs');
var Random = Mock.Random;
// Random.image();
// Random.title();
// Random.sentence();
var data = Mock.mock({
    'products|1-5': [
        {
            'id|+1': 1,
            'images':'@image',
            'title':'@title',
            'info':'@sentence',
            'price':'@float',
            'num':'@integer',
            'count':'',
            'isSelect':'@boolean'
        }
    ]
})

console.log(JSON.stringify(data,null,4));