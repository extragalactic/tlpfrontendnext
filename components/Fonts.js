import FontFaceObserver from 'fontfaceobserver';

const Fonts = () => {
  const link = document.createElement('link')
  // link.href = 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,400italic|Libre+Baskerville'
  link.href = 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,400italic'
  link.rel = 'stylesheet'

  document.head.appendChild(link)

  const openSans = new FontFaceObserver('Open Sans')

  openSans.load().then(() => {
    document.documentElement.classList.add('Open Sans')
  })
}

export default Fonts;
