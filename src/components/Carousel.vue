<template>
  <div class="m-4">
    <v-carousel>
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover>
        <v-col class="p-4" cols="12" sm="6" style="margin: 10% 5%; background-color: #00000073; border-radius: 10px;">
          <v-row>
            <h2 class="text-white">{{ item.title }}</h2>
          </v-row>
          <v-row>
            <p class="text text-white">{{ item.text }}</p>
          </v-row>
          <v-row>
            <v-btn> {{ item.button }}</v-btn>
          </v-row>
        </v-col>
      </v-carousel-item>
    </v-carousel>
  </div>

</template>

<script lang="ts">

export default {
  data() {
    return {
      items: [
        {
          src: "carousel/7.jpg",
          title: "Transforma Tu Espacio de Trabajo",
          text: "Tu espacio de trabajo debe inspirarte a dar lo mejor de ti. Explora nuestra línea de laptops, monitores y accesorios especialmente diseñados para maximizar tu productividad y comodidad. Desde escritorios ergonómicos hasta potentes computadoras portátiles, tenemos todo lo necesario para que trabajes de manera eficiente y en un entorno que refleja tu estilo personal.",
          button: "Compra Ahora"
        },
        {
          src: "carousel/1.jpg",
          title: "Tecnología a Tu Alcance",
          text: "Estar conectado nunca ha sido tan fácil con nuestra gama de dispositivos electrónicos. Encuentra smartphones, tablets y accesorios de última generación, diseñados para hacer tu vida más cómoda y conectada. Disfruta de la tecnología que se adapta a tus necesidades diarias y descubre nuevas formas de comunicarte, trabajar y entretenerte.",
          button: "Explora Productos"
        },
        {
          src: "carousel/2.jpg",
          title: "Innovación en Tus Manos",
          text: "En un mundo en constante evolución, la innovación es clave. Explora nuestra colección de dispositivos de vanguardia que combinan estilo, funcionalidad y eficiencia. Desde gadgets esenciales hasta equipos de alto rendimiento, te brindamos herramientas para que te mantengas un paso adelante en el ámbito personal y profesional.",
          button: "Ver Colección"
        },
        {
          src: "carousel/3.jpg",
          title: "Lleva Tu Entretenimiento a Otro Nivel",
          text: "Convierte tu hogar en un cine con nuestros televisores de alta definición y sistemas de sonido envolvente. Disfruta de películas, series y videojuegos con la mejor calidad de imagen y sonido. Sumérgete en una experiencia de entretenimiento inigualable y haz que cada noche sea memorable con nuestra tecnología avanzada para el hogar.",
          button: "Ver Más"
        },
        {
          src: "carousel/5.jpg",
          title: "Optimiza Tu Oficina en Casa",
          text: "Trabajar desde casa no tiene que ser incómodo. Encuentra todo lo que necesitas para crear un espacio de trabajo cómodo y productivo, desde sillas ergonómicas hasta teclados y pantallas diseñadas para largas jornadas. Haz de tu oficina en casa un espacio donde te sientas motivado y enfocado cada día.",
          button: "Descubre Aquí"
        },
        {
          src: "carousel/6.jpg",
          title: "Explora el Mundo del Gaming",
          text: "Ya seas un gamer ocasional o un apasionado del gaming, encuentra equipos de alto rendimiento y accesorios que te llevarán a una experiencia de juego totalmente inmersiva. Desde consolas y juegos hasta auriculares y sillas especiales, eleva tu nivel de juego y descubre lo que es jugar de verdad.",
          button: "Compra Ahora"
        },
        {
          src: "carousel/4.jpg",
          title: "Electrodomésticos Inteligentes para Tu Hogar",
          text: "Ahorra tiempo y haz tu vida más sencilla con electrodomésticos inteligentes. Desde aspiradoras automáticas hasta refrigeradores conectados, optimiza tus tareas domésticas y disfruta de un hogar que prácticamente se gestiona solo. La tecnología para el hogar no solo es moderna, sino también funcional y duradera.",
          button: "Ver Ofertas"
        },
        {
          src: "carousel/8.jpg",
          title: "Equipos de Fotografía y Video",
          text: "Captura los momentos que importan con equipos de fotografía y video de alta calidad. Ya seas un fotógrafo profesional o aficionado, contamos con cámaras, drones y accesorios que te permitirán expresar tu creatividad y guardar recuerdos para toda la vida. Lleva tu pasión por la fotografía a otro nivel con nuestros productos.",
          button: "Conoce Más"
        },
        {
          src: "carousel/9.jpg",
          title: "Componentes de PC para Entusiastas",
          text: "Dale potencia a tu computadora con componentes de alta gama. Explora tarjetas gráficas, procesadores y sistemas de refrigeración para construir o actualizar la PC de tus sueños. Nuestra selección está pensada para entusiastas de la tecnología que desean rendimiento máximo y la última tecnología para sus proyectos.",
          button: "Personaliza tu PC"
        },
        {
          src: "carousel/10.jpg",
          title: "Conéctate en Todo Momento",
          text: "Mantente conectado con la mejor tecnología para tu red. Desde routers potentes hasta extensores de señal, tenemos soluciones que aseguran una conexión rápida y confiable en cada rincón de tu hogar u oficina. La tecnología de red avanzada te permite disfrutar de una experiencia de navegación y streaming sin interrupciones.",
          button: "Explora la Conectividad"
        }
      ]
    };
  },
};
</script>
