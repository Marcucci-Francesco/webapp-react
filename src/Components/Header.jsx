import logo from '../assets/Logo.webp'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-dark d-flex align-items-center justify-content-between">
      <div className='d-flex align-items-center'>
        <img className="mx-2" src={logo} alt="" />
        <span className="text-white mx-2 dm-sans mb-0 fs-1">CineVibes</span>
      </div>
      <div className='mx-4'>
        <Link className='return btn btn-primary text-dark mx-4' to={'/movies/create'}>Add New Movie</Link>
        <Link className='return btn btn-primary text-dark' to={'/'}>Home</Link>
      </div>
    </header>
  )
}

export default Header