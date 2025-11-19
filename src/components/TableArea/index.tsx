import { Item } from "@/types/Item"
import { TableItem } from "../TableItem"

type Props = {
    list: Item[]
    onDelete: (index: number) => void
}

export const TableArea = ({ list, onDelete }: Props) => {
    return (
        <div className="w-full overflow-x-auto rounded-[10px] mt-5">
            <table className="w-full bg-white shadow-[0_0_5px_#ccc] min-w-[600px]">
                <thead>
                    <tr className="border-b">
                        <th className="py-2 sm:py-2.5 px-2 sm:px-2.5 text-left text-xs sm:text-sm font-medium">Data</th>
                        <th className="py-2 sm:py-2.5 px-2 sm:px-2.5 text-left text-xs sm:text-sm font-medium">Categoria</th>
                        <th className="py-2 sm:py-2.5 px-2 sm:px-2.5 text-left text-xs sm:text-sm font-medium">Título</th>
                        <th className="py-2 sm:py-2.5 px-2 sm:px-2.5 text-left text-xs sm:text-sm font-medium">Valor</th>
                        <th className="py-2 sm:py-2.5 px-2 sm:px-2.5 text-left text-xs sm:text-sm font-medium">Ação</th>
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