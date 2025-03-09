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
  pageSize = 10;
  isNextPageAvailable:boolean = true;

  constructor(private fireStoreService: FireStoreService) {
    this.loadProducts();
  }

  async loadProducts(nextPage: boolean = false) {
    const newProducts = await this.fireStoreService.getProducts(this.pageSize, nextPage);

    if (newProducts.length < this.pageSize) {
      this.isNextPageAvailable = false;
    }else{
      this.isNextPageAvailable = true;
    }

    this.products = newProducts;
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

  updateProduct(updatedProduct: any) {
    if (!updatedProduct || !updatedProduct.code) {
      console.error("Erro: Produto inválido para atualização.");
      return;
    }
    
    this.fireStoreService.updateProduct(updatedProduct.code, updatedProduct)
      .then(() => {
        this.loadProducts(); 
      })
      .catch(error => {
        console.error("Erro ao atualizar produto:", error);
      });
  }
  onProductCreated() {
    this.loadProducts(false);
  }
  

  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  loadNextPage() {
    this.loadProducts(true); 
  }

  loadPreviousPage() {
    this.loadProducts(false);
  }
}
