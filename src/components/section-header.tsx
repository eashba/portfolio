export interface SectionHeaderProps {
    text: string;
}

export const SectionHeader = ({ text }: SectionHeaderProps) => {
    return <div className="opacity-60 mt-14 ">{text}</div>;
};
