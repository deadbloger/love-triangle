// numeric order =    1  2  3
// array values  =   [2, 3, 1]

// цикл 1     цикл 2     цикл 3
// sAC   = 1  sAC   = 2  sAC   = 3
// Lover = 2  Lover = 3  Lover = 1
// LO    = 3  LO    = 1  LO    = 2
// res = 0+1  res = 0+2  res = 0+3





module.exports = function getLoveTrianglesCount(spichonesArray){
  var result = 0;
  spichonesArray.unshift(0); // добавляем 0 в начало массива, чтобы порядковй номер первого элемента массива (спичон) стал единицей, а не нулем
  
  for(
    //наначаем каждому спичону порядковый номер
    let spechoneArrayCounter = 1; spechoneArrayCounter < spichonesArray.length; spechoneArrayCounter++){ 
      //назначаем lover-ом спичона (2) с порядковым номером sAC(1) 
      let spechoneLover = spichonesArray[spechoneArrayCounter];
      //делаем спичона 3 объектом любви lover-а (2) ((  2 любит 3  )), остальные связи вычисляются в следующих циклах
      let spechoneLoveObject = spichonesArray[spechoneLover];
      
      // при каждом новом истинном цикле результат (любовные связи) увеличиваются на 1
      // == - тут проверяем истинность выражения
      result += spechoneArrayCounter  == spichonesArray[spechoneLoveObject];
  }
  return Math.floor (result/3); // вычисляем количество треугольников и округляем в нижнюю сторону до целого
}
