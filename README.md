# API con NODE.JS, SEQUELIZE y MYSQL
Tercer proyecto integrador de argentina programa.
API para realizar consultas a bases de datos en mysql utlizando node.js y sequelize como orm.

## Modelo de la base de datos
Base de datos planteada para el ejercicio:
![Basededatos](img/tablas.png)

## Endpoints
Endpoints disponibles en la API. Direccion utilizada: `http://localhost:3030`

### Mostrar el catálogo completo de contenidos
- **URL** : `/catalogo`
- **Método** : `GET`
- **Respuesta exitosa**:
  - **Status Code** : 200
  - **Ejemplo de retorno**:

    ```
    [
    {
        "id": 1,
        "poster": "/posters/1.jpg",
        "titulo": "Titulo",
        "categoria": "Serie",
        "genero": "Drama,Hechos verídicos",
        "resumen": "Resumen de serie o película.",
        "temporadas": "4",
        "reparto": "Actor A, Actor B,Actor C,Actriz A, Actor D,Actriz B",
        "trailer": ""
    }, ...]
    ```
### Mostrar categorias disponibles
- **URL** : `/categorias`
- **Método** : `GET`
- **Respuesta exitosa**:
  - **Status Code** : 200
  - **Ejemplo de retorno**:

    ```
    [
    {
        "categoria": "Serie"
    },
    {
        "categoria": "Película"
    }
    ]
    ```
### Mostrar el contenido indicando su ID
- **URL** : `/catalogo/:id`
- **Método** : `GET`
- **Respuesta exitosa**:
  - **Status Code** : 200
  - **Ejemplo de retorno**: Indicando la ruta: `http://localhost:3030/catalogo/30`

    ```
    {
    "id": 30,
    "poster": "/posters/30.jpg",
    "titulo": "The Martian",
    "categoria": "Película",
    "genero": "Aventura,Drama,Sci-Fi",
    "resumen": "Durante una misión a Marte de la nave tripulada Ares III, una fuerte tormenta se desata dando por desaparecido y muerto al astronauta Mark Watney (Matt Damon), sus compañeros toman la decisión de irse pero él ha sobrevivido. Está solo y sin apenas recursos en el planeta. Con muy pocos medios deberá recurrir a sus conocimientos, su sentido del humor y un gran instinto de supervivencia para lograr sobrevivir y comunicar a la Tierra que todavía está vivo esperando que acudan en su rescate.",
    "temporadas": "N/A",
    "reparto": "Jeff Daniels,Jessica Chastain,Kate Mara,Kristen Wiig,Matt Damon,Michael Peña,Sean Bean",
    "trailer": "https://www.youtube.com/embed/XvB58bCVfng"
    }
    ```

### Mostrar el contenido indicando su nombre
- **URL** : `/catalogo/nombre/:name`
- **Método** : `GET`
- **Respuesta exitosa**:
  - **Status Code** : 200
  - **Ejemplo de retorno**:
    Indicando la ruta: `http://localhost:3030/catalogo/nombre/the mandalorian`

    ```
    {
    "id": 3,
    "poster": "/posters/3.jpg",
    "titulo": "The Mandalorian",
    "categoria": "Serie",
    "genero": "Ciencia Ficción,Fantasía",
    "resumen": "Ambientada tras la caída del Imperio y antes de la aparición de la Primera Orden, la serie sigue los pasos de un pistolero solitario en las aventuras que protagoniza en los confines de la galaxia, donde no alcanza la autoridad de la Nueva República.",
    "temporadas": "2",
    "reparto": "Carl Weathers,Chris Bartlett,Giancarlo Esposito,Misty Rosas,Pedro Pascal,Rio Hackford",
    "trailer": "https://www.youtube.com/embed/aOC8E8z_ifw"
    }
    ```

### Mostrar los contenidos indicando su genero
- **URL** : `/catalogo/genero/:genre`
- **Método** : `GET`
- **Respuesta exitosa**:
  - **Status Code** : 200
  - **Ejemplo de retorno**:
    Indicando la ruta: `http://localhost:3030/catalogo/genero/drama`

    ```
    [
    {
        "id": 1,
        "poster": "/posters/1.jpg",
        "titulo": "The Crown",
        "categoria": "Serie",
        "genero": "Drama,Hechos verídicos",
        "resumen": "Este drama narra las rivalidades políticas y el romance de la reina Isabel II, así como los sucesos que moldearon la segunda mitad del siglo XX.",
        "temporadas": "4",
        "reparto": "Claire Fox,Helena Bonham Carter,Matt Smith,Olivia Colman,Tobias Menzies,Vanesa Kirby",
        "trailer": ""
    },
    {
        "id": 2,
        "poster": "/posters/2.jpg",
        "titulo": "Riverdale",
        "categoria": "Serie",
        "genero": "Drama,Ficción,Misterio",
        "resumen": "El paso a la edad adulta incluye sexo, romance, escuela y familia. Para Archie y sus amigos, también hay misterios oscuros.",
        "temporadas": "5",
        "reparto": "Camila Mendes,Casey Cott,Lili Reinhart,Mädchen Amick,Madelaine Petsch,Marisol Nichols",
        "trailer": ""
    }, ...]
    ```

### Mostrar los contenidos indicando su categoría
- **URL** : `/catalogo/categoria/:category`
- **Método** : `GET`
- **Respuesta exitosa**:
  - **Status Code** : 200
  - **Ejemplo de retorno**:
    Indicando la ruta: `http://localhost:3030/catalogo/categoria/pelicula`

    ```
    [
    {
        "id": 6,
        "poster": "/posters/6.jpg",
        "titulo": "Enola Holmes",
        "categoria": "Película",
        "genero": "Drama,Ficción,Misterio",
        "resumen": "La hermana menor de Sherlock, descubre que su madre ha desaparecido y se dispone a encontrarla. En su búsqueda, saca a relucir el sabueso que corre por sus venas y se encuentra con una conspiración que gira en torno a un misterioso lord, demostrando que su ilustre hermano no es el único talento en la familia.",
        "temporadas": "N/A",
        "reparto": "Adeel Akhtar,Helena Bonham Carter,Henry Cavill,Louis Partridge,Millie Bobby Brown,Sam Claflin",
        "trailer": ""
    },
    {
        "id": 7,
        "poster": "/posters/7.jpg",
        "titulo": "Guasón",
        "categoria": "Película",
        "genero": "Crimen,Drama,Suspenso",
        "resumen": "Arthur Fleck (Phoenix) es un hombre ignorado por la sociedad, cuya motivación en la vida es hacer reír. Pero una serie de trágicos acontecimientos le llevarán a ver el mundo de otra forma. Película basada en el popular personaje de DC Comics Joker, conocido como archivillano de Batman, pero que en este film tomará un cariz más realista y oscuro.",
        "temporadas": "N/A",
        "reparto": "Brett Cullen,Frances Conroy,Joaquin Phoenix,Robert De Niro,Shea Whigham,Zazie Beetz",
        "trailer": "https://www.youtube.com/embed/zAGVQLHvwOY"
    }, ...]
    ```

### Mostrar los contenidos indicando un actor/actriz
- **URL** : `/catalogo/actor/:actor`
- **Método** : `GET`
- **Respuesta exitosa**:
  - **Status Code** : 200
  - **Ejemplo de retorno**:
    Indicando la ruta: `http://localhost:3030/catalogo/actor/Mark Ruffalo`

    ```
    [
    {
        "id": 8,
        "poster": "/posters/8.jpg",
        "titulo": "Avengers: End Game",
        "categoria": "Película",
        "genero": "Acción,Aventura,Sci-Fi",
        "resumen": "Después de los devastadores eventos de los Vengadores: Infinity War (2018), el universo está en ruinas. Con la ayuda de los aliados restantes, los Vengadores se reúnen una vez más para revertir las acciones de Thanos y restaurar el equilibrio del universo.",
        "temporadas": "N/A",
        "reparto": "Chris Evans,Chris Hemsworth,Jeremy Renner,Mark Ruffalo,Robert Downey Jr.,Scarlett Johansson",
        "trailer": ""
    }
    ]
    ```
