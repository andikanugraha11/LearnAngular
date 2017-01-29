import {Component} from '@angular/core';
import { DikaPostService } from './dikaPost.service';
@Component({
	selector	: 'dika-post',
	template	:`
				<form (submit)="addPost()">
					<label>Judul</label>
					<input type="text" [ngModelOptions]="{standalone: true}" [(ngModel)]="judul">
					<br>
					<label>Isi</label>
					<input type="text" [ngModelOptions]="{standalone: true}" [(ngModel)]="body">
					<br>
					<input type="submit" value="Post">
				</form>
				<h1>Post</h1>

				<ul>
					<li *ngFor='let post of posts'>
						<h3>{{post.judul}}</h3>
						<p>{{post.body}}</p>
					</li>
				</ul>
				`
				
})

export class DikaPostComponent{
	private posts;
	private judul;
	private	body;
	private newPost;
	constructor(private _postService:DikaPostService){
		this.posts = this._postService.getPost();
		console.log(this.posts[0].body);
	}

	public addPost(){
		this.newPost = {
			judul 	: this.judul,
			body	: this.body
		}

	this._postService.addPostS(this.newPost);
	}
}