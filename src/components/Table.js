import React from 'react';
import TableItem from './TableItem';

const tableData = [
  {
    id: 1,
    name: '이승은',
    field: '젠더에듀상담센터 센터장',
    note: '내부위원',
  },
  {
    id: 2,
    name: '이은주',
    field: '인지행동치료전문가',
    note: '외부위원',
  },
  {
    id: 3,
    name: '김지민',
    field: '인권/폭력예방교육전문가',
    note: '외부위원',
  },
  {
    id: 4,
    name: '주현실',
    field: '언어치료전문가',
    note: '외부위원',
  },
  {
    id: 5,
    name: '이주희',
    field: '놀이치료전문가',
    note: '외부위원',
  },
  {
    id: 6,
    name: '최영진',
    field: '미술심리치료전문가',
    note: '외부위원',
  },
  {
    id: 7,
    name: '윤미경',
    field: '감각통합치료전문가',
    note: '외부위원',
  },
];

const Table = () => {
  return (
    <>
      <div className="relative overflow-x-auto mb-5">
        <table className="font-ibmsans w-auto text-sm text-left sm:table-fixed text-gray-500 dark:text-gray-400">
          <thead className="text-basic text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 flex justify-center">
                이 름
              </th>
              <th scope="col" className="px-6 py-3 ">
                소속 및 분야
              </th>
              <th scope="col" className="px-6 py-3 flex justify-center">
                비 고
              </th>
            </tr>
          </thead>
          {tableData.map((t) => (
            <TableItem key={t.id} name={t.name} field={t.field} note={t.note} />
          ))}
        </table>
      </div>
    </>
  );
};

export default Table;
