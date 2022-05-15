let secciones=[
    ` <div class="parte_1">
        <h1 class="titulo">
            Bookmark in one click
        </h1>
        <h4 class="sub-titulo">
            Organize your bookmarks however you like. Our simple drag-and-drop interface 
            gives you complete control over how you manage your favourite sites.
        </h4>
        <div class="sub-seccion">
        <div class="fila"><p class="boton_azul">More info</p></div>
        </div>
    </div>
      <div class="parte_2">
          <div class="imagen_flex">
              <img src="images/imagen_2.jpg" alt="">
          </div>
  </div>
    `,

    `<div class="parte_1">
    <h1 class="titulo">
        Intelligent search
    </h1>
    <h4 class="sub-titulo">
        Our powerful search feature will help you find saved sites in no time at all. 
        No need to trawl through all of your bookmarks.
    </h4>
    <div class="sub-seccion">
    <div class="fila"><p class="boton_azul">More info</p></div>
    </div>

</div>

  <div class="parte_2">
      <div class="imagen_flex">
          <img src="images/imagen_3.jpg" alt="">
      </div>

</div>


    `,
    `
    <div class="parte_1">
    <h1 class="titulo">
        Share your bookmarks
    </h1>
    <h4 class="sub-titulo">
        Easily share your bookmarks and collections with others. Create a shareable 
        link that you can send at the click of a button.
    </h4>
    <div class="sub-seccion">
    <div class="fila"><p class="boton_azul">More info</p></div>

    </div>

</div>

  <div class="parte_2">
      <div class="imagen_flex">
          <img src="images/imagen_4.jpg" alt="">
      </div>

</div>
</div>

    `

];

function mostrar1(){
    document.getElementById("seccion").innerHTML=``;
    document.getElementById("seccion").innerHTML=`${secciones[0]}`;
};
function mostrar2(){
    document.getElementById("seccion").innerHTML=``;
    document.getElementById("seccion").innerHTML=`${secciones[1]}`;
};
function mostrar3(){
    document.getElementById("seccion").innerHTML=``;
    document.getElementById("seccion").innerHTML=`${secciones[2]}`;
}