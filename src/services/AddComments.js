import { useState } from "react"
import { useToken } from "../hooks/TokenContext"
import { useUser } from "../hooks/UserContext"
import GetUsers from "../services/GetUsers"
import './AddComments.css'

function AddComments(){
    const [token] = useToken()
    const [username] = useUser()
    const [comments, setComments] = useState()
    
    const handleSubmit = async e => {
    e.preventDefault()
    try {
    const res = await fetch('http://127.0.0.1:3000/service/user/task', {
        method: 'PATCH',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': token 
        },
        body: JSON.stringify({ username, comments })
    })
    } catch (e) {
      console.warn(e)
    }
  }

   return (
    <aside>
      <form id="add-comment" onSubmit={handleSubmit}>
        <label>
          <span id="get-users">Select User:<GetUsers/></span>
         
        </label>
        <label>
          <span>New Comment:</span>
          <textarea name="comments" value={comments} onChange={e => setComments(e.target.value)}/>
          </label>
        <button>Add Comments</button>
    </form>
    </aside>
  )
}


export default AddComments