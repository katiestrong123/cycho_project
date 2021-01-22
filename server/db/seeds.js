use cychos;

db.dropDatabase();


    //list of cychos, ===bike repair men
    //eg
    //name, rating, current location, experience, minutes away from you,  


db.cychos.insertMany([
    {
        name: "Harry Styles",
        age: 29,
        cychoSecurityCode: 105,
        instagram: "@fancypantsbikerepair",
        baseLocation: "Old Kent Road Halfords",
        bio: "I've been working in bike repairs for 10 years now and cychos for two. I am passionate about cycling, customer service and have a lot of experiece in day to day repairs so can be in and out for anything from a puncture to replacing a chain in 15 minutes. Happy to help.",
        lat: 55.8, 
        lng: -4.2,
        photoUrl: "photo here"
    },
    {
        name: "Charles Darwin",
        age: 229,
        cychoSecurityCode: 158,
        instagram: "@@survivalofthefixest",
        baseLocation: "Old Street Pedal Revolution",
        bio: "Bike repairs are my bread and butter but experience with electric scooters, basic moped and motorcycle issues too so don't be afraid to ask!",
        lat: 55.8, 
        lng: -4.2,
        photoUrl: "photo here"
    }

]);
