import {Component, OnInit} from '@angular/core';
import {Todo} from "../../Todo";
import {deleteOutputDir} from "@angular-devkit/build-angular/src/utils";
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
constructor() {
  this.todos = [

    {
      sno:1,
      title:"this is title",
      desc:"description",
      active:true
    },
    {
      sno:2,
      title:"this is title2",
      desc:"description",
      active:false
    },
    {
      sno:3,
      title:"this is title3",
      desc:"description",
      active:true
    },
    {
      sno:4,
      title:"this is title4",
      desc:"description",
      active:false
    },
  ]
}
  ngOnInit() {
  }

  deleteTodo(todo:Todo){
  console.log(todo);
  const index = this.todos.indexOf(todo);
  this.todos.splice(index,1)
  }
  protected readonly deleteOutputDir = deleteOutputDir;
}
