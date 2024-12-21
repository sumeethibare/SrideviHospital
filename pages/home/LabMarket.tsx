import Appointmentbutton from '@/components/Props/Appointmentbutton';
import React from 'react';

const LabAndPharmacy: React.FC = () => {
    return (
        <section className="relative">
            <div className="bg-fixed bg-center custom-img">
                <div className="mx-auto max-w-7xl">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-emerald-800 bg-opacity-85"></div>
                    </div>
                    <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                        <h1 className="text-left text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            <span className="block text-white">Our Lab &amp; Pharmacy</span>
                        </h1>
                        <p className="mt-6 max-w-lg text-left text-xl text-white sm:max-w-3xl">
                            In our pharmacy, your health is not just a transaction; it's a commitment. With a wide range of pharmaceuticals and a knowledgeable team, we strive to provide more than just medications - we offer guidance, support, and a personalized approach to your well-being. Whether you're managing a chronic condition or seeking over-the-counter solutions, our pharmacy is your trusted destination for health and healing. Visit us and experience the difference a dedicated pharmacy makes in your journey to optimal health.
                        </p>
                        <div className="mt-8 flex gap-x-4">
                           <Appointmentbutton/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LabAndPharmacy;
