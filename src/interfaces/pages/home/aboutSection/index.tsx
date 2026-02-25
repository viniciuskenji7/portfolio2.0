import ProfileCard from "@/src/interfaces/components/animations/profileCard"
import avatar from "@/src/interfaces/assets/avatar.png"

export const AboutSection = () => {
    return (
        <div className="h-dvh w-full bg-black flex items-start justify-start p-60">
            <div className="flex items-start justify-between w-full">
                <div className="flex flex-col gap-8 items-start text-white">
                    <h1 className="text-5xl font-bold font-[rubik] uppercase">Sobre mim</h1>
                    <p className="font-[poppins]">
                        Conteúdo sobre você aqui...
                    </p>
                </div>
                <div>
                    <ProfileCard
                        name="Vinicius Kenji"
                        title="Software Engineer"
                        handle="javicodes"
                        status="Online"
                        contactText="Contact Me"
                        avatarUrl={avatar.src}
                        showUserInfo={true}
                        enableTilt={true}
                        enableMobileTilt={false}
                        onContactClick={() => console.log('Contact clicked')}
                        behindGlowColor="rgba(125, 190, 255, 0.67)"
                        iconUrl={avatar.src}
                        behindGlowEnabled
                        innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
                    />
                </div>
            </div>
        </div>
    )
}