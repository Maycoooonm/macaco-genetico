let aaa;
function setup() {
	 aaa = new Population("apoptose", 5000, 0.05);
}
function draw() {
	if(aaa.isDone) {
		noLoop()
		console.log(aaa.best)
	}
	aaa.naturalSelection();
	aaa.generate();
	aaa.evaluate()
	console.log(`${aaa.bestNow.creatPhrase()} - geração ${aaa.generations}"`)
}
