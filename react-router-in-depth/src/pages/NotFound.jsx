import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi fuga assumenda labore reiciendis nesciunt deleniti velit adipisci? Quia inventore, minus iste, quae veniam ducimus praesentium magni placeat nemo est cupiditate beatae dicta delectus eligendi magnam doloremque, deleniti numquam? Tempore quasi repudiandae voluptate voluptas dolores temporibus consectetur debitis cumque delectus? Praesentium?</p>
      <p>Go to the <Link to='/'>Homepage</Link>.</p>
    </div>
  )
}

export default NotFound
