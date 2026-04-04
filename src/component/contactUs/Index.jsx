import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiEdit,
  FiMessageSquare,
  FiSend,
} from "react-icons/fi";
import Container from "../common/Container";
import SectionHeader from "../common/SectionHeader";
import Button from "../common/Button";
import allIcons from "../../hepler/iconProvider";
import ContactCard from "../common/ContactCard";

// ===================== ZOD SCHEMA =====================
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(7, "Phone number must be at least 7 digits")
    .regex(/^[0-9+\-\s()]+$/, "Please enter a valid phone number"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// ===================== INPUT COMPONENT =====================
const InputField = ({
  label,
  register,
  error,
  type = "text",
  icon: Icon,
  ...rest
}) => (
  <div className="flex flex-col gap-y-1">
    <div
      className={`flex items-center gap-x-3 bg-quinary px-5 py-4 border ${
        error ? "border-red-400" : "border-transparent"
      } focus-within:border-tarnary transition-colors duration-200`}
    >
      {Icon && <Icon className="text-secondary shrink-0" size={18} />}
      <input
        type={type}
        placeholder={label}
        {...register}
        {...rest}
        className="w-full bg-transparent paragraph-regular text-primary placeholder:text-secondary outline-none"
      />
    </div>
    {error && (
      <span className="text-red-500 text-[13px] font-urbanist pl-1">
        {error.message}
      </span>
    )}
  </div>
);

// ===================== MAIN COMPONENT =====================
const ContactUS = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    // simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form Data:", data);
    reset();
  };

  const { contactData } = allIcons;

  return (
    <section>
      <Container>
        <div className="py-[120px]">
          <SectionHeader
            title={"Contact with Us"}
            subTitle={"Feel free to write us anytime"}
          />

          <div className="pt-[60px] flex flex-col items-center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full max-w-[840px] flex flex-col gap-y-5"
            >
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-2 gap-x-5">
                <InputField
                  label="Your Name"
                  register={register("name")}
                  error={errors.name}
                  icon={FiUser}
                />
                <InputField
                  label="Email Address"
                  type="email"
                  register={register("email")}
                  error={errors.email}
                  icon={FiMail}
                />
              </div>

              {/* Row 2: Phone & Subject */}
              <div className="grid grid-cols-2 gap-x-5">
                <InputField
                  label="Phone"
                  type="tel"
                  register={register("phone")}
                  error={errors.phone}
                  icon={FiPhone}
                />
                <InputField
                  label="Subject"
                  register={register("subject")}
                  error={errors.subject}
                  icon={FiEdit}
                />
              </div>

              {/* Row 3: Message */}
              <div className="flex flex-col gap-y-1">
                <div
                  className={`flex items-start gap-x-3 bg-quinary px-5 py-4 border ${
                    errors.message ? "border-red-400" : "border-transparent"
                  } focus-within:border-tarnary transition-colors duration-200`}
                >
                  <FiMessageSquare
                    className="text-secondary shrink-0 mt-1"
                    size={18}
                  />
                  <textarea
                    placeholder="Write a Message"
                    rows={6}
                    {...register("message")}
                    className="w-full bg-transparent paragraph-regular text-primary placeholder:text-secondary outline-none resize-none"
                  />
                </div>
                {errors.message && (
                  <span className="text-red-500 text-[13px] font-urbanist pl-1">
                    {errors.message.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-5 flex justify-center">
                <Button type="submit" disabled={isSubmitting}>
                  <span className="flex items-center gap-x-2">
                    <FiSend size={16} />
                    {isSubmitting ? "Sending..." : "Send a Message"}
                  </span>
                </Button>
              </div>

              {/* Success Message */}
              {isSubmitSuccessful && (
                <p className="text-center text-green-500 paragraph-semi">
                  Message sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-5 py-[120px]">
          {contactData.map((item) => (
            <ContactCard
              key={item.id}
              icon={item.icon}
              label={item.label}
              value={item.value}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ContactUS;
