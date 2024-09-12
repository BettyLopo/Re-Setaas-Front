
# Re(Setas) 🍄🍲

## Índice

- [Proyecto 📝](#proyecto-)
    - [Diseño](#diseño-)
- [Diagramas](#diagrama-)
    - [Diagrama de flujo](#diagrama-de-flujo-)
    - [Diagrama de datos](#diagrama-de-datos-)
- [Instalación 🛠️](#installation-)
    - [Requerimientos](#requerimientos-)
- [Estructura del proyecto](#estructura-del-proyecto-)
- [Tecnologías](#tecnologias-)
- [Uso](#uso-)
- [Contribución 🤝](#contribution-)
- [Coders👩‍💻](#coders-)
- [Demo](#demo-)


## Proyecto 

Re(Setas) es una aplicación-recetario, pensada para que el usuario pueda agregar sus recetas favoritas para tenerlas siempre a mano. Para ello, la aplicación tiene una página principal abierta a todo usuario, y otras secciones reservadas a usuarios autenticados. Así, un usuario autenticado puede ver y crear sus propias recetas.

Iniciado como un proyecto pedagógico Full-Stack, se ha desarrollado en el front en React y TailwindCSS y, en el back, en Java-SpringBoot y PosgreSQL.

### Diseño

El diseño se ha trabajado previamente en Figma siguiendo los patrones de diseño atómicos, que en el proceso de desarrollo se han traducido en los componentes pertinentes en React.

[Ver diseño en Figma](https://www.figma.com/design/oTdefqCHbOw41LyzRczIY3/Proyecto-Individual?node-id=0-1&t=nbQUR1EIBajOUJNr-1)

## Diagramas

### Diagrama de flujo

Para entender la funcionalidad de la aplicación y la lógica a seguir se han realizado un diagrama de flujo y un userflow. 

[Ver diagrama de flujo y userflow](https://www.figma.com/board/F64LoKLfUFfD9SXIBYs5wU/Resetas---userflow-%2B-flowchart?node-id=0-1&node-type=CANVAS&t=5GpNHt33ZQXZ7v9h-0)

### Diagrama de datos

Se ha normalizado a segunda forma las tablas de la base de datos, resultando en tres tablas: una de recetas, una de categorías y una de usuarios. Como segunda parte de desarrollo, se añadirá una cuarta tabla de me favoritos.

[Ver diagrama de datos](https://drive.google.com/file/d/1EVDn-ycFNrR1vOUdDuUEGjbMLlr-IqqN/view?usp=sharing)



## Instalación 🛠️

### Requerimientos

- [Node.js](https://nodejs.org/en)
- [VSC](https://www.w3schools.com/java/java_intro.asp) con [extensión Java Pack VSC](vscjava.vscode-java-pack), [IntelliJ](https://www.jetbrains.com/es-es/idea/)  or tu IDE de preferencia
- Base de datos


1. Clona los repositorios:
```bash
Front:
 git clone https://github.com/BettyLopo/Re-Setas-Front

Back:
 git clone https://github.com/BettyLopo/Re-Setas-Back

```

2. Haz npm install en el repo del front

3. Crea tu base de datos y conectála al repo del back:
```
pon el link de acceso, tu usuario y contraseña de pgAdmin o de tu BBDD en el archivo application.resources

```




## Estructura del proyecto

Como proyecto Full-Stack, la estructura se divide en Front y en Back. 

El front del proyecto se ha desarrollado en React con TailwindCSS, centrándose en una estructura de componentes.

La estructura actual del front es la siguiente:


```plaintext
/
├── re-setas-front
│   ├── src/
│   │    ├── components
│   │    │     ├── buttons
│   │    │     │      ├── icons
│   │    │     │      ├── user
│   │    │     │      └── Button.jsx
│   │    │     ├── filter
│   │    │     │      └── Filter.jsx
│   │    │     ├── header
│   │    │     │      ├── navbar
│   │    │     │      │     └── Navbar.jsx
│   │    │     │      └── Header.jsx
│   │    │     ├── recipeCard
│   │    │     │      ├── CarouselRecipes.jsx
│   │    │     │      ├── ReckpeCard.jsx
│   │    │     │      ├── InfoContainer.jsx
│   │    │     │      ├── UnitRecipeUser.jsx
│   │    │     │      └── UserRecipes.jsx
│   │    │     ├── input
│   │    │     │      ├── CategoryInput.jsx
│   │    │     │      ├── DurationInput.jsx
│   │    │     │      ├── Input.jsx
│   │    │     │      ├── InputImg.jsx
│   │    │     │      ├── InputTextArea.jsx
│   │    │     │      └── SearchInput.jsx
│   │    │     └── popUp
│   │    │          └── PopUp.jsx
│   │    ├──hooks
│   │    │    ├── useAuth
│   │    │    └── useFormatData
│   │    ├──layout
│   │    │    └── Layout.jsx
│   │    ├──pages
│   │    │      ├── Create.jsx
│   │    │      ├── Detail.jsx
│   │    │      ├── Edit.jsx
│   │    │      ├── Home.jsx
│   │    │      ├── Login.jsx
│   │    │      ├── Favs.jsx
│   │    │      ├── Search.jsx
│   │    │      ├── UserPage.jsx
│   │    │      └── Register.jsx
│   │    ├──routes
│   │    │    └── index.jsx
│   │    └── utils
│   │        ├── recipeData
│   │        └── utils
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js

```

## Tecnologías


- [React.js](https://react.dev/)
- [JavaScript](https://www.w3schools.com/js/js_intro.asp)
- [TailwindCSS](https://tailwindcss.com/)
- [Java](https://www.java.com)
- [PgAdmin](https://www.pgadmin.org/)+ [SQL](https://www.w3schools.com/sql/default.asp)
- [SpringBoot](https://spring.io/projects/spring-boot)



## Uso
El programa debe iniciarse primero en el back.

Para compilar:

```
Da al play para compilar automáticamente.

```

Una vez iniciado el back, en el front:

```
npm run dev
```

Abre el enlace que aparece con tu puerto local.


## Contribución 🤝

1. Haz un fork al repositorio.
2. Crea una nueva rama: `git checkout -b feature/name`.
3. Haz tus cambios.
4. Haz push de tu rama: `git push origin feature/name`.
5. Crea un pull request.


 ## Coders👩‍💻
Este proyecto ha sido desarrollado por una única coder: 

- [Betty Lopez](https://github.com/BettyLopo)

## Demo

