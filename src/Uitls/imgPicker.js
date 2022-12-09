export function imgPicker(id) {
    //console.log(id < 500)
    //console.log(id)
    if (id < 300) {
        //console.log("storm.svg")
        return ("storm.svg");

    }
    else if (id < 500) {
        //console.log("drizzle.svg")
        //console.log(id)

        return ("drizzle.svg");

    }
    else if (id < 600) {
        //console.log("rain.svg")
        return ("rain.svg");
    }


    else if (id < 700) {
        //console.log("snow.svg")
        return ("snow.svg");
    }


    else if (id < 800) {
        //console.log("fog.svg")
        return ("fog.svg");
    }


    else if (id === 800) {
        //console.log("clear.svg")
        return ("clear.svg");
    }

    else if (id === 801) {
        //console.log("partlycloudy.svg")
        return ("partlycloudy.svg");

    }
    else if (id < 806) {
        //console.log("mostlycloudy.svg")
        return ("mostlycloudy.svg");

    }
    else {
        //console.log("i didn't choose")
        return ("i didn't choose")
    }

}