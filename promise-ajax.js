function ajax({url="",type="GET",dataType="json"}){
    let xhr = new XMLHttpRequest();
    xhr.open(url,type,true);
    xhr.responseType = dataType;
    // 成功调用的方法
    xhr.onload = function () {

    }
    xhr.onerror = function (err) {

    }
    xhr.send();
}

function PromiseAjax({url="",type="GET",dataType="json"}){
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open(type,url,true);
        xhr.responseType = dataType;
        // 成功调用的方法
        xhr.onload = function () {
            resolve(xhr.response)
        }
        xhr.onerror = function (err) {
            reject(err)
        }
        xhr.send();
    })
}