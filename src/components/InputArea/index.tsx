import { Item } from "@/types/Item"
import { Button } from "../ui/button";

type Props = {
    onAdd: (item: Item) => void;
}

export const InputArea = ({ onAdd }: Props) => {

    const handleAddEvent = () => {
        let newItem: Item = {
            date: new Date(2025, 10, 19),
            category: 'food',
            title: 'Item de teste',
            value: 250.52
        }
        onAdd(newItem)
    }

    return (
        <div className="w-full bg-white shadow-[0_0_5px_#ccc] rounded-[10px] mt-[20px] p-[20px] flex">
            <Button className="" onClick={handleAddEvent}> Adicionar </Button>
        </div>
    )
}