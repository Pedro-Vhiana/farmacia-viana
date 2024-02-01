import { Link, useNavigate } from 'react-router-dom'




function Navbar() {
  let navigate = useNavigate()

  let navbarComponent
  

  return (
    <>
     <div className='w-full bg-purple-950 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase'>Veneno Farmacia</Link>

            <div className='flex gap-4'>
            <Link to='/categorias' className='hover:none'>Categorias</Link>
            <Link to='/cadastroCategoria' className='hover:none'>Cadastrar Categoria</Link>             
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar