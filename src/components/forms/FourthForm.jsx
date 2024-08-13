import { useState } from "react";

export default function FourthForm() {
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
                                {/* Product 1 */}
                                <div>
                                    <label className="font-bold text-lg text-white">Product or Service 1 Name (required)</label>
                                    <input
                                        type="text"
                                        name="product1Name"
                                        value={formData.product1Name}
                                        onChange={handleChange}
                                        required
                                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                                    />
                                </div>
                                <div>
                                    <label className="font-bold text-lg text-white">Product or Service 1 Description (optional)</label>
                                    <textarea
                                        name="product1Description"
                                        value={formData.product1Description}
                                        onChange={handleChange}
                                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                                    ></textarea>
                                </div>

                                {/* Product 2 */}
                                <div>
                                    <label className="font-bold text-lg text-white">Product or Service 2 Name (optional)</label>
                                    <input
                                        type="text"
                                        name="product2Name"
                                        value={formData.product2Name}
                                        onChange={handleChange}
                                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                                    />
                                </div>
                                <div>
                                    <label className="font-bold text-lg text-white">Product or Service 2 Description (optional)</label>
                                    <textarea
                                        name="product2Description"
                                        value={formData.product2Description}
                                        onChange={handleChange}
                                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                                    ></textarea>
                                </div>

                                {/* Product 3 */}
                                <div>
                                    <label className="font-bold text-lg text-white">Product or Service 3 Name (optional)</label>
                                    <input
                                        type="text"
                                        name="product3Name"
                                        value={formData.product3Name}
                                        onChange={handleChange}
                                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                                    />
                                </div>
                                <div>
                                    <label className="font-bold text-lg text-white">Product or Service 3 Description (optional)</label>
                                    <textarea
                                        name="product3Description"
                                        value={formData.product3Description}
                                        onChange={handleChange}
                                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                                    ></textarea>
                                </div>

                                {/* Product 4 */}
                                <div>
                                    <label className="font-bold text-lg text-white">Product or Service 4 Name (optional)</label>
                                    <input
                                        type="text"
                                        name="product4Name"
                                        value={formData.product4Name}
                                        onChange={handleChange}
                                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                                    />
                                </div>
                                <div>
                                    <label className="font-bold text-lg text-white">Product or Service 4 Description (optional)</label>
                                    <textarea
                                        name="product4Description"
                                        value={formData.product4Description}
                                        onChange={handleChange}
                                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                                    ></textarea>
                                </div>

                                {/* Product 5 */}
                                <div>
                                    <label className="font-bold text-lg text-white">Product or Service 5 Name (optional)</label>
                                    <input
                                        type="text"
                                        name="product5Name"
                                        value={formData.product5Name}
                                        onChange={handleChange}
                                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                                    />
                                </div>
                                <div>
                                    <label className="font-bold text-lg text-white">Product or Service 5 Description (optional)</label>
                                    <textarea
                                        name="product5Description"
                                        value={formData.product5Description}
                                        onChange={handleChange}
                                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                                    ></textarea>
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
