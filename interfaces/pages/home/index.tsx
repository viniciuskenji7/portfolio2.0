'use client';
import TextPressure from '@/interfaces/components/animations/textPressure';
import { AboutSection } from './aboutSection';

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
            <AboutSection />
        </>
    );
}