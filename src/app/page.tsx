"use client";

import { TableArea } from "@/components/TableArea";
import { Items } from "@/data/items";
import { filterListByMonth, getCurrentMonth } from "@/helpers/dateFilter";
import { Item } from "@/types/Item";
import { useEffect, useState } from "react";

const HomePage = () => {
    const [list, setList] = useState(Items);
    const [filteredList, setFilteredList] = useState<Item[]>([])
    const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

    useEffect(() => {
        setFilteredList(filterListByMonth(list, currentMonth))
    }, [list, currentMonth])

    return (
        <div className="w-full mx-auto">
            <div className="bg-blue-800 h-[150px] text-center">
                <h1 className="text-5xl font-bol m-0 p-0 text-white pt-[30px]">Sistema Financeiro</h1>
            </div>
            <div className="m-auto max-w-[980px] mb-[50px]">
                <TableArea
                    list={filteredList}
                />
            </div>
        </div>
    )
};

export default HomePage;