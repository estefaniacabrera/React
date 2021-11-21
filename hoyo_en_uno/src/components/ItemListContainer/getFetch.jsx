const productos = [
    { id: 1, categoria: 'bolsas', name: "Bolsa Titleist Players 4 Plus", price: '$44.000', foto: '"image/bolsa_titleist.png"'},
    { id: 2, categoria: 'palos', name: "Set De Hierros Taylor Made Sim Max Os", price: '$179.850', foto: '"image/hierros_sim.png"' },
    { id: 3, categoria: 'palos', name: "Putter Taylormade Spider FCG", price: '$49.500', foto: '"image/putter_spider.png"'},
  ];


export const getFetch = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(productos)
    }, 2000)
})
