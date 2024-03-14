import nspell from "nspell";
import dictionary from "dictionary-en";

function correctSpelling(word) {
  return new Promise((resolve, reject) => {
    dictionary((err, dict) => {
      if (err) {
        reject(err);
      } else {
        const spell = nspell(dict);
        const correct = spell.correct(word);
        if (correct) {
          resolve(word);
        } else {
          const suggestions = spell.suggest(word);
          resolve(suggestions.length > 0 ? suggestions[0] : word);
        }
      }
    });
  });
}

export default correctSpelling;
