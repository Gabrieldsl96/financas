import { db } from '@/app/firebaseInit';
import { Item } from '@/types/Item';
import {
    collection,
    addDoc,
    getDocs,
    doc,
    deleteDoc,
    updateDoc,
    Timestamp,
    Query,
    query,
    where,
} from 'firebase/firestore';

const COLLECTION_NAME = 'items';

export type ItemWithId = Item & { id: string };

// Converter para transformar dados do Firestore em Item
export const itemConverter = {
    toFirestore: (item: Item) => {
        return {
            date: Timestamp.fromDate(item.date),
            category: item.category,
            title: item.title,
            value: item.value,
        };
    },
    fromFirestore: (snapshot: any): Item => {
        const data = snapshot.data();
        return {
            date: data.date.toDate(),
            category: data.category,
            title: data.title,
            value: data.value,
        };
    },
};

// Buscar todos os itens com IDs
export const getAllItems = async (): Promise<ItemWithId[]> => {
    try {
        const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
        const items: ItemWithId[] = [];
        querySnapshot.forEach((docSnapshot) => {
            const data = docSnapshot.data();
            items.push({
                id: docSnapshot.id,
                date: data.date.toDate(),
                category: data.category,
                title: data.title,
                value: data.value,
            });
        });
        return items;
    } catch (error) {
        console.error('Erro ao buscar itens:', error);
        return [];
    }
};

// Adicionar um novo item
export const addItem = async (item: Item): Promise<string | null> => {
    try {
        const docRef = await addDoc(collection(db, COLLECTION_NAME), itemConverter.toFirestore(item));
        return docRef.id;
    } catch (error) {
        console.error('Erro ao adicionar item:', error);
        return null;
    }
};

// Deletar um item
export const deleteItem = async (itemId: string): Promise<boolean> => {
    try {
        await deleteDoc(doc(db, COLLECTION_NAME, itemId));
        return true;
    } catch (error) {
        console.error('Erro ao deletar item:', error);
        return false;
    }
};

// Atualizar um item
export const updateItem = async (itemId: string, item: Partial<Item>): Promise<boolean> => {
    try {
        const itemRef = doc(db, COLLECTION_NAME, itemId);
        const updateData: any = {};
        if (item.date) updateData.date = Timestamp.fromDate(item.date);
        if (item.category) updateData.category = item.category;
        if (item.title) updateData.title = item.title;
        if (item.value !== undefined) updateData.value = item.value;

        await updateDoc(itemRef, updateData);
        return true;
    } catch (error) {
        console.error('Erro ao atualizar item:', error);
        return false;
    }
};
