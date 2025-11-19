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
        <div className="w-full bg-white shadow-[0_0_5px_#ccc] rounded-[10px] -mt-[30px] sm:-mt-[35px] md:-mt-[40px] p-3 sm:p-4 md:p-5 flex flex-col md:flex-row items-center gap-4 md:gap-0">
            {/*MonthArea*/}
            <div className="flex-1 flex items-center justify-between md:justify-center gap-2 w-full md:w-auto">
                {/*MonthArrow*/}
                <div className="text-lg sm:text-2xl md:text-[25px] cursor-pointer hover:opacity-70" onClick={handlePrevMonth}>⬅️</div>
                {/*MonthTitle*/}
                <div className="flex-1 text-center text-sm sm:text-base md:text-base font-medium">{formatCurrentMonth(currentMonth)}</div>
                <div className="text-lg sm:text-2xl md:text-[25px] cursor-pointer hover:opacity-70" onClick={handleNextMonth}>➡️</div>
            </div>
            {/*ResumeArea*/}
            <div className="flex-2 flex flex-col sm:flex-row w-full md:w-auto gap-2 sm:gap-3 md:gap-0">
                <ResumeItem title="Receitas" value={income} />
                <ResumeItem title="Despesas" value={expense} />
                <ResumeItem title="Balanço" value={balance} color={balanceColor} />
            </div>
        </div>
    )
}