'use client';

import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
  const form: any = useRef();
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const userId = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, userId).then(
      () => {
        alert('Message successfully sent!');
        form.current.reset();
      },
      () => {
        alert('Failed to send the message, please try again');
      }
    );
  };

  return (
    <section className="relative mt-8 paddings innerWidth px-2 mx-auto max-w-screen-md text-info sm:mt-4">
      <h2 className="krona-one mb-4 text-4xl tracking-tight font-extrabold text-center">
        Contact Me
      </h2>
      <p className="krona-one mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        Currently looking for new opportunities. My inbox is always open.
      </p>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-8 border-2 border-accent p-8 rounded-lg"
      >
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-info opacity-80"
          >
            Your Name
          </label>
          <input
            type="name"
            id="name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-info text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 "
            placeholder="Julio Velezmoro"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-info opacity-80"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-info text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 "
            placeholder="julio28ve@gmail.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-info opacity-80"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="block p-3 w-full text-sm text-info bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  "
            name="subject"
            placeholder="Let me know how I can help you"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-info opacity-80"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows={6}
            className="block resize-none p-2.5 w-full text-sm text-info bg-gray-50 rounded-lg shadow-sm border border-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  "
            name="message"
            placeholder="Leave a comment..."
            draggable="false"
          />
        </div>
        <button
          value="SEND"
          type="submit"
          className="py-3 px-5 text-xl font-semibold text-center btn btn-lg btn-primary"
        >
          Send message
        </button>
      </form>
      <div
        className={`bubble bubble-1 absolute right-[90%] bottom-[-200px] w-[100px] h-[100px] rounded-full opacity-[0.8] bg-accent -z-10`}
      />
      <div
        className={`bubble bubble-2 absolute right-[30%] bottom-[-400px] w-[50px] h-[50px] rounded-full bg-accent -z-10`}
      />
      <div
        className={`bubble bubble-3 absolute right-[40%] bottom-[-150px] w-[50px] h-[50px] rounded-full opacity-[0.8] bg-success -z-10`}
      />
      <div
        className={`bubble bubble-4 absolute right-[80%] bottom-[-200px] w-[100px] h-[100px] rounded-full opacity-[0.8] bg-primary -z-10`}
      />
    </section>
  );
};

export default Contact;
