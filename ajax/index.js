var obj={
	axios:function (url,method,content) {
		var promise=new Promise(function (res,rej) {
			var xhr=new XMLHttpRequest();
			xhr.open(method,url,true);
			xhr.send(content);
			xhr.onreadystatechange=function () {
				if(xhr.readyState===4&&xhr.status>=200&&status<300){
					var data=xhr.responseText;
					res(data);
				}
			}
		});
		return promise;
	}
};
