import { Component, Input, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
})
export class RecipeItemComponent {
  @Input() recipe!: Recipe;

  constructor(private recipeService: RecipeService) {}

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
