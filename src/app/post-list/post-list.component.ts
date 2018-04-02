import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {
  posts: FirebaseListObservable<any[]>;
  constructor() { }

  ngOnInit() {
  }

}
