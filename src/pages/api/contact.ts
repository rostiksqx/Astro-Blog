import type { APIRoute } from "astro";
import { Resend } from 'resend';
import { contactUsHeaderId, errorSearchParameterName } from "../../constants";


export const POST: APIRoute = async ({ request, redirect }) => {
    try {
        const data = await request.formData();
        const name = data.get("name");
        const email = data.get("email");
        const message = data.get("message");

        if (!name || !email || !message) {
            return redirect(`/?${errorSearchParameterName}=All fields are required.#${contactUsHeaderId}`)
        }

        const apiKey = import.meta.env.EMAIL_SERVICE_API_KEY;
        const resend = new Resend(apiKey);

        resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email.toString(),
            subject: 'Thank you for choosing our coffee shop!',
            html: '<p>Bro you are real <strong>sigma</strong>!</p>'
        });

        return redirect("/thank-you");
    } catch (error) {
        console.error("[ERROR][POST]Received error at server side ", error)
        return redirect(`/?${errorSearchParameterName}=Something went wrong#${contactUsHeaderId}`);
    }

};