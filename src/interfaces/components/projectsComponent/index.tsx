import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { icons } from "../../utils/IconsStacks";

export interface ProjectsComponentProps {
    projectImage: StaticImageData;
    projectTitle: string;
    projectTecnologies: string[];
    projectLink?: string;
    projectGithub: string;
}

export const ProjectsComponent = ({ projectImage, projectTitle, projectTecnologies, projectGithub, projectLink }: ProjectsComponentProps) => {

    const iconVerify = projectTecnologies;

    return (
        <div className="h-full w-200">
            <Link
                href={'/'}
                target="_blank"
                className="hover:transform hover:scale-102 transition-all"
            >
                <div className="p-5 border border-white rounded-md w-full h-full bg-white flex flex-col items-start justify-center gap-5 text-black">
                    <h3 className="text-2xl font-[poppins]">{projectTitle}</h3>
                    <Image
                        alt="Image Projects"
                        src={projectImage.src}
                        height={projectImage.height}
                        width={projectImage.width}
                        className="h-full w-full rounded-md"
                    />
                    <div className="flex justify-start items-center gap-2">
                        {icons
                            .filter(item => iconVerify.some(tech => item.title.includes(tech)))
                            .map((item, index) => (
                                <item.Icon key={index} className="w-15 h-15" />
                            ))
                        }
                    </div>
                </div>
            </Link>
        </div>
    );
}