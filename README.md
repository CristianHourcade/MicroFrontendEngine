# Creacion de Micro Frontends para React Native EXPO 💣💥

⚠ Advertencia: Esta guia no es una guia oficial sino que son pruebas para mejorar la eficacia y eficiencia de proyectos desarrollados en React Native ( Con y sin EXPO CLI)

## ¿Cómo funciona esta metodología? 👨‍💻👩‍💻
Actualmente no existe algo oficial sobre el "Micro Frontend" ni tampoco mucha información en la web sobre este tema, pero se sabe que varias empresas reconocidas mundialmente estan empleando esta metodología en sus aplicaciones, como en Rappi, Mercadolibre y Mercadolibre.
Esta forma de organizar el trabajo se basa en separar cada "Vistas/Containers/Pages" en pequeños proyectos separados denominados Modulos ( Según un Blog de WIX ) donde solo trabajaran un pequeño equipo especifico en este Modulo.
Además, también deberiamos contar con un controlador general, un motor segun el blog de Wix, el cual dejo adjunto al final de este README. Desde mi perspectiva, crear un motor o un "Engine" no es tan obligatorio en aplicaciones moviles, aunque podría ser considerado una buena practica para reducir aun más la logica y permitir escalar más las aplicaciones. 

## ¿Qué tareas cumple un Modulo? 📚
Para resumir, un Modulo se encarga de trabajar especificamente en una pantalla o una seccion de la aplicación, la cual se va a trabajar en un repositorio separado al repositorio productivo, y con un equipo especifico para ese funcionalidad. Ej: La pasarela de pago de Mercadopago. La vista de un detalle de producto de un Ecommerce. Los productos/articulos relacionados al final de un detalle de producto o de un blog, etc.

## ¿Qué tareas debe cumplir un Engine? ⚙
El motor de la aplicación, como bien dice el nombre, es el que juntará todas las piezas ( multiples modulos ) y elegira cual modulo debe mostrarse en determinado tiempo ( Routing ). Además, también debe encargarse del estado de Autenticacion dentro de la App, y no nos olvidemos de mantener las versiones de nuestros modulos siempre actualizados.

## ¿Para que me sirve esto? 🤔
Gracias a tener la posibilidad de separar funcionalidades de la web en Micro Frontenders, podemos encarar problemas más pequeños con equipos especificos en esa tarea. Como se daran cuenta, asi evitamos que despues de 6 meses o incluso más tiempo, evitemos tener código muerto, o tener el famoso codigo Spagetti. Además, el separar una web/app en muchos Micro Frontenders, nos permite que nuestro proyecto nos permita escalar nuestro negocio de forma mucho más estable, ya que si algun día hay que tocar alguna funcionalidad en particular, sabes a cual equipo tendrias que acudir. Otro gran beneficio es que podes tener equipos desentralizados, sin que ninguno dependa de ninguno.

### Lamentablemente, tenemos deventajas 😒
Si nos ponemos a pensar, todas las metodologias tienen sus PROS y CONTRAS, asi que no es para preocuparlos. Tener una estructura de Micro Frontends te permite escalar con facilidad, pero es muy probable que diferentes Modulos haya logica repetida, ya que entre los equipos no habrá comunicación continua, aunque esto podría llegar a arreglarse cumpliendo con las Dailys o planificando los equipos en conjunto.

### Cuando apostar a Microfrontends
Esto es una opionion más personal, asi que no lo tomen tan apecho. Creo que integrar una forma de trabajo con Micro Frontends sería solamente si contas con los recursos y los tiempos necesarios, porque de nada serviría tener 10 Modulos si solamente estas vos solo para mantener el proyecto. Pero ojo, no te preocupes, porque de todas formas esta metodología la podemos implementar en proyectos que estan productivos, y la forma de hacerlo seria ir migrando en modulos funcionalidades de tu web/app de apoco, pero sin dejar el sitio productivo. Te super recomiendo que arranques con las pantallas que tengan menos impacto contra el usuario, asi vos y tu equipo se va acostumbrando 😉

## Let's start!⏰

Antes que nada tenemos un pequeño requerimiento:
Cuenta en NPM -> https://www.npmjs.com/

### ¿Para qué una cuenta en NPM? 
Es donde vamos a publicar nuestras versiones de nuestros micro frontends, nuestros Modulos.

### Creando nuestro primer Modulo 😎
Vamos a hacer un ejemplo utilizando una App de React Native con Explo Cli. 
1. Lo primero que tenemos que hacer es crear un nuevo proyecto (EJ: expo init ProductosRelatedModule )
2. Hacemos todo el trabajo que nos gustaría que haga nuestro Modulo ( En este ejemplo, hacer un fetch de listado de productos, mapear las cards de productos relacionados ), y esto lo retornamos en App.js ( Podemos usar la estructura de carpetas que queramos )
3. Una vez que estemos satisfechos con nuestra Modulo ( Todavía no es un modulo, pero ya lo será! ), vamos logearnos en NPM: npm login
4. Ya logeado, vamos a modificar nuestro package.json SOLAMENTE PARA PUBLICAR EL MODULO, quitando la propiedad private, agregando la propiedad name con su valor (ej: product-related-micro-front) al paquete, la propiedad version con su valor ( ej: 0.0.1 )
5. MODIFICAMOS TEMPORALMENTE para publicar nuestro Modulo la propiedad main, apuntando al App.js ( Donde ya exportamos por default nuestro app )
6. Subimos todo nuestro repo a Github o a donde queramos
7. Publicamos en NPM: npm publish
8. Verificamos en nuestro account en npmjs que se haya creado el paquete y si ya esta, vamos a nuestro repositorio productivo
9. Instalamos en nuestro repo productivo este Modulo creado, en nuestro ejemplo: npm install product-related-micro-front
10. Importamos donde queremos usar este modulo, y lo llamamos. Ej: import RelatedProducts from 'product-related-micro-front' 
11. Listo, tu modulo ya estaria funcionando en tu aplicacion productiva.

✔ Recordá: Siempre desde tu aplicacion productiva o tu Engine vas a necesitar ir actualizando las dependencias de los Modulos en el package.json. Además, siempre que termines de publicar un Modulo, la propiedad main del package.json dejalo como viene por defecto, asi podemos desarrollar localmente sin ningun tipo de problema.

❗ Demás esta decir que esto no es una solución definitiva, ya que es una primer version de como trabajar con microfrontends en React Native, pero es un primer paso.

### Este repo es un repo de Engine. Acá un ejemplo de Modulo: https://github.com/CristianHourcade/MicroFrontendModuleOrders

# Espero que lo disfruten, aprendan, y si pueden, aporten. ¡Gracias! 🙌
