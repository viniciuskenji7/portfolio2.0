'use client';
import { AboutSection } from './aboutSection';
import CurvedLoop from '../../components/animations/curvedLoop';
import { StacksSection } from './stacksSection';
import { ProjectsSection } from './projectsSection';
import { ContactSection } from './contactSection';
import { InitialSection } from './initialSection';

export const HomePage = () => {

    return (
        <>
            <InitialSection/>
            <CurvedLoop
                marqueeText="Seja ✦ Bem-Vindo ✦ Ao ✦ Meu ✦ Portfólio ✦"
                speed={3}
                curveAmount={250}
                direction="left"
                interactive
                className="text-7xl font-[poppins] hidden md:flex"
            />
            <AboutSection />
            <StacksSection />
            <ProjectsSection />
            <ContactSection />
        </>
    );
}