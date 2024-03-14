# DESARROLLO FRONTEND CON FRAMEWORKS DE JAVASCRIPT 
# NOELIA LÓPEZ GALIANA

# PEC 1. Ejerecicio 1.  

*** 1. La aparición de HTML5/CSS3/JS ha supuesto el nacimiento del desarrollo front-end modern (0.75 puntos)***

*¿Cuál es la ventaja del uso de etiquetas semánticas? Nombra y explica al menos 3 de estas ventajas*

El uso de etiquetas semánticas nos ofrece una gran variedad de ventajas que favorecen que resulte una forma cómoda y útil de trabajar. Entre estas ventajas podemos encontrar: 
1. Ayuda a estructurar los contenidos de la página. Dado que nuestras páginas contienen diferentes tipos de información (títulos, imágenes, tablas, texto...) las etiquetas semánticas ayudan a dar sentido a todo esto. Además los navegadores interpretan de forma predeterminada esta información y ayudan a estructurarla en pantalla. Si, por ejemplo, ponemos un título con <h1> y un texto <p>, el propio navegador aplicará estilos por defecto y realizará los cambios oportunos. Además, esto también facilita que las personas puedan trabajar de forma colaborativa, o que incluso alguien que no forma parte del proyecto comprenda la estructura de la página, puesto que todos sabremos a qué tipo de información corresponde cada etiqueta, y que aplicar estilos resulte más intuitivo. 
2. Este tipo de estructura es también muy útil en términos de accesibilidad. Las herramientas que interpretan las pantallas se basan no solo en lo que aparece impreso en ellas, sino también en la estructura subyacente, para dar la mejor experienca posible a las personas que necesitan de este tipo de herramientas. 
3. Por último, pero no menos importante, debemos destacar el papel de los buscadores web. Las estructuras semánticas de nuestra página serán analizadas por los buscadores web (por ejemplo, Google) y determinarán si la información que contienen es útil para la búsqueda realizada. Además, una web bien estructurada tendrá más puntos para aparecer en buenas posiciones como resultado de una búsqueda que una que no lo esté. 


• *Cita al menos 3 APIs HTML5 y explica brevemente su funcionalidad*
1. API Canvas ofrece una superficie de dibujo en 2D que permite a las aplicaciones web crear gráficos y animaciones complejas.
2. Web Workers es una API de HTML5 que permite la ejecución de scripts en segundo plano sin interrupciones, lo que es útil para tareas que consumen muchos recursos. 
3. La API Drag and Drop posibilita que los usuarios arrastren y suelten elementos en una página web, mejorando la interactividad de la interfaz.

Fuente: 
- https://www.digitallearning.es/blog/javascript-api-html5/


• *Cita qué opción ofrece CSS3 para conseguir que se apliquen diferentes estilos CSS sobre el mismo elemento en su visualización en diferentes dispositivos (diferentes tamaños de pantalla).*
Esto se puede hacer mediante Media Queries. Podemos elegir diferentes tamaños de pantalla/resolución y aplicar distintos tipos de diseño para cada uno de ellos. Normalmente se realiza con la premisa Mobile first. 

1. TypeScript se basa en el tipado estático, es decir, debemos especificar los tipos de variables, parámetros y valores de retorno. Esto ayuda a detectar errores relacionados con los tipos en tiempo de compilación, lo que a larga nos evitará errores.
2. TypeScript es un superset de JavaScript, lo que significa que admite todas las características y sintaxis de JavaScript. Pero, al mismo tiempo, añade nuevas características. Así, lo podemos integrar en todos nuestros proyectos con JS usando las funcionalidades que más nos apliquen en cada momento. 
3. TypeScript tiene con un sistema de inferencia de tipos que puede "adivinar" automáticamente los tipos en función del código que estamos desarrollando. Así, no siempre vamos a tener que especificar cada uno de los tipos que usemos sino que TypeScript los analizará por nosotros.
4. Por último, TypeScript tiene un sistema de prevención de errores, que detecta los fallos que normalmente comentemos al programar en JS. Por ejemplo, como decíamos en el anterior punto, revisando los tipos. 

- Fuente: https://www.typescriptlang.org/docs/handbook/2/basic-types.html

***2. El lenguaje CSS es muy rígido, poco práctico y ordenado a la hora de programar. Para evitar este problema se han creado los preprocesadores CSS, que ofrecen evidentes ventajas (0.5 puntos)***
• *Cita al menos 2 de estos preprocesadores.*
Sass (Syntactically Awesome Style Sheets) y Less son preprocesadores CSS que nos van a permitir trabajar con CSS de manera más flexible. Por ejemplo, vamos a poder realizar anidamientos para mantener las partes del código relacionadas juntas de forma que, a la larga, resulta más sencillo de interpretar y trabajar con ello. 

• *Cita al menos 4 ventajas que ofrecen estos preprocesadores.*
1. Ayuda a que el código esté más estructurado, evitando la repetición sistemática de etiquetas y mediante herramientas como el anidamiento. Esto hace que sea más comprensible. 
2. Permiten establecer variables que podemos reutilizar varias veces a lo largo del código, haciendo que sea más sencillo realizar cambios en el documento o que lo podamos reutilizar para otros proyectos sin necesidad de reescribirlo entero. Por ejemplo, si establecemos una variable para un color, no necesitaremos modificar cada vez que aparece ese color,sino solo el valor de la variable. 
3. Los preprocesadores tienen funciones predefinidas que nos facilitan el desarrollo del código. 
4. Todo esto lleva a que nuestro código sea más limpio y, por lo tanto, aparezcan menos errores y sea más sostenible a largo plazo. 

• *Explica brevemente en qué consisten los sourcemaps.*
Un source map es una especie de "mapa" que vincula el código JavaScript minificado y combinado de la versión final de nuestra web con su versión original. Esto nos va a permitir depurar y entender el código que está siendo ejecutado más fácilmente. Son útiles cuando necesitamos depurar aplicaciones web complejas que han pasado por procesos de optimización, como la minificación y la combinación de archivos, ya que nos permiten volver al estado original del archivo JS, antes de combinar todos los archivos .js o de minificarlos. 

-Fuente: https://developer.chrome.com/blog/sourcemaps/

• *Explica qué es un transpilador.*
Un transpilador es una herramienta de desarrollo que nos permite transformar un lenguaje de programación a otro distinto. Por ejemplo, es útil si queremos transformar nuestro código a una versión del lenguaje más antigua, o si hemos utilizado un preprocesador, debemos compilarlo al lenguaje final (de SASS a CSS). 


***3. El flujo de trabajo profesional en front-end hace indispensable el uso de herramientas como controles de versiones y herramientas de gestión de módulos (0.75 puntos).***

• *Cita al menos dos sistemas de control de versiones y dos herramientas de gestión de módulos.*
Control de versiones: 
1. Git es un sistema de control de versiones que almacena la información en el ordenador, de forma local, lo que significa que la mayoría de operaciones que se llevan a cabo son rápidas y no requieren de una conexión a internet. Además, comprueba cualquier cambio en los archivos de manera que no ocurran colisiones.
2. Subversion es un sistema de control de versiones de código abierto que registra cambios en archivos y directorios a lo largo del tiempo, lo que facilita la colaboración entre personas en diferentes lugares ya que permite administrar y modificar conjuntamente conjuntos de datos. Se puede usar para cualquier tipo de archivos.

Gestión de módulos: 
1. Parcel es una herramienta que nos permite comenzar proyectos rápidamente sin necesidad de una configuración inicial compleja. Parcel puede gestionar una amplia variedad de tipos de archivos, desde JavaScript y CSS hasta imágenes y más, y se encarga automáticamente de las dependencias y los complementos necesarios. 
2. Webpack es una herramienta de empaquetado de módulos que permite compilar y agrupar todos los recursos de nuestra web en un único paquete para su publicación. 

Fuentes: 
- https://www.git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F
- https://svnbook.red-bean.com/nightly/es/svn-ch-1-sect-1.html
- https://parceljs.org
- https://www.campusmvp.es/recursos/post/webpack-que-es-para-que-sirve-y-sus-ventajas-e-inconvenientes.aspx

• *Cita y explica al menos 3 comandos de Git.*
1. git init: Este comando se utiliza para inicializar un nuevo repositorio Git en un directorio. Crea un subdirectorio oculto llamado ".git" que contiene todos los archivos necesarios para el control de versiones. Después de ejecutar este comando en un directorio, ese directorio se convierte en un repositorio Git.
2. git add: Se usa para añadir los cambios realizados en archivos al área de preparación para que luego puedan ser confirmados en una nueva revisión. 
3. git commit: Una vez que hemos añadido los cambios de nuestro directorio al área de preparación con git add, usamos ese comando para confirmar esos cambios en el historial del repositorio Git.Lo tenemos que ejecutar junto con un mensaje de confirmación que describa los cambios que hemos hecho. 


• *Cita y explica brevemente las características más definitorias de WebPack.*
1. Webpack es altamente configurable y permite personalizar la forma en que se manejan los módulos, las reglas de carga y los plugins.
2. Permite trabajar en muchos módulos distintos y luego combinarlos todos, de manera que se facilita el desarrollo y la posterior construcción del sito. Además, no solo sirve para js, sino que podemos integrar todo tipo de documentos. Además, también permite gestionar las dependencias del proyecto. Esto también ahorra tiempos de carga. 
3. Webpack permite especificar el punto de entrada (entry point) del proyecto desde el cual se comienza a construir el gráfico de dependencias. También se puede configurar la ubicación y el nombre de los paquetes de salida.
4. Webpack cuenta con plugins, que son herramientas usadas para realizar tareas avanzadas como la optimización, minimización de paquetes y la gestión de activos. 
5. Webpack permite cambiar entre modos de desarrollo y producción, lo que facilita la creación de paquetes optimizados y de desarrollo.
6. Además, permite automatizar muchas tareas de gestión de módulos y activos, de manera que ahorramos tiempo y esfuerzo. 

Fuentes: 
- https://www.educba.com/what-is-webpack/
- https://webpack.js.org/concepts/



