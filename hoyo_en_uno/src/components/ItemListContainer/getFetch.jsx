const ListaProductos = [
    {
      id: 1,
      categoria: 'bolsas',
      name: 'Bolsa Titleist Players 4 Plus',
      price: '$44.000',
      stock: 10,
      foto: 'https://http2.mlstatic.com/D_NQ_NP_704032-MLA47480995719_092021-O.webp'
    },
    {
      id: 2,
      categoria: 'palos',
      name: 'Set De Hierros Taylor Made Sim Max Os',
      price: '$179.850',
      stock: 10,
      foto: 'https://m.media-amazon.com/images/I/51EgHLp2SSL._AC_.jpg'
    },
    {
      id: 3,
      categoria: 'palos',
      name: 'Putter Taylormade Spider FCG',
      price: '$49.500',
      stock: 10,
      foto: 'https://http2.mlstatic.com/D_NQ_NP_844841-MLA44545181953_012021-O.webp'
    },
    {
      id: 4,
      categoria: 'guantes',
      name: 'Guante Callaway Weather Spann Sintetico',
      price: '$3.199',
      stock: 10,
      foto: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/811/865/products/weather-spann-cstore_21-33d0b045838203a3a515494731885091-480-0.jpg'
  },
  {
    id: 4,
    categoria: 'accesorios',
    name: 'Porta Tee (tee Holder)',
    price: '$699',
    stock: 10,
    foto: 'https://http2.mlstatic.com/D_NQ_NP_2X_999008-MLA31584114002_072019-F.webp'
  },

];

const getFetch = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(ListaProductos)
    }, 2000)
})

export default getFetch;