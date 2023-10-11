class EmailSenderService {
    sendEmail(to: string, subject: string, body: string): void {
        console.log(`Mock email sent to ${to} with subject: ${subject}\nBody: ${body}`);
    }
}

export default EmailSenderService;
