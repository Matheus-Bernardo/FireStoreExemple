import { Injectable, inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Product } from '../Interfaces/Products';
import { collection, addDoc, getDocs } from 'firebase/firestore';


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

  deleteProduct(id: string) {
    return this.fireStore.collection(this.collectionName).doc(id).delete();
  }
}
