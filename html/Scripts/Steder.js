import stederArray from '../Modules/StederModule.js'

const stederSection = document.getElementById("steder-section")


    let htmlTxt = "";
    stederArray.forEach(steder => {
        htmlTxt += `
        <article class="column is-3">
            <div class="card">
                <h2 class="title has-text-centered mt-4">${steder.Lokasjon}</h2>
                <section class="card-image">
                <a href="${steder.LokasjonLink}">
                    <img src="${steder.Bilde}">
                </a>
                </section>
                <section class="card-content">
                    <h2 class="has-text-centered">Åpningstider: ${steder.Tider}</h2>
                </section>
                <section>
                </section
            </div>
        </article>
    `;
    });
    stederSection.innerHTML = htmlTxt;



