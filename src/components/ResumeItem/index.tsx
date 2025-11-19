type Props = {
    title: string;
    value: number;
    color?: string;
}

export const ResumeItem = ({ title, value, color }: Props) => {
    return (
        <div className="flex-1 px-2 sm:px-3 md:px-4">
            <div className="text-center font-bold text-[#888] mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">{title}</div>
            <div className={`text-center font-bold text-sm sm:text-base md:text-lg ${color ? color : 'text-black'}`}>R$ {value.toFixed(2)}</div>
        </div>
    )
}