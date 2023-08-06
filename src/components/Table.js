import React from 'react';

const Table = () => {
  return (
    <>
      <table class="table-auto">
        <thead>
          <tr>
            <th>구분</th>
            <th>이름</th>
            <th>분야</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>교육상담전문위원</td>
            <td>이승은</td>
            <td>젠더에듀상담센터 소장</td>
          </tr>
          <tr>
            <td>교육연구자문위원</td>
            <td>이은주</td>
            <td>인지행동치료전문가</td>
          </tr>
          <tr>
            <td>교육연구자문위원</td>
            <td>한지선</td>
            <td>미술치료전문가</td>
          </tr>
          <tr>
            <td>교육연구자문위원</td>
            <td>이승민</td>
            <td>인권/폭력예방교육전문가</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
