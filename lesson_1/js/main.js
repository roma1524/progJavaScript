const products = [
    { id: 1, title: 'Notebook', price: 2000, img_src: 'images/car.jpg' },
    { id: 2, title: 'Mouse', price: 20, img_src: 'images/car.jpg' },
    { id: 3, title: 'Keyboard', price: 200, img_src: 'images/car.jpg' },
    { id: 4, title: 'Gamepad', price: 50, img_src: 'images/car.jpg' },
];

/**
 * Функция для формирования верстки каждого товара 
 * 
 * @param {Object} arrCart - 
 * @returns Возвращать будем html разметку для каждого элемента массива "products"
 */
const renderProduct = arrCart => {  // Параметр - объект
    return `<div class="product-item">
                <h3>${arrCart.title}</h3>
                <img src=${arrCart.img_src} alt="${arrCart.title}" width='160'>
                <p>${arrCart.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};



/**
 *      Функция которая будет запускать весь процесс "штампования карточек товаров"
 * @param {Array} list  В контексте нашего проекта, будем принимать массив "products"
 *                      Возвращать ничего не будем, функция будет добавлять полученые 
 *                      элементы в (div class="products")
 */
const renderPage = list => {

    const productsList = list.map(item => renderProduct(item));

    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join("<hr>");
};




/**
 *  Функция ищет нужные нам объекты и присвавает нужные нам классы
 * @param {String} className - Указываем имя требуемого селектора
 * @param {String} selectorStyle - Указываем нужный класс
 */
function styleDiv(className, selectorStyle) {

    let divProducts = document.querySelectorAll(className);  // Получаем интересующие объекты

    divProducts.forEach(item => item.classList.add(selectorStyle));  // Добавляем объектам нужный нам класс
};

document.getElementById('h_1').className = 'header';
document.querySelector('.products').classList.add('products_wrap');


renderPage(products);
styleDiv(".product-item", "cart");

