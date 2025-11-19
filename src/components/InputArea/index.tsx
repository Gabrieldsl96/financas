import { Item } from "@/types/Item"
import { categories } from "@/data/categories";
import { useState } from "react";
import Swal from "sweetalert2";
import { Button } from "../ui/button";
import { Send } from "lucide-react";

type Props = {
    onAdd: (item: Item) => void;
}

export const InputArea = ({ onAdd }: Props) => {
    const [date, setDate] = useState<string>('');
    const [category, setCategory] = useState<string>('food');
    const [title, setTitle] = useState<string>('');
    const [value, setValue] = useState<string>('');

    const handleAddEvent = async () => {
        if (!date || !title || !value) {
            Swal.fire({
                icon: 'warning',
                title: 'Atenção!',
                text: 'Por favor, preencha todos os campos'
            });
            return;
        }

        let newItem: Item = {
            date: new Date(date),
            category: category,
            title: title,
            value: parseFloat(value)
        }
        onAdd(newItem);

        // Limpar os campos
        setDate('');
        setCategory('food');
        setTitle('');
        setValue('');
    }

    return (
        <div className="w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-lg rounded-xl mt-6 p-5 sm:p-6 md:p-7">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-slate-100 mb-5">Adicionar Transação</h2>
            <div className="flex flex-col gap-4 sm:gap-5">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-3 md:gap-4 flex-wrap">
                    {/* Input de Data */}
                    <div className="flex flex-col flex-1 sm:flex-initial min-w-[140px]">
                        <label className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">Data</label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="px-3 sm:px-3 py-2 text-xs sm:text-sm bg-gray-50 dark:bg-slate-700/50 border border-gray-300 dark:border-slate-600 rounded-lg text-gray-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                        />
                    </div>

                    {/* Select de Categoria */}
                    <div className="flex flex-col flex-1 sm:flex-initial min-w-[140px]">
                        <label className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">Categoria</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="px-3 sm:px-3 py-2 text-xs sm:text-sm bg-gray-50 dark:bg-slate-700/50 border border-gray-300 dark:border-slate-600 rounded-lg text-gray-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                        >
                            {Object.entries(categories).map(([key, cat]) => (
                                <option key={key} value={key}>{cat.title}</option>
                            ))}
                        </select>
                    </div>

                    {/* Input de Título */}
                    <div className="flex flex-col flex-1 min-w-full sm:min-w-[180px]">
                        <label className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">Título</label>
                        <input
                            type="text"
                            placeholder="Digite o título"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="px-3 sm:px-3 py-2 text-xs sm:text-sm bg-gray-50 dark:bg-slate-700/50 border border-gray-300 dark:border-slate-600 rounded-lg text-gray-900 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                        />
                    </div>

                    {/* Input de Valor */}
                    <div className="flex flex-col flex-1 sm:flex-initial min-w-[110px]">
                        <label className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">Valor</label>
                        <input
                            type="number"
                            placeholder="0.00"
                            step="0.01"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            className="px-3 sm:px-3 py-2 text-xs sm:text-sm bg-gray-50 dark:bg-slate-700/50 border border-gray-300 dark:border-slate-600 rounded-lg text-gray-900 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                        />
                    </div>

                    {/* Botão Send */}
                    <div className="flex flex-col justify-end items-center w-full sm:w-auto">
                        <button
                            onClick={handleAddEvent}
                            className="w-full sm:w-auto px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-600 dark:to-blue-700 text-white rounded-lg flex items-center justify-center gap-2 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-blue-500/50 hover:shadow-xl font-medium text-sm"
                            title="Adicionar item"
                        >
                            <Send size={18} className="sm:w-5 sm:h-5" />
                            <span className="hidden sm:inline">Enviar</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}