class Persona {
    public nombre: string;
    public apellido: string;
    public dni: number;

    constructor(nombre: string, apellido: string, dni: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }

    getNombre(nombre: string) {
        this.nombre = nombre;
    }

    getApellido(apellido: string) {
        this.apellido = apellido;
    }
}

class Docente extends Persona {
    private asignaturas: string[];

    constructor(nombre: string, apellido: string, dni: number, asignaturas: string[]) {
        super(nombre, apellido, dni);
        this.asignaturas = asignaturas;
    }
}

class Examen {
    nombre: string;
    nota: number;

    constructor(nombre: string, nota: number) {
        this.nombre = nombre;
        this.nota = nota;
    }
}

class Alumno extends Persona {
    private examenes: Examen[];

    constructor(nombre: string, apellido: string, dni: number) {
        super(nombre, apellido, dni);
        this.examenes = [];
    }

    agregarExamen(examen: Examen) {
        this.examenes.push(examen);
    }

    calcularPromedio(): number {
        if (this.examenes.length === 0) {
            return 0;
        }
        const sumNotas = this.examenes.reduce((sum, examen) => sum + examen.nota, 0);
        return sumNotas / this.examenes.length;
    }
}

class SistemaGestion {
    private alumnos: Alumno[];
    private docentes: Docente[];

    constructor() {
        this.alumnos = [];
        this.docentes = [];
    }

    agregarAlumno(alumno: Alumno) {
        this.alumnos.push(alumno);
    }

    agregarDocente(docente: Docente) {
        this.docentes.push(docente);
    }


    obtenerNombreApellidoPorDni(dni: number): string | undefined {
        const index = this.alumnos.map(a => a.dni).indexOf(dni);
        if (index !== -1) {
            const alumno = this.alumnos[index];
            return `${alumno.nombre} ${alumno.apellido}`;
        }
        return undefined;
    }



    obtenerPromedioGeneralAlumno(dni: number): number | undefined {
        const index = this.alumnos.map(a => a.dni).indexOf(dni);
        if (index !== -1) {
            return this.alumnos[index].calcularPromedio();
        }
        return undefined;
    }

    obtenerPromedioGeneralTodos(): number {
        if (this.alumnos.length === 0) {
            return 0;
        }
        const totalPromedio = this.alumnos.reduce((sum, alumno) => sum + alumno.calcularPromedio(), 0);
        return totalPromedio / this.alumnos.length;
    }
}


// Crear instancia del sistema de gestión
const sistema = new SistemaGestion();

// Agregar alumnos (puedes agregar más alumnos aquí)
const alumno1 = new Alumno("Peter", "Parker", 11111111);
const alumno2 = new Alumno("Maria", "Lopez", 22222222);
const alumno3 = new Alumno("John", "Doe", 33333333);
const alumno4 = new Alumno("Hipólito", "Irigoyen", 44444444);
const alumno5 = new Alumno("Mary Jay", "Watson", 55555555);


sistema.agregarAlumno(alumno1);
sistema.agregarAlumno(alumno2);
sistema.agregarAlumno(alumno3);
sistema.agregarAlumno(alumno4);
sistema.agregarAlumno(alumno5);

// Agregar docentes (puedes agregar más docentes aquí)
const docente1 = new Docente("Bernardo", "López", 77777777, ["Matemáticas", "Física"]);
const docente2 = new Docente("Juliana", "Hait", 66666666, ["Inglés"]);

sistema.agregarDocente(docente1);
sistema.agregarDocente(docente2);

// Resto del código (agregar exámenes, obtener promedios, etc.)


// Agregar exámenes a los alumnos
alumno1.agregarExamen(new Examen("Matemáticas", 8.5));
alumno1.agregarExamen(new Examen("Inglés", 9.0));
alumno1.agregarExamen(new Examen("Física", 8.8));

alumno2.agregarExamen(new Examen("Matemáticas", 7.0));
alumno2.agregarExamen(new Examen("Inglés", 7.0));
alumno2.agregarExamen(new Examen("Física", 7.5));

alumno3.agregarExamen(new Examen("Matemáticas", 8.5));
alumno3.agregarExamen(new Examen("Inglés", 6.0));
alumno3.agregarExamen(new Examen("Física", 8.5));

alumno4.agregarExamen(new Examen("Matemáticas", 6.0));
alumno4.agregarExamen(new Examen("Inglés", 8.0));
alumno4.agregarExamen(new Examen("Física", 7.0));

alumno5.agregarExamen(new Examen("Matemáticas", 5.0));
alumno5.agregarExamen(new Examen("Inglés", 6.0));
alumno5.agregarExamen(new Examen("Física", 5.0));

// Obtener promedio general de un alumno
console.log("---------------------------------------------------------")


console.log("Los promedios de los alumnos son los siguientes: ");
console.log("El promedio de "+sistema.obtenerNombreApellidoPorDni(11111111)+" es:");
console.log(sistema.obtenerPromedioGeneralAlumno(11111111));

console.log("El promedio de "+sistema.obtenerNombreApellidoPorDni(22222222)+" es:");
console.log(sistema.obtenerPromedioGeneralAlumno(22222222));

console.log("El promedio de "+sistema.obtenerNombreApellidoPorDni(33333333)+" es:");
console.log(sistema.obtenerPromedioGeneralAlumno(33333333));

console.log("El promedio de "+sistema.obtenerNombreApellidoPorDni(44444444)+" es:");
console.log(sistema.obtenerPromedioGeneralAlumno(44444444));

console.log("El promedio de "+sistema.obtenerNombreApellidoPorDni(55555555)+" es:");
console.log(sistema.obtenerPromedioGeneralAlumno(55555555));

console.log("El promedio de "+sistema.obtenerNombreApellidoPorDni(12345678)+" es:");
console.log(sistema.obtenerPromedioGeneralAlumno(12345678));


console.log("---------------------------------------------------------")

// Obtener promedio general de todos los alumnos
const promedioTodos = sistema.obtenerPromedioGeneralTodos();
console.log(`El promedio general de todos los alumnos es ${promedioTodos.toFixed(2)}`);

