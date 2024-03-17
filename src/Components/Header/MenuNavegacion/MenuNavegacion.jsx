import '../MenuNavegacion/MenuNavegacion.css';
import tienda from'../../../Imagenes/tienda.png';
export const MenuNavegacion = () => {
  return (
    <div className='contenedor-global-menu-navegacion'>
      <div className='contenedor-menu-navegacion ancho'>
          <div className='menu'>
           <nav>
             <ul>
            <li>
              <a>Menu</a>
              <a>Combos</a>
              <a>Promociones</a>
              <a>Hamburgesas</a>
              <a>Beneficios</a>
            </li>
          </ul>
        </nav>
      </div>
        <div className='contenedor-botones'>
          <div className='pide-en-tiendas'>
            <div className='icono-tiendas'>
              <img  src={tienda}/>
            </div>
            <div className='texto-tiendas'>
            <p>Pide en tiendas <span>SIN COLAS</span></p>
            </div>
     
          </div>
          <div className='carrito-compras'>
          <p>Carrito de Compras</p>
          </div>
          
         
         </div>
      </div>
    </div>
    
  )
}

