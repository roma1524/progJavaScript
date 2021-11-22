const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';



class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];//массив товаров из JSON документа
        this._getProducts()
            .then(data => { //data - объект js
                this.goods = data;
                this.render()
            });
    }

    _getProducts() {

        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });

    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }

    }
}


class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

let list = new ProductsList();



// Корзина

class BascetList {
    constructor(container = '.bascet') {
        this.container = container;
        this.goods = [];
        this._getProducts()
            .then(data => {
                this.goods = data.contents;
                this.render()
            });
    }

    _getProducts() {

        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });

    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new BascetItem(product);
            block.insertAdjacentHTML('afterBegin', productObj.render());
        }

    }
    addInBascet() {
        document.querySelector('.bascet').classList.toggle('bascet_wind');
    }
}


class BascetItem {
    constructor(product, img = 'https://via.placeholder.com/100x100') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render() {
        return `<div class="bascet-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="bascet_desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <span class="bascet_span">Количество: 1</span>
                </div>
            </div>`
    }
}

let bascetList = new BascetList();




