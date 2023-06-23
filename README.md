# NextJS and NextAuth example

> Demo App para consulta de productos por categoría with auth

### Guía rápida

1. **Clonar el repositorio.**

    ```sh
    git clone git@github.com:danielpro4/next-auth-demo.git
    cd next-auth-demo
    ```

2. **Configurar las variables de entorno local**

    Dentro del workspace menu ejecutar el comando copy

    ```sh
    cd menu
    cp .env.example .env
    ```

3. **Generar una llave para next auth**

    Dentro del shell ejecutar el comando openssl

    ```sh
    openssl rand -base64 32
    ```

    Copiar la llave generada en la variable AUTH_JWT_SECRET del archivo menu/.env

4. **Instalar dependencias.**

    Dentro de la raíz del proyecto ejecutar el comando yarn

    ```sh
    yarn
    ```

5. **Construir y correr el proyecto.**

    ```sh
    yarn build
    yarn start
    ```

    El sitio estará disponible en http://localhost:3000

    - Demo data:

    ```json
    {
        "username": "android-challenge@parrotsoftware.io",
        "password": "8mngDhoPcB3ckV7X"
    }
    ```

### Tecnologías

-   React - _Frontend library_
-   NextJS - _Framework_
-   NextAuth - _Auth library_
-   Ant Design - _Components library_
-   TailwindCSS - _CSS utility class_
-   Redux - _State manager_
-   React-Query - _Fetch and cache data_
-   Vercel - _Deployment and host_

### License

MIT &copy; Daniel P. Atanacio
