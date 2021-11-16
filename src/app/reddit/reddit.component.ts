import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { RedditService } from '../reddit.service';

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.css']
})
export class RedditComponent implements OnInit {

  postList:Post[]=[];
  constructor(private apiService:RedditService) { }

  ngOnInit(): void {
    this.apiService.getReddit().subscribe(
      (response:any)=>{
        console.log(response);
        response.data.children.forEach((el:any)=> {
          
          let newPost:Post={
            title:el.data.title,
            url:"https://reddit.com" + el.data.permalink,
            img:el.data.thumbnail
          }
          this.postList.push(newPost);
          console.log(this.postList);
        });
      }
    );
  }

}
