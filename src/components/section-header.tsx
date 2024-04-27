export interface SectionHeaderProps {
    text: string;
}

export const SectionHeader = ({ text }: SectionHeaderProps) => {
    return <div className="mt-16 font-bold opacity-60 ">{text}</div>;
};
