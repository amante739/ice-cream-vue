const app = Vue.createApp({
    data: function () {
        return {
            flavors: [{ id: 1, name: 'Vanilla', price: 100 },
            { id: 2, name: 'Chocolate', price: 110 },
            { id: 3, name: 'Mango', price: 80 },
            { id: 4, name: 'Strawberry', price: 90 },
            { id: 5, name: 'Orange', price: 90 },
            { id: 6, name: 'BlackForest', price: 130 },
            { id: 7, name: 'Lemon', price: 140 }],
            logo: 'images/logo.svg',
            cart:[],
        }
    },
    methods: {
        addToCart(flavorId) {
           // console.log(flavorId);
            this.cart.push(this.flavors.find(flavor => flavor.id === flavorId));
            console.log(this.cart);
            
        },
        removeFromCart(flavorId) {
           // console.log(flavorId);
            let position = this.cart.findIndex(flavor => flavor.id === flavorId);             
            this.cart.splice(position, 1);
            console.log(this.cart);
            
        }
    },
    computed: {
        total() {
            return this.cart.reduce((t, flavor) => t + flavor.price,0);
        }
    }

});
const mountedapp = app.mount('#app');