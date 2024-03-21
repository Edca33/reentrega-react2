

const productos = [
    {
        id:'01',
        name:'Spider Man 2',
        category:'Ps5',
        description:'Spider Man 2 Game ',
        price:'50 usd',
        img:'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/06/marvels-spider-man-2-3054076.jpg',
        stock:10
    },
    {
        id:'02',
        name:'Protocolo Calisto ',
        category:'Xbox Serie X/S',
        description:'Protocolo Calisto',
        price:'45 usd',
        img:'https://gagadget.com/media/uploads/calsto.png',
        stock:15
    },
    {
        id:'03',
        name:'Grand Theft Auto VI',
        category:'PreOrder',
        description:'Grand Theft Auto VI',
        price:'65 usd',
        img:'https://media.vandal.net/m/12-2023/2023125940893_1.jpg',
        stock:5
    },
    {
        id:'04',
        name:'Assassins Creed Valhalla',
        category:'Xbox Serie X/S',
        description:'Assassin Creed Valhalla',
        price:25000,
        img:'https://allgamersin.com/wp-content/uploads/2020/05/Assassins-Creed-Valhalla-art.jpg',
        stock:25
    },
    {
        id:'05',
        name:'Elden Ring',
        category:'Ps5',
        description:'Elden Ring',
        price:280,
        img:'https://mediamaster.vandal.net/m/74234/elden-ring-202221717295615_1.jpg',
        stock:20
    },

]

//funcion de todos los productos.
export const getProducts = () => {
    return new Promise ((resolve, reject)=>{
        let error = false
        setTimeout(()=>{
            if(error){
                reject('No hay data')
            }else{
                resolve(productos)
            }
        },2000)
    })
}

//funcion del detalle

export const getOneProduct = (id) =>{
    return new Promise ((resolve, reject)=>{
        let error = false
        setTimeout(()=>{
            if(error){
                reject('No existe ese prod')
            }else{
                let oneProduct = productos.find((prod)=> prod.id === id)
                resolve(oneProduct)
            }
        },2000)
    })
}