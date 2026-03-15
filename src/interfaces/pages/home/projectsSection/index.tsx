import SplitText from "@/src/interfaces/components/animations/splitText"
import sunnysideProject from '@/src/interfaces/assets/projectsImage/sunnyside-project.png';
import isweetProject from '@/src/interfaces/assets/projectsImage/isweet-project.png';
import cookinupProjectImage from '@/src/interfaces/assets/projectsImage/cookin-up.png';
import wheaterAppMainImage from '@/src/interfaces/assets/projectsImage/wheater-app-main.png';
import typingSpeedTestImage from '@/src/interfaces/assets/projectsImage/typing-speed-test.png';
import snapImage from '@/src/interfaces/assets/projectsImage/snap.png';
import calculatorAppImage from '@/src/interfaces/assets/projectsImage/calculator-app.png';
import ghibliboxImage from '@/src/interfaces/assets/projectsImage/ghiblibox.png';
import { ProjectsComponent, ProjectsComponentProps } from "@/src/interfaces/components/projectsComponent"


export const ProjectsSection = () => {

    const projects: Array<ProjectsComponentProps> = [
        {
            projectTitle: "Sunnyside",
            projectImage: sunnysideProject,
            projectGithub: 'https://github.com/viniciuskenji7/sunnyside',
            projectLink: 'https://viniciuskenji7.github.io/sunnyside',
            projectTecnologies: ['HTML5', 'CSS3', 'JavaScript']
        },
        {
            projectTitle: "ISweet",
            projectImage: isweetProject,
            projectGithub: 'https://github.com/viniciuskenji7/product-list-with-cart-main',
            projectLink: 'https://isweet.vercel.app',
            projectTecnologies: ['Typescript', 'VueJS', 'Tailwindcss']
        },
        {
            projectTitle: "Cookin up",
            projectImage: cookinupProjectImage,
            projectGithub: 'https://github.com/viniciuskenji7/cookin-up',
            projectTecnologies: ['Typescript', 'VueJS', 'CSS3']
        },
        {
            projectTitle: "Wheater App Main",
            projectImage: wheaterAppMainImage,
            projectGithub: 'https://github.com/viniciuskenji7/wheater-app-main',
            projectTecnologies: ['Typescript', 'VueJS', 'Tailwindcss']
        },
        {
            projectTitle: "Typing Speed Test",
            projectImage: typingSpeedTestImage,
            projectGithub: 'https://github.com/viniciuskenji7/typing-speed-test',
            projectTecnologies: ['Typescript', 'NextJS', 'Tailwindcss']
        },
        {
            projectTitle: "Calculator App",
            projectImage: calculatorAppImage,
            projectGithub: 'https://github.com/viniciuskenji7/calculator-app',
            projectLink: 'https://viniciuskenji7.github.io/calculator-app',
            projectTecnologies: ['HTML5', 'CSS3', 'JavaScript']
        },
        {
            projectTitle: "Snap",
            projectImage: snapImage,
            projectGithub: 'https://github.com/viniciuskenji7/snap',
            projectLink: 'https://viniciuskenji7.github.io/snap',
            projectTecnologies: ['HTML5', 'CSS3', 'JavaScript']
        },
        {
            projectTitle: "GhibliBox",
            projectImage: ghibliboxImage,
            projectGithub: 'https://github.com/Hayzer3/Ghibli-Box',
            projectTecnologies: ['Typescript', 'NextJS', 'Tailwindcss']
        },
    ]

    return (
        <section 
            className="w-full bg-black flex flex-col text-white pb-16 md:pb-30"
            id="projects"
        >
            <SplitText
                text="projetos"
                className="text-4xl md:text-5xl font-bold uppercase font-[rubik] px-4 sm:px-8 md:px-16 lg:pl-22 pt-16 md:pt-40 pb-8 md:pb-10"
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
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 px-4 sm:px-8 md:px-16 lg:px-24">
                {projects.map((item, index) => (
                    <ProjectsComponent
                        key={index}
                        projectImage={item.projectImage}
                        projectTitle={item.projectTitle}
                        projectTecnologies={item.projectTecnologies}
                        projectGithub={item.projectGithub}
                        projectLink={item.projectLink}
                    />
                ))}
            </div>
        </section>
    )
}