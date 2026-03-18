import { SubmitHandler, useForm } from "react-hook-form";
import SplitText from "../animations/splitText";
import { zodResolver } from '@hookform/resolvers/zod';
import { Email } from "@/src/schemas/contactSchema";
import { IEmail } from "@/src/types/IEmail";
import { sendContactEmail } from "@/src/actions/sendEmail";
import toast from 'react-hot-toast';


export const FormContact = () => {

    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<IEmail>({
        resolver: zodResolver(Email)
    });

    const onSubmit: SubmitHandler<IEmail> = async (data) => {
        const sendEmailPromise = sendContactEmail(data).then((result) => {
            if (!result.success) throw new Error(result.error as string);
            reset();
            return result;
        });

        toast.promise(sendEmailPromise, {
            loading: 'Enviando email...',
            success: 'Email enviado com sucesso',
            error: 'Erro ao enviar email'
        })
    };

    return (
        <div className="flex flex-col items-center justify-center gap-12 pt-40 px-4 w-full h-full">
            <SplitText 
                className="text-5xl md:text-6xl font-bold text-center uppercase text-white tracking-wider"
                text="entre em contato"
                delay={50}
                duration={1.25}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="start"
            />

            {/* Demo Contact Form */}
            <form
                onSubmit={handleSubmit(onSubmit)} 
                className="w-full max-w-md space-y-6 bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
            >
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                        Nome
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Seu nome"
                        {...register('name')}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all"
                    />
                    {errors.name && <span className="text-red-400">{errors.name.message}</span>}
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="seu@email.com"
                        {...register('email')}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all"
                    />
                    {errors.email && <span className="text-red-400">{errors.email.message}</span>}
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                        Mensagem
                    </label>
                    <textarea
                        id="message"
                        rows={4}
                        placeholder="Como posso te ajudar?"
                        {...register('message')}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all resize-none"
                    />
                    {errors.message && <span className="text-red-400">{errors.message.message}</span>}
                </div>

                <button
                    type="submit"
                    className="w-full py-3 px-6 cursor-pointer bg-white font-[poppins] text-black font-semibold rounded-lg hover:bg-white/90 transition-colors duration-200"
                >
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                </button>
            </form>

            <p className="text-white/60 text-sm text-center max-w-md">
                Vinicius Kenji, Copyright © 2026 Todos os Direitos Reservados
            </p>
        </div>
    );
}