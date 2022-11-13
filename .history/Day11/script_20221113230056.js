const insert = document.getElementById('insert')

window.addEventListener('keydown', () => {
    insert.innerHTML = 
    ` <div class="key">
            ${}
            <small>event.key</small>
        </div>
        <div class="key">
            65
            <small>event.keyCode</small>
        </div>
        <div class="key">
            KeyA
            <small>event.code</small>
        </div>`;
})