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
  @Output() update = new EventEmitter<any>();

  isEditing = false;

  onDeleteProduct() {
    if (!this.product || !this.product.code) {
      console.error("⚠️ Erro: Tentativa de deletar um produto sem código!");
      return;
    }
    this.delete.emit(this.product.code);
  }

  onEditProduct() {
    this.isEditing = true;
  }
  
  onConfirmEditProduct() {
   if(!this.product || !this.product.code) {
     console.error("Erro: Tentativa de editar um produto sem código!");
     return;
   }
   if(window.confirm("Deseja salvar as alterações para esse produto?")) {
     this.update.emit(this.product);
     this.isEditing = false;
   }
  }
  onCancelEditProduct() {
    this.isEditing = false;
  }
}
