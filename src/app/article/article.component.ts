import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  item;

  @Output()
  delete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  doDelete() {
    this.delete.emit(this.item);
  }

}
