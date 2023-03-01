

const layer1 = document.querySelector('.layers-base');
const layer2 = document.querySelector('.layers-middle');
const layer3 = document.querySelector('.layers-front');
const headerTitle = document.querySelector('.layers__header')
const content = document.querySelector('.main-article__content')

window.addEventListener('scroll', () => {
  layer1.style.transform = `translate3d(0, ${this.scrollY / 1.6}px, 0)`
  layer2.style.transform = `translate3d(0, ${this.scrollY / 2.5}px, 0)`
  layer3.style.transform = `translate3d(0, ${this.scrollY / 5.5}px, 0)`
  headerTitle.style.transform = `translate3d(0, ${this.scrollY / 2}px, 0)`
  content.style.transform = `translate3d(0, ${this.scrollY / -7.5}px, 0)`
})
