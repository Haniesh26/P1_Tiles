const wrapper = document.querySelector('.sliderWrapper')
const typeLists = document.querySelectorAll('.typeList')

const products = [
  {
    id: 1,
    title: 'Ceramic',
    price: 59.99,
    colors: [
      {
        code: '#7A8D62B0',
        img: './images/photo4.avif',
      },
      {
        code: '	#B39738',
        img: './images/photo4-2.jpg',
      },
    ],
  },
  {
    id: 2,
    title: 'Porcelain',
    price: 61.99,
    colors: [
      {
        code: '#DDE6E6',
        img: './images/photo1.avif',
      },
      {
        code: '#A0DFDF',
        img: './images/photo1-2.jpg',
      },
    ],
  },
  {
    id: 3,
    title: 'Glass',
    price: 50.29,
    colors: [
      {
        code: '#E6B07E',
        img: './images/photo2.avif',
      },
      {
        code: 'grey',
        img: './images/photo2-2.jpg',
      },
    ],
  },
  {
    id: 4,
    title: 'Cement',
    price: 72.99,
    colors: [
      {
        code: 'white',
        img: './images/photo3.avif',
      },
      {
        code: 'transparent',
        img: '',
      },
    ],
  },
  {
    id: 5,
    title: 'Marble',
    price: 89.99,
    colors: [
      {
        code: 'white',
        img: './images/photo5.avif',
      },
      {
        code: 'transparent',
        img: './images/photo5.avif',
      },
    ],
  },
]

let choosenProduct = products[0]
const currentProductImg = document.querySelector('.productImg')
const currentProductTitle = document.querySelector('.productTitle')
const currentProductPrice = document.querySelector('.productPrice')
const currentProductColors = document.querySelectorAll('.color')

typeLists.forEach((item, index) => {
  item.addEventListener('click', () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`
    //change the choosen product
    choosenProduct = products[index]

    //change text of current product
    currentProductTitle.textContent = choosenProduct.title
    currentProductPrice.textContent = '$' + choosenProduct.price + '/ct'
    currentProductImg.src = choosenProduct.colors[0].img

    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code
    })
  })
})

currentProductColors.forEach((color, index) => {
  color.addEventListener('click', () => {
    currentProductImg.src = choosenProduct.colors[index].img
  })
})

currentProductColors.forEach((color, index) => {
  color.addEventListener('click', () => {
    currentProductTitle.style.color = choosenProduct.colors[index].code
  })
})

const productButton = document.querySelector('.productButton')
const payment = document.querySelector('.payment')
const close = document.querySelector('.close')

productButton.addEventListener('click', () => {
  payment.style.display = 'flex'
})

close.addEventListener('click', () => {
  payment.style.display = 'none'
})
