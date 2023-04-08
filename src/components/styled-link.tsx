export interface StyledLinkProps {
    url: string;
    children: React.ReactNode;
    additionalStyles?: string;
}

export const StyledLink = ({ url, additionalStyles = "", children }: StyledLinkProps) => {
    return (
        <a
            href={url}
            rel="noopener noreferrer"
            target="_blank"
            className={`hover:underline decoration-wavy opacity-60 text-amber-200 ${additionalStyles} hover:opacity-80 transition-all ease-in-out duration-200`}
        >
            {children}
        </a>
    );
};
