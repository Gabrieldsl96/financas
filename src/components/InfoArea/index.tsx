import { formatCurrentMonth } from "@/helpers/dateFilter";
import { ResumeItem } from "../ResumeItem";

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}

export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {
    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
        currentDate.setMonth(currentDate.getMonth() - 1)
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
        currentDate.setMonth(currentDate.getMonth() + 1)
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

    const balance = income - expense;
    const balanceColor = balance < 0 ? 'text-red-600' : 'text-green-600';

    return (
        <div className="w-full bg-white shadow-[0_0_5px_#ccc] rounded-[10px] -mt-[40px] p-[20px] flex items-center">
            {/*MonthArea*/}
            <div className="flex-1 flex items-center">
                {/*MonthArrow*/}
                <div className="w-[40px] text-center text-[25px] cursor-pointer" onClick={handlePrevMonth}>⬅️</div>
                {/*MonthTitle*/}
                <div className="flex-1 text-center">{formatCurrentMonth(currentMonth)}</div>
                <div className="w-[40px] text-center text-[25px] cursor-pointer" onClick={handleNextMonth}>➡️</div>
            </div>
            {/*ResumeArea*/}
            <div className="flex-2 flex">
                <ResumeItem title="Receitas" value={income} />
                <ResumeItem title="Despesas" value={expense} />
                <ResumeItem title="Balanço" value={balance} color={balanceColor} />
            </div>
        </div>
    )
}