const insert = document.getElementById('insert')

window.addEventListener('keydown', () => {
    insert.innerHTML = 
    ` <div class="key">
            ${e.key === ' ' ? 'Space' : e}
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