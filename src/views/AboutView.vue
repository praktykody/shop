<template>
  <div class="about">


  <section class="hero">
    <h1>O nas</h1>
  </section>

  <div class="intro-text">
    <p>Jesteśmy rodzinnym sklepem z owocami, który od lat dostarcza świeże i zdrowe produkty prosto od lokalnych sadowników. Naszą misją jest oferowanie najwyższej jakości owoców sezonowych, które zachwycają smakiem i aromatem. Wierzymy, że natura daje to, co najlepsze — dlatego stawiamy na świeżość, jakość i uczciwość wobec naszych klientów.</p>
  </div>

  <section class="gallery">
    <div class="item">
      <img src="/orange.webp" alt="Egzotyczne">
      <h2>Egzotyczne</h2>
      <a href="#" class="btn"a>Więcej</a>
    </div>
    <div class="item">
      <img src="/cherry.webp" alt="Pestkowe">
      <h2>Pestkowe</h2>
      <a href="#" class="btn">Więcej</a>
    </div>
    <div class="item">
      <img src="/strawberry.webp" alt="Jagodowe">
      <h2>Jagodowe</h2>
      <a href="#" class="btn">Więcej</a>
    </div>
    <div class="item">
      <img src="/apple.webp" alt="Ziarnkowe">
      <h2>Ziarnkowe</h2>
      <a href="#" class="btn">Więcej</a>
    </div>

  </div>

</template>

<style lang="scss" scoped>

.intro-text {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
  border:2px dashed red;
}
.hero {
  position: relative;
  background-image: url('/owoce-glowne-zdjecie.jpg');
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero h1 {
  color: white;
  font-size: 3em;
  text-shadow: 2px 2px 10px rgba(0,0,0,0.7);
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px 20px;
  gap: 30px;
}

.item {
  width: 400px;
  text-align: center;
  border:2px dashed red;
}

.item img {
  width: 50%;
  height: auto;
  border-radius: 8px;
}

.item h2 {
  margin: 15px 0 10px;
  font-size:1.2em;
}

.btn {
  cursor: pointer;
  display: inline-block;
  padding: 10px 20px;
  background-color:rgb(234, 200, 10);
  color: black;
  text-decoration: none;
  border-radius: 99px;
  transition: background 0.3s;
  font-size:.8em;
}

.btn:hover {
  background-color:rgb(236, 28, 0);
}
.about{
  border:2px dashed red;
  font-family: Arial;
}