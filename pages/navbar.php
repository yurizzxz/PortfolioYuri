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
            <a href="#ctner-home-landing" onclick="transferirClasseActive(event)" class="active">Home</a>
            <a href="#bellow-home" onclick="transferirClasseActive(event)">About Me</a>
            <a href="#" onclick="transferirClasseActive(event)">Projects</a>
            <a class="action-button" href="#">Contact Me!</a>
            <ion-icon name="moon-outline"></ion-icon>
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
</script>
