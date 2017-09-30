document.onreadystatechange = function() {
  let page = document.querySelector('.page').classList[1]

  if (document.readyState === 'complete') {
    if (page === 'home') {
      loadHome()
    } else if (page === 'post') {
      loadPost()
    }
  }
}

function loadHome() {
  this.home = document.querySelector('.home')
  this.loader = document.querySelector('#loader')
  this.html = document.documentElement

  setTimeout(() => {
      this.loader.classList.add('page-moveto')
      this.home.classList.add('page-movefrom')
      this.html.classList.add('transition')
      this.html.classList.remove('loading')

      setTimeout(() => {
        this.loader.classList.remove('page-moveto')
        this.html.classList.remove('transition')
        this.home.classList.remove('page-movefrom');
      }, 800)
    }, 0)
}

function loadPost() {
  this.post = document.querySelector('.post')
  this.loader = document.querySelector('#loader')
  this.html = document.documentElement

  setTimeout(() => {
    this.loader.classList.add('page-moveto')
    this.post.classList.add('page-movefrom')
    this.html.classList.add('transition')
    this.html.classList.remove('loading')

    setTimeout(() => {
      this.loader.classList.remove('page-moveto')
      this.html.classList.remove('transition')
      this.post.classList.remove('page-movefrom');
    }, 800)
  }, 0)
}




