import { motion } from "framer-motion";
import { useForm } from "@formspree/react";
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import myImage from "../assets/images/myphoto.jpg";

const Contact = ({ darkMode }) => {
  const [state, handleSubmit] = useForm("xnnjvnrq"); // Use only your Formspree form ID (not full URL)
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={`min-h-screen mt-8 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${darkMode ? 'dark bg-gray-700' : 'bg-white'}`}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
          >
            Get In Touch
          </motion.h1>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I'd love to hear from you. Feel free to reach out for collaborations, questions, or just to chat!
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Introduction & Contact Info */}
          <motion.div
            variants={fadeInVariants}
            className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
          >
            <div className="mb-8">
              <img
                src={myImage}
                alt="Yussuf Muse"
                className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
              />
              <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Hello! I'm Yussuf, a passionate full-stack developer. I'm always excited to work on innovative projects.
                Whether you're looking for collaboration or have a question, don't hesitate to contact me below!
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Direct Contact
                </h3>
                <div className="flex items-center gap-3 mb-2">
                  <AiOutlinePhone className={`w-5 h-5 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                  <a href="tel:+254712345678" className={`hover:text-cyan-600 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    +254 700 156 949
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <AiOutlineMail className={`w-5 h-5 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    yussufh080@gmail.com
                  </span>
                </div>
              </div>

              <div>
                <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Let's Connect
                </h3>
                <div className="flex gap-4 justify-start">
                  <a
                    href="https://www.linkedin.com/in/yussuf-h-muse-a10362336"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg hover:bg-cyan-100 transition-colors ${darkMode ? 'hover:bg-gray-700' : ''}`}
                  >
                    <AiOutlineLinkedin className={`w-6 h-6 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                  </a>
                  <a
                    href="https://github.com/yussuf3468"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg hover:bg-cyan-100 transition-colors ${darkMode ? 'hover:bg-gray-700' : ''}`}
                  >
                    <AiOutlineGithub className={`w-6 h-6 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                  </a>
                </div>

              </div>

              <div className={`mt-8 p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Availability
                </h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  I'm currently open to collaboration opportunities and new projects.
                  Based in Nairobi, Kenya (UTC+3).
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeInVariants}
            className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-all ${darkMode
                      ? 'bg-gray-700 border-gray-600 focus:border-cyan-400 focus:ring-cyan-400/20'
                      : 'border-gray-300 focus:border-cyan-500 focus:ring-cyan-500/20'
                    }`}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-all ${darkMode
                      ? 'bg-gray-700 border-gray-600 focus:border-cyan-400 focus:ring-cyan-400/20'
                      : 'border-gray-300 focus:border-cyan-500 focus:ring-cyan-500/20'
                    }`}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-all ${darkMode
                      ? 'bg-gray-700 border-gray-600 focus:border-cyan-400 focus:ring-cyan-400/20'
                      : 'border-gray-300 focus:border-cyan-500 focus:ring-cyan-500/20'
                    }`}
                  placeholder="Your message..."
                  required
                  maxLength="500"
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${state.submitting
                    ? 'bg-cyan-400/70 cursor-not-allowed'
                    : 'bg-cyan-500 hover:bg-cyan-600'
                  } ${darkMode ? 'text-white' : 'text-white'}`}
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>

              {state.succeeded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`p-4 rounded-lg mt-6 ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800'
                    }`}
                >
                  Message sent successfully! I'll respond within 24 hours.
                </motion.div>
              )}

              {state.errors && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`p-4 rounded-lg mt-6 ${darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-800'
                    }`}
                >
                  Oops! Something went wrong. Please try again later.
                </motion.div>
              )}
            </form>

            <p className={`mt-6 text-sm text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Your privacy is important. I will never share your personal information.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
