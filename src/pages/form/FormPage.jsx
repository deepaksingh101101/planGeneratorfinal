import Steeper from "../../components/Steeper";
import { service3 } from "../../assets";
import { motion } from "framer-motion";

export default function FormPage() {
    return (
        <>
            <div className="flex flex-col lg:flex-row pt-[7.75rem] lg:pt-[5.25rem]">
                <div className="w-full lg:w-2/3">
                    <Steeper />
                </div>
                <div className="w-full lg:w-1/3 relative flex flex-col items-center justify-center bg-gradient-to-r text-white p-8 lg:p-12">
                    <img src={service3} alt=""  className="h-[300px] mb-5 object-cover" />
                    <motion.h2
                        className="text-4xl sm:text-6xl mt-28 lg:mt-0 font-bold"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        AI Business Plan Generator
                    </motion.h2>
                    <motion.div
                        className="mt-8 text-lg  "
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <p className="mb-4">
                            Transform your ideas into a comprehensive business plan in minutes with our AI-powered solution.
                        </p>
                        <p className="mb-4">
                            Our tool guides you step-by-step, providing personalized suggestions to help you create a robust business plan.
                        </p>
                        <p>
                            Get insights on market trends, customer segments, financial projections, and much more.
                        </p>
                    </motion.div>
                </div>
            </div>
            <div className="mt-12 px-5 sm:px-20">
                <motion.div
                    className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 rounded-lg shadow-lg transform transition duration-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <h2 className="text-2xl font-bold text-white mb-4">We value your privacy</h2>
                    <p className="text-white">
                        At 15minuteplan.ai, we are committed to protecting your privacy and the security of your personal information. 
                        We collect only the necessary data to generate your business plan and improve our service, and we will never steal 
                        your business idea or share your information with third parties without your consent. 
                        <a href="#" className="underline text-white font-semibold">Learn more about our privacy policy</a>.
                    </p>
                </motion.div>
            </div>
        </>
    );
}
