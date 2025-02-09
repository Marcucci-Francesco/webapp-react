import logo from '../assets/Logo.webp'

const Header = () => {
  return (
    <header className="bg-dark d-flex align-items-center">
      <img className="mx-2" src={logo} alt="" />
      <div>
        <h1 className="text-white mx-2 dm-sans mb-0">CineVibes</h1>
      </div>
    </header>
  )
}

export default Header