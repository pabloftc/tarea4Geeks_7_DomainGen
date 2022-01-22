/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let pronouns = ["the", "our"];
  let adjectives = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let suffixes = [".com", ".net", ".us", ".io"];

  function domain(arr1, arr2, arr3, arr4) {
    let x = [];
    for (let pron of arr1) {
      for (let adj of arr2) {
        for (let noun of arr3) {
          for (let suf of arr4) {
            x.push(pron + adj + noun + suf);
          }
        }
      }
    }
    return x;
  }

  console.log(domain(pronouns, adjectives, nouns, suffixes));
};
