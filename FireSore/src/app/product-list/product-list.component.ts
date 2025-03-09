import { Component } from '@angular/core';
import { FireStoreService } from '../../Services/fire-store.service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  products: any[] = []; 

  constructor(private fireStoreService: FireStoreService) {
    this.loadProducts();
  }

  async loadProducts() {
    this.products = await this.fireStoreService.getProducts(); 
  }

  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
