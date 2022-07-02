const { createApp } = Vue;

createApp({
    data() {
        return {
            title: 'Áo bóng đá nam vải Mỹ nhập khẩu',
            url: 'https://shopeefood.vn/ho-chi-minh/ta-la-an-vat-mi-xao-com-chien-sinh-to-phan-van-tri',
            target: '_blank',
            price: 100000,
            sale: 0.5,
            selectedProduct: 1,
            listProductDetail: [
                {
                    image: './images/spain.jpg',
                    quantity: 3,
                    shirtColor: 'Màu đỏ máu lửa'
                },
                {
                    image: './images/italia.jpg',
                    quantity: 10,
                    shirtColor: 'Màu xanh nước biển'
                },
                {
                    image: './images/brazil.jpg',
                    quantity: 0,
                    shirtColor: 'Màu vàng gia tộc'
                },
            ],
            listHTML: [
                '<h1>Hellocal anh em nhaaa!</h1>',
                '<h2>Hellocal anh em nhaaa wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww!</h2>',
                '<h3>Hellocal anh em nhaaa! sadsada dsaddf fdgdfg retret weqw xvcv adad sad</h3>',
            ],
            cartNumber: 0
        };
    },
    methods: {
        handleSelectedProduct(index) {
            this.selectedProduct = index;
        },
        classSelectedProduct(index) {
            return {
                active: this.selectedProduct == index
            }
        },
        handleAddToCart() {
            if (this.getProductDetail.quantity == 0) {
                alert("HẾT HÀNG!!!");
            } else {
                if (this.cartNumber + 1 > this.getProductDetail.quantity) {
                    alert("Vượt quá số lượng hàng đang có!!!");
                } else {
                    this.cartNumber++;
                }
            }
        }
    },
    computed: {
        formatOriginalPrice() {
            var originalPrice = this.price;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(originalPrice);
        },
        formatFinalPrice() {
            var finalPrice = this.price - this.sale * this.price;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(finalPrice);
        },
        priceSaleOff() {
            return this.sale * 100;
        },
        getProductDetail() {
            let index = this.selectedProduct;
            return this.listProductDetail[index];
        }
    }
}).mount("#app");