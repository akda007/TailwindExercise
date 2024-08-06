// src/components/DataTable.tsx
import React from 'react';

// Define os tipos para as propriedades do componente
interface DataTableProps {
  columns: string[];
  data: (string | number)[][];
}

export default function Table({ columns, data }: DataTableProps) {
  return (
    <div className="overflow-x-auto w-1/2 mt-20">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-gray-600">
            {columns.map((col, index) => (
              <th
                key={index}
                className="py-3 px-4 border-b border-gray-300"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="py-3 px-4 border-b border-gray-300 text-gray-700"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


