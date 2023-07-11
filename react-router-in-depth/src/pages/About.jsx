import { useState } from "react"
import { Navigate } from "react-router-dom";

const About = () => {
  const [user, setUser] = useState('rayden');

  if(!user){
    return <Navigate to='/' replace={true}/>
  }

  return (
    <div className="about">
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis totam quos dolorem, excepturi doloremque libero deleniti soluta facilis possimus sed nisi recusandae eveniet adipisci eligendi enim, dolorum quas eum delectus illum ea quo, aliquam iusto consectetur provident! Dolorem totam animi est, iste fugit obcaecati optio quo enim suscipit dolore explicabo.
      </p>
      <p>
        Error eum praesentium deleniti dolores voluptate magni est provident eius laborum obcaecati incidunt aut facere fugiat vero minima, ipsa earum odio ipsum voluptas ipsam sint suscipit, excepturi adipisci nesciunt. Sapiente aut aperiam expedita illo cumque itaque quaerat aliquam veniam dolore est. Quis, officia optio nemo accusamus corrupti consequatur esse debitis?
      </p>
      <p>
        Iusto ex quia excepturi molestiae hic quibusdam reiciendis ullam fugit, dignissimos tempora architecto est eos laborum totam perferendis, incidunt repellat temporibus debitis nulla explicabo sequi accusamus quas dolore! Rem ullam itaque alias sed eos quos amet officiis sit quibusdam iusto molestias fugiat, debitis, labore nemo deleniti explicabo id dolor a.
      </p>

      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  )
}

export default About
