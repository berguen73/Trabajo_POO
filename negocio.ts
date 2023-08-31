class Producto {
    private nombre: string;
    private precio: number;

    constructor(nombre: string, precio: number) {
        this.nombre = nombre;
        this.precio = precio;
    }

    getNombre(): string {
        return this.nombre;
    }

    getPrecio(): number {
        return this.precio;
    }
}

class ControlStock {
    private productosEnStock: Producto[];
    private productosVendidos: Producto[];

    constructor() {
        this.productosEnStock = [];
        this.productosVendidos = [];
    }

    ingresarProducto(producto: Producto) {
        this.productosEnStock.push(producto);
    }

    listar(): void {
        console.log("Lista de Productos");
        console.log("----------------------------------------------------------");
        this.productosEnStock.forEach((producto: Producto, indice: number) => {
            console.log(`${indice + 1} - ${producto.getNombre()} Precio: ${producto.getPrecio()}`);
        });
        console.log("\n\n");
    }

    venderProducto(nombreProducto: string) {
        var indice = -1;
        for (var i = 0; i < this.productosEnStock.length; i++) {
            if (this.productosEnStock[i].getNombre() === nombreProducto) {
                indice = i;
                break;
            }
        }

        if (indice !== -1) {
            var producto = this.productosEnStock.splice(indice, 1)[0];
            this.productosVendidos.push(producto);
            console.log(`Producto "${producto.getNombre()}" vendido por $${producto.getPrecio()}`);
        } else {
            console.log(`El producto "${nombreProducto}" no está disponible`);
        }
    }

    verProductosVendidos() {
        console.log("Productos vendidos:");
        this.productosVendidos.forEach((producto: Producto) => {
            console.log(`${producto.getNombre()} - $${producto.getPrecio()}`);
        });
    }
}

// Ejemplo de uso
const controlStock = new ControlStock();

const producto1 = new Producto("Cuerdas", 2800);
const producto2 = new Producto("Puas", 250);
const producto3 = new Producto("Guitarra", 160000);
const producto4 = new Producto("Correa", 7000);
const producto5 = new Producto("Cable", 9500);

controlStock.ingresarProducto(producto1);
controlStock.ingresarProducto(producto2);
controlStock.ingresarProducto(producto3);
controlStock.ingresarProducto(producto4);
controlStock.ingresarProducto(producto5);

controlStock.listar();

controlStock.venderProducto("Cuerdas");
controlStock.venderProducto("Guitarra");
controlStock.venderProducto("Cable");
controlStock.venderProducto("Amplificador");

controlStock.verProductosVendidos();