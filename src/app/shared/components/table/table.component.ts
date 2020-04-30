import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { PostService } from 'src/app/components/posts/post.service';
import { PostI } from '../../models/post.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['titlePost', 'tagsPost', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private postSvc: PostService) { }

  ngOnInit(): void {
    this.postSvc.getAllPosts().subscribe(posts => this.dataSource.data = posts);
  }

  ngAfterViewInit(): void{
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEditPost(post: PostI){
    console.log('Edit Post', post);
  }

  onDeletePost(post: PostI){
    console.log('Delete Post', post);
  }

  onNewPost(){
    console.log('New Post');
  }
}
