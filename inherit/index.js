//组合寄生继承
function f(name,age) {
	this.name=name;
	this.age=age;
};
f.prototype={
	mm:'llllll'
};

function cat(name='Tom') {
	f.call(this);//继承实例属性
	this.name=name;
}
var temp=function () {

};
temp.prototype=f.prototype;
cat.prototype=new temp();//继承原型属性
cat.prototype.constructor=cat;
