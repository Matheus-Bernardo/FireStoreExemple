import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products = [
    { code: '001', name: 'Produto 1', description: 'Descrição 1', quantity: 10 },
    { code: '002', name: 'Produto 2', description: 'Descrição 2', quantity: 15 },
    { code: '003', name: 'Produto 3', description: 'Descrição 3', quantity: 20 }
  ];

  addProduct() {
    this.products.push({ code: '', name: '', description: '', quantity: 0 });
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }
}
