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
------
2018-03-29 00:46:12
### 新增
1. 新增全选功能
    - 点击全选选中所有的商品，再次点击取消全选 (注意知识点 filter 和 forEach 的区别 这里着重要注意filter的用法)
    - 取消任一产品 全选功能 取消 (every的应用)
2. 新增总价功能
    - 计算当前的值 reduce的应用
3. 新增删除功能
    - 主要是用到filter的方法
------
------
2018-03-29 11:50:14
### 新增vue的动画效果
1.
------
