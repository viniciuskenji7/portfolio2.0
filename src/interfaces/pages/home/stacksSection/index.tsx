import SplitText from "@/src/interfaces/components/animations/splitText";
import { CardStack } from "@/src/interfaces/components/cardStack";
import Image from "next/image";
import TypescriptIcon from '@/src/interfaces/assets/icons/typescript.svg'
import NextIcon from '@/src/interfaces/assets/icons/nextdotjs.svg'
import VueIcon from '@/src/interfaces/assets/icons/vuedotjs.svg'
import TailwindIcon from '@/src/interfaces/assets/icons/tailwindcss.svg'
import NodeIcon from '@/src/interfaces/assets/icons/nodedotjs.svg'
import PythonIcon from '@/src/interfaces/assets/icons/python.svg'
import LaravelIcon from '@/src/interfaces/assets/icons/laravel.svg'
import MysqlIcon from '@/src/interfaces/assets/icons/mysql.svg'
import GitIcon from '@/src/interfaces/assets/icons/git.svg'

export const StacksSection = () => {

    const cards = [
        { icon: TypescriptIcon, title: 'Typescript' },
        { icon: NextIcon, title: 'NextJS' },
        { icon: VueIcon, title: 'VueJS' },
        { icon: TailwindIcon, title: 'Tailwindcss' },
        { icon: NodeIcon, title: 'NodeJS' },
        { icon: PythonIcon, title: 'Python' },
        { icon: LaravelIcon, title: 'Laravel' },
        { icon: MysqlIcon, title: 'MySQL' },
        { icon: GitIcon, title: 'Git e Github' },
    ]

    return (
        <div className="h-dvh w-full bg-black flex items-start justify-center pt-26">
            <div className="h-full w-full flex flex-col items-center justify-start text-white gap-50">
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
                <div className="w-full pl-60 grid grid-rows-3 grid-cols-3 justify-center items-center">
                    {cards.map((item, index) => (
                        <CardStack key={index}>
                            <Image
                                alt="Icon"
                                src={item.icon}
                                height={30}
                                width={30}
                                color="white"
                            />
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