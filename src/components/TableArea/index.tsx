import { Item } from "@/types/Item"
import { TableItem } from "../TableItem"

type Props = {
    list: Item[]
    onDelete: (index: number) => void
}

export const TableArea = ({ list, onDelete }: Props) => {
    return (
        <div className="w-full overflow-x-auto rounded-xl mt-7">
            <table className="w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-xl min-w-[600px]">
                <thead>
                    <tr className="border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900/50">
                        <th className="py-3 sm:py-3.5 px-3 sm:px-4 text-left text-xs sm:text-sm font-semibold text-gray-700 dark:text-slate-300">Data</th>
                        <th className="py-3 sm:py-3.5 px-3 sm:px-4 text-left text-xs sm:text-sm font-semibold text-gray-700 dark:text-slate-300">Categoria</th>
                        <th className="py-3 sm:py-3.5 px-3 sm:px-4 text-left text-xs sm:text-sm font-semibold text-gray-700 dark:text-slate-300">Título</th>
                        <th className="py-3 sm:py-3.5 px-3 sm:px-4 text-left text-xs sm:text-sm font-semibold text-gray-700 dark:text-slate-300">Valor</th>
                        <th className="py-3 sm:py-3.5 px-3 sm:px-4 text-left text-xs sm:text-sm font-semibold text-gray-700 dark:text-slate-300">Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index) => (
                        <TableItem key={index} item={item} index={index} onDelete={onDelete} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}