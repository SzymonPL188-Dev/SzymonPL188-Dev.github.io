function genIdea() {
    var genres = [
        "shooter",
        "FPS",
        "platformer",
        "battle royale",
        "beat'em up",
        "sandbox",
        "survival",
        "metroidvania",
        "adventure",
        "RPG",
        "sports",
        "racing",
        "party",
        "horror",
        "educational",
        "casual",
        "text adventure",
        "rythm",
        "puzzle"
    ]
    var toDo = [
        "destroy",
        "eat",
        "press",
        "play with",
        "kill",
        "kick",
        "punch",
        "murder",
        "race against",
        "are chased by",
        "dance with",
        "solve puzzles with",
        "solve puzzles on",
        "shoot",
        "jump over"
    ]
    var what = [
        "trees",
        "walls",
        "people",
        "men",
        "women",
        "girls",
        "boys",
        "buildings",
        "cars",
        "trucks",
        "vans",
        "animals",
        "solider",
        "planets",
        "food",
        "airplanes",
        "boxes",
        "parks",
        "moons",
        "suns",
        "computers",
        "books"
    ]
    document.getElementById("genText").textContent = "A " + genres[Math.floor(Math.random() * genres.length)] + " type game where you " + toDo[Math.floor(Math.random() * toDo.length)] + " " + what[Math.floor(Math.random() * what.length)]
}
genIdea()