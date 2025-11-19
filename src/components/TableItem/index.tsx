import { categories } from "@/data/categories"
import { formatDate } from "@/helpers/dateFilter"
import { Item } from "@/types/Item"
import { Trash2 } from "lucide-react"

type Props = {
    item: Item
    index: number
    onDelete: (index: number) => void
}

const colorMap: { [key: string]: string } = {
    blue: 'bg-blue-600 dark:bg-blue-700',
    brown: 'bg-amber-700 dark:bg-amber-800',
    green: 'bg-green-600 dark:bg-green-700'
}

export const TableItem = ({ item, index, onDelete }: Props) => {
    const categoryColor = colorMap[categories[item.category].color] || 'bg-gray-600'
    const formattedValue = item.value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

    return (
        <tr className="border-b border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors duration-150">
            <td className="py-3 sm:py-3.5 px-3 sm:px-4 text-xs sm:text-sm text-gray-800 dark:text-slate-200">{formatDate(item.date)}</td>
            <td className="py-3 sm:py-3.5 px-3 sm:px-4 text-xs sm:text-sm">
                <div className={`inline-block px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md text-white text-xs sm:text-sm font-medium shadow-md ${categoryColor}`}>
                    {categories[item.category].title}
                </div>
            </td>
            <td className="py-3 sm:py-3.5 px-3 sm:px-4 text-xs sm:text-sm text-gray-800 dark:text-slate-200 truncate max-w-[120px] sm:max-w-none">{item.title}</td>
            <td className="py-3 sm:py-3.5 px-3 sm:px-4 text-xs sm:text-sm font-semibold">
                <div className={`${categories[item.category].expense ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>
                    R$ {formattedValue}
                </div>
            </td>
            <td className="py-3 sm:py-3.5 px-2 sm:px-4">
                <button
                    onClick={() => onDelete(index)}
                    className="p-2 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-600/20 rounded-lg transition-all duration-200 hover:scale-110"
                    title="Deletar item"
                >
                    <Trash2 size={18} className="sm:w-5 sm:h-5" />
                </button>
            </td>
        </tr>
    )
}