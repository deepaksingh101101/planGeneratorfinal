import Steeper from "../../components/Steeper";
import { service3 } from "../../assets";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function FormPage() {

    const {t}=useTranslation()

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
                       {t('ai_business')}
                    </motion.h2>
                    <motion.div
                        className="mt-8 text-lg  "
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <p className="mb-4">
                            {t('transform')}
                        </p>
                        <p className="mb-4">
                           {t("ourGoal")}
                        </p>
                        <p>
                           {t('get')}
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
                       {t('at')}
                        <a href="#" className="underline text-white font-semibold">Learn more about our privacy policy</a>.
                    </p>
                </motion.div>
            </div>
        </>
    );
}
