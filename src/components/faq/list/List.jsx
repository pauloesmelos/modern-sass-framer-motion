import React from 'react';

const List = ({ question, answer }) => {
  const [isOpened, setIsOpened] = React.useState(false);
  const handleIsOpened = () => {
    setIsOpened(e => !e);
  }

  return (
    <div onClick={handleIsOpened} className="w-full cursor-pointer duration-200 shadow-md p-3 rounded-lg
    shadow-purple-200 border border-purple-200 hover:bg-neutral-100">
      <div className="w-full flex justify-between items-center">
        <p className="font-bold text-neutral-600 lg:text-lg">
            {question}
        </p>
        <span className="text-3xl">
            {isOpened ? "-" : "+"}
        </span>
      </div>
      <div className={`${isOpened ? "max-h-40" : "max-h-0"} transition-all duration-300 overflow-hidden`}>
        <p className="ml-4 tracking-wide text-neutral-400 p-2">
            {answer}
        </p>
      </div>
    </div>
  )
}

export default List;