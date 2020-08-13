import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is a simply a test', 'https://static01.nyt.com/images/2020/02/10/dining/onepot-cheesypasta/onepot-cheesypasta-articleLarge.jpg'),
    new Recipe('A test Recipe', 'This is a simply a test', 'https://static01.nyt.com/images/2020/02/10/dining/onepot-cheesypasta/onepot-cheesypasta-articleLarge.jpg'),
       
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
