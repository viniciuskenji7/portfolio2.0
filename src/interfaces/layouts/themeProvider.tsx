'use client'
import Particles from "@/src/interfaces/components/animations/bgParticles";
import StaggeredMenu from "@/src/interfaces/components/animations/staggeredMenu";
import logo from "@/src/interfaces/assets/icons/meuIcon.png";

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider = ({children}: ThemeProviderProps) => {
    
    const menuItems = [
        { label: 'Início', ariaLabel: 'Va para o início da pagina', link: '#home' },
        { label: 'Sobre', ariaLabel: 'Saiba mais sobre mim', link: '#about' },
        { label: 'Techs', ariaLabel: 'Minhas tecnologias', link: '#stacks' },
        { label: 'Projetos', ariaLabel: 'Veja meus projetos', link: '#projects' },
        { label: 'Contato', ariaLabel: 'Entre em contato', link: '#contact' }
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
            />
            <Particles
                particleColors={["#ffffff"]}
                particleCount={7000}
                particleSpread={10}
                speed={0.01}
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