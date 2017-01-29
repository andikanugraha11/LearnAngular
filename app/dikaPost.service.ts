import { Injectable } from '@angular/core'

@Injectable()

export class DikaPostService{
	private posts;

	constructor(){
		this.posts = [
		{
			judul	: 'Judul 1',
			body	: 'Isi dari judul 1'
		},
		{
			judul	: 'Judul 2',
			body	: 'Isi dari judul 2'
		},
		{
			judul	: 'Judul 3',
			body	: 'Isi dari judul 3'
		},

		];
	}

	getPost(){
		return this.posts;
	}
}