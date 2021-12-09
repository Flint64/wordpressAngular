import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts = [{title: "This is a title", body: "This is a body"}, 
  {title: "Another post here", body: "Body Copy"}, 
  {title: "Third post", body: "How about some text?"}, 
  {title: "Last Post", body: "Body text of the post goes here"}
];

  constructor() { }

  ngOnInit(): void {
    
    this.fetchData();

  }

  fetchData(){
    console.log("fired");
    
    fetch('http://example.dev.cc/?rest_route=wp-json/wp/v2/posts/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(result => {
        return result.json()

    .then(data => {
      console.log(data);
    })

    .catch(err => {
        console.log(err);
      });
    });
  }

}
