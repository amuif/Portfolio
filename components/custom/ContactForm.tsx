"use client";
import React, { useRef, useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { sendEmail } from "@/utils/emailService";
import { AnimatedSubscribeButton } from "@/components/ui/animated-subscribe-button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import GradualSpacing from "../ui/gradual-spacing";
import BoxReveal from "../ui/box-reveal";
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSend, setIsSend] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const handleSubmitEmail = async (data: ContactFormData) => {
    const { name, email, message } = data;

    const templateParams = {
      user_name: name,
      user_email: email,
      message: message,
    };

    const serviceId = "service_gppgo9k";
    const templateId = "template_r2stzno";
    const publicKey = "KB-6R8_wN7cIPdEyK";
    try {
      const response = await sendEmail(
        serviceId,
        templateId,
        publicKey,
        templateParams,
      );
      if (response == false) {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error in handleSubmitEmail:", error);
      throw error;
    }
  };

  const onSubmit = async (data: ContactFormData) => {
    try {
      await handleSubmitEmail(data);

      setIsSend(true);
      reset();
      setTimeout(() => {
        setIsSend(false);
      }, 3000);
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };
  return (
    <div
      className="flex flex-col pb-24 w-full md:w-[60%] mx-auto px-4 "
      id="contact"
    >
      <BoxReveal>
      <GradualSpacing
              className="font-semibold text-left text-4xl -tracking-widest text-black dark:text-white md:text-4xl md:leading-[5rem]"
              text="Contact"
            />
      </BoxReveal>

      <form ref={form} onSubmit={handleSubmit(onSubmit)} className="">
        {/* Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <BoxReveal>
            <div className="flex flex-col gap-4 w-full">
              <label className="text-sm font-medium text-gray-700">Name</label>
              <Input
                aria-label="name input"
                placeholder="Enter Your Name"
                {...register("name")}
                className=""
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name.message}</span>
              )}
            </div>
          </BoxReveal>

          <BoxReveal>
            <div className="flex flex-col gap-4 w-full">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <Input
                aria-label="email input"
                placeholder="Enter Your Email"
                type="email"
                {...register("email")}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
              )}
            </div>
          </BoxReveal>
        </div>

        {/* Message */}
        <div className="py-5 w-full">
          <BoxReveal>
            <div className="flex flex-col gap-4 w-full">
              <label className="text-sm font-medium text-gray-700">Enter Your Message</label>
              <Textarea
                aria-label="message input"
                placeholder="Type Your Message Here"
                {...register("message")}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.message && (
                <span className="text-red-500 text-sm">{errors.message.message}</span>
              )}
            </div>
          </BoxReveal>
        </div>

        {/* Submit Button */}
        <div className="w-full flex justify-center" >
          <BoxReveal>
            <AnimatedSubscribeButton
              setIsSend={setIsSend}
              subscribeStatus={isSend}
              isSend={isSend}
              buttonColor="#3A6D8C"
              buttonTextColor="#ffffff"
              initialText={
                <span className="group inline-flex items-center">
                  Submit
                  <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              }
              changeText={
                <span className="group inline-flex items-center">
                  <CheckIcon className="mr-2 size-4" />
                  Submitted
                </span>
              }
            />
          </BoxReveal>
        </div>
      </form>
    </div>

  );
};

export default ContactForm;
