(()=>{const a=document.querySelectorAll("#recommended-products-skeletons > article");[{id:38,nombre:"Guitarra Eléctrica Fender Squier Surf Pearl",marca:"Cort",precio:499.99,calificacion:4.5,imagenes:["./img/73de23d1.webp"],categoria:{id:1,nombre:"Guitarras y Cuerdas"}},{id:76,nombre:"Trompeta para Estudiante Bach TR650",marca:"Bach",precio:1199.99,calificacion:5,imagenes:["./img/a63ix6ub.webp"],categoria:{id:7,nombre:"Vientos"}},{id:8,nombre:"Acordeón Hohner Rey Vallenato ADG Naranja",marca:"Hohner",precio:699.99,calificacion:3.5,imagenes:["./img/cg6mg1kd.webp"],categoria:{id:2,nombre:"Acordeones"}},{id:4,nombre:"Ukulele Kalani Concierto UK-23 TBL Aguamarina",marca:"Kalani",precio:99.99,calificacion:5,imagenes:["./img/045tsg5i.webp"],categoria:{id:1,nombre:"Guitarras y Cuerdas"}},{id:77,nombre:"Saxofón Profesional Alto Conn AS650",marca:"Conn-Selmer",precio:1699.99,calificacion:4.7,imagenes:["./img/07sja2qj.webp"],categoria:{id:7,nombre:"Vientos"}},{id:53,nombre:"Piano Digital Kurzweil M230 Rosewood Con Silla",marca:"Kurzweil",precio:1199.99,calificacion:3.9,imagenes:["./img/qwvxyop8.webp"],categoria:{id:3,nombre:"Pianos"}},{id:49,nombre:"Acordeón Hohner Rey Vallenato Besas Amarillo",marca:"Hohner",precio:699.99,calificacion:3.9,imagenes:["./img/ufy53d0r.webp"],categoria:{id:2,nombre:"Acordeones"}},{id:39,nombre:"Bajo Eléctrico Cort Walnut Action PJ Café",marca:"Cort",precio:599.99,calificacion:4.8,imagenes:["./img/98hkzz5o.webp"],categoria:{id:1,nombre:"Guitarras y Cuerdas"}},{id:59,nombre:"Tumbadora Tycoon Master Classic Series Natural MTC-130",marca:"Tycoon",precio:359.99,calificacion:2.1,imagenes:["./img/rtlmawch.webp"],categoria:{id:4,nombre:"Percusión"}},{id:50,nombre:"Acordeón Hohner Rey Vallenato ADG Rojo",marca:"Hohner",precio:699.99,calificacion:3.8,imagenes:["./img/bmcyndpb.webp"],categoria:{id:2,nombre:"Acordeones"}},{id:88,nombre:"Violín 4/4 Sólido Verona HXTQ09FRO Natural",marca:"Verona",precio:599.99,calificacion:4.9,imagenes:["./img/2zmqvhvm.webp"],categoria:{id:8,nombre:"Violines y Violas"}},{id:84,nombre:"Flauta Traversa con Sistema Abierto Armstrong",marca:"Armstrong",precio:1399.99,calificacion:1.6,imagenes:["./img/aqd5s0ch.webp"],categoria:{id:7,nombre:"Vientos"}}].sort((()=>Math.random()-.5)).forEach(((e,i)=>{setTimeout((()=>{const r=document.createElement("article");r.classList.add("product-card"),r.innerHTML=`\n            <header>\n                <div>\n                    <small>#${e.categoria.nombre.split(" ")[0]}</small>\n                    <span>\n                        <span>${e.calificacion.toFixed(1)}</span>\n                        <img\n                            src="img/star-regular.svg"\n                            alt="Calificación promedio" />\n                        <img\n                            src="img/heart-regular.svg"\n                            alt="Añadir a favoritos" />\n                        <img\n                            src="img/share-nodes-solid.svg"\n                            alt="Compartir" />\n                    </span>\n                </div>\n                <h4>${e.nombre}</h4>\n            </header>\n            <figure>\n                <img src="${e.imagenes[0]}" alt="${e.nombre}" />\n            </figure>\n            <footer class="grid">\n                <button type="button" class="secondary outline">\n                    <span>$ ${e.precio}</span>\n                    <small>Diarios</small>\n                </button>\n                <button type="button">\n                    <span>¡Alquilar!</span>\n                </button>\n            </footer>\n        `,a[i].replaceWith(r)}),500)}))})();