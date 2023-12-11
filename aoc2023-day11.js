console.time()
var text = document.body.textContent
var myInput = text.split("\n")
myInput.pop()
var input = myInput
var galaxies = []

guess = [9427545]

function part1(){
    var distance = 0
    galaxies = []
    for (a in input){
        for(b in input[a]){
            if(input[a][b] == "#"){
                galaxies.push({x: b, y: a})
            }
        }
        if(input[a].indexOf("#") < 0){
            input.splice(a, input[a])
            a += 2
            continue
        }
    }
    console.log(galaxies)
    verticalGalaxies()
    for(c in galaxies){
        for(var d = galaxies.length-1; d > c; d--){
            distance += Math.abs(galaxies[c].x - galaxies[d].x)
            distance += Math.abs(galaxies[c].y - galaxies[d].y)
        }
    }
    console.log(input.length)

    console.log(galaxies)
    console.log(distance)
}

function verticalGalaxies(){
    for(e in input)
        for(let f = 0; f < input[e].length; f++){
            if(input[e][f] == "#"){
                break
            } else if(f == 140){
                for(h in galaxies){
                    if(galaxies[h].x > f){
                        galaxies[h].x += 1
                    }
                }
            }

        }
}

part1()

console.timeEnd()
