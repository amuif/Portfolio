import emailjs from "@emailjs/browser";

export const sendEmail = async (
  serviceId: string,
  templateId: string,
  publicKey: string,
  templateParams: { user_name: string; user_email: string; message: string },
): Promise<boolean> => {
  try {
    await emailjs.send(serviceId, templateId, templateParams, publicKey);
    console.log("Email sent successfully!");
    return true; // Indicate success
  } catch (error) {
    console.error("Failed to send email:", error);
    return false; // Indicate failure
  }
};
