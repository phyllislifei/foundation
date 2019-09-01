let pubsub=(function(){
	let topics={};
	function subscribe(topic,fn) {
		if (!topics[topic]) {
			topics[topic]=[];
		}
		topics[topic].push(fn);
	}
	function publish(topic,...args) {
		if (!topics[topic]) {
			return;
		}
		else{
			for (let fn of topics[topic]) {
				fn(args)
			}
		}
	}
	return {
		publish,
		subscribe
	}
}());

let fn=function (topic) {
	console.log(`我订阅成功了${topic}`)
};

pubsub.subscribe('book',fn);
pubsub.publish('book','book');
