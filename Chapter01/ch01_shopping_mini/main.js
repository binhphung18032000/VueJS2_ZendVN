const { createApp } = Vue;

createApp({
    data() {
        return {
            title: 'Áo bóng đá nam vải Mỹ nhập khẩu',
            url: 'https://shopeefood.vn/ho-chi-minh/ta-la-an-vat-mi-xao-com-chien-sinh-to-phan-van-tri',
            target: '_blank',
            price: 100000,
            sale: 0.5,
            selectedProduct: 0,
            listProductDetail: [
                {
                    image: './images/italia.jpg',
                    quantity: 10,
                    shirtColor: 'Màu xanh nước biển'
                },
                {
                    image: './images/spain.jpg',
                    quantity: 1,
                    shirtColor: 'Màu đỏ máu lửa'
                },
                {
                    image: './images/brazil.jpg',
                    quantity: 0,
                    shirtColor: 'Màu vàng gia tộc'
                },
            ]
        };
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
        }
    }
}).mount("#app");