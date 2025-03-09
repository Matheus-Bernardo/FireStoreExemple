import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  standalone: false,
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  @Input() product!: any;
  @Output() delete = new EventEmitter<string>();

  onDeleteProduct() {
    if (!this.product || !this.product.code) {
      console.error("⚠️ Erro: Tentativa de deletar um produto sem código!");
      return;
    }
    this.delete.emit(this.product.code);
  }
  
}
