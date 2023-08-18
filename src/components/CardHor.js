import React from 'react';

const CardHor = ({ id, title, item }) => {
  return (
    <>
      <div className="mt-5 ml-4 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
        <img
          className="h-52 w-auto rounded-t-lg object-cover md:h-auto md:!rounded-none md:!rounded-l-lg"
          src="https://picsum.photos/300/100?random=1"
          alt=""
        />
        <div className="flex flex-col justify-start p-6">
          <h5
            key={id}
            className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50"
          >
            {title}
          </h5>
          <p>
            {item.map((item, i) => (
              <li
                key={i}
                className="mb-4 text-base text-neutral-600 dark:text-neutral-200"
              >
                {item}
              </li>
            ))}
          </p>
        </div>
      </div>
    </>
  );
};

export default CardHor;
