use cycho_bike_repair;

db.dropDatabase();


db.cychos.insertMany([
    {
        name: "Harry Styles",
        age: 29,
        cychoSecurityCode: 105,
        instagram: "@shinyshoesandcycles",
        baseLocation: "Old Kent Road Halfords",
        bio: "I've been working in bike repairs for 10 years now and cychos for two. I am passionate about cycling, customer service and have a lot of experiece in day to day repairs so can be in and out for anything from a puncture to replacing a chain in 15 minutes. Happy to help.",
        lat: 51.515258039280596, 
        lng: -0.19487716678409553,
        photoUrl: "photo here"

    },
    {
        name: "Charles Darwin",
        age: 229,
        cychoSecurityCode: 158,
        instagram: "@survivalofthefixest",
        baseLocation: "Old Street Pedal Revolution",
        bio: "Bike repairs are my bread and butter but experience with electric scooters, basic moped and motorcycle issues too so don't be afraid to ask!",
        lat: 51.514210175009545,
        lng:  -0.21847609654970238,
        photoUrl: "photo here"
    }

]);
