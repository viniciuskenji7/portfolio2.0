'use client'
import Particles from "@/src/interfaces/components/animations/bgParticles";
import StaggeredMenu from "@/src/interfaces/components/animations/staggeredMenu";
import logo from "@/src/interfaces/assets/icons/meuIcon.png";

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider = ({children}: ThemeProviderProps) => {
    
    const menuItems = [
        { label: 'Home', ariaLabel: 'Go to home page', link: '#home' },
        { label: 'About', ariaLabel: 'Learn about me', link: '#about' },
        { label: 'Stacks', ariaLabel: 'My technologies', link: '#stacks' },
        { label: 'Projects', ariaLabel: 'View my projects', link: '#projects' },
        { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
    ];
    
    const socialItems = [
        { label: 'GitHub', link: 'https://github.com/viniciuskenji7' },
        { label: 'LinkedIn', link: 'https://www.linkedin.com/in/vinicius-kenji-dos-santos-enoki-097528265/' }
    ];

    return (
        <>
            <StaggeredMenu
                position="left"
                isFixed
                items={menuItems}
                socialItems={socialItems}
                displaySocials
                displayItemNumbering={true}
                menuButtonColor="#ffffff"
                openMenuButtonColor="#fff"
                changeMenuColorOnOpen={true}
                colors={['#B19EEF', '#5227FF']}
                logoUrl={logo}
                accentColor="#5227FF"
                onMenuOpen={() => console.log('Menu opened')}
                onMenuClose={() => console.log('Menu closed')}
            />
            <Particles
                particleColors={["#ffffff"]}
                particleCount={500}
                particleSpread={10}
                speed={0.2}
                particleBaseSize={100}
                alphaParticles={false}
                disableRotation={false}
                pixelRatio={1}
                className='w-full'
            >
                {children}
            </Particles>
        </>
    )
}