import { Component } from '@angular/core';
import { NewsArticlesService } from '../api/news-articles.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectedCategory = "health";
  topHeadlines: any[] = [];
  fallbackImageURL = 'path/to/fallback-image.jpg'; // Define the fallback image URL here

  constructor(private articleService: NewsArticlesService) {
    articleService.getTopHeadlines().subscribe((results) => {
      console.log(results.articles);
      this.topHeadlines = results.articles;
      console.log(this.topHeadlines);
    });
    articleService.getArticleByCategory({ string: this.selectedCategory }).subscribe((results: any[]) => {
      //console.log(results);
    });
  }

  getImageUrl(article: any): string {
    return article.urlToImage ? article.urlToImage : this.fallbackImageURL;
  }
}
