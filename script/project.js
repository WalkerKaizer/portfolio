const params = new URLSearchParams(window.location.search);
const projectName = params.get("name");

if (projectName) {
    const layoutPath = `layouts/${projectName}.html`;
    console.log("Fetch du layout : ", layoutPath);

    fetch(layoutPath)
        .then(res => {
            if (!res.ok) throw new Error(`Erreur de chargement du layout: ${res.status}`);
            return res.text();
        })
        .then(html => {
            const container = document.querySelector("#project-container");
            if (!container) {
                console.error(" #project-container est introuvable dans projet.html");
                return;
            }

            container.innerHTML = html;

            const heroVideo = container.querySelector(".project-hero video");
            if (heroVideo) {
                console.log("Vidéo trouvée :", heroVideo);
            }

        })
        .catch(err => console.error(err));
}
