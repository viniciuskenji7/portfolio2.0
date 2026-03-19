// components/SplashScreen.tsx
'use client';

import { useEffect, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function SplashScreen({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setInterval(() => {
                setLoading(false);
            }, 2000);
        })
    }, []);


    if (loading) {
        return (
            <div className="fixed inset-0 z-50 flex flex-col gap-4 items-center justify-center bg-black">
                <DotLottieReact
                    src="https://lottie.host/e62ca423-8584-49fb-8c55-66c73fc6075d/WgjQit30rP.lottie"
                    loop
                    autoplay
                />
            </div>
        );
    }

    return <>{children}</>;
}