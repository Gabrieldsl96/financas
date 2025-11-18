import { Item } from "@/types/Item"

type Props = {
    item: Item
}

export const TableItem = ({ item }: Props) => {
    return (
        <tr className="">
            <td className="py-[10px] px-[10px]"></td>
            <td className="py-[10px] px-[10px]"></td>
            <td className="py-[10px] px-[10px]">{item.title}</td>
            <td className="py-[10px] px-[10px]"></td>
        </tr>
    )
}