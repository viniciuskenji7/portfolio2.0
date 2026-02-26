import ScrollStack, { ScrollStackItem } from "@/src/interfaces/components/animations/scrollStack"
import SplitText from "@/src/interfaces/components/animations/splitText"
import { ProjectsComponent } from "@/src/interfaces/components/projectsComponent"


export const ProjectsSection = () => {
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
                itemStackDistance={10}
                baseScale={0.6}
                scaleDuration={1}
            >
                <ScrollStackItem>
                    <ProjectsComponent />
                </ScrollStackItem>
                <ScrollStackItem>
                    <ProjectsComponent />
                </ScrollStackItem>
                <ScrollStackItem>
                    <ProjectsComponent />
                </ScrollStackItem>
                <ScrollStackItem>
                    <ProjectsComponent />
                </ScrollStackItem>
            </ScrollStack>
        </div>
    )
}