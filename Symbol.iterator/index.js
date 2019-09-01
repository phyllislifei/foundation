//第一种
function symbol(obj) {
	obj[Symbol.iterator]=function () {
		return {
			obj:this,
			arr:obj.keys,
			len:obj.keys.length,
			next(){
				let index=-1;
				while(index<this.len){
					index++;
					if(this.index===this.len){
						return{value:undefined,done:true}
					}
					return {value:this.obj[this.arr[index]],done:false}
				}
			}
		}
	}
}

var obj={
	name:'lili',
	age:10,
	mm:13
};
symbol(obj);
for(let item in obj){
	console.log(item)
}
//第二种
function* objectEntries() {
	let propKeys = Object.keys(this);

	for (let propKey of propKeys) {
		yield [propKey, this[propKey]];
	}
}

let jane = { first: 'Jane', last: 'Doe' };

jane[Symbol.iterator] = objectEntries;

for (let [key, value] of jane) {
	console.log(`${key}: ${value}`);
}
