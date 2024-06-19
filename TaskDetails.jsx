import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const TaskDetails = () => {
    const {id} = useParams ();
    const [ data, setData] = useState()
    console.log (id)


    useEffect(() => {
        fetch(`http://192.168.96.17:8000/task/api/v1/tasks/${id}`)
          .then(response => response.json())
          .then(json => setData(json))
      }, [id])

    return ( 
        <>
        {
            data && (
                <div className={`p-20 ${data.suc == true ? 'bg-red-600' : 'bg-green-600'}`}>
                <p>Id del usuario: {data.id}</p>
        <p>Title: {data.title}</p>
        <h1>Descripcion : 
            {data.description}
        </h1>
                </div>
            )
        }

        </>
    );
}
export default TaskDetails; 