import SplitText from "@/src/interfaces/components/animations/splitText";



export const StacksSection = () => {

    return (
        <div className="h-dvh w-full bg-black flex items-start justify-start p-60">
            <div className="flex items-start justify-between w-full gap-30">
                <div className="flex flex-col gap-8 items-start justify-center text-white">
                    <SplitText
                        text="tecnologias"
                        className="text-4xl font-bold text-center uppercase font-[rubik]"
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
                    
                </div>
            </div>
        </div>
    );
}