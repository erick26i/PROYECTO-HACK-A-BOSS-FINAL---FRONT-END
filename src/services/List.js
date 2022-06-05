import useFetch from '../hooks/useFetch'
import './list.css'

function List(){

  const list = useFetch('http://127.0.0.1:3000/service/list')
    return (
    <>
      <div id="service-list">
          <h2>Servicios Disponibles</h2>
          </div>

        <div>
        {list?.map(lis => 
        <span key={lis.id}>
          <aside>Titulo: {lis.title}</aside>
          <aside>Descripcion: {lis.description}</aside>
          <aside>Comentarios: {!lis.comments ? 'No hay datos' : lis.comments}</aside>
          <aside>Archivos: {!lis.file && 'No hay datos'}</aside> 
          <br/> 
        </span>)} 
         </div>
    </>
  )
 }

 export default List