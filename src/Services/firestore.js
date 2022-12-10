import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc, orderBy} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAO5AgbRl4G-hV-22S27MS9myW3fv_85mg",
  authDomain: "repuestospoli-e2fb2.firebaseapp.com",
  projectId: "repuestospoli-e2fb2",
  storageBucket: "repuestospoli-e2fb2.appspot.com",
  messagingSenderId: "411431240955",
  appId: "1:411431240955:web:19229ab9e7b8bb4f571c5e"
};

const app = initializeApp(firebaseConfig);
const dB = getFirestore(app);

export default async function getItems (){
  const collectionProductsRef = collection(dB, "productos");
  const q = query(collectionProductsRef, orderBy("id"));
  const docSnap = await getDocs(q);
  const documentsData = docSnap.docs.map(doc => {
    return {
      ...doc.data(),
      id: doc.id,
    }
  });
  return documentsData;
}

export async function getSingleItem(idReq){
  const docRef = doc(dB, "productos", idReq);
  const docSnap = await getDoc(docRef);
  return{
    ...docSnap.data(),
    id: docSnap.id,
  }
}

export async function getItemsByCat(categoryReq){
  const collectionRef = collection(dB, "productos");
  const qCat = query(collectionRef, where("category", "==", categoryReq));
  const docSnap = await getDocs(qCat);
  const documentsData = docSnap.docs.map(doc => {
    return {
      ...doc.data(),
      id: doc.id,
    }
  });
  return documentsData;
}

export async function createOrder(order){
  const collectionRef = collection(dB, "orders");
  const docOrder = await addDoc(collectionRef, order);
  return docOrder.id;
}