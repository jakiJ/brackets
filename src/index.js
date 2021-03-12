module.exports = function check(str, bracketsConfig) {
  let replaceStr = str;

  while (str) {
      bracketsConfig.forEach(element => { //перебираю каждый элемент массива bracketsConfig
        str = str.replace(element.join(''), '');  //нахожу и заменяю(удалаю) пару скобок(элемент) в строке
      });

      if (str === replaceStr) {  // если они равны, значит уже совпадений на удаление не было
        return false;
      }

      replaceStr = str; // если замена была успешная, то перезаписываю измененную строку
  }

  return true;

}
