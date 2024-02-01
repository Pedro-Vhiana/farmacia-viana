




function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-purple-950 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
          <div className='text-2xl font-bold uppercase'>Veneno Farmacia</div>

            <div className='flex gap-4'>
            <div className='hover:underline'>Categorias</div>
            <div className='hover:underline'>Cadastrar Categorias</div>        
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar