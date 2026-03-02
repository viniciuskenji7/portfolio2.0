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
                speed={2}
                curveAmount={400}
                direction="left"
                interactive
                className="custom-text-style"
            />
            <AboutSection />
            <StacksSection />
            <ProjectsSection />
            <ContactSection />
        </>
    );
}