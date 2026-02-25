'use client';
import SpotlightCard from "../animations/spotlightCard";
import StarBorder from "../animations/starBorder";

interface CardStackProps {
    children: React.ReactNode;
}

export const CardStack = ({children}: CardStackProps) => {
    return (
        <StarBorder
            as="div"
            className=""
            color="white"
            speed="2s"
            thickness={3}
        >
            <SpotlightCard className="flex flex-col items-center gap-2 h-40 w-40" spotlightColor="rgba(0, 229, 255, 0.2)">
                {children}
            </SpotlightCard>
        </StarBorder>
    );
}