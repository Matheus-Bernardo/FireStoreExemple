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

  deleteProduct(productId: string) {
    if (!productId) {
      return;
    }

    const confirmDelete = window.confirm("Deseja realmente excluir este produto?");
    if (!confirmDelete) {
      return;
    }

    this.fireStoreService.deleteProduct(productId)
      .then(() => {
        this.products = this.products.filter(product => product.code !== productId);
      })
      .catch(error => {
        console.error("Erro ao excluir produto:", error);
      });
  }

  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
