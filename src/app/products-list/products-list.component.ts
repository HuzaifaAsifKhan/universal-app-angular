import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-products-list',
  template: `
    <p>
      products-list works!
    </p>
  `,
  styles: [
  ]
})
export class ProductsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
