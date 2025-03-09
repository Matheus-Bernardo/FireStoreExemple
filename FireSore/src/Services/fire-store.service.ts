import { Injectable, inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Product } from '../Interfaces/Products';
import { collection, addDoc, getDocs, updateDoc, deleteField } from 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class FireStoreService {

  constructor(private fireStore: AngularFirestore,) { }

  private collectionName = 'Products';

  async createProduct(product: Product) {

    try {
      const docRef = await addDoc(collection(this.fireStore.firestore, this.collectionName), {
        name: product.name,
        description: product.description,
        amount: product.amount
      });

    } catch (e) {
      console.error("Error adding document: ", e);

    }
  }

  async getProducts() {
    try {
      const querySnapshot = await getDocs(collection(this.fireStore.firestore, this.collectionName));
      const products: any[] = [];

      querySnapshot.forEach((doc) => {
        const productData = doc.data();
        products.push({ code: doc.id, ...productData });
      });

      return products;

    } catch (error) {

      return [];
    }
  }


  updateProduct(id: string, data: Product) {
    return this.fireStore.collection(this.collectionName).doc(id).update(data);
  }

  deleteProduct(id: string): Promise<void> {
    if (!id) {
      console.error("Erro: ID do produto é inválido.");
      return Promise.reject("ID inválido");
    }

    return this.fireStore.firestore.collection(this.collectionName).doc(id).delete()
      .then(() => console.log(`Produto ${id} removido com sucesso!`))
      .catch(error => {
        console.error("Erro ao remover documento:", error);
        throw error;
      });
  }

}
