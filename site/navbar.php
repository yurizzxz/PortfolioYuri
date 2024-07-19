<style>

</style>

<nav class="navbar fixed-top" id="navbar">
    <div class="nav fixed-top">
        <input type="checkbox" id="nav-check">
        <div class="nav-header">
            <a href="#"><img src="img/logo branco.png" height="40" alt=""></a>
        </div>
        <div class="nav-btn">
            <label for="nav-check">
                <span></span>
                <span></span>
                <span></span>
            </label>
        </div>

        <div class="nav-links">
            <a href="?p=home#ctner-home-landing" onclick="transferirClasseActive(event)" class="active">Home</a>
            <a href="?p=home#bellow-home" onclick="transferirClasseActive(event)">About Me</a>
            <a href="?p=home#services" onclick="transferirClasseActive(event)">Services</a>
            <a href="?p=home#projects" onclick="transferirClasseActive(event)">Projects</a>
            <a class="action-button mb-2" href="?p=home#contact">Contact Me!</a>
        </div>
    </div>
</nav>

<script>
function transferirClasseActive(event) {
    const linkClicado = event.target;

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });

    linkClicado.classList.add('active');
}

function handleScroll() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // Adjust the scroll distance as needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Attach scroll event listener
window.addEventListener('scroll', handleScroll);

// Function to transfer active class on click
function transferirClasseActive(event) {
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');
}
</script>