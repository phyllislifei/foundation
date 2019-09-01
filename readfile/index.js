var fs=require('fs');
file='file.txt';
function read(file) {
	var promise=new Promise(function (res,rej) {
		var stream=fs.createReadStream(file);//fs.readFile异步读取文本，fs.createReadStream(file)创建读取文本流，fs.readFileSync(file)同步读取文件
		var data='';
		stream.setEncoding('utf8');
		stream.on('data',function (chunked) {
			data+=chunked;
		});
		stream.on('end',function () {
			res(data);
		});
		stream.on('error',function (err) {
			rej(err);
		})
	});
	return promise;
}

read(file).then(data=>console.log(data));
