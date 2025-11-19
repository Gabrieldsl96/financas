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
        <div className="w-full bg-white shadow-[0_0_5px_#ccc] rounded-[10px] mt-5 p-5">
            <div className="flex flex-col gap-[15px]">
                <div className="flex gap-[15px] flex-wrap">
                    {/* Input de Data */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium mb-[5px]">Data</label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="px-2.5 py-2 border border-gray-300 rounded-[5px] focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Select de Categoria */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium mb-[5px]">Categoria</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="px-2.5 py-2 border border-gray-300 rounded-[5px] focus:outline-none focus:border-blue-500"
                        >
                            {Object.entries(categories).map(([key, cat]) => (
                                <option key={key} value={key}>{cat.title}</option>
                            ))}
                        </select>
                    </div>

                    {/* Input de Título */}
                    <div className="flex flex-col flex-1 min-w-[200px]">
                        <label className="text-sm font-medium mb-[5px]">Título</label>
                        <input
                            type="text"
                            placeholder="Digite o título"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="px-2.5 py-2 border border-gray-300 rounded-[5px] focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Input de Valor */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium mb-[5px]">Valor</label>
                        <input
                            type="number"
                            placeholder="0.00"
                            step="0.01"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            className="px-2.5 py-2 border border-gray-300 rounded-[5px] focus:outline-none focus:border-blue-500 w-[120px]"
                        />
                    </div>

                    {/* Botão Send */}
                    <div className="flex flex-col justify-end">
                        <button
                            onClick={handleAddEvent}
                            className="p-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors"
                            title="Adicionar item"
                        >
                            <Send size={20} />
                        </button>
                    </div>
                </div>

                {/* Botão Adicionar (removido, agora usa o ícone Send) */}
            </div>
        </div>
    )
}