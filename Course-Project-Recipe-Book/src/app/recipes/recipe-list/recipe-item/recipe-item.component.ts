import { Component, OnInit } from '@angular/core';

import { RecipeListComponent } from '../recipe-list.component';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  recipes = RecipeListComponent.recipes;
  constructor() { }

  ngOnInit() {
  }

}
