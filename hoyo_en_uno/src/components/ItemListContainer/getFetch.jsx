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
      foto: 'https://taylormadegolf.com.my/images/detailed/1085/GF1240100618_1.jpg'
    },
    {
      id: 4,
      categoria: 'guantes',
      name: 'Guante Callaway Weather Spann Sintetico',
      price: '$3.199',
      stock: 10,
      foto: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/811/865/products/weather-spann-cstore_21-33d0b045838203a3a515494731885091-480-0.jpg'
    },

];

const getFetch = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(ListaProductos)
    }, 2000)
})

export default getFetch;