import { Component, EventEmitter, Output } from '@angular/core';
import { FireStoreService } from '../../Services/fire-store.service';


@Component({
  selector: 'app-product-modal',
  standalone: false,
  templateUrl: './product-modal.component.html',
  styleUrl: './product-modal.component.scss'
})
export class ProductModalComponent {
  constructor(private fireStoreService: FireStoreService) {}
  product = { name: '', description: '', amount: 0 };

  @Output() close = new EventEmitter();
  @Output() create = new EventEmitter();

  closeModal() {
    this.close.emit();
  }

  async saveProduct() {
    try {
      await this.fireStoreService.createProduct(this.product);
      this.create.emit();
      alert('Produto cadastrado com sucesso!');
      
    } catch (error) {
      alert('Erro ao cadastrar o produto');
      console.error('Erro ao cadastrar o produto', error);
    }
  }

}
