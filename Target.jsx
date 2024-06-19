import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Target = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://192.168.96.17:8000/task/api/v1/tasks/')
      .then(response => response.json())
      .then(json => setData(json))
  }, [])

  return (
    <div>
      <h1>Tabla de Datos</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Suc</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            return (
              <tr key={item.id}>
              <td className="border px-4 py-2">{item.id}</td>
              <td className="border px-4 py-2">{item.title}</td>
              <td className="border px-4 py-2">{item.description}</td>
              <td className="border px-4 py-2">{item.suc}</td>
              <td className="border px-4 py-2">
                <Link to={`/Target/${item.id}`}>
                  <span
                    className={`px-2 py-1 rounded ${
                      item.details ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                    }`}
                  >
                    {item.suc ? 'Verdadero' : 'Falso'}
                  </span>
                </Link>
              </td>
            </tr>
          
          )
})
}
        </tbody>
      </table>
    </div>
  )
}

export default Target
