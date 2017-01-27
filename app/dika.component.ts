import {Component} from '@angular/core';

@Component({
	selector	: 'andika',
	template	:`
					<h3>{{tag}}</h3><h1>{{nama}}</h1>
					<button (click)="diClick()">Click</button><br/>
					<img [src]="gambar">
					<img bind-src="gambar">

				`
})

export class DikaComponent{
	
	private tag, gambar;
	nama = 'Andika Nugraha';
	constructor(){
		this.tag = 'Hello World';
		this.gambar = 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/W0RUS6FWBJ.jpg'
	}

	public diClick(){
		console.log('Di Click...');
	}

}