import { Component, NgModule} from '@angular/core';


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
  			`
})



export class AppComponent  { 
	name = 'Andika'; 
	private tampil;
	private nama;
	private uang;

	constructor(){
		this.tampil = true;
		this.nama = "ika";
		this.uang = ['1000','2000','5000','10000','20000'];
	}
}
