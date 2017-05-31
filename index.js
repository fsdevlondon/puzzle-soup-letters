/*
  Technical Puzzle - RavenPack 2017

  Created by Marc.Rivelles on 31/05/2017.

  Puzzle
==================================================================================================================

  Everyone loves alphabet soup.  And of course you want to know if you can construct a message from
  the letters found in your bowl.

  Your Task:

  Write a function that takes as input two strings:

  1. the message you want to write

  2. all the letters found in your bowl of alphabet soup.

    Assumptions:

     You may assume the soup only contains the 26 capital letters of the English alphabet.

     Also assume it may be a very large bowl of soup containing many letters.

     There is no guarantee that each letter occurs a similar number of times - indeed some letters
       might be missing entirely.

     And of course the letters are ordered randomly.

  The function should determine if you can write your message with the letters found in your bowl of

  soup. The function should return true or false accordingly.

  Try to make your function efficient.  Please use Big-O notation to explain how long it takes your

  function to run in terms of the length of your message (n) and the number of letters in your bowl of

  soup (m).
*/


/*

  Function that determine if it's possible to write the word with
  the soup of letters passed.


  With soup and message.

  Result:

    Big-O Notation: O(n+m) The loop of the word to create the object plus the loop of the soup later.


  @param word: (String) Message you want to write.
  @param soup: (String) All the letters found in your bowl of alphabet soup
  @return result: (Boolean) Return's true if it's possible

  @Comments:
  I think cannot be more optimized. First we loop 'word' to create an object with the letter as a key
  and the number of appearances the value (like a dictionary).

  Later, we loop the soup and check in every lap that the letter from the soup exist/not in the word.
  If not exist, we pickup the next letter.
  If exist we do a few things:
    - Subtracts one to the dictionary of the word.
    - Remove from the list of the soup that element.
    - Update the length of the soup.
    Lastly before finish that lap of the loop, we do the difference between the lengths of the current soup and
    the starting soup, and if we got the length of the word that means we are done and we do not need to finish
    the soup.
  If we finish the soup and we do not exit before, means that the word cannot be completed with that soup.

  @Note:
  Using the dictionary we know the quantity of what letters are missing in our soup to complete the word.
*/
const findTheWord = (word, soup) => {

  let originalLen = soup.length,
      lenSoup = soup.length,
      lenWord = word.length,
      objWord = {},
      letter = '',
      index = 0,
      soupList = soup.split('')

  for (letter of word) {

    if (objWord[letter]) {

      objWord[letter] += 1
    } else {

      objWord[letter] = 1
    }
  }

  while(index < lenSoup) {
    letter = soupList[index]

    if (objWord[letter]) {

      objWord[letter] -= 1
      soupList.splice(index, 1)
      lenSoup = soupList.length

      if (originalLen - lenSoup === lenWord) {
        return true
      }

    } else {

      index++
    }
  }

  return false
}

export default findTheWord
