import React from 'react';
import Modal from './Modal';

const BoardList = ({ title, editor, date, status, content }) => {
  return (
    <>
      {/* <!-- 홈페이지 게시판 리스트 --> */}
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-12 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {title}
        </th>
        <td className="px-3 py-2">{editor}</td>
        <td className="px-3 py-2">{date}</td>
        <td className="px-3 py-2">{status}</td>
        <td className="px-3 py-2">
          <Modal title={title} content={content} />
        </td>
      </tr>
    </>
  );
};

export default BoardList;
