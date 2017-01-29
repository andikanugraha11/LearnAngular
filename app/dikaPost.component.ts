import {Component} from '@angular/core';
import { DikaPostService } from './dikaPost.service';
@Component({
	selector	: 'dika-post',
	template	:`<h1>Post</h1>

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
	constructor(private _postService:DikaPostService){
		this.posts = _postService.getPost();
		console.log(this.posts[0].body);
	}
}