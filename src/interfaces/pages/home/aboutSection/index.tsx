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
        <div className="h-dvh w-full bg-black flex items-start justify-start p-60">
            <div className="flex items-start justify-between w-full gap-30">
                <div className="flex flex-col gap-8 items-start justify-center text-white">
                    <SplitText
                        text="sobre mim"
                        className="text-5xl font-bold text-center uppercase font-[rubik]"
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
                        className="text-2xl font-normal font-[poppins]"
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
                        className="text-2xl font-normal font-[poppins]"
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
                    <div>
                        <AnimatedContent
                            distance={100}
                            direction="vertical"
                            reverse={false}
                            duration={1.25}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.1}
                            delay={1}
                            className="flex items-center gap-3"
                        >
                            <Link target="_blank" href={'https://www.linkedin.com/in/vinicius-kenji-dos-santos-enoki-097528265/'}>
                                <Image
                                    alt="Linkedin Icon"
                                    src={linkedin}
                                    height={50}
                                    width={50}
                                    className="transition-all hover:transform hover:scale-105"
                                />
                            </Link>
                            <Link target="_blank" href={'https://github.com/viniciuskenji7'}>
                                <Image
                                    alt="Github Icon"
                                    src={github}
                                    height={60}
                                    width={60}
                                    className="transition-all hover:transform hover:scale-105"
                                />
                            </Link>
                        </AnimatedContent>
                    </div>
                </div>
                <div className="pr-30">
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
        </div>
    )
}