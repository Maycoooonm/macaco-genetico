
class DNA {
	constructor(num) {
		this.genes = []
		for(let i=0;i<num;i++) {
			this.genes[i] = this.randomChar();
		}
	}
	randomChar() {
		 let nChar = Math.floor(random(97, 124))
		 if(nChar === 123) nChar = 32;
		 let char = String.fromCharCode(nChar)
		 return char
	}
	creatPhrase() {
		return this.genes.join('')
	}
	getFitness(target) {
		let score = 0;
		for(let i =0;i<this.genes.length;i++) {
			if(this.genes[i] == target.charAt(i)) {
				score++
			}
		}
		return (score/target.length)*100;
 	}
	crossover(partner) {
		let corta = Math.floor(random(partner.genes.length));
		let child = new DNA(partner.genes.length)
		for(let i=0;i<this.genes.length;i++) {
			if(i < corta) child.genes[i] = this.genes[i];
			if(i >= corta) child.genes[i] = partner.genes[i];
		}
		return child
	}
	mutate(mutationRate) {
		for(let i=0;i<this.genes.length;i++) {
			if(Math.random() > mutationRate) return;
			this.genes[i] = this.randomChar()
		}
	}
}