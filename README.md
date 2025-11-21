# Movies API

API REST para gestionar películas, actores, directores y géneros.

## 🚀 URL de la API

**Producción:** https://movies-api-rkct.onrender.com

## 📋 Endpoints

### Géneros

#### Obtener todos los géneros

```http
GET /genres
```

#### Obtener un género por ID

```http
GET /genres/:id
```

#### Crear un género

```http
POST /genres
Content-Type: application/json

{
  "name": "Action"
}
```

#### Actualizar un género

```http
PUT /genres/:id
Content-Type: application/json

{
  "name": "Drama"
}
```

#### Eliminar un género

```http
DELETE /genres/:id
```

---

### Actores

#### Obtener todos los actores

```http
GET /actors
```

#### Obtener un actor por ID

```http
GET /actors/:id
```

#### Crear un actor

```http
POST /actors
Content-Type: application/json

{
  "first_name": "Leonardo",
  "last_name": "DiCaprio",
  "nationality": "American",
  "image": "https://example.com/leo.jpg",
  "birthday": "1974-11-11"
}
```

#### Actualizar un actor

```http
PUT /actors/:id
Content-Type: application/json

{
  "first_name": "Leonardo",
  "last_name": "DiCaprio"
}
```

#### Eliminar un actor

```http
DELETE /actors/:id
```

---

### Directores

#### Obtener todos los directores

```http
GET /directors
```

#### Obtener un director por ID

```http
GET /directors/:id
```

#### Crear un director

```http
POST /directors
Content-Type: application/json

{
  "first_name": "Christopher",
  "last_name": "Nolan",
  "nationality": "British",
  "image": "https://example.com/nolan.jpg",
  "birthday": "1970-07-30"
}
```

#### Actualizar un director

```http
PUT /directors/:id
Content-Type: application/json

{
  "first_name": "Christopher",
  "last_name": "Nolan"
}
```

#### Eliminar un director

```http
DELETE /directors/:id
```

---

### Películas

#### Obtener todas las películas (con géneros, actores y directores)

```http
GET /movies
```

#### Obtener una película por ID (con géneros, actores y directores)

```http
GET /movies/:id
```

#### Crear una película

```http
POST /movies
Content-Type: application/json

{
  "name": "Inception",
  "image": "https://example.com/inception.jpg",
  "synopsis": "A thief who steals corporate secrets...",
  "release_year": 2010
}
```

#### Actualizar una película

```http
PUT /movies/:id
Content-Type: application/json

{
  "name": "Inception",
  "release_year": 2010
}
```

#### Eliminar una película

```http
DELETE /movies/:id
```

#### Agregar géneros a una película

```http
POST /movies/:id/genres
Content-Type: application/json

[1, 2, 3]
```

#### Agregar actores a una película

```http
POST /movies/:id/actors
Content-Type: application/json

[1, 2]
```

#### Agregar directores a una película

```http
POST /movies/:id/directors
Content-Type: application/json

[1]
```

---

## 🛠️ Tecnologías

- Node.js
- Express
- Sequelize
- PostgreSQL
- Render (deployment)

## 📦 Instalación Local

1. Clonar el repositorio:

```bash
git clone https://github.com/Elijahpe20/movies-api.git
cd movies-api
```

2. Instalar dependencias:

```bash
npm install
```

3. Configurar variables de entorno (crear archivo `.env`):

```
DB_USER=postgres
DB_PASSWORD=tu_contraseña
DB_HOST=localhost
DB_PORT=5432
DB_NAME=movies_db
PORT=3000
```

4. Crear la base de datos:

```bash
psql -U postgres
CREATE DATABASE movies_db;
\q
```

5. Sincronizar tablas:

```bash
node src/sync.js
```

6. Iniciar servidor:

```bash
node src/index.js
```

## 👤 Autor

Elijah
