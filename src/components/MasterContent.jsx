
const MasterContent = () => {
  return (
    <section className="max-w-[1140px] w-full mx-auto px-4 py-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">¡BIENVENIDO!</h2>
        <p className="text-gray-600 mb-4">
          Somos Roque Transport, una empresa 4PL 100% peruana dedicada a brindar soluciones de logística que opera en todo el Perú.
        </p>
        <p className="text-gray-600 mb-4">
          Contamos con una amplia y moderna flota, tanto eficil equipada con modernos equipos de comunicación, el rastreo por GPS permite tener un control total de la carga y la unidad en tiempo real, lo que nos permite brindar un servicio de calidad con el plus al instante, en beneficio de la información oportuna que nuestros clientes se merecen.
        </p>
        <a href="#" className="text-blue-500 hover:underline">VER MÁS</a>
      </div>
      <div> {/* Card component */}
        <div className="p-6"> {/* CardContent component */}
          <h3 className="text-xl font-bold mb-4">COTIZA AQUÍ AHORA</h3>
          <form className="flex flex-col items-center space-y-7">
            <div className="flex gap-[10px] items-center w-full">
                <label htmlFor="origen" className="flex-1 text-end">Origen</label>
                <input placeholder="" className="w-1/2 px-[12px] py-[9px] border border-gray-300 rounded-sm"/>
            </div>
            <div className="flex gap-[10px] items-center w-full">
                <label htmlFor="destino" className="flex-1 text-end">Destino</label>
                <input placeholder="" className="w-1/2 px-[12px] py-[9px] border border-gray-300 rounded-sm"/>
            </div>
            <div className="flex gap-[10px] items-center w-full">
                <label htmlFor="peso-aproximado" className="flex-1 text-end">Peso aprox (en kg)</label>
                <input placeholder="ej: 23" className="w-1/2 px-[12px] py-[9px] border border-gray-300 rounded-sm"/>
            </div>
            <div className="flex gap-[10px] items-center w-full">
                <label htmlFor="nombre-completo" className="flex-1 text-end">Nombre Completo</label>
                <input placeholder="" className="w-1/2 px-[12px] py-[9px] border border-gray-300 rounded-sm"/>
            </div>
            <div className="flex gap-[10px] items-center w-full">
                <label htmlFor="telefono" className="flex-1 text-end">Teléfono</label>
                <input placeholder="" className="w-1/2 px-[12px] py-[9px] border border-gray-300 rounded-sm"/>
            </div>
            <div className="flex gap-[10px] items-center w-full">
                <label htmlFor="email" className="flex-1 text-end">Tu correo electrónico</label>
                <input placeholder="fabri@gmail.com" className="w-1/2 px-[12px] py-[9px] border border-gray-300 rounded-sm"/>
            </div>
            <button className="w-fit mx-auto px-[20px] py-[15px] bg-blue-500 hover:bg-blue-600 text-white rounded-md">OBTENER UNA COTIZACIÓN</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default MasterContent