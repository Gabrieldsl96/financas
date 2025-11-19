import { Item } from "@/types/Item"
import { TableItem } from "../TableItem"

type Props = {
    list: Item[]
    onDelete: (index: number) => void
}

export const TableArea = ({ list, onDelete }: Props) => {
    return (
        <table className="w-full bg-white shadow-[0_0_5px_#ccc] rounded-[10px] mt-[20px]">
            <thead>
                <tr>
                    <th className="py-[10px] px-[10px] text-left w-[100px]">Data</th>
                    <th className="py-[10px] px-[10px] text-left w-[130px]">Categoria</th>
                    <th className="py-[10px] px-[10px] text-left w-auto">Título</th>
                    <th className="py-[10px] px-[10px] text-left w-[150px]">Valor</th>
                    <th className="py-[10px] px-[10px] text-left w-[80px]">Ação</th>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <TableItem key={index} item={item} index={index} onDelete={onDelete} />
                ))}
            </tbody>
        </table>
    )
}