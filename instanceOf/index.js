function instanceOf(a,b) {
	//a是否是b的实例？判断b.prototype是否在a的[[prototype]]链上
	var a1=a.__proto__;
	var b1=b.prototype;
	while(1){
		if(a1===null)
			return false;//原型链最顶层是null,已经到最顶层还未找到
		if(a1===b1)
			return true;
		a1=a1.__proto__;
	}
}

function people() {
	this.name='lili'
}
var obj=new people();
obj.age=11;
var obj1=new people();
obj1.mm=10;

var f=instanceOf(obj,people);
console.log(obj);
console.log(obj1);
console.log(people);
console.log(f);
