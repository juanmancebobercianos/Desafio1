class ProductManager {
    static ultId = 0;
    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, img, code, stock) {
        if (!title || !description || !price || !img || !code || !stock) {
            console.log("Llenar todos los campos.");
            return;
        }

        if (this.products.some(item => item.code === code)) {
            console.log("El codigo debe ser único");
            return;
        }

        const newProduct = {
            id: ++ProductManager.ultId,
            title,
            description,
            price,
            img,
            code,
            stock
        }

        this.products.push(newProduct);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(item => item.id === id);

        if (!product) {
            console.log("Producto no encontrado.");
        } else {
            console.log("Producto encontrado.", product);
        }
    }
}

const manager = new ProductManager();

console.log(manager.getProducts());

manager.addProduct("producto prueba", "este es un producto prueba", 200, "sin imagen", "abc123", 25);


manager.addProduct("fideos", "los mas sabrosos", 200, "sin imagen", "abc124", 50);
manager.addProduct("arroz", "el que no se pegotea", 300, "sin imagen", "abc125", 150);


console.log(manager.getProducts());

manager.getProductById(2);
manager.getProductById(3000);