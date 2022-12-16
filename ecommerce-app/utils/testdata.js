import bcrypt from "bcryptjs"

const data = {
    users: [
        {
            name: 'John',
            email: 'johndoe@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true
        },
        {
            name: 'Jane',
            email: 'janedoe@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false
        }
    ],
    products:[
        {
            name: 'Shirt',
            slug: 'shirt',
            category: 'Shirts',
            image: '/images/shirt.jpg',
            price: 20,
            brand: 'US Polo',
            rating: 4.7,
            reviews: 2,
            stock: 10,
            description: 'A polo shirt for men'
        },
        {
            name: 'Long Sleeve Shirt',
            slug: 'long-sleeve-shirt',
            category: 'Shirts',
            image: '/images/long.jpg',
            price: 25,
            brand: 'Hanes',
            rating: 4.2,
            reviews: 4,
            stock: 4,
            description: 'A long sleeve shirt for men'
        },
        {
            name: 'Under Armour Shirt',
            slug: 'under-armour-shirt',
            category: 'Shirts',
            image: '/images/underarmour.jpg',
            price: 50,
            brand: 'Under Armor',
            rating: 4.8,
            reviews: 10,
            stock: 3,
            description: 'An under armor shirt for men'
        },
        {
            name: 'Dickies Pants',
            slug: 'dickies-pants',
            category: 'Pants',
            image: '/images/dickies.jpg',
            price: 40,
            brand: 'Dickies',
            rating: 4.8,
            reviews: 10,
            stock: 3,
            description: 'Dickies pants for men'
        },
    ]
}

export default data