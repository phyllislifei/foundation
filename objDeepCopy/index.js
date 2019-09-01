//Json
function copy(obj){
   return JSON.parse(JSON.stringify(obj))
}
//函数实现
let same=[];
function clone(obj) {
	if(typeof(obj) !=="object"||!obj){
		//基本类型的数据：null,number,string,boolean,undefined
		// function
		return obj;
	}
	if(same.indexOf(obj)>-1){
		//防止形成circle，比如obj={a:obj}
		return null;
	}
	same.push(obj);
	let temp={}.toString.call(obj);
	let result;
	if(temp==='[object Array]'){
		//数组
		result=[];
		obj.forEach((item,index)=>{
			result[index]=clone(item);
		});
	}
	if(temp==='[object Object]'){
		//对象
		result={};
		Object.keys(obj).forEach((key)=>{
			result[key]=clone(obj[key]);
		})
	}
	return result;
}

var obj1=clone(obj);
console.log(obj1);
