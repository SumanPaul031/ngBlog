import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public posts: {
    id: string;
    titlePost: string;
    contentPost: string;
    imagePost: string;
  }[] = [
    {
      id: '1',
      titlePost: 'Post 1',
      contentPost: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deserunt architecto in nesciunt reiciendis officia, recusandae eaque dicta voluptates dignissimos!',
      imagePost: 'https://i.picsum.photos/id/866/200/300.jpg'
    },
    {
      id: '2',
      titlePost: 'Post 2',
      contentPost: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deserunt architecto in nesciunt reiciendis officia, recusandae eaque dicta voluptates dignissimos!',
      imagePost: 'https://i.picsum.photos/id/668/200/300.jpg'
    },
    {
      id: '3',
      titlePost: 'Post 3',
      contentPost: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deserunt architecto in nesciunt reiciendis officia, recusandae eaque dicta voluptates dignissimos!',
      imagePost: 'https://i.picsum.photos/id/686/200/300.jpg'
    },
    {
      id: '4',
      titlePost: 'Post 4',
      contentPost: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deserunt architecto in nesciunt reiciendis officia, recusandae eaque dicta voluptates dignissimos!',
      imagePost: 'https://i.picsum.photos/id/868/200/300.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
