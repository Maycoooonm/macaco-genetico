class Population {
	constructor(target, totalPop, mutRate) {
		this.target = target;
		this.mutRate = mutRate;
		this.population = [];
		this.generations = 0;
		this.isDone = false;
		for(let i=0;i<totalPop;i++) {
			this.population[i] = new DNA(this.target.length)
		}
		this.matingPool = []
		this.best;
		this.bestNow;
		
	}
	
	naturalSelection() {
		if(this.isDone) return console.log("acabo")
		this.matingPool = []
		let bestFitness = 0;
		for(let i =0;i<this.population.length;i++) {
			if(this.population[i].getFitness(this.target) > bestFitness) {
				bestFitness = this.population[i].getFitness(this.target);
			}
		}
		console.log('melhor +'+bestFitness)
		let newArr = []
		for(let i=0;i<this.population.length;i++) {	
			let n = map(this.population[i].getFitness(this.target),0,bestFitness,0,1);
			for(let j=0;j<n;j++) {
				newArr.push(this.population[i])
			}
		}
		this.matingPool = newArr;
	}
	generate() {
		let arr = []
		for(let i = 0; i< this.population.length; i++) {
			let a = Math.floor(random(this.matingPool.length));
			let b = Math.floor(random(this.matingPool.length));
			let PA = this.matingPool[a];
			let PB = this.matingPool[b]
			let child = PA.crossover(PB);
			child.mutate(this.mutRate);
			this.population[i] = child;
		//	console.log(child.creatPhrase()+" geração "+this.generations)
		}
		this.generations++;
	}
	evaluate() {
		if(this.isDone) return;
		let bestFit = 0;
		let idx = 0
		for(let i=0;i<this.population.length;i++) {
			if(this.population[i].getFitness(this.target) > bestFit) {
				bestFit = this.population[i].getFitness(this.target);
				idx = i;
				this.bestNow = this.population[i];
			}
		}
		if(bestFit === 100) {
			this.isDone = true;
			this.best = this.population[idx];
		}	
	}
} 