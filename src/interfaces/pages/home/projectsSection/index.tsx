import ScrollStack, { ScrollStackItem } from "@/src/interfaces/components/animations/scrollStack"
import SplitText from "@/src/interfaces/components/animations/splitText"
import sunnysideProject from '@/src/interfaces/assets/projectsImage/sunnyside-project.png';
import isweetProject from '@/src/interfaces/assets/projectsImage/isweet-project.png';
import cookinupProjectImage from '@/src/interfaces/assets/projectsImage/cookin-up.png';
import wheaterAppMainImage from '@/src/interfaces/assets/projectsImage/wheater-app-main.png';
import typingSpeedTestImage from '@/src/interfaces/assets/projectsImage/typing-speed-test.png';
import snapImage from '@/src/interfaces/assets/projectsImage/snap.png';
import calculatorAppImage from '@/src/interfaces/assets/projectsImage/calculator-app.png';
import ghibliboxImage from '@/src/interfaces/assets/projectsImage/ghiblibox.png';
import { ProjectsComponent } from "@/src/interfaces/components/projectsComponent"


export const ProjectsSection = () => {

    const projects = [
        {
            projectTitle: "Sunnyside",
            projectImage: sunnysideProject,
        },
        {
            projectTitle: "ISweet",
            projectImage: isweetProject,
        },
        {
            projectTitle: "Cookin up",
            projectImage: cookinupProjectImage,
        },
        {
            projectTitle: "Wheater App Main",
            projectImage: wheaterAppMainImage,
        },
        {
            projectTitle: "Typing Speed Test",
            projectImage: typingSpeedTestImage,
        },
        {
            projectTitle: "Calculator App",
            projectImage: calculatorAppImage,
        },
        {
            projectTitle: "Snap",
            projectImage: snapImage,
        },
        {
            projectTitle: "GhibliBox",
            projectImage: ghibliboxImage,
        },
    ]

    return (
        <div className="h-screen w-full bg-black flex flex-col text-white">
            <SplitText
                text="projetos"
                className="text-5xl font-bold text-center uppercase font-[rubik] pl-60 pt-40 pb-10"
                delay={50}
                duration={1.25}
                ease="power3.out"
                splitType="lines"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="start"
            />
            <ScrollStack
                itemDistance={320}
                stackPosition="20"
                itemStackDistance={0}
                baseScale={0.59}
                scaleDuration={1}
            >
                {projects.map((item, index) => (
                    <ScrollStackItem key={index}>
                        <ProjectsComponent 
                            key={index}
                            projectImage={item.projectImage}
                            projectTitle={item.projectTitle}
                        />
                    </ScrollStackItem>
                ))}
            </ScrollStack>
        </div>
    )
}