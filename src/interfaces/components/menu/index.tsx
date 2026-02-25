import StaggeredMenu from "../animations/staggeredMenu";



export const Menu = () => {
    const menuItems = [
        { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
        { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
        { label: 'Services', ariaLabel: 'View our services', link: '/services' },
        { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
    ];

    const socialItems = [
        { label: 'Twitter', link: 'https://twitter.com' },
        { label: 'GitHub', link: 'https://github.com' },
        { label: 'LinkedIn', link: 'https://linkedin.com' }
    ];
    return (
        <div style={{ height: '100vh', background: '#1a1a1a' }}>
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
                logoUrl="/path-to-your-logo.svg"
                accentColor="#5227FF"
                onMenuOpen={() => console.log('Menu opened')}
                onMenuClose={() => console.log('Menu closed')}
            />
        </div>
    );
}