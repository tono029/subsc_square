import React, {useContext} from "react";
import { AuthContext } from "src/firebase/AuthProvider";


export default function Create() {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className="create-form">
      {
        currentUser ?
        
        <form>
          <h2>投稿する</h2>
        </form>
        
        :

        <p>投稿するにはログインしてください</p>
      }
    </div>
  )
}