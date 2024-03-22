<template>
    <div class="footer">
        <a href="https://open.spotify.com/user/3z4edbr0u3hevn596bzyzyc7m?si=320498b5b1984b2a" target="_blank"><img src="../assets/img/spotify.png"></a>
        <a href="https://github.com/Lagarto415" target="_blank"><img src="../assets/img/git.png"></a>
        <a href="https://www.instagram.com/lagarto4105/" target="_blank"><img src="../assets/img/insta.png"></a>
        <a href="https://discord.gg/Gg89PEm8bR" target="_blank"><img src="../assets/img/dc.png"></a>
        <a href="https://www.youtube.com/channel/UC-nrAYnsc2oMAeFZD7G3wJw" target="_blank"><img src="../assets/img/yt.png"></a>
        <a href="https://www.twitch.tv/lagarto4105" target="_blank"><img src="../assets/img/ttv.png"></a>
        <a href="https://juqutsu.de/" target="_blank"><img src="https://juqutsu.de/images/favicon2.png" alt="juqutsu"></a>
    </div>
</template>

<script setup>

</script>

<style scoped>
.footer {
    width: 100vw;
    bottom: 0;
    background-color: var(--a);
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 5vh;
    border-radius: 10px;
    margin-block-end: 15px;
}

.footer img {
    padding-block-end: 5px;
    max-height: 3svh;
    width: auto;
    text-align: center;
    justify-content: center;
    vertical-align: middle;
    transition: 0.2s ease-in-out;
}

a{
    width: auto;
}
</style>