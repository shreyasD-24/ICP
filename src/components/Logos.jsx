import React from 'react';

const Logos = () => {
    return (
        <div className="relative w-full pb-4 sm:pb-4 px-4 bg-white">
            <div className="max-w-7xl mx-auto text-center">
                <div className="mb-8 sm:mb-12">
                    <p className="text-slate-800 font-semibold text-xl md:text-2xl mb-2 sm:mb-3">Powering experience</p>
                    <p className="text-slate-400 text-lg md:text-xl">From next-gen startups to Enterprise</p>
                </div>
                
                {/* Company Logos Grid */}
                <div className="flex items-center justify-center flex-wrap gap-x-8 sm:gap-x-12 lg:gap-x-16 xl:gap-x-20 gap-y-6 sm:gap-y-8 opacity-60 hover:opacity-80 transition-opacity duration-300">
                    <div className="flex items-center h-6 sm:h-7">
                        <span className="text-slate-700 font-bold text-sm sm:text-base">♦SWAY</span>
                    </div>
                    <div className="flex items-center h-6 sm:h-7">
                        <span className="text-slate-700 font-bold text-sm sm:text-base tracking-wide">UNICEF</span>
                    </div>
                    <div className="flex items-center h-6 sm:h-7">
                        <span className="text-slate-700 font-bold text-sm sm:text-base tracking-wide">TEPCO</span>
                    </div>
                    <div className="flex items-center h-6 sm:h-7">
                        <span className="text-slate-700 font-normal text-sm sm:text-base">capgemini</span>
                    </div>
                    <div className="flex items-center h-6 sm:h-7">
                        <span className="text-slate-700 font-bold text-sm sm:text-base">FASTCOMPANY</span>
                    </div>
                    <div className="flex items-center h-6 sm:h-7">
                        <span className="text-slate-700 font-bold text-sm sm:text-base">Maimo</span>
                    </div>
                    <div className="flex items-center h-6 sm:h-7">
                        <span className="text-slate-700 font-bold text-sm sm:text-base">TVS ✈</span>
                    </div>
                    <div className="flex items-center h-6 sm:h-7">
                        <span className="text-slate-700 font-bold text-sm sm:text-base">⬛PLAID</span>
                    </div>
                    <div className="flex items-center h-6 sm:h-7">
                        <span className="text-slate-700 font-bold text-sm sm:text-base">GROVE</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Logos;