import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProjectsComponentProps {
    projectImage: StaticImageData;
    projectTitle: string;
}

export const ProjectsComponent = ({projectImage, projectTitle}: ProjectsComponentProps) => {

    return (
        <div className="h-screen w-full flex flex-col items-start justify-center gap-5">
            <h3 className="text-2xl font-[poppins]">{projectTitle}</h3>
            <Link
                href={'/'}
                target="_self"
                className="hover:transform hover:scale-102 transition-all"
            >
                <div className="p-10 border border-white rounded-md w-full h-full bg-white">
                    <Image
                        alt="Image Projects"
                        src={projectImage.src}
                        height={projectImage.height}
                        width={projectImage.width}
                        className="h-full w-full rounded-md"
                    />
                </div>
            </Link>
        </div>
    );
}