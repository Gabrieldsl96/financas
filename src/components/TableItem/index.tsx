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
    blue: 'bg-blue-600',
    brown: 'bg-amber-700',
    green: 'bg-green-600'
}

export const TableItem = ({ item, index, onDelete }: Props) => {
    const categoryColor = colorMap[categories[item.category].color] || 'bg-gray-600'
    const formattedValue = item.value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

    return (
        <tr className="border-b hover:bg-gray-50">
            <td className="py-2 sm:py-2.5 px-2 sm:px-2.5 text-xs sm:text-sm">{formatDate(item.date)}</td>
            <td className="py-2 sm:py-2.5 px-2 sm:px-2.5 text-xs sm:text-sm">
                <div className={`inline-block px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-[5px] text-white text-xs sm:text-sm ${categoryColor}`}>
                    {categories[item.category].title}
                </div>
            </td>
            <td className="py-2 sm:py-2.5 px-2 sm:px-2.5 text-xs sm:text-sm truncate max-w-[120px] sm:max-w-none">{item.title}</td>
            <td className="py-2 sm:py-2.5 px-2 sm:px-2.5 text-xs sm:text-sm">
                <div className={`${categories[item.category].expense ? 'text-red-600' : 'text-green-600'} font-medium`}>
                    R$ {formattedValue}
                </div>
            </td>
            <td className="py-2 sm:py-2.5 px-1 sm:px-2.5">
                <button
                    onClick={() => onDelete(index)}
                    className="p-1 sm:p-1.5 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                    title="Deletar item"
                >
                    <Trash2 size={16} className="sm:w-4.5 sm:h-4.5" />
                </button>
            </td>
        </tr>
    )
}