type Props = {
    title: string;
    value: number;
    color?: string;
}

export const ResumeItem = ({ title, value, color }: Props) => {
    return (
        <div className="flex-1 px-3 sm:px-4 md:px-5 py-2 rounded-lg bg-gray-100 dark:bg-slate-700/50 border border-gray-300 dark:border-slate-600 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-200">
            <div className="text-center font-semibold text-gray-600 dark:text-slate-300 mb-2 text-xs sm:text-sm md:text-base">{title}</div>
            <div className={`text-center font-bold text-sm sm:text-base md:text-lg ${color ? color : 'text-gray-800 dark:text-slate-100'}`}>R$ {value.toFixed(2)}</div>
        </div>
    )
}