var myInput = document.body.textContent.split("\n")
myInput.pop()


//oxygen
function filter(arr, c, m) {
  newArr = []
  for ( i in arr ) {
    if ( arr[i].charAt(c) == m ) {
        newArr.push(arr[i])
    }
  }
  a++
  return (newArr)
}

function most(dig) {
    ones = 0
    zeros = 0
    console.log("dig length: " + dig.length);
  for ( i in dig ){
    if (parseInt(dig[i]) == 0){
                zeros++;
        }else {
                ones++;
         }
   }
    console.log("Ones: " + ones + ", Zeros: " + zeros);
    if(zeros > ones){
        return(0);
    } else {
      return(1);
    }
}

function work(arr, c) {
  num = []
  for ( i in arr ){
    num.push(arr[i].charAt(c))
    
  }
  return (num)
}

//CO2

function filter(arr, c, m) {
  newArr = []
  for ( i in arr ) {
    if ( arr[i].charAt(c) == m ) {
        newArr.push(arr[i])
    }
  }
  return (newArr)
}

function less(dig) {
    ones = 0
    zeros = 0
    console.log("dig length: " + dig.length);
  for ( i in dig ){
    if (parseInt(dig[i]) == 0){
            zeros++;
        }else {
            ones++;
        }
   }
    console.log("Ones: " + ones + ", Zeros: " + zeros);
    if(zeros <= ones){
        return(0);
    } else {
      return(1);
    }
}

function work(arr, c) {
  num = []
  for ( i in arr ){
    num.push(arr[i].charAt(c))
  }
  return (num)
}

do {
	//v = input("variable name")
	filter(newArr, a, least(work(newArr, a)))
	a++
	console.log(newArr)
} while (newArr.length > 1)
	
//-----------------------------------------------------//
//day 2 2023

guess = [9, 42, 43]

function reset() {
	input = myInput
	line = []
	reveals = []
	reveal = ""
    gamesReveals = []
    gameMax = []
    revealEach = []
    handful = []
    gameLines = []
    lineMax = []
    badGames = []
    redMax = {}
    greenMax = {}
    blueMax = {}
    goodReveal = 0
    goodLine = 0
    goodTest = 0
    gamePass = 0
    goodGames = 0
}

const actualRed = 12
const actualGreen = 13
const actualBlue = 14

function games(thisInput) {
  goodGame = 0
  power = 0
  for (a in thisInput){
    reveal = thisInput[a].split(":")[1].split(";")
    console.log("reveal:", reveal)
    for (b in reveal) {
      handful = reveal[b].split(",")
      console.log("handful:", handful)
      for (c in handful){
        test = handful[c].split(" ")
        console.log("logged as:", test[2], "number:", test[1], "against red:", redMax, "green:", greenMax, "blue:", blueMax)
        switch(test[2]) {
          case "green":
            if(parseInt(test[1]) > greenMax){
              greenMax = parseInt(test[1])
            }
            break;

          case "red":
            if(parseInt(test[1]) > redMax) {
              redMax = parseInt(test[1])
            }
            break;
          case "blue":
            if(parseInt(test[1]) > blueMax) {
              blueMax = parseInt(test[1])
            }
        }
      }
    }
    console.log("red max:", redMax, "green max:", greenMax, "blue max:", blueMax)
    power += (redMax * greenMax * blueMax)
    if(redMax < 13 && greenMax < 14 && blueMax < 15){
      goodGame += parseInt(thisInput[a].split(":")[0].split(" ")[1])
      console.log("Excelent! game:", a)
    }
    redMax = 0
    greenMax = 0
    blueMax = 0
  }
  console.log("good games:", goodGame)
}

//the the max from each color for each game
function games(thisInput) {
  for (a in thisInput){
    //get rid of 'game _:'
    line = thisInput[a].split(":")
    line.shift()
    console.log("line:", line)
    //separate reveals
    reveals = line[0].split(";")
    for(b in reveals) {
      eachReveal = reveals[b].split(",")
      console.log(eachReveal)
      for (c in eachReveal) {
        num = parseInt(eachReveal[c])
        color = eachReveal[c].split(" ").pop()
        revealEach.push({[color]: num})
        if (color == "red" && num > 12) {
          console.log("too many red:", color, num)
          continue
        } else if(color == "green" && num > 13){
          console.log("too many green:", color, num)
          continue
        } else if(color == "blue" && num > 14){
          console.log("too many blue:", color, num)
          continue
        } else {
          goodGames++
          console.log("good Game!", goodGames)
        }

      }
      handful.push({reveal: revealEach})
      revealEach = []
      console.log("reveals:", reveals.length, "good games:", goodGames )
      if(goodGames == reveals.length){
        goodReveal++
        console.log("good reveal:", goodGames, " :: ", reveals[b])
      }
      goodGames = 0
    }
    gameLines.push({lines: handful})
    handful = []
    console.log("line:", line.length, "good reveals:", goodReveal)
    if(goodReveal == line.length){
      goodLine++
      goodGamesArr.push(line[a])
      console.log("good Reveal:", goodReveal, " :: ", line)
    } else {
      badGames.push(line[a])
    }
    goodReveal = 0
  }
  return (goodLine)
}

function game1(red1, green1, blue1){
  for (e in gameLines){
    //lines
    for (f in gameLines[e].lines){
      //handfuls
      handful = gameLines[e].lines[f]
      for (g in handful.reveal){
        test = handful.reveal[g]
        if(test.red > red1 || test.green > green1 || test.blue > blue1) {
          console.log("bad handful:", test)
          continue
        } else {
          goodTest++
          console.log("good handful:", test, "good handfuls:", goodHandful)
        }

      }
      if(goodTest == handful.reveal.length){
        goodHandful++
      }
      goodTest = 0
    }
    console.log("good handfuls:", goodHandful, "number of reveals:", gameLines[e].lines.length)
    if (goodHandful  == gameLines[e].lines.length){
      gamePass++
    }
    goodHandful = 0
  }
  console.log(gamePass)
  gamePass = 0
  goodGame = 0
}

//-----------------------------------------------------------
//day 3
function reset(){
  input = myInput
}


for (a in input) {
  for (b in input[a]){
    if (!isNaN(parseInt(input[a][b]))){
      if(!isNaN(parseInt(input[a][b+1]))){
        if(!isNaN(parseInt(input[a][b+2]))){
          console.log(input[a][b] + input[a][b+1] + input[a][b+2])

        } else {
          console.log(input[a][b] + input[a][b+1])
        }
      }else{
        console.log(input[a][b])
      }
    }
  }
}

//-----------------------------------------------------------------
//day 5
const myInput = document.body.textContent
input = myInput.split("\n")
input.pop()

const seeds = input[0].split(":")[1].split(" ").slice(1, input[0].split(":")[1].split(" ").length)
const seedToSoil = input.slice(3, 10)

for (a in input){
  if(input[a].includes("soil-to-fertilizer")){
    soilToFertilizerStart = parseInt(a) + 1
  }
  if(input[a].includes("fertilizer-to-water")){
    soilToFertilizer = input.slice(soilToFertilizerStart, a-1)
    fertilizerToWaterStart = parseInt(a) +1
  }
  if(input[a].includes("water-to-light")){
    fertilizerToWater = input.slice(fertilizerToWaterStart, a-1)
    waterToLightStart = parseInt(a) +1
  }
  if(input[a].includes("light-to-temperature")){
    waterToLight = input.slice(waterToLightStart, a-1)
    lightToTemperatureStart = parseInt(a)+1
  }
  if(input[a].includes("temperature-to-humidity")){
    lightToTemperature = input.slice(lightToTemperatureStart, a-1)
    temperatureToHumidityStart = parseInt(a)+1
  }
  if(input[a].includes("humidity-to-location")){
    temperatureToHumidity = input.slice(temperatureToHumidityStart, a-1)
    humidityToLocation = input.slice(parseInt(a)+1, input.length)
  }
}

function timer() {
  console.time(fuckYou())
  console.timeEnd(fuckYou())
}

// destination | source | range
function fuckYou(){
  //off to the races
  //reset variables
  seed = []
  finalized = []
  lowestLoc = 999999999999
  for (z in seeds){
    //for each seed, get the seed number and do the calculate soil function
    console.log("seed:", parseInt(seeds[z]))
    calcSeedToSoil(parseInt(seeds[z]))
  }
  //it says "done" when it's done
  console.log("done")
}

function calcSeedToSoil(num){
  //this calculates the soil number from the seed number
  for(a in seedToSoil){
    //for every soil number, see if the seed number is between the start range and the total range
    test = seedToSoil[a].split(" ")
    //test[1] is the source column, test[2] is the range column
    if (num > parseInt(test[1]) && num < parseInt(test[1]) + parseInt(test[2])){
      //if the seed number is greater than the source number but less than the source + range, get the difference from the seed number to the source number
      dif = num - parseInt(test[1])
      console.log(num, "in line:", test, "difference:", dif)
      //soil is the first column (test[0]) plus the difference
      soil = parseInt(test[0]) + dif
      console.log("soil:", soil)
      //use this soil number to calculate fertilizer number
      calcSoilToFertilizer(soil)
      //don't just iterate through all of the lines, if the line is correct, move on
      return
    }
  }
  //if the number is not specified in a range, it is equal to itself
  console.log(num, " is not specified")
  soil = num
  console.log("soil:", soil)
  calcSoilToFertilizer(soil)
}

function calcSoilToFertilizer(num1){
  for (b in soilToFertilizer){
    test = soilToFertilizer[b].split(" ")
    if(num1 > parseInt(test[1]) && num1 < parseInt(test[1]) + parseInt(test[2])){
      dif = num1 - parseInt(test[1])
      console.log(num1, "in line:", test, "difference", dif)
      fertilizer = parseInt(test[0]) + dif
      console.log("fertilizer:", fertilizer)
      calcFertilizerToWater(fertilizer)
      return
    }
  }
  console.log(num1, " is not specified")
  fertilizer = num1
  console.log("fertilizer:", fertilizer)
  calcFertilizerToWater(fertilizer)
}

function calcFertilizerToWater(num2){
  for (c in fertilizerToWater){
    test = fertilizerToWater[c].split(" ")
    if(num2 > parseInt(test[1]) && num2 < parseInt(test[1]) + parseInt(test[2])){
      dif = num2 - parseInt(test[1])
      console.log(num2, "in line:", test, "difference:", dif)
      water = parseInt(test[0]) + dif
      console.log("water:", water)
      calcWaterToLight(water)
      return
    }
  }
  console.log(num2, " is not specified")
  water = num2
  console.log("water:", water)
  calcWaterToLight(water)
}

function calcWaterToLight(num3) {
  for (d in waterToLight){
    test = waterToLight[d].split(" ")
    if(num3 > parseInt(test[1]) && num3 < parseInt(test[1]) + parseInt(test[2])){
      dif = num3 - parseInt(test[1])
      console.log(num3, "in line:", test, "difference:", dif)
      light = parseInt(test[0]) + dif
      console.log("light:", light)
      calcLightToTemperature(light)
      return
    }
  }
  console.log(num3, " is not specified")
  light = num3
  console.log("light:", light)
  calcLightToTemperature(light)
}

function calcLightToTemperature(num4) {
  for (e in lightToTemperature){
    test = lightToTemperature[e].split(" ")
    if(num4 > parseInt(test[1]) && num4 < parseInt(test[1]) + parseInt(test[2])){
      dif = num4 - parseInt(test[1])
      console.log(num4, "in line:", test, "difference", dif)
      temperature = parseInt(test[0]) + dif
      console.log("temperature:", temperature)
      calcTemperatureToHumidity(temperature)
      return
    }
  }
  console.log(num4, " is not specified")
  temperature = num4
  console.log("temperature:", temperature)
  calcTemperatureToHumidity(temperature)
}

function calcTemperatureToHumidity(num5){
  for(f in temperatureToHumidity){
    test = temperatureToHumidity[f].split(" ")
    if(num5 > parseInt(test[1]) && num5 < parseInt(test[1]) + parseInt(test[2])){
      dif = num5 - parseInt(test[1])
      console.log(num5, "in line:", test, "difference", dif)
      humidity = parseInt(test[0]) + dif
      console.log("humidity:", humidity)
      calcHumidityToLocation(humidity)
      return
    }
  }
  console.log(num5, " is not specified")
  humidity = num5
  console.log("humidity:", humidity)
  calcHumidityToLocation(humidity)
}

function calcHumidityToLocation(num6) {
  for (g in humidityToLocation){
    test = humidityToLocation[g].split(" ")
    if(num6 > parseInt(test[1]) && num6 < parseInt(test[1]) + parseInt(test[2])){
      dif = num6 - parseInt(test[1])
      console.log(num6, "in line:", test, "difference:", dif)
      loc = parseInt(test[0]) + dif
    }
  }
  console.log("location:", loc)
  loc = num6
  finalized.push({loc: loc, seed: seeds[z]})
  seed.push({seed: seeds[z], loc: loc, soil: soil, fertilizer: fertilizer, water: water, light: light, temperature: temperature, humidity: humidity})
  if (loc < lowestLoc){
    lowestLoc = loc
  }
}
