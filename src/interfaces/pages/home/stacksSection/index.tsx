import SplitText from "@/src/interfaces/components/animations/splitText";
import { CardStack } from "@/src/interfaces/components/cardStack";
import { icons } from "@/src/interfaces/utils/IconsStacks";


export const StacksSection = () => {

    return (
        <div className="h-full w-full bg-black flex items-start justify-center py-26">
            <div className="h-full w-full flex flex-col items-center justify-start text-white gap-20">
                <SplitText
                    text="tecnologias"
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
                <div className="w-1/2 grid grid-rows-3 grid-cols-3 justify-center items-center justify-items-center gap-5">
                    {icons.map((item, index) => (
                        <CardStack key={index}>
                            <item.Icon className="w-20 h-20 text-gray-100" />
                            <h2 className="text-white text-xl ">
                                {item.title}
                            </h2>
                        </CardStack>
                    ))}
                </div>
            </div>
        </div>
    );
}