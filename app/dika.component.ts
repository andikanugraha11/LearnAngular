import {Component} from '@angular/core';

@Component({
	selector	: 'andika',
	template	:`
					<h3>{{tag}}</h3><h1>{{nama}}</h1>
					<button (click)="diClick()">Click</button><br/>
					<input type="text" [(ngModel)]="coba" (keyup.enter)="printConsole($event)"> {{coba}} <br/>
					<img [src]="gambar">
					<img bind-src="gambar">
				`
})

export class DikaComponent{
	
	private tag;
	private gambar;
	private coba;
	nama = 'Andika Nugraha';
	constructor(){
		this.tag = 'Hello World';
		this.gambar = 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/W0RUS6FWBJ.jpg';
		this.coba;
	}

	public diClick(){
		console.log('Di Click...');
	}

	public printConsole(e){
		console.log(e.target.value);
	}

}