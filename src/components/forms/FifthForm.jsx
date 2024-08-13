import { useState } from "react";

export default function FifthForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    const [formData, setFormData] = useState({
        businessName: "",
        businessDescription: "",
        numberOfEmployees: "",
        productService: "",
        salesChannel: "",
        customerLocation: "",
        product1Name: "",
        product1Description: "",
        product2Name: "",
        product2Description: "",
        product3Name: "",
        product3Description: "",
        product4Name: "",
        product4Description: "",
        product5Name: "",
        product5Description: "",
        successDriver1: "",
        successDriver2: "",
        successDriver3: "",
        weakness1: "",
        weakness2: "",
        weakness3: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
  return (
    <div className="relative min-h-screen grid bg-transparent">
    <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 w-full">
        <div className="md:flex md:items-center md:justify-left w-full p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none">
            <div className="w-full space-y-12">
                <div className="lg:text-left text-center">
                    <div className="flex items-center justify-center">
                        <div className="flex flex-col w-full border border-gray-900 rounded-lg px-0 md:px-8 lg:px-8 py-10">
                            <form onSubmit={handleSubmit} className="flex flex-col space-y-8 mt-10">
                                {/* Success Drivers */}
                                <div>
                                    <label className="font-bold text-lg text-white">Success Driver 1 (required)</label>
                                    <input
                                        type="text"
                                        name="successDriver1"
                                        value={formData.successDriver1}
                                        onChange={handleChange}
                                        required
                                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                                    />
                                </div>
                                <div>
                                    <label className="font-bold text-lg text-white">Success Driver 2 (optional)</label>
                                    <input
                                        type="text"
                                        name="successDriver2"
                                        value={formData.successDriver2}
                                        onChange={handleChange}
                                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                                    />
                                </div>
                                <div>
                                    <label className="font-bold text-lg text-white">Success Driver 3 (optional)</label>
                                    <input
                                        type="text"
                                        name="successDriver3"
                                        value={formData.successDriver3}
                                        onChange={handleChange}
                                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                                    />
                                </div>

                                {/* Weaknesses */}
                                <div>
                                    <label className="font-bold text-lg text-white">Weakness 1 (optional)</label>
                                    <input
                                        type="text"
                                        name="weakness1"
                                        value={formData.weakness1}
                                        onChange={handleChange}
                                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                                    />
                                </div>
                                <div>
                                    <label className="font-bold text-lg text-white">Weakness 2 (optional)</label>
                                    <input
                                        type="text"
                                        name="weakness2"
                                        value={formData.weakness2}
                                        onChange={handleChange}
                                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                                    />
                                </div>
                                <div>
                                    <label className="font-bold text-lg text-white">Weakness 3 (optional)</label>
                                    <input
                                        type="text"
                                        name="weakness3"
                                        value={formData.weakness3}
                                        onChange={handleChange}
                                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
