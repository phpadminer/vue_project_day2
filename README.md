## vue_project_day2

### axios
> 基于http客户端的promise，面向浏览器和nodejs;示例看axios.html 文档：[axios](https://segmentfault.com/a/1190000008470355)

### mock.js
> 可以自动生成json形式测试数据 网址[mock.js](https://github.com/nuysoft/Mock/wiki/Getting-Started)

### promise
> 解决回调函数的问题 文档 [promise](http://es6.ruanyifeng.com/#docs/promise)

### promise-ajax
> 使用promise 封装一个ajax 请求; 示例看promise-ajax.js
> 下面是原生ajax的写法 详情可看 [原生ajax](http://www.w3school.com.cn/ajax/ajax_xmlhttprequest_create.asp)
>> 现代浏览器的写法
```
function success(text) {
    var textarea = document.getElementById('test-response-text');
    textarea.value = text;
}

function fail(code) {
    var textarea = document.getElementById('test-response-text');
    textarea.value = 'Error code: ' + code;
}

var request = new XMLHttpRequest(); // 新建XMLHttpRequest对象

request.onreadystatechange = function () { // 状态发生变化时，函数被回调
    if (request.readyState === 4) { // 成功完成
        // 判断响应结果:
        if (request.status === 200) {
            // 成功，通过responseText拿到响应的文本:
            return success(request.responseText);
        } else {
            // 失败，根据响应码判断失败原因:
            return fail(request.status);
        }
    } else {
        // HTTP请求还在继续...
    }
}

// 发送请求:
request.open('GET', '/api/categories');
request.send();
```

>> 低版本的IE的写法
```
function success(text) {
    var textarea = document.getElementById('test-ie-response-text');
    textarea.value = text;
}

function fail(code) {
    var textarea = document.getElementById('test-ie-response-text');
    textarea.value = 'Error code: ' + code;
}

var request = new ActiveXObject('Microsoft.XMLHTTP'); // 新建Microsoft.XMLHTTP对象

request.onreadystatechange = function () { // 状态发生变化时，函数被回调
    if (request.readyState === 4) { // 成功完成
        // 判断响应结果:
        if (request.status === 200) {
            // 成功，通过responseText拿到响应的文本:
            return success(request.responseText);
        } else {
            // 失败，根据响应码判断失败原因:
            return fail(request.status);
        }
    } else {
        // HTTP请求还在继续...
    }
}

// 发送请求:
request.open('GET', '/api/categories');
request.send();

```