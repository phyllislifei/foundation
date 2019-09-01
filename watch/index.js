function observer() {
	this.update=function (args) {

	}
}
function observerlist(){
	this.observerlist=[];
}
/*
* 添加观察者
* param obj   一个observe对象
* */
observerlist.prototype.add=function (obj) {
	if (obj){
		this.observerlist.push(obj)
	}
};

/*
* 得到观察者的数量
* */
observerlist.prototype.len=function () {
	return this.observerlist.length;
};

/*
* 删除观察者
* param obj 一个观察者对象
* */
observerlist.prototype.remove=function (obj) {
	let index=this.observerlist.indexOf(obj);
	this.observerlist.splice(index,1);
};

/*
* 得到具体观察者
* param index 观察者的下标
* */

observerlist.prototype.get=function(index){
	return this.observerlist[index];
};

function subject() {
	this.observes=new observerlist();
}

/*
* 遍历所有观察者对象，调动他们的update函数
* */

subject.prototype.all=function(args){
	let len=this.observes.len();
	for(let i=0;i<len;i++){
		this.observes.get(i).update(args);
	}
};
/*
* 添加观察者
* */
subject.prototype.add=function(obj){
	this.observes.add(obj);
};
/*
* 删除观察者
* */
subject.prototype.remove=function(obj){
	this.observes.remove(obj);
};
