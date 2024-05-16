
	// TO MAKE THE MAP APPEAR YOU MUST
	// ADD YOUR ACCESS TOKEN FROM
	// https://account.mapbox.com
	mapboxgl.accessToken = 'pk.eyJ1IjoiZHB1bGxvcXVpbmdhIiwiYSI6ImNsdzk5bzlhZjAxOGYybmx3b25vODRkN3MifQ.aKLJ4TzgVboMz1ndoUOvlw';
    const map = new mapboxgl.Map({
        container: 'map',
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-90.3103, -0.4485],
        zoom: 9
    });

    const chapters = {
        'santa-cruz': {
            bearing: 0,
            center: [-90.3103, -0.6336], // Santa Cruz coordinates
            zoom: 12
        },
        'chinese-hat': {
            bearing: 0,
            center: [-90.583652, -0.369642], // Sombrero Chino coordinates
            zoom: 12
        },
        'bartolome': {
            bearing: 0,
            center: [-90.554308, -0.284771], // Bartolome coordinates
            zoom: 12
        },
        'genovesa': {
            bearing: 0,
            center: [-89.957280, 0.321928], // Genovesa coordinates
            zoom: 12
        },
        'baltra': {
            bearing: 0,
            center: [-90.3103, -0.4485], // Baltra coordinates
            zoom: 12
        }
    };

    let activeChapterName = 'santa-cruz';
    function setActiveChapter(chapterName) {
        if (chapterName === activeChapterName) return;

        map.flyTo(chapters[chapterName]);

        document.getElementById(chapterName).classList.add('active');
        document.getElementById(activeChapterName).classList.remove('active');

        activeChapterName = chapterName;
    }

    function isElementOnScreen(id) {
        const element = document.getElementById(id);
        const bounds = element.getBoundingClientRect();
        return bounds.top < window.innerHeight && bounds.bottom > 0;
    }

    // On every scroll event, check which element is on screen
    window.onscroll = () => {
        for (const chapterName in chapters) {
            if (isElementOnScreen(chapterName)) {
                setActiveChapter(chapterName);
                break;
            }
        }
    };
