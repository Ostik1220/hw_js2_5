const title = document.querySelector(".title");
const button = document.querySelector("button");
const key = document.querySelector("#key");
const result = document.querySelector("#result")
const stats = document.querySelector(".stats")
let currentStat = 0
let currentKeyIndex = 0
import { info, success, error, defaultModules } from '@pnotify/core/dist/PNotify.js';

import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';

import '@pnotify/core/dist/BrightTheme.css';

defaultModules.set(PNotifyMobile, {});



const keys = [1, 4, "t", 8, "x", "s", 9, "u", 0, "l"];
button.addEventListener("click", () => {
  title.style.visibility = "visible";
  stats.style.visibility = "visible";
  key.innerHTML = keys[currentKeyIndex];
  info({
    title: 'нову гру запущено',
    hide: false
  });
  document.addEventListener("keydown", (e) => {
    if(e.key === key.innerHTML){
        success({
            title: 'правильна клавіша'
            
          });
          if(currentKeyIndex < keys.length) {
            key.innerHTML = keys[currentKeyIndex]
            currentKeyIndex++
        } else {
            title.innerHTML = "Ви перемогли!"
        }
          currentStat = currentStat + 1
          result.innerHTML = currentStat
    } else {
        error({
            text: "Неправильна клавіша.",    
            });
    }


});

});



