import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "motion/react";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-10 mb-5 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full my-auto lg:w-1/2 lg:p-8"
        >
          <div className="flex item-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full my-auto lg:w-1/2"
        >
          <div className="flex-row justify-center lg:justify-start">
            {ABOUT_TEXT.trim()
              .split("\n\n")
              .map((ABOUT_TEXT, index) => (
                <p key={index} className="leading-relaxed py-1">
                  {ABOUT_TEXT}
                </p>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
