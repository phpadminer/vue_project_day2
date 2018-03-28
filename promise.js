var p = new Promise((resolve,reject) => {
    setTimeout(function () {
        var a = 'test';
        resolve(a)
    },2000);
});
p.then((data) => {console.log(data)},() => {});