export default class Game {
	constructor() {
		this.stay = 0;
		this.newsInterval = 0;
		this.element = document.createElement('img')
		this.element.src = './image/goblin.png';
		this.maxMiss = 5;
		this.moveInterval = 1000;
		this.miss = 0;
		this.score = 0;		
	}

	click(){		
		this.element.remove();
		this.miss = -1;				 

	}

	randomNumber() {
		const fieldSize = 16;

		let numberBox = Math.floor(Math.random() * fieldSize) + 1;
		return numberBox;
	}

	moving() {
		let boxs = document.querySelectorAll('.box')
		if (boxs.length === 0) {
			throw new Error('Игровое поле не найдено');
		}

		let moveToBox = this.randomNumber()

		while (this.stay === moveToBox) {
			moveToBox = this.randomNumber()
		}

		boxs.forEach(el => {
			let id = Number(el.dataset.id)

			if (id === moveToBox) {
				el.append(this.element)
				this.stay = moveToBox
			}
		})
	}	
	

	startGame() {

		this.element.addEventListener('mouseenter', () => {
			document.body.style.cursor =  "url('./image/icons.png'), pointer";

			setTimeout(() => {
				document.body.style.cursor = 'default';
			},500)
		})

		this.element.addEventListener("click", () => {
			this.click()			
		});			
		
		this.newsInterval = setInterval(() => {
			this.moving();
			this.miss ++;
			if (this.miss > this.maxMiss) clearInterval(this.newsInterval);
		}, this.moveInterval);

		window.addEventListener("beforeunload", () => {
			clearInterval(this.newsInterval);
		});
	}
}