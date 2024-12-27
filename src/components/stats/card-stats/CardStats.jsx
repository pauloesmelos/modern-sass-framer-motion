import React from 'react';

const CardStats = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-4">
        <div className="bg-purple-300 p-3 rounded-full">
            <span className="text-lg text-purple-900">
                {icon}
            </span>
        </div>
        <div>
            <h4 className="text-slate-800 font-medium">
                {title}
            </h4>
        </div>
      </div>
      <div>
        <p className="text-neutral-400 text-sm tracking-wide">
            {description}
        </p>
      </div>
    </div>
  )
}

export default CardStats;