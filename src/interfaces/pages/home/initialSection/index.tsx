'use client';
import SplitText from "@/src/interfaces/components/animations/splitText";
import TextType from "@/src/interfaces/components/animations/textType";



export const InitialSection = () => {
    return (
        <div className='h-dvh w-full bg-black flex items-center justify-start p-60 text-white'>
            <div className='flex flex-col items-start justify-start gap-6'>
                <div className="flex flex-col items-start justify-center gap-3">
                    <SplitText
                        text="Olá, meu nome é Vinicius Kenji"
                        className="text-6xl font-bold text-start font-[poppins]"
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
                        text={["e sou Engenheiro de Software", "Desenvolvedor Front-end", "Desenvolvedor Back-end"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor
                        cursorCharacter="|"
                        deletingSpeed={50}
                        variableSpeedEnabled={false}
                        variableSpeedMin={60}
                        variableSpeedMax={120}
                        cursorBlinkDuration={0.5}
                        className="text-white text-3xl font-bold font-[poppins]"
                    />
                </div>
                <div>
                    <SplitText
                        text="Com foco em construção de soluções robustas e bem estruturadas, atuando principalmente no ecossistema web com TypeScript, Next.js e arquiteturas modernas de front-end. Aqui você encontrará projetos que refletem minha preocupação com organização de código, performance, escalabilidade e experiência do usuário."
                        className="text-3xl font-normal text-start font-[poppins]"
                        delay={30}
                        duration={1.25}
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