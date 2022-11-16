const counters= document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText
        
        const increment = target / 10

        <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous" />
    <link rel="stylesheet" href="style.css" />
    <title>Increment Counter</title>
  </head>
  <body>
    <div class="counter-container">
      <i class="fab fa-twitter fa-3x"></i>
      <div class="counter" data-target="12000"></div>
      <span>Twitter Followers</span>
    </div>

    <div class="counter-container">
      <i class="fab fa-youtube fa-3x"></i>
      <div class="counter" data-target="5000"></div>
      <span>YouTube Subscribers</span>
    </div>

    <div class="counter-container">
      <i class="fab fa-facebook fa-3x"></i>
      <div class="counter" data-target="7500"></div>
      <span>Facebook Fans</span>
    </div>
    <script src="script.js"></script>
  </body>
</html>
    }
    updateCounter()
})