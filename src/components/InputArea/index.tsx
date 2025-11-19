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
        <div className="w-full bg-white shadow-[0_0_5px_#ccc] rounded-[10px] mt-5 p-3 sm:p-4 md:p-5">
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-[15px]">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 md:gap-[15px] flex-wrap">
                    {/* Input de Data */}
                    <div className="flex flex-col flex-1 sm:flex-initial min-w-[140px]">
                        <label className="text-xs sm:text-sm font-medium mb-1 sm:mb-[5px]">Data</label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="px-2 sm:px-2.5 py-1.5 sm:py-2 text-xs sm:text-base border border-gray-300 rounded-[5px] focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Select de Categoria */}
                    <div className="flex flex-col flex-1 sm:flex-initial min-w-[130px]">
                        <label className="text-xs sm:text-sm font-medium mb-1 sm:mb-[5px]">Categoria</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="px-2 sm:px-2.5 py-1.5 sm:py-2 text-xs sm:text-base border border-gray-300 rounded-[5px] focus:outline-none focus:border-blue-500"
                        >
                            {Object.entries(categories).map(([key, cat]) => (
                                <option key={key} value={key}>{cat.title}</option>
                            ))}
                        </select>
                    </div>

                    {/* Input de Título */}
                    <div className="flex flex-col flex-1 min-w-full sm:min-w-[200px] md:min-w-[200px]">
                        <label className="text-xs sm:text-sm font-medium mb-1 sm:mb-[5px]">Título</label>
                        <input
                            type="text"
                            placeholder="Digite o título"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="px-2 sm:px-2.5 py-1.5 sm:py-2 text-xs sm:text-base border border-gray-300 rounded-[5px] focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Input de Valor */}
                    <div className="flex flex-col flex-1 sm:flex-initial min-w-[100px]">
                        <label className="text-xs sm:text-sm font-medium mb-1 sm:mb-[5px]">Valor</label>
                        <input
                            type="number"
                            placeholder="0.00"
                            step="0.01"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            className="px-2 sm:px-2.5 py-1.5 sm:py-2 text-xs sm:text-base border border-gray-300 rounded-[5px] focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Botão Send */}
                    <div className="flex flex-col justify-end items-center w-full sm:w-auto">
                        <button
                            onClick={handleAddEvent}
                            className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-blue-600"
                            title="Adicionar item"
                        >
                            <Send size={18} className="sm:w-5 sm:h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}