type Props = {
    title: string;
    value: number;
    color?: string;
}

export const ResumeItem = ({ title, value, color }: Props) => {
    return (
        <div className="flex-1">
            <div className="text-center font-bold text-[#888] mb-[5px]">{title}</div>
            <div className={`text-center font-bold ${color ? color : 'text-black'}`}>R$ {value.toFixed(2)}</div>
        </div>
    )
}