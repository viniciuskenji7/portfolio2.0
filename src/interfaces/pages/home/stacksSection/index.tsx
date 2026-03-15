import SplitText from "@/src/interfaces/components/animations/splitText";
import { CardStack } from "@/src/interfaces/components/cardStack";
import { icons } from "@/src/interfaces/utils/IconsStacks";


export const StacksSection = () => {

    return (
        <div className="min-h-screen w-full bg-black flex items-start justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-16 md:py-26">
            <div className="w-full flex flex-col items-center justify-start text-white gap-12 md:gap-20">
                <SplitText
                    text="tecnologias"
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
                <div className="w-full sm:w-4/5 md:w-2/3 lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 justify-center items-center justify-items-center gap-4 md:gap-30">
                    {icons.map((item, index) => (
                        <CardStack key={index}>
                            <item.Icon className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-gray-100" />
                            <h2 className="text-white text-sm sm:text-base md:text-xl text-center">
                                {item.title}
                            </h2>
                        </CardStack>
                    ))}
                </div>
            </div>
        </div>
    );
}