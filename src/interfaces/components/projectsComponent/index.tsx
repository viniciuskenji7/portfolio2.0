'use client';
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { icons } from "../../utils/IconsStacks";
import { useState } from "react";

export interface ProjectsComponentProps {
    projectImage: StaticImageData;
    projectTitle: string;
    projectTecnologies: string[];
    projectLink?: string;
    projectGithub: string;
}

export const ProjectsComponent = ({ projectImage, projectTitle, projectTecnologies, projectGithub, projectLink }: ProjectsComponentProps) => {

    const iconVerify = projectTecnologies;

    const [isHover, setIsHover] = useState<boolean>(false);

    return (
        <div className="h-full w-200 hover:transform hover:scale-102 transition-all">
            <div 
                className="p-5 border border-white rounded-md w-full h-full bg-white flex flex-col items-start justify-center gap-5 text-black relative transition-colors"
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                <h3 className="text-2xl font-[poppins]">{projectTitle}</h3>
                <Image
                    alt="Image Projects"
                    src={projectImage.src}
                    height={projectImage.height}
                    width={projectImage.width}
                    className="h-full w-full rounded-md"
                />
                <div className={
                    isHover === false ? 'hidden'
                    :
                    `absolute z-10 bg-black/50 h-full w-full left-0`
                }>
                    <div className={
                        isHover === false ? 'hidden'
                        :
                        `flex flex-col items-center justify-center gap-5 h-full w-full z-50`
                    }>
                        <Link
                            href={projectGithub}
                            target="_blank"
                            className="border p-2 rounded-md cursor-pointer transition-colors delay-75 text-white font-[poppins] hover:bg-white hover:text-black"
                        >
                            Acessar Repositório
                        </Link>
                        {projectLink ? (
                            <Link
                            href={projectLink}
                            target="_blank"
                            className="border p-2 rounded-md cursor-pointer transition-colors delay-75 text-white font-[poppins] hover:bg-white hover:text-black "
                        >
                            Acessar Site
                        </Link>
                        ) : 
                            <p className="text-white">
                                Projeto em produção...
                            </p>
                        }
                    </div>
                </div>
                <div className="flex justify-start items-center gap-2">
                    {icons
                        .filter(item => iconVerify.some(tech => item.title.includes(tech)))
                        .map((item, index) => (
                            <item.Icon key={index} className="w-15 h-15" />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}