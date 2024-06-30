const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: '#137a45', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: '#25334e', image: './assets/images/socks_blue.jpg' },
              ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removefromCart() {
           if (this.cart >= 1) {
            this.cart -= 1
           } 
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})
