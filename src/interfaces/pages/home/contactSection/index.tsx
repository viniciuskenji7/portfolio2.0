import LightRays from "@/src/interfaces/components/animations/lightRays"
import SplitText from "@/src/interfaces/components/animations/splitText"
import { FormContact } from "@/src/interfaces/components/formContact"

export const ContactSection = () => {
    return (
        <LightRays
            raysOrigin="bottom-center"
            raysColor="#ffffff"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.15}
            noiseAmount={0}
            distortion={0}
            pulsating={false}
            fadeDistance={1}
            saturation={1}
            className="min-h-screen w-full bg-black flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 "
        >
            <section
                id="contact"
            >
                <FormContact />
            </section>
        </LightRays>
    )
}