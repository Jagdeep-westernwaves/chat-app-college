const Tdata = [{
    id: 1,
    name: 'Product 1', cat: 'Category 1', colors: 'red', col: true,
    pimg: 'https://source.unsplash.com/600x600/?Product,avtar1',
    pdes: [

        { pweight: '30 GM' },
        { mgfdate: '13/12/2019' },
        { expdate: '12/2022' }
    ]
}, {
    id: 2,
    name: 'Product 2', cat: 'Category 2', colors: 'lightgray', col: true,
    pimg: 'https://source.unsplash.com/600x600/?Product,avtar2',
    pdes: [

        { pweight: '31 GM' },
        { mgfdate: '13/12/2019' },
        { expdate: '12/2022' }
    ]
},
{
    id: 3, col: true,
    pimg: 'https://source.unsplash.com/600x600/?Product,Product',
    name: 'Product 3', cat: 'Category 3', colors: 'lightgray',
    pdes: [

        { pweight: '32 GM' },
        { mgfdate: '13/121/2019' },
        { expdate: '12/2022' }
    ]
},
{
    id: 4, col: true,
    name: 'Product 4', cat: 'Category 2', colors: 'lightgray',
    pimg: 'https://source.unsplash.com/600x600/?Product,avtar1',
    pdes: [

        { pweight: '30 GM' },
        { mgfdate: '13/12/2019' },
        { expdate: '12/2022' }
    ]
}, {
    id: 5, col: false,
    name: 'Product 5', cat: 'Category 1', colors: 'lightgray',
    pimg: 'https://source.unsplash.com/600x600/?Product,avtar2',
    pdes: [

        { pweight: '31 GM' },
        { mgfdate: '13/12/2019' },
        { expdate: '12/2022' }
    ]
},
{
    id: 6, col: false,
    pimg: 'https://source.unsplash.com/600x600/?Product,Product',
    name: 'Product 6', cat: 'Category 3', colors: 'red',
    pdes: [

        { pweight: '32 GM' },
        { mgfdate: '13/121/2019' },
        { expdate: '12/2022' }
    ]
},
{
    id: 7, col: true,
    name: 'Product 4', cat: 'Category 2', colors: 'red',
    pimg: 'https://source.unsplash.com/600x600/?Product,avtar1',
    pdes: [

        { pweight: '30 GM' },
        { mgfdate: '13/12/2019' },
        { expdate: '12/2022' }
    ]
}, {
    id: 8, col: true,
    name: 'Product 8', cat: 'Category 3', color: 'green',
    pimg: 'https://source.unsplash.com/600x600/?Product,avtar2',
    pdes: [

        { pweight: '31 GM' },
        { mgfdate: '13/12/2019' },
        { expdate: '12/2022' }
    ]
},
{
    id: 9, col: false,
    pimg: 'https://source.unsplash.com/600x600/?Product,Product',
    name: 'Product 9',
    cat: 'Category 3', colors: 'red',
    pdes: [

        { pweight: '32 GM' },
        { mgfdate: '13/121/2019' },
        { expdate: '12/2022' }
    ]
}
]
const CatData = [{

    id: 1,
    img: 'https://source.unsplash.com/600x600/?Product,cat',
    pcat: 'Category 1',
}, {

    id: 2,
    img: 'https://source.unsplash.com/600x600/?Product,dog',
    pcat: 'Category 2',
}, {

    id: 3,
    img: 'https://source.unsplash.com/600x600/?Product,data',
    pcat: 'Category 3',
},
]

export default Tdata;
export { CatData };
