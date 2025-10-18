// For example create a music library which has genres for which each
// contains a set of musicians who each have a number of popular songs
// in that genre. (or a movies library which can also have genres and
// movies which have actors)

const songs = {
    "genres": {
        "pop": {
            "Sabrina Carpenter": ["Espresso", "Tears", "Juno"],
            "Doja Cat": ["Say So", "Jealous Type", "Streets"],
            "Djo": ["End of Beginning", "Roddy", "Basic Being Basic"]
        },
        "alternative": {
            "Mk.gee": ["Alesis", "Rockman", "I Want"],
            "Dijon": ["Talk Down", "Baby", "The Dress"],
            "Ethel Cain": ["American Teenager", "Dust Bowl", "Nettles"]
        },
        "rock": {
            "Nirvana": ["Smells Like Teen Spirit", "Heart-Shaped Box", "Come As You Are"],
            "Paramore": ["Decode", "Ain't It Fun", "Misery Business"], 
            "Nine Inch Nails": ["Hurt", "The Hand That Feeds", "Every Day Is Exactly The Same"]
        }
    }
}

function getRandomPlaylist() {
    let pop = Object.values(songs.genres.pop).flat(1)[(Math.random() * 9) | 0];
    let alternative = Object.values(songs.genres.alternative).flat(1)[(Math.random() * 9) | 0];
    let rock = Object.values(songs.genres.rock).flat(1)[(Math.random() * 9) | 0];
    console.log(pop, alternative, rock);
    return [pop, alternative, rock];
}

// jQuery equivalent of window.addEventListener('DOMContentLoaded', ...)
$(document).ready(function () {
	// As soon as the entire DOM is loaded into the browser's memory 
    const $ul = $("#playlist-ul");
    const playlist = getRandomPlaylist();

    $ul.append(
        playlist.map(song => 
            $("<li>").append($("<a>").text(song))
        )
    );
});