import React from 'react';

const Card = ({ id, title, text, imgUrl, tags }) => {
  return (
    <>
      {/* <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"> */}
      <div className="rounded overflow-hidden shadow-lg">
        <img className="w-full" src={imgUrl} alt={title} />
        <div className="px-6 py-4">
          <div className="font-ibmsans font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{text}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {tags.map((tag, i) => {
            return (
              <>
                <span
                  key={i}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {tag}
                </span>
              </>
            );
          })}
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Card;
