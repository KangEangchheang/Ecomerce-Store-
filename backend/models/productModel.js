const product = {
    id: 0,
    img: 'https://s3.ap-southeast-1.amazonaws.com/uploads-store/uploads/all/DZZL4LU5MYf4dLqdxfOaHOQZ0dDfX3RYGL6VzJkg.png',
    name:'logitech mouse',
    SKU: 'E23DL2402LA',
    description:'best mouse in the market by far',
    star_rating:4.5,
    price:20,
    discount:{
        name:'new year promotion',
        percent:50,
        description:'special promotion for new year 2024',
        disocunt_type:true, //true mean its a discount promotion false mean it a buy one get one type promotion
        isActive:true,
        start_discount:'01-01-2024-00-00-00',
        end_discount:'02-02-2024-00-00-00',
    },
    supplier:'logitech',
    category:'Mouse',
    quantity:3
}
module.exports = product;