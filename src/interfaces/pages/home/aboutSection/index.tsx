import ProfileCard from "@/src/interfaces/components/animations/profileCard";
import avatar from "@/src/interfaces/assets/avatar.png";
import SplitText from "@/src/interfaces/components/animations/splitText";
import AnimatedContent from "@/src/interfaces/components/animations/animatedContent";
import Image from "next/image";

import linkedin from '@/src/interfaces/assets/linkedin.png';
import github from '@/src/interfaces/assets/github.png';
import Link from "next/link";

export const AboutSection = () => {
    return (
        <section 
            className="min-h-dvh w-full bg-black flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-20 md:py-28"
            id="about"
        >
            <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between w-full max-w-7xl gap-12 lg:gap-16">
                
                {/* Text Content */}
                <div className="flex flex-col gap-6 md:gap-8 items-start justify-center text-white w-full lg:max-w-[55%]">
                    <SplitText
                        text="sobre mim"
                        className="text-4xl md:text-5xl font-bold text-center uppercase font-[rubik]"
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
                    <SplitText
                        text="Atualmente Cursando Análise e Desenvolvimento de Sistemas, sou movido pela paixão de evoluir cada vez mais os meus conhecimentos em diversas áreas, sendo a principal delas, a tecnologia."
                        className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal font-[poppins]"
                        delay={20}
                        duration={1.25}
                        ease="power3.out"
                        splitType="words"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="start"
                    />
                    <SplitText
                        text="Conheça minhas stacks, projetos e redes por meio deste Portfólio interativo e se gostar, entre em contato."
                        className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal font-[poppins]"
                        delay={70}
                        duration={1.25}
                        ease="power3.out"
                        splitType="words"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="start"
                    />
                    <div className="w-full sm:w-auto">
                        <AnimatedContent
                            distance={100}
                            direction="vertical"
                            reverse={false}
                            duration={1.00}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.1}
                            delay={1}
                            className="flex flex-col items-start justify-center gap-5"
                        >
                            <div className="flex items-center gap-3">
                                <Link target="_blank" href={'https://www.linkedin.com/in/vinicius-kenji-dos-santos-enoki-097528265/'}>
                                    <Image
                                        alt="Linkedin Icon"
                                        src={linkedin}
                                        height={50}
                                        width={50}
                                        className="transition-all hover:transform hover:scale-105 w-10 h-10 md:w-[50px] md:h-[50px]"
                                    />
                                </Link>
                                <Link target="_blank" href={'https://github.com/viniciuskenji7'}>
                                    <Image
                                        alt="Github Icon"
                                        src={github}
                                        height={60}
                                        width={60}
                                        className="transition-all hover:transform hover:scale-105 w-12 h-12 md:w-[60px] md:h-[60px]"
                                    />
                                </Link>
                            </div>
                            <Link
                                download={'Curriculo Vinicius Kenji.pdf'}
                                href={'https://github.com/viniciuskenji7'}
                                className="w-full sm:w-auto py-3 px-6 cursor-pointer bg-white text-black font-semibold font-[poppins] rounded-lg hover:bg-white/90 transition-colors duration-200 text-center"
                            >
                                Baixar CV
                            </Link>
                        </AnimatedContent>
                    </div>
                </div>

                {/* Profile Card */}
                <div className="flex items-center justify-center w-full lg:w-auto shrink-0">
                    <ProfileCard
                        name="Vinicius Kenji"
                        title="Software Engineer"
                        handle="kenji"
                        status="Online"
                        contactText="Entre em Contato"
                        avatarUrl={avatar.src}
                        showUserInfo={true}
                        enableTilt={true}
                        enableMobileTilt={true}
                        onContactClick={() => console.log('Contact clicked')}
                        behindGlowColor="rgba(125, 190, 255, 0.67)"
                        iconUrl={avatar.src}
                        behindGlowEnabled
                        innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
                    />
                </div>

            </div>
        </section>
    )
}