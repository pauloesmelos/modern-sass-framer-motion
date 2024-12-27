import React from 'react';

const Price = () => {
  const url_background = "https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg";
  return (
    <section className={`w-full mt-[200px] py-24 relative`}>
      <div className="absolute top-0 left-0 w-full h-full bg-purple-900/80" />
      <div className="w-full bg-[url('${url_background}')] bg-cover bg-center bg-no-repeat max-w-[1300px] mx-auto px-5">
        <div className="w-full flex flex-col gap-6">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-100 z-10">
                Maximize Your Efficiency with EPIC Inc.
            </h1>
            <span className="text-2xl md:text-4xl font-bold text-white z-10">
                $29,999
            </span>
            <p className="text-white/90 z-10">
                We offer virtual services for your business, supporting your team remotely so they can thrive.
            </p>
        </div>
      </div>
    </section>
  )
}

export default Price;