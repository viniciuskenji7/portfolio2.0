'use server';
import { resend } from "../lib/resend";
import { IEmail } from "../types/IEmail";

export async function sendContactEmail(data: IEmail){
    try {
        const { data: resendData, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'viniciuskenji007@gmail.com',
            subject: `Novo Assunto de: ${data.name}`,
            html: `
                <p>Nome: ${data.name}</p>
                <p>Email: ${data.email}</p>
                <p>Mensagem: ${data.message}</p>
            `
        });

        if (error) {
            return {success: false, error: error.message};
        }

        return {success: true, resendData};
    } catch (err) {
        return {success: false, error: "Falha na comunicação"};
    }
}
