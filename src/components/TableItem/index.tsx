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
        <tr className="">
            <td className="py-[10px] px-[10px]">{formatDate(item.date)}</td>
            <td className="py-[10px] px-[10px]">
                <div className={`inline-block px-[10px] py-[5px] rounded-[5px] text-white ${categoryColor}`}>
                    {categories[item.category].title}
                </div>
            </td>
            <td className="py-[10px] px-[10px]">{item.title}</td>
            <td className="py-[10px] px-[10px]">
                <div className={`${categories[item.category].expense ? 'text-red-600' : 'text-green-600'}`}>
                    R$ {formattedValue}
                </div>
            </td>
            <td className="py-[10px] px-[10px]">
                <button
                    onClick={() => onDelete(index)}
                    className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                    title="Deletar item"
                >
                    <Trash2 size={18} />
                </button>
            </td>
        </tr>
    )
}