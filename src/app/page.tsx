"use client";

import { InfoArea } from "@/components/InfoArea";
import { InputArea } from "@/components/InputArea";
import { TableArea } from "@/components/TableArea";
import { categories } from "@/data/categories";
import { Items } from "@/data/items";
import { filterListByMonth, getCurrentMonth } from "@/helpers/dateFilter";
import { Item } from "@/types/Item";
import { Inconsolata } from "next/font/google";
import { useEffect, useState } from "react";

const HomePage = () => {
    const [list, setList] = useState(Items);
    const [filteredList, setFilteredList] = useState<Item[]>([])
    const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);

    useEffect(() => {
        setFilteredList(filterListByMonth(list, currentMonth))
    }, [list, currentMonth])

    useEffect(() => {
        let incomeCount = 0;
        let expenseCount = 0;

        for (let i in filteredList) {
            if (categories[filteredList[0].category].expense) {
                expenseCount += filteredList[i].value;
            } else {
                incomeCount += filteredList[i].value;
            }
        }

        setIncome(incomeCount);
        setExpense(expenseCount);

    }, [filteredList])

    const handleMonthChange = (newMonth: string) => {
        setCurrentMonth(newMonth)
    }

    const handleAddItem = (item: Item) => {
        let newList = [...list];
        newList.push(item);
        setList(newList)
    }

    return (
        <div className="w-full mx-auto">
            <div className="bg-blue-800 h-[150px] text-center">
                <h1 className="text-5xl font-bol m-0 p-0 text-white pt-[30px]">Sistema Financeiro</h1>
            </div>
            <div className="m-auto max-w-[980px] mb-[50px]">
                <InfoArea
                    currentMonth={currentMonth}
                    onMonthChange={handleMonthChange}
                    income={income}
                    expense={expense}
                />
                <InputArea
                    onAdd={handleAddItem}
                />
                <TableArea
                    list={filteredList}
                />
            </div>
        </div>
    )
};

export default HomePage;