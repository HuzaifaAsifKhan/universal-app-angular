import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { I18nService } from '../i18n.service';
import { ProductsService } from '../products.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public userCurrency: string = this.i18n.getCurrencyCode();

  constructor(
    private route: ActivatedRoute,
    private ps: ProductsService,
    private us: UserService,
    private i18n: I18nService
  ) { }

  ngOnInit(): void {
  }

}
