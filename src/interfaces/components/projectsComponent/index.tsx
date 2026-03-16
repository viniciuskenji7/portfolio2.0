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
        <div className="w-full hover:scale-102 transition-all">
            <div
                className="p-4 md:p-5 border border-white rounded-md w-full h-full bg-white flex flex-col items-start justify-center gap-4 md:gap-5 text-black relative transition-colors"
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                <h3 className="text-lg md:text-2xl font-[poppins]">{projectTitle}</h3>
                <Image
                    alt="Image Projects"
                    src={projectImage.src}
                    height={projectImage.height}
                    width={projectImage.width}
                    className="w-full aspect-video object-cover rounded-md"
                />

                {/* Hover Overlay */}
                <div className={
                    isHover === false ? 'hidden'
                    :
                    'absolute z-10 bg-black/50 h-full w-full left-0 top-0 rounded-md'
                }>
                    <div className={
                        isHover === false ? 'hidden'
                        :
                        'flex flex-col items-center justify-center gap-4 h-full w-full z-50'
                    }>
                        {projectLink ? (
                            <Link
                                href={projectLink}
                                target="_blank"
                                className="border px-4 py-2 rounded-md cursor-pointer transition-colors delay-75 text-white text-sm md:text-base font-[poppins] hover:bg-white hover:text-black"
                            >
                                Acessar Site
                            </Link>
                        ) :
                            <p className="text-white text-sm md:text-base font-[poppins]">
                                Projeto em produção...
                            </p>
                        }
                        <Link
                            href={projectGithub}
                            target="_blank"
                            className="border px-4 py-2 rounded-md cursor-pointer transition-colors delay-75 text-white text-sm md:text-base font-[poppins] hover:bg-white hover:text-black"
                        >
                            Acessar Repositório
                        </Link>
                    </div>
                </div>

                <div className="flex flex-wrap justify-start items-center gap-2">
                    {icons
                        .filter(item => iconVerify.some(tech => item.title.includes(tech)))
                        .map((item, index) => (
                            <item.Icon key={index} className="w-8 h-8 md:w-10 md:h-10" />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}