const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
    insert.innerHTML = `
    <div class="key">
      ${event.key === ' '? 'space' : event.key}
      <small>event.key</small>
    </div>

    <div class="key">
      ${event.keyCode}
      <small>event.keyCode</small>
    </div>

    <div class="key">
      ${event.code}
      <small>event.code</small>
    </div>
    <footer>Made with love by Miho Funayama — fork or suggest edits on <a href="https://github.com/funamioh" target="_blank">GitHub</a> —</footer>
    <div id="social">
      <a id="follow-button" class="twitter-follow-button"
  href="https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fdeveloper.twitter.com%2F&amp;ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5ETwitterDev&amp;region=follow_link&amp;screen_name=mipodiw" target="_blank"><i></i><span class="label" id="l">Follow <b>@mipodiw</b></span></a></div>
    `
})