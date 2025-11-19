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
    const balanceColor = balance < 0 ? 'text-red-500' : 'text-green-500';

    return (
        <div className="w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-xl rounded-xl -mt-[30px] sm:-mt-[35px] md:-mt-10 p-4 sm:p-5 md:p-6 flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/*MonthArea*/}
            <div className="flex-1 flex items-center justify-between md:justify-center gap-4 w-full md:w-auto">
                {/*MonthArrow*/}
                <button onClick={handlePrevMonth} className="text-2xl sm:text-3xl cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 transform hover:scale-110">⬅️</button>
                {/*MonthTitle*/}
                <div className="flex-1 text-center text-sm sm:text-base md:text-lg font-semibold text-gray-800 dark:text-slate-100">{formatCurrentMonth(currentMonth)}</div>
                <button onClick={handleNextMonth} className="text-2xl sm:text-3xl cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 transform hover:scale-110">➡️</button>
            </div>
            {/*ResumeArea*/}
            <div className="flex-2 flex flex-col sm:flex-row w-full md:w-auto gap-3 sm:gap-4 md:gap-6">
                <ResumeItem title="Receitas" value={income} />
                <ResumeItem title="Despesas" value={expense} />
                <ResumeItem title="Balanço" value={balance} color={balanceColor} />
            </div>
        </div>
    )
}