# Artear Challenge Horóscopo
### Descripción
Proyecto de evaluación sobre un horóscopo donde muestra todos los signos y sus predicciones. Estos signos se encuentran ordenados por año calendario, siendo el orden el siguiente:\
\
_1 - El signo en transcurso (este se ubicará en la **PrincipalCard**)._\
_2 - Los signos que restan hasta finalizar el año (sin incluir el signo en transcurso)._\
_3 - Los signos que ya pasaron en orden de año calendario._

## ***Notas:***
* El proyecto cuenta con Light y Dark mode.
* Se cambió el formato de las imágenes de PNG a WEBP para reducir su peso sin perder calidad, esto disminuye el tiempo de carga de las mismas.
* Se migró la Base de Datos para generar un Monorepo con el fin de que sea más fácil su mantenimiento, ya que es un proyecto chico.

### Patrones de diseño utilizados
* Stateful / Stateless
* Componentización
* Context API
* Hooks
* Compound Components
* Controlled Components
* Lifting State Up

### Instalación 🔧

_Dependencias_

```
npm i 
```

# Ejecutamos el proyecto

Servidor\
_Este correra en el puerto 3001_
```
npm start
```

Cliente\
_Este correra en el puerto 5173_
```
npm run dev
```

## Construido con 🛠️

* [React.js](https://create-react-app.dev/docs/getting-started)
* [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
* [Vite](https://vitejs.dev/) - Compilador
