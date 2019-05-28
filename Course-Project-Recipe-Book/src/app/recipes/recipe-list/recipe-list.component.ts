import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  static recipes: Recipe[] = [new Recipe("Lasagna", 
  `
  In a Dutch oven, cook sausage, ground beef, onion, and garlic over medium heat until well browned.
   Stir in crushed tomatoes, tomato paste, tomato sauce, and water.
    Season with sugar, basil, fennel seeds, Italian seasoning, 1 tablespoon salt, pepper, and 2 tablespoons parsley.
     Simmer, covered, for about 1 1/2 hours, stirring occasionally. Watch Now
  Bring a large pot of lightly salted water to a boil. Cook lasagna noodles in boiling water for 8 to 10 minutes. 
  Drain noodles, and rinse with cold water. In a mixing bowl, combine ricotta cheese with egg, remaining parsley, and 1/2 teaspoon salt. Watch Now
  Preheat oven to 375 degrees F (190 degrees C). Watch Now
  To assemble, spread 1 1/2 cups of meat sauce in the bottom of a 9x13 inch baking dish. 
  Arrange 6 noodles lengthwise over meat sauce. Spread with one half of the ricotta cheese mixture. 
  Top with a third of mozzarella cheese slices. Spoon 1 1/2 cups meat sauce over mozzarella, and sprinkle with 1/4 cup Parmesan cheese.
   Repeat layers, and top with remaining mozzarella and Parmesan cheese. 
   Cover with foil: to prevent sticking, either spray foil with cooking spray, or make sure the foil does not touch the cheese. Watch Now
  Bake in preheated oven for 25 minutes. Remove foil, and bake an additional 25 minutes. Cool for 15 minutes before serving. Watch Now
  `
  , "https://images.media-allrecipes.com/userphotos/560x315/3359675.jpg"),new Recipe("Lasagna1", 
  `
  In a Dutch oven, cook sausage, ground beef, onion, and garlic over medium heat until well brfowned.
   Stir in crushed tomatoes, tomato paste, tomato sauce, and water.
    Season with sugar, basil, fennel seeds, Italian seasoning, 1 tablespoon salt, pepper, and 2 tablespoons parsley.
     Simmer, covered, for about 1 1/2 hours, stirring occasionally. Watch Now
  Bring a large pot of lightly salted water to a boil. Cook lasagna noodles in boiling water for 8 to 10 minutes. 
  Drain noodles, and rinse with cold water. In a mixing bowl, combine ricotta cheese with egg, remaining parsley, and 1/2 teaspoon salt. Watch Now
  Preheat oven to 375 degrees F (190 degrees C). Watch Now
  To assemble, spread 1 1/2 cups of meat sauce in the bottom of a 9x13 inch baking dish. 
  Arrange 6 noodles lengthwise over meat sauce. Spread with one half of the ricotta cheese mixture. 
  Top with a third of mozzarella cheese slices. Spoon 1 1/2 cups meat sauce over mozzarella, and sprinkle with 1/4 cup Parmesan cheese.
   Repeat layers, and top with remaining mozzarella and Parmesan cheese. 
   Cover with foil: to prevent sticking, either spray foil with cooking spray, or make sure the foil does not touch the cheese. Watch Now
  Bake in preheated oven for 25 minutes. Remove foil, and bake an additional 25 minutes. Cool for 15 minutes before serving. Watch Now
  `
  , "https://images.media-allrecipes.com/userphotos/560x315/3359675.jpg")];

  constructor() { }

  setActiveRecipe(event: Event) {
    (event.target as HTMLElement).parentElement.style.backgroundColor = "red";
  }

  ngOnInit() {
  }

}
