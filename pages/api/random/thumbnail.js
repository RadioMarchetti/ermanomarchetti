import random from 'random'
// import seedrandom from 'seedrandom'

export default async function handler (req, res) {
  const imgList = [
    'logo01.png',
    'logo02.png',
    'logo03.png',
    'logo04.png',
    'logo05.png',
    'logo06.png',
    'logo07.png',
    'logo08.png',
    'logo09.png'
  ]

  // random.use(seedrandom(req.headers['x-real-ip']))

  res.redirect(307, `/thumbnails/${imgList[random.int(0, imgList.length - 1)]}`)
}
