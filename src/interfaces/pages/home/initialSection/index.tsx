'use client';
import SplitText from "@/src/interfaces/components/animations/splitText";
import TextType from "@/src/interfaces/components/animations/textType";

export const InitialSection = () => {
    return (
        <div className='min-h-screen w-full bg-black flex items-center justify-center text-white pt-16 md:pt-20'>
            <div className='flex flex-col items-start justify-start gap-4 md:gap-6 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 w-full max-w-7xl'>
                <div className="flex flex-col items-start justify-center gap-2 md:gap-3">
                    <SplitText
                        text="Olá, meu nome é Vinicius Kenji"
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-start font-[poppins]"
                        delay={50}
                        duration={1.25}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="start"
                    />
                    <TextType
                        text={["e sou Engenheiro de Software", "Desenvolvedor Front-end", "Desenvolvedor Back-end", "Desenvolvedor Full-Stack"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor
                        cursorCharacter="|"
                        deletingSpeed={30}
                        variableSpeedEnabled={false}
                        variableSpeedMin={60}
                        variableSpeedMax={120}
                        cursorBlinkDuration={0.5}
                        className="text-white text-xl sm:text-2xl md:text-3xl font-bold font-[poppins]"
                    />
                </div>
                <div>
                    <SplitText
                        text="Com foco em construção de soluções robustas e bem estruturadas, atuando principalmente no ecossistema web com TypeScript, Next.js e arquiteturas modernas de front-end. Aqui você encontrará projetos que refletem minha preocupação com organização de código, performance, escalabilidade e experiência do usuário."
                        className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal text-start font-[poppins]"
                        delay={30}
                        duration={1.00}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="start"
                    />
                </div>
            </div>
        </div>
    );
}