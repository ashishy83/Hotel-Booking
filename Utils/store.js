const store = [
  [
    {
      id: 1,
      name: "CodeXX",
      address: "456 New Street, Updated City",
      des: "New description for the updated hotel",
      rating: 5,
      amenities: "Updated amenities list",
      contact_info: "updatedhotel@example.com, +1234567890",
      hotel_image: "https://example.com/updated-hotel-image.jpg",
    },
    {
      id: 2,
      name: "Hotel B",
      address: "456 Park Avenue, City B",
      des: "Charming boutique hotel in City B",
      rating: 4.3,
      amenities: "Free Wi-Fi, Breakfast, Bar",
      contact_info: "hotelB@example.com, +1234567891",
      hotel_image:
        "https://images.unsplash.com/photo-1520229978054-b7e1c6e1020a",
    },
    {
      id: 3,
      name: "Hotel C",
      address: "789 Ocean Drive, City C",
      des: "Beachfront resort with stunning views",
      rating: 4.8,
      amenities: "Beach access, Pool, Spa, Restaurant",
      contact_info: "hotelC@example.com, +1234567892",
      hotel_image:
        "https://images.unsplash.com/photo-1515549735801-1dcba28b0ded",
    },
    {
      id: 4,
      name: "Hotel D",
      address: "321 Lake Road, City D",
      des: "Cozy retreat nestled by the lake",
      rating: 4.5,
      amenities: "Lake view rooms, Kayaking, Fishing",
      contact_info: "hotelD@example.com, +1234567893",
      hotel_image:
        "https://images.unsplash.com/photo-1580949067280-4514156472d1",
    },
    {
      id: 5,
      name: "Hotel E",
      address: "555 Mountain Boulevard, City E",
      des: "Mountain lodge perfect for outdoor enthusiasts",
      rating: 4.6,
      amenities: "Hiking trails, Skiing, Hot tub",
      contact_info: "hotelE@example.com, +1234567894",
      hotel_image: "https://images.unsplash.com/photo-1558434462-4321f1c74c6e",
    },
    {
      id: 6,
      name: "Hotel F",
      address: "777 Forest Avenue, City F",
      des: "Secluded retreat surrounded by nature",
      rating: 4.4,
      amenities: "Forest trails, Wildlife watching, Spa",
      contact_info: "hotelF@example.com, +1234567895",
      hotel_image: "https://images.unsplash.com/photo-1563298723-ea23537a6b0b",
    },
    {
      id: 7,
      name: "Hotel G",
      address: "888 Riverside Drive, City G",
      des: "Riverside hotel offering scenic views",
      rating: 4.9,
      amenities: "Riverfront rooms, Boat tours, Fine dining",
      contact_info: "hotelG@example.com, +1234567896",
      hotel_image:
        "https://images.unsplash.com/photo-1604628450180-9e2451263a51",
    },
    {
      id: 8,
      name: "Hotel H",
      address: "999 Hilltop Road, City H",
      des: "Panoramic views from this hilltop hotel",
      rating: 4.7,
      amenities: "Panoramic terrace, Spa, Gourmet restaurant",
      contact_info: "hotelH@example.com, +1234567897",
      hotel_image:
        "https://images.unsplash.com/photo-1611738432965-bbc5fd827e7b",
    },
    {
      id: 9,
      name: "Hotel I",
      address: "101 Park Lane, City I",
      des: "Elegant hotel in the heart of downtown",
      rating: 4.8,
      amenities: "Luxury suites, Rooftop bar, Fitness center",
      contact_info: "hotelI@example.com, +1234567898",
      hotel_image:
        "https://images.unsplash.com/photo-1571178025675-b50a995abf09",
    },
    {
      id: 10,
      name: "Hotel J",
      address: "202 Beach Boulevard, City J",
      des: "Seaside resort with family-friendly amenities",
      rating: 4.6,
      amenities: "Kids club, Water park, Beach volleyball",
      contact_info: "hotelJ@example.com, +1234567899",
      hotel_image:
        "https://images.unsplash.com/photo-1522773470508-bdc21e8e3214",
    },
    {
      id: 11,
      name: "Hotel K",
      address: "303 Sunset Avenue, City K",
      des: "Tranquil retreat with breathtaking sunsets",
      rating: 4.5,
      amenities: "Sunset terrace, Yoga classes, Organic restaurant",
      contact_info: "hotelK@example.com, +1234567800",
      hotel_image:
        "https://images.unsplash.com/photo-1572876491420-3f25b6c9dc5b",
    },
    {
      id: 12,
      name: "Hotel L",
      address: "404 Garden Street, City L",
      des: "Relaxing oasis surrounded by lush gardens",
      rating: 4.3,
      amenities: "Garden views, Meditation classes, Spa",
      contact_info: "hotelL@example.com, +1234567801",
      hotel_image:
        "https://images.unsplash.com/photo-1593777859704-f4e0b144d1bd",
    },
    {
      id: 13,
      name: "Hotel M",
      address: "505 River Road, City M",
      des: "Riverside retreat with outdoor activities",
      rating: 4.7,
      amenities: "Riverfront cabins, Canoeing, Fishing",
      contact_info: "hotelM@example.com, +1234567802",
      hotel_image:
        "https://images.unsplash.com/photo-1597311124530-5d02565a2d14",
    },
    {
      id: 14,
      name: "Hotel N",
      address: "606 Mountain View, City N",
      des: "Mountain resort offering adventure and relaxation",
      rating: 4.9,
      amenities: "Mountain view rooms, Rock climbing, Spa",
      contact_info: "hotelN@example.com, +1234567803",
      hotel_image:
        "https://images.unsplash.com/photo-1600754751019-ef9b46e1c17a",
    },
    {
      id: 15,
      name: "Hotel O",
      address: "707 Lakeside Drive, City O",
      des: "Lakeside retreat for nature lovers",
      rating: 4.6,
      amenities: "Lakefront cottages, Kayaking, Picnic area",
      contact_info: "hotelO@example.com, +1234567804",
      hotel_image: "https://images.unsplash.com/photo-1547496611-ef046c1c6f38",
    },
    {
      id: 16,
      name: "Hotel P",
      address: "808 Skyline Avenue, City P",
      des: "Skyline hotel with stunning city views",
      rating: 4.8,
      amenities: "Skyline view rooms, Rooftop pool, Fine dining",
      contact_info: "hotelP@example.com, +1234567805",
      hotel_image:
        "https://images.unsplash.com/photo-1585217510411-f283b7851c2a",
    },
    {
      id: 17,
      name: "Hotel Q",
      address: "909 Forest Lane, City Q",
      des: "Forest lodge offering peace and tranquility",
      rating: 4.4,
      amenities: "Forest cabins, Nature walks, Campfire",
      contact_info: "hotelQ@example.com, +1234567806",
      hotel_image:
        "https://images.unsplash.com/photo-1584591412614-6b771948de68",
    },
    {
      id: 18,
      name: "Hotel R",
      address: "1010 Ocean View, City R",
      des: "Oceanfront resort with white sandy beaches",
      rating: 4.7,
      amenities: "Ocean view rooms, Beach volleyball, Surfing",
      contact_info: "hotelR@example.com, +1234567807",
      hotel_image:
        "https://images.unsplash.com/photo-1536104968050-5a2964a7731b",
    },
    {
      id: 19,
      name: "Hotel S",
      address: "1111 City Center, City S",
      des: "City center hotel close to attractions",
      rating: 4.5,
      amenities: "City view rooms, Fitness center, Business center",
      contact_info: "hotelS@example.com, +1234567808",
      hotel_image:
        "https://images.unsplash.com/photo-1528901166004-d2da83e5313a",
    },
    {
      id: 20,
      name: "Hotel T",
      address: "1212 Park Avenue, City T",
      des: "Parkside hotel with serene surroundings",
      rating: 4.3,
      amenities: "Park view rooms, Picnic area, Bicycle rental",
      contact_info: "hotelT@example.com, +1234567809",
      hotel_image: "https://images.unsplash.com/photo-1559691793-82a8fc2b4f7b",
    },
    {
      id: 21,
      name: "Hotel U",
      address: "1313 Riverside Road, City U",
      des: "Riverside retreat for relaxation and adventure",
      rating: 4.6,
      amenities: "Riverside cabins, Fishing, Rafting",
      contact_info: "hotelU@example.com, +1234567810",
      hotel_image:
        "https://images.unsplash.com/photo-1528901166004-d2da83e5313a",
    },
    {
      id: 22,
      name: "Hotel V",
      address: "1414 Hillside Avenue, City V",
      des: "Hillside hotel with panoramic views",
      rating: 4.8,
      amenities: "Hillside view rooms, Spa, Restaurant",
      contact_info: "hotelV@example.com, +1234567811",
      hotel_image: "https://images.unsplash.com/photo-1543807778-0e08f3bcb9a6",
    },
    {
      id: 23,
      name: "Hotel W",
      address: "1515 Mountain Road, City W",
      des: "Mountain retreat surrounded by natural beauty",
      rating: 4.9,
      amenities: "Mountain view rooms, Nature trails, Meditation",
      contact_info: "hotelW@example.com, +1234567812",
      hotel_image:
        "https://images.unsplash.com/photo-1580949067280-4514156472d1",
    },
    {
      id: 24,
      name: "Hotel X",
      address: "1616 Sunset Boulevard, City X",
      des: "Sunset hotel with breathtaking views",
      rating: 4.7,
      amenities: "Sunset view rooms, Beach access, Fine dining",
      contact_info: "hotelX@example.com, +1234567813",
      hotel_image:
        "https://images.unsplash.com/photo-1564519305160-29e8d92158d0",
    },
    {
      id: 25,
      name: "Hotel Y",
      address: "1717 Garden Lane, City Y",
      des: "Garden oasis in the heart of the city",
      rating: 4.5,
      amenities: "Garden view rooms, Spa, Organic restaurant",
      contact_info: "hotelY@example.com, +1234567814",
      hotel_image: "https://images.unsplash.com/photo-1557378829-eb9a198e1bc8",
    },
    {
      id: 61,
      name: "Hotel A",
      address: "123 Main Street, City A",
      des: "Luxurious hotel in the heart of City A",
      rating: 4.7,
      amenities: "Pool, Spa, Restaurant, Gym",
      contact_info: "hotelA@example.com, +1234567890",
      hotel_image: "https://example.com/hotelA-image.jpg",
    },
    {
      id: 27,
      name: "Hotel A",
      address: "123 Main Street, City A",
      des: "Luxurious hotel in the heart of City A",
      rating: 4.7,
      amenities: "Pool, Spa, Restaurant, Gym",
      contact_info: "hotelA@example.com, +1234567890",
      hotel_image: "https://example.com/hotelA-image.jpg",
    },
  ],
];

module.exports = store;