'use client';
import TextPressure from '@/src/interfaces/components/animations/textPressure';
import { AboutSection } from './aboutSection';
import CurvedLoop from '../../components/animations/curvedLoop';

export const HomePage = () => {

    return (
        <>
            <div className='h-dvh w-full bg-black flex items-center justify-center'>
                <div className='flex flex-col items-center justify-center'>
                    <TextPressure
                        text="vinicius"
                        flex={true}
                        alpha={false}
                        stroke={false}
                        width
                        weight
                        italic
                        textColor="#ffffff"
                        strokeColor="#5227FF"
                        minFontSize={400}
                    />
                    <TextPressure
                        text="kenji"
                        flex={true}
                        alpha={false}
                        stroke={false}
                        width
                        weight
                        italic
                        textColor="#ffffff"
                        strokeColor="#5227FF"
                        minFontSize={400}
                    />
                </div>
            </div>
            <CurvedLoop
                marqueeText="Seja ✦ Bem-Vindo ✦ Ao ✦ Meu ✦ Portfólio ✦"
                speed={2}
                curveAmount={400}
                direction="left"
                interactive
                className="custom-text-style"
            />
            <AboutSection />
        </>
    );
}