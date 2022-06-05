import useFetch from '../hooks/useFetch'

function GetUsers(){
    const users =  useFetch('http://127.0.0.1:3000/service/users') 
    
        return (
            <ul >
                {users?.map(u => 
                <li key={u.id}>Usuarios
                    <ul>
                        {u.username}
                    </ul>
                </li>
            )}
            </ul>   
        )
 }

 export default GetUsers