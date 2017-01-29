import { Component, Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `<h1 *ngIf="tampil" >Hello {{name}}</h1>
  			<span [ngSwitch]="nama">
  				<span *ngSwitchCase="'andika'" >Andika Nugraha</span>
  				<span *ngSwitchCase="'dika'" >Muahmmad Andika</span>
  				<span *ngSwitchDefault>Nama salah</span>
  			</span>
  			<ul>
  				<li *ngFor="let receh of uang">
  				{{receh}}
  				</li>
  			</ul>
        <h1>{{buku}}</h1>
        <h1>{{buku | uppercase}}</h1>
        <h1>{{buku | lowercase}}</h1>
        <h1>{{tanggal | date:'shortDate' }}</h1>
        <h1>{{tanggal | date:'longDate' }}</h1>
        <h1>{{harga | currency:'IDR':'true' }}</h1>
        <andika *ngIf="false"></andika>
        <hr>
        <input type="text" [(ngModel)]="filterSkill">
        <p>{{5 | exponentialStrength: 10}}</p>
        `
})



export class AppComponent  { 
	name = 'Andika'; 
	private tampil;
	private nama;
	private uang;
  private buku;
  private tanggal;
  private harga;
  private skill;

	constructor(){
		this.tampil = true;
		this.nama = "ika";
    this.skill = ['Angular','CodeIgniter','PHP','ReactJS','NodeJS'];
		this.uang = ['1000','2000','5000','10000','20000'];
    this.buku = "Head First JavaScript";
    this.tanggal = new Date(2017, 0, 29);
    this.harga = 2000;
	}
}
