interface Name {
  title: string;
  first: string;
  last: string;
}

interface Street {
  number: number;
  name: string;
}

interface Coordinates {
  latitude: string;
  longitude: string;
}

interface Timezone {
  offset: string;
  description: string;
}

interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: string;
  coordinates: Coordinates;
  timezone: Timezone;
}

interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

interface Dob {
  date: string;
  age: number;
}

interface Registered {
  date: string;
  age: number;
}

interface Id {
  name: string;
  value: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface Result {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  registered: Registered;
  phone: string;
  cell: string;
  id: Id;
  picture: Picture;
  nat: string;
}

export const profileData: Result[] = [
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Ignacio",
      last: "Molina",
    },
    location: {
      street: {
        number: 1993,
        name: "Eje vial Sur Romero",
      },
      city: "Yecapixtla",
      state: "Guerrero",
      country: "Mexico",
      postcode: "52194",
      coordinates: {
        latitude: "27.838196443085756",
        longitude: "-107.60832108343993",
      },
      timezone: {
        offset: "+4:00",
        description: "Abu Dhabi, Muscat, Baku, Tbilisi",
      },
    },
    email: "ignacio.molina@example.com",
    login: {
      uuid: "69a3af67-3ed0-4761-9d28-8d1aa3f24def",
      username: "bluelion576",
      password: "suburban",
      salt: "p3ZcEyfY",
      md5: "27dc2cf8b9ed1b4f8dd96c5ca3d3c2d3",
      sha1: "b2f82d4e70689305f5570ea51711e8673ca7170b",
      sha256:
        "77338bad0496c9e80628a16d474782419e83074127c41003c276b7fbc51c054a",
    },
    dob: {
      date: "1992-10-30T15:18:49.760Z",
      age: 31,
    },
    registered: {
      date: "2004-05-06T14:05:02.286Z",
      age: 19,
    },
    phone: "(662) 912 8895",
    cell: "(671) 857 7302",
    id: {
      name: "NSS",
      value: "12 97 53 5500 2",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/66.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/66.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/66.jpg",
    },
    nat: "MX",
  },
  {
    gender: "female",
    name: {
      title: "Miss",
      first: "Arcelia",
      last: "Benavídez",
    },
    location: {
      street: {
        number: 3959,
        name: "Calle Valle",
      },
      city: "Juchitepec",
      state: "Campeche",
      country: "Mexico",
      postcode: "83667",
      coordinates: {
        latitude: "26.136561081647596",
        longitude: "-102.65472325383132",
      },
      timezone: {
        offset: "-4:00",
        description: "Atlantic Time (Canada), Caracas, La Paz",
      },
    },
    email: "arcelia.benavidez@example.com",
    login: {
      uuid: "11346361-deda-4a14-89ab-251f1e9237cb",
      username: "saddog393",
      password: "orioles",
      salt: "41NQfqdJ",
      md5: "ff937b603e7a54b1e9e89af395f92675",
      sha1: "50503af96b17bf600828ef415802dadb30ca124a",
      sha256:
        "56377f2ca9c662a30406a492b3aa87ad316b584cb0e80b9b7d4b9227ecfcd30a",
    },
    dob: {
      date: "1951-08-25T17:55:13.205Z",
      age: 72,
    },
    registered: {
      date: "2021-03-02T14:03:39.813Z",
      age: 3,
    },
    phone: "(696) 124 7714",
    cell: "(688) 778 1788",
    id: {
      name: "NSS",
      value: "43 25 12 9253 6",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/9.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/9.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/9.jpg",
    },
    nat: "MX",
  },
  {
    gender: "female",
    name: {
      title: "Miss",
      first: "Ava",
      last: "Hamilton",
    },
    location: {
      street: {
        number: 1494,
        name: "Dame Street",
      },
      city: "Trim",
      state: "Dublin City",
      country: "Ireland",
      postcode: "65548",
      coordinates: {
        latitude: "53.11704868821626",
        longitude: "-7.952026969097768",
      },
      timezone: {
        offset: "-5:00",
        description: "Eastern Time (US & Canada), Bogota, Lima",
      },
    },
    email: "ava.hamilton@example.com",
    login: {
      uuid: "155322e3-9a2a-4b21-ae40-d0ebaf1084bd",
      username: "beautifulswan108",
      password: "danny",
      salt: "OlOSjg44",
      md5: "693c30eebe23fa7104e95fcc2861205e",
      sha1: "6a42f89eac703bdb33e44954ff71633eeaf815eb",
      sha256:
        "3427115cf3439bcb1627cc509f0b54b0ffb41b751c279e5ee4132befd0cfd45f",
    },
    dob: {
      date: "1997-10-16T13:17:18.071Z",
      age: 26,
    },
    registered: {
      date: "2016-03-30T21:18:29.087Z",
      age: 8,
    },
    phone: "071-005-3784",
    cell: "081-486-6432",
    id: {
      name: "PPS",
      value: "3046637T",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/60.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/60.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/60.jpg",
    },
    nat: "IE",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Justin",
      last: "Macdonald",
    },
    location: {
      street: {
        number: 9578,
        name: "College Ave",
      },
      city: "Lumsden",
      state: "Nunavut",
      country: "Canada",
      postcode: "C3W 9Z4",
      coordinates: {
        latitude: "49.9473345109806",
        longitude: "-97.22817633198382",
      },
      timezone: {
        offset: "+5:45",
        description: "Kathmandu",
      },
    },
    email: "justin.macdonald@example.com",
    login: {
      uuid: "79cf4897-5d82-41d2-9919-d193fb44d39b",
      username: "beautifulmeercat834",
      password: "mildred",
      salt: "uZIigZhu",
      md5: "6028c24f062b20a2415b1dacfa5a8d18",
      sha1: "717ed9b8807d9a04ac7d27af5330e3b9285f7b0d",
      sha256:
        "9898264898e6aaca2d0e15edc57d908e27f1b03168cd1c4273a9be2f68b4367f",
    },
    dob: {
      date: "1951-03-25T07:56:22.188Z",
      age: 73,
    },
    registered: {
      date: "2013-11-04T04:10:04.317Z",
      age: 10,
    },
    phone: "Y72 H81-5640",
    cell: "Q43 H96-5502",
    id: {
      name: "SIN",
      value: "771513447",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/21.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/21.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/21.jpg",
    },
    nat: "CA",
  },
  {
    gender: "male",
    name: {
      title: "Monsieur",
      first: "Valon",
      last: "Denis",
    },
    location: {
      street: {
        number: 8673,
        name: "Rue Abel-Gance",
      },
      city: "Bassins",
      state: "Graubünden",
      country: "Switzerland",
      postcode: "3560",
      coordinates: {
        latitude: "46.96694559177701",
        longitude: "7.5752131011144215",
      },
      timezone: {
        offset: "+3:30",
        description: "Tehran",
      },
    },
    email: "valon.denis@example.com",
    login: {
      uuid: "f39d5056-1dd0-4030-a68f-95a8455bef43",
      username: "orangezebra650",
      password: "graves",
      salt: "eZYdbna5",
      md5: "f54b10a5db8fa82ff4503af364e43699",
      sha1: "0cd81a358123d47dded8f54c28f63ba4e7548f5f",
      sha256:
        "c59556648a919ab91c7d913206bb5be53a768cfe9bd65a5d93c5f46e4caa3f64",
    },
    dob: {
      date: "1964-04-23T04:00:06.106Z",
      age: 60,
    },
    registered: {
      date: "2015-11-28T12:27:38.571Z",
      age: 8,
    },
    phone: "076 378 92 21",
    cell: "075 177 75 31",
    id: {
      name: "AVS",
      value: "756.5084.7651.24",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/55.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/55.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/55.jpg",
    },
    nat: "CH",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Maximiliano",
      last: "Melgar",
    },
    location: {
      street: {
        number: 7715,
        name: "Continuación Norte Arce",
      },
      city: "República Mexicana",
      state: "Oaxaca",
      country: "Mexico",
      postcode: "61589",
      coordinates: {
        latitude: "19.263885818024352",
        longitude: "-98.89280642561594",
      },
      timezone: {
        offset: "-5:00",
        description: "Eastern Time (US & Canada), Bogota, Lima",
      },
    },
    email: "maximiliano.melgar@example.com",
    login: {
      uuid: "b83c7a99-34ef-4c63-96d6-1e321138947a",
      username: "tinygoose156",
      password: "hawkeye",
      salt: "oq68Wymh",
      md5: "84040824f0bf3b7c703afe408bb505e5",
      sha1: "f73d5fb236060d89cc101238653841dcb9c78152",
      sha256:
        "b4f2517ebc80339bb05334a69155e3bf971d9e019ff48cec2bc98f023dceb28d",
    },
    dob: {
      date: "1996-02-10T02:18:27.089Z",
      age: 28,
    },
    registered: {
      date: "2006-10-17T17:09:04.252Z",
      age: 17,
    },
    phone: "(611) 255 3464",
    cell: "(636) 574 6167",
    id: {
      name: "NSS",
      value: "55 33 61 6169 5",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/16.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/16.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/16.jpg",
    },
    nat: "MX",
  },
];
