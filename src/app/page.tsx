"use client";

import { InfoArea } from "@/components/InfoArea";
import { InputArea } from "@/components/InputArea";
import { TableArea } from "@/components/TableArea";
import { ThemeToggle } from "@/components/ThemeToggle";
import { categories } from "@/data/categories";
import { filterListByMonth, getCurrentMonth } from "@/helpers/dateFilter";
import { Item } from "@/types/Item";
import { Inconsolata } from "next/font/google";
import { useEffect, useState } from "react";
import { getAllItems, addItem, deleteItem, ItemWithId } from "@/services/firebaseService";
import Swal from "sweetalert2";

const HomePage = () => {
    const [list, setList] = useState<ItemWithId[]>([]);
    const [filteredList, setFilteredList] = useState<ItemWithId[]>([])
    const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [loading, setLoading] = useState(true);

    // Carregar itens do Firebase ao montar o componente
    useEffect(() => {
        const loadItems = async () => {
            setLoading(true);
            const items = await getAllItems();
            setList(items);
            setLoading(false);
        };
        loadItems();
    }, []);

    useEffect(() => {
        setFilteredList(filterListByMonth(list as any, currentMonth) as any)
    }, [list, currentMonth])

    useEffect(() => {
        let incomeCount = 0;
        let expenseCount = 0;

        for (let i in filteredList) {
            if (categories[filteredList[i].category].expense) {
                expenseCount += filteredList[i].value;
            } else {
                incomeCount += filteredList[i].value;
            }
        }

        setIncome(incomeCount);
        setExpense(expenseCount);

    }, [filteredList])

    const handleMonthChange = (newMonth: string) => {
        setCurrentMonth(newMonth)
    }

    const handleAddItem = async (item: Item) => {
        const docId = await addItem(item);
        if (docId) {
            const itemWithId: ItemWithId = { ...item, id: docId };
            setList([...list, itemWithId]);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Erro!',
                text: 'Erro ao adicionar item'
            });
        }
    }

    const handleDeleteItem = async (index: number) => {
        const itemToDelete = filteredList[index];

        const result = await Swal.fire({
            icon: 'question',
            title: 'Tem certeza?',
            text: 'Este item será deletado permanentemente',
            showCancelButton: true,
            confirmButtonText: 'Deletar',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#dc2626',
            cancelButtonColor: '#6b7280'
        });

        if (result.isConfirmed) {
            const success = await deleteItem(itemToDelete.id);

            if (success) {
                const updatedList = list.filter(item => item.id !== itemToDelete.id);
                setList(updatedList);
                Swal.fire({
                    icon: 'success',
                    title: 'Deletado!',
                    text: 'Item removido com sucesso',
                    timer: 1500
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Erro!',
                    text: 'Erro ao deletar item'
                });
            }
        }
    }

    return (
        <div className="min-h-screen w-full bg-white dark:bg-linear-to-br dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
            {/* Header Moderno */}
            <div className="bg-blue-600 dark:bg-linear-to-r dark:from-blue-900 dark:to-blue-950 shadow-2xl border-b border-blue-700 dark:border-blue-900">
                <div className="h-[100px] sm:h-[120px] md:h-[150px] flex items-center justify-center gap-6 px-4 md:px-6 relative">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                        💰 Sistema Financeiro
                    </h1>
                    <div className="absolute right-4 md:right-6">
                        <ThemeToggle />
                    </div>
                </div>
            </div>

            {/* Conteúdo Principal */}
            <div className="m-auto max-w-full sm:max-w-full md:max-w-[1000px] px-4 sm:px-6 md:px-0 py-8 md:py-10">
                {loading ? (
                    <div className="w-full flex items-center justify-center py-16">
                        <div className="text-center">
                            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
                            <p className="text-lg sm:text-xl text-slate-300">Carregando dados...</p>
                        </div>
                    </div>
                ) : (
                    <>
                        <InfoArea
                            currentMonth={currentMonth}
                            onMonthChange={handleMonthChange}
                            income={income}
                            expense={expense}
                        />
                        <InputArea
                            onAdd={handleAddItem}
                        />
                        <TableArea
                            list={filteredList}
                            onDelete={handleDeleteItem}
                        />
                    </>
                )}
            </div>
        </div>
    )
};

export default HomePage;