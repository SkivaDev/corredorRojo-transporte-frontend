// import Image from 'next/image'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Card, CardContent } from "@/components/ui/card"

const LandingPage = () => {
  return (
    <>
      {/* <main className="flex-grow">

        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">¡BIENVENIDO!</h2>
              <p className="text-gray-600 mb-4">
                Somos Roque Transport, una empresa 4PL 100% peruana dedicada a brindar soluciones de logística que opera en todo el Perú.
              </p>
              <p className="text-gray-600 mb-4">
                Contamos con una amplia y moderna flota, tanto eficil equipada con modernos equipos de comunicación, el rastreo por GPS permite tener un control total de la carga y la unidad en tiempo real, lo que nos permite brindar un servicio de calidad con el plus al instante, en beneficio de la información oportuna que nuestros clientes se merecen.
              </p>
              <Link href="#" className="text-blue-500 hover:underline">VER MÁS</Link>
            </div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">COTIZA AQUÍ AHORA</h3>
                <form className="space-y-4">
                  <Input placeholder="Origen" />
                  <Input placeholder="Destino" />
                  <Input placeholder="Peso aprox (en kg)" />
                  <Input placeholder="Nombre Completo" />
                  <Input placeholder="Teléfono" />
                  <Input placeholder="Tu correo electrónico" />
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">OBTENER UNA COTIZACIÓN</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Nuestros servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['CARGA LIGERA', 'CARGA REFRIGERADA', 'CARGA EXPRESS'].map((service, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <Image src="/placeholder.svg" alt={service} width={300} height={200} className="mb-4 rounded" />
                    <h3 className="text-xl font-bold mb-2">{service}</h3>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-center mb-8">PORQUE NOS IMPORTA TU SALUD</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <p className="text-gray-600 mb-4">En Roque Transport implementamos el protocolo sanitario para prevenir el COVID-19 y así velar por la seguridad y salud de nuestros colaboradores y clientes.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Uso de mascarilla obligatorio</li>
                <li>Constante lavado y desinfección de manos usando jabón y desinfectante en gel por no menos de 20 segundos</li>
                <li>Distanciamiento mínimo de 1 metro con las demás personas</li>
                <li>Desinfección de vehículos (limpieza diaria del chasis interior y exterior, llantas y superficies como volante, palanca de cambios, tablero, etc) por cada viaje</li>
                <li>Desinfección de objetos de uso común y áreas superficies</li>
                <li>Ventilación adecuada en las unidades</li>
                <li>Control de temperatura a todos nuestro personal</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <Image src="/placeholder.svg" alt="COVID-19 Prevention" width={400} height={300} className="rounded" />
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Ellos confían en nosotros</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {['Celima', 'Andes Petroleum', 'TPP', 'Klar', 'Supermercados Peruanos'].map((client, index) => (
                <Image key={index} src="/placeholder.svg" alt={client} width={120} height={60} className="grayscale hover:grayscale-0 transition-all duration-300" />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-2">BOLETÍN</h3>
              <p className="text-sm mb-2">Suscríbete a nuestro boletín y entérate de nuestras promociones y nuestros últimos proyectos.</p>
              <form className="flex">
                <Input placeholder="Tu correo electrónico" className="rounded-r-none" />
                <Button className="rounded-l-none bg-blue-500 hover:bg-blue-600">→</Button>
              </form>
            </div>
            <div>
              <h3 className="font-bold mb-2">ENLACES DE INTERÉS</h3>
              <ul className="space-y-1">
                <li><Link href="#" className="text-sm hover:underline">Sobre nosotros</Link></li>
                <li><Link href="#" className="text-sm hover:underline">Blog</Link></li>
                <li><Link href="#" className="text-sm hover:underline">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">NUESTROS SERVICIOS</h3>
              <ul className="space-y-1">
                <li><Link href="#" className="text-sm hover:underline">Transporte de carga pesada</Link></li>
                <li><Link href="#" className="text-sm hover:underline">Transporte de carga ligera</Link></li>
                <li><Link href="#" className="text-sm hover:underline">Transporte de carga refrigerada</Link></li>
                <li><Link href="#" className="text-sm hover:underline">Transporte de carga express</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">CONTÁCTANOS</h3>
              <p className="text-sm">+51 946207353</p>
              <p className="text-sm">gerencia@roquetransport.com.pe</p>
              <div className="mt-2">
                <Link href="#" className="text-2xl mr-2">
                  <i className="fab fa-facebook"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </>
  );
};

export default LandingPage;
