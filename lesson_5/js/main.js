const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        basketUrl: '/getBasket.json',
        products: [],
        cartItems: [],
        filtered: [],
        imgCatalog: 'https://via.placeholder.com/200x150',
        imgBascet: 'https://via.placeholder.com/50x100',
        userSearch: '',
        show: false
    },
    methods: {
        filter() {
            let regexp = new RegExp(this.userSearch, 'i');  // Используется именно такая конструкция, потому что значение userSearch вычисляемое
            this.filtered = this.products.filter(product => regexp.test(product.product_name));
        },
        getJson(url) {  // Функция вернет промис
            return fetch(url)   // fetch выполняет запрос по указанному url
                .then(result => result.json())  // then обработчик события свойства resolve(у Промис) вызывается в случае удачного конекта
                // метод .json() преобразует строку формата JSON в {} и вернет промис

                .catch(error => {        // catch обработчик события свойства reject (у Промис) вызывается в случае ошибки подключения
                    console.log(error);
                })
        },
    },
    mounted() {
        this.getJson(`${API + this.basketUrl}`)   // Парсим товары корзины
            .then(data => {
                for (let item of data.contents) {
                    this.cartItems.push(item);
                }
            })

        this.getJson(`${API + this.catalogUrl}`)   // Парсим внешнюю ссылку
            .then(data => {                         // data объект JS, результат парсинга строки JSON
                for (let el of data) {          // el каждый елемент объекта data
                    this.products.push(el);    // пушим в пустой массив полученые элементы
                    this.filtered.push(el);
                }
            });
        this.getJson(`getProducts.json`)    // Парсим локальную ссылку
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            })
    }
})
