import React from 'react';

const Price = () => {
  const url_background = "https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2655.jpg?t=st=1735302334~exp=1735305934~hmac=5df1c09d2ea8be6a1081010f39c9ea99377d65704debe531f804aa7646d7e6fb&w=1380";
  return (
    <section style={{ backgroundImage: `url(${url_background})` }} className={`w-ful bg-center bg-cover bg-no-repeat mt-[200px] py-24 relative`}>
      <div className="w-full max-w-[1300px] mx-auto px-5">
        <div className="w-full flex flex-col gap-6">
            <h1 className="text-3xl md:text-4xl font-bold text-purple-600 z-10 before:h-4 before:w-[50%] before:bg-purple-300 before:absolute
            before:left-0 before:bottom-0 before:z-[-1] relative">
                Maximize Your Efficiency with EPIC Inc.
            </h1>
            <span className="text-2xl md:text-4xl font-bold text-black/50 z-10">
                $29,999
            </span>
            <p className="text-black/50 z-10">
                We offer virtual services for your business, supporting your team remotely so they can thrive.
            </p>
        </div>
      </div>
    </section>
  )
}

export default Price;