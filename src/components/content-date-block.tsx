import { StyledLink } from "./styled-link";

export interface StyledLinkProps {
    titleElement: React.ReactNode;
    description?: string;
    secondaryDescription?: string;
    role?: string;
    dateRange: string;
}

export const ContentDateBlock = ({
    titleElement,
    description,
    secondaryDescription,
    dateRange,
    role,
}: StyledLinkProps) => {
    return (
        <>
            <div className="flex items-center justify-between mt-3">
                <div>
                    <span>{titleElement}</span>
                </div>
                <p className="text-xs opacity-60 ">{dateRange}</p>
            </div>
            {role ? <p className="text-xs">{role}</p> : null}
            {description ? <p className="max-w-md mt-1 text-xs">{description}</p> : null}
            {secondaryDescription ? <p className="mt-1 text-xs">{secondaryDescription}</p> : null}
        </>
    );
};
