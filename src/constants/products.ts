export const products = [
    {
        id: 1,
        section: 'coffee',
        name: 'Colombia Supremo',
        description: 'Свежеобжаренный кофе - описание товара, вкус, аромат',
        price: 250,
        weight: 250,
        count: 10,
        discount: {
            value: true,
            oldPrice: 350,
        },
        coffeeCharacteristics: {
            type: 'Арабика',
            degreeRoast: 5,
            sour: 7,
            bitterness: 5,
            saturation: 9,
            special: ['Популярное', 'Новый урожай',],
        },
    },
]