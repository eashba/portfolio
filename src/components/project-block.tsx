import { StyledLink } from "./styled-link";

export interface ProjectBlockProps {
    image: string;
    title: string;
    description: string;
    url: string;
}

export const ProjectBlock = ({ image, title, description, url, githubUrl }: ProjectBlockProps) => {
    return (
        <a
            href={url}
            rel="noopener noreferrer"
            target="_blank"
            className="flex justify-start px-4 py-4 mt-4 space-x-4 transition-all duration-150 ease-in-out border rounded-lg items-top bg-secondary border-primary border-opacity-20 hover:border-opacity-60 hover:cursor-pointer"
        >
            <div className="avatar">
                <div className="w-24 h-24 rounded-lg">
                    <img src={image} />
                </div>
            </div>

            <div className="w-full">
                <div className="flex items-center justify-between w-full">
                    <div>{title}</div>
                </div>
                <p className="max-w-xs mt-1 text-xs opacity-60">{description}</p>
            </div>
        </a>
    );
};
