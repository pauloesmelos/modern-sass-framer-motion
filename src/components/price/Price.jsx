import React from 'react';

const Price = () => {
  const url_background = "https://images.unsplash.com/photo-1614854262340-ab1ca7d079c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <section style={{ backgroundImage: `url(${url_background})` }} className={`w-ful bg-center bg-cover bg-no-repeat mt-[200px] py-24 relative`}>
      <div className="w-full max-w-[1300px] mx-auto px-5">
        <div className="w-full flex flex-col gap-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white z-10 before:h-4 before:w-[50%] before:bg-purple-500 before:absolute
            before:left-0 before:bottom-0 before:z-[-1] relative">
                Maximize Your Efficiency with EPIC Inc.
            </h1>
            <span className="text-2xl md:text-4xl font-bold text-black/80 z-10">
                $29,999
            </span>
            <p className="text-white z-10">
                We offer virtual services for your business, supporting your team remotely so they can thrive.
            </p>
        </div>
      </div>
    </section>
  )
}

export default Price;