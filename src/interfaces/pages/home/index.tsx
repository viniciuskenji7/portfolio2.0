'use client';
import { AboutSection } from './aboutSection';
import { StacksSection } from './stacksSection';
import { ProjectsSection } from './projectsSection';
import { ContactSection } from './contactSection';
import { InitialSection } from './initialSection';

export const HomePage = () => {

    return (
        <>
            <InitialSection/>
            <AboutSection />
            <StacksSection />
            <ProjectsSection />
            <ContactSection />
        </>
    );
}