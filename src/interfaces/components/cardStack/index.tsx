'use client';
import Magnet from "../animations/magnetAnimation";
import SpotlightCard from "../animations/spotlightCard";
import StarBorder from "../animations/starBorder";

interface CardStackProps {
    children: React.ReactNode;
}

export const CardStack = ({ children }: CardStackProps) => {
    return (
        <Magnet padding={100} disabled={false} magnetStrength={10}>
            <StarBorder
                as="div"
                className="h-50 w-50"
                color="white"
                speed="4s"
                thickness={1}
            >
                <div className="flex flex-col items-center justify-center gap-2 h-full w-full bg-transparent">
                    {children}
                </div>
            </StarBorder>
        </Magnet>
    );
}