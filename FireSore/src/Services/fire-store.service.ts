import { Injectable, inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Product } from '../Interfaces/Products';
import { collection, addDoc, getDocs, updateDoc, deleteField, query, orderBy, startAfter, limit } from 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class FireStoreService {

  constructor(private fireStore: AngularFirestore,) { }

  private collectionName = 'Products';
  private lastDoc: any = null;

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

  async getProducts(pageSize: number = 5, nextPage: boolean = false) {
    try {
      let q;

      if (nextPage && this.lastDoc) {
        q = query(
          collection(this.fireStore.firestore, this.collectionName),
          orderBy('name'), 
          startAfter(this.lastDoc), 
          limit(pageSize)
        );
      } else {
        q = query(
          collection(this.fireStore.firestore, this.collectionName),
          orderBy('name'),
          limit(pageSize)
        );
      }

      const querySnapshot = await getDocs(q);
      const products: any[] = [];

      querySnapshot.forEach((doc) => {
        products.push({ code: doc.id, ...doc.data() });
      });

      this.lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];

      return products;

    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      return [];
    }
  }


  async updateProduct(id: string, data: Product) {
    if (!id) {
      console.error("Erro: ID do produto é inválido.");
      return Promise.reject("ID inválido");
    }
    return this.fireStore.firestore.collection(this.collectionName).doc(id).update(data);
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
