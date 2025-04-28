<template>
  <div class="about">

    <!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>O nas</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <section class="hero">
    <h1>O nas</h1>
  </section>

  <div class="intro-text">
    <p>Jesteśmy rodzinnym sklepem z owocami, który od lat dostarcza świeże i zdrowe produkty prosto od lokalnych sadowników. Naszą misją jest oferowanie najwyższej jakości owoców sezonowych, które zachwycają smakiem i aromatem. Wierzymy, że natura daje to, co najlepsze — dlatego stawiamy na świeżość, jakość i uczciwość wobec naszych klientów.</p>
  </div>

  <section class="gallery">
    <div class="item">
      <img src="https://via.placeholder.com/400x250" alt="Egzotyczne">
      <h2>Egzotyczne</h2>
      <a href="#" class="btn"a>Więcej</a>
    </div>
    <div class="item">
      <img src="https://via.placeholder.com/400x250" alt="Pestkowe">
      <h2>Pestkowe</h2>
      <a href="#" class="btn">Więcej</a>
    </div>
    <div class="item">
      <img src="https://via.placeholder.com/400x250" alt="Jagodowe">
      <h2>Jagodowe</h2>
      <a href="#" class="btn">Więcej</a>
    </div>
    <div class="item">
      <img src="https://via.placeholder.com/400x250" alt="Ziarnkowe">
      <h2>Ziarnkowe</h2>
      <a href="#" class="btn">Więcej</a>
    </div>
  </section>

</body>
</html>

  </div>
</template>

<style lang="scss" scoped>

body {font-family: Arial;}

.intro-text {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
  border:2px dashed red;
}
.hero {
  position: relative;
  background-image: url('https://via.placeholder.com/1920x500');
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
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.item h2 {
  margin: 15px 0 10px;
  font-size:1.2em;
}

.btn {
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
  background-color:rgb(236, 161, 0);
}
.about{
  border:2px dashed red;
}
</style>