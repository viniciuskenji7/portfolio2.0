import Image from "next/image";
import sunnysideProject from '@/src/interfaces/assets/sunnyside-project.png';



export const ProjectsComponent = () => {
    return (
        <div className="h-screen w-full flex flex-col items-start justify-center gap-5">
            <h3 className="text-2xl font-[poppins]">Sunnyside</h3>
            <div className="p-10 border border-white rounded-md w-full h-full bg-white">
                <Image
                    alt="Image Projects"
                    src={sunnysideProject.src}
                    height={sunnysideProject.height}
                    width={sunnysideProject.width}
                    className="h-full w-full rounded-md"
                />
            </div>
        </div>
    );
}