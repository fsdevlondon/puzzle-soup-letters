import findTheWord from './index'

describe('#findTheWord()', () => {
  let soup,
      word

  it('Should find a word with unique letters in the soup', () => {
    soup = 'epazohufgrs'
    word = 'house'

    expect(findTheWord(word, soup)).toBeTruthy()
  })

  it('Should find a word with repeated letters in the soup', () => {
    soup = 'epazapohtufagrts'
    word = 'patata'

    expect(findTheWord(word, soup)).toBeTruthy()
  })

  it('Should NOT find a word in the soup', () => {
    soup = 'epazapohtufgrts'
    word = 'patata'

    expect(findTheWord(word, soup)).toBeFalsy()
  })
})