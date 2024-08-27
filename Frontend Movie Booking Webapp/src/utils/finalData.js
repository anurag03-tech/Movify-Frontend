const moviesData = [
  {
    movieId: 1,
    movieName: "The Grand Adventure",
    duration: "2h 30m",
    ticketPrice: 12.99,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMjEyODY4MTY4MV5BMl5BanBnXkFtZTcwMjEwMDIyMQ@@._V1_.jpg",
    director: "John Doe",
    language: "English",
    genre: "Adventure",
    description: "An epic journey of a hero discovering hidden secrets.",
    availableIn: [
      {
        city: "New York",
        theaters: [
          {
            theaterId: "NYT1",
            name: "CineMax Broadway",
            location: "123 Broadway, New York, NY",
            photoUrls: [
              "https://example.com/images/cinemax_broadway_1.jpg",
              "https://example.com/images/cinemax_broadway_2.jpg",
            ],
            trailerID: "NYT1-TRAILER1",
            showSchedules: [
              {
                date: "2024-08-20",
                simplifiedDate: "20",
                day: "Tuesday",
                month: "August",
                year: "2024",
                slots: [
                  {
                    time: "14:00 - 16:30",
                    seatMatrix: [
                      {
                        row: "R01",
                        seats: [
                          { seatId: "R01C01", status: "available" },
                          { seatId: "R01C02", status: "reserved" },
                          { seatId: "R01C03", status: "available" },
                          { seatId: "R01C04", status: "available" },
                          { seatId: "R01C05", status: "available" },
                        ],
                      },
                      {
                        row: "R02",
                        seats: [
                          { seatId: "R02C01", status: "available" },
                          { seatId: "R02C02", status: "available" },
                          { seatId: "R02C03", status: "reserved" },
                          { seatId: "R02C04", status: "available" },
                          { seatId: "R02C05", status: "available" },
                        ],
                      },
                    ],
                  },
                  {
                    time: "19:00 - 21:30",
                    seatMatrix: [
                      {
                        row: "R01",
                        seats: [
                          { seatId: "R01C01", status: "reserved" },
                          { seatId: "R01C02", status: "available" },
                          { seatId: "R01C03", status: "available" },
                          { seatId: "R01C04", status: "available" },
                          { seatId: "R01C05", status: "reserved" },
                        ],
                      },
                      {
                        row: "R02",
                        seats: [
                          { seatId: "R02C01", status: "available" },
                          { seatId: "R02C02", status: "reserved" },
                          { seatId: "R02C03", status: "available" },
                          { seatId: "R02C04", status: "available" },
                          { seatId: "R02C05", status: "available" },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                date: "2024-08-21",
                simplifiedDate: "21",
                day: "Wednesday",
                month: "August",
                year: "2024",
                slots: [
                  {
                    time: "16:00 - 18:30",
                    seatMatrix: [
                      {
                        row: "R01",
                        seats: [
                          { seatId: "R01C01", status: "available" },
                          { seatId: "R01C02", status: "reserved" },
                          { seatId: "R01C03", status: "available" },
                          { seatId: "R01C04", status: "available" },
                          { seatId: "R01C05", status: "available" },
                        ],
                      },
                      {
                        row: "R02",
                        seats: [
                          { seatId: "R02C01", status: "available" },
                          { seatId: "R02C02", status: "available" },
                          { seatId: "R02C03", status: "reserved" },
                          { seatId: "R02C04", status: "available" },
                          { seatId: "R02C05", status: "available" },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
            ticketPrice: 12.99,
          },
          {
            theaterId: "NYT2",
            name: "CineWorld Times Square",
            location: "456 7th Ave, New York, NY",
            photoUrls: [
              "https://example.com/images/cineworld_times_square_1.jpg",
              "https://example.com/images/cineworld_times_square_2.jpg",
            ],
            trailerID: "NYT2-TRAILER1",
            showSchedules: [
              {
                date: "2024-08-22",
                simplifiedDate: "22",
                day: "Thursday",
                month: "August",
                year: "2024",
                slots: [
                  {
                    time: "14:00 - 16:30",
                    seatMatrix: [
                      {
                        row: "R01",
                        seats: [
                          { seatId: "R01C01", status: "available" },
                          { seatId: "R01C02", status: "reserved" },
                          { seatId: "R01C03", status: "available" },
                          { seatId: "R01C04", status: "available" },
                          { seatId: "R01C05", status: "available" },
                        ],
                      },
                      {
                        row: "R02",
                        seats: [
                          { seatId: "R02C01", status: "reserved" },
                          { seatId: "R02C02", status: "available" },
                          { seatId: "R02C03", status: "available" },
                          { seatId: "R02C04", status: "available" },
                          { seatId: "R02C05", status: "available" },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
            ticketPrice: 13.99,
          },
        ],
      },
      {
        city: "San Francisco",
        theaters: [
          {
            theaterId: "SFT1",
            name: "Golden Gate Cinemas",
            location: "789 Market St, San Francisco, CA",
            photoUrls: [
              "https://example.com/images/golden_gate_cinemas_1.jpg",
              "https://example.com/images/golden_gate_cinemas_2.jpg",
            ],
            trailerID: "SFT1-TRAILER1",
            showSchedules: [
              {
                date: "2024-08-23",
                simplifiedDate: "23",
                day: "Friday",
                month: "August",
                year: "2024",
                slots: [
                  {
                    time: "19:00 - 21:30",
                    seatMatrix: [
                      {
                        row: "R01",
                        seats: [
                          { seatId: "R01C01", status: "available" },
                          { seatId: "R01C02", status: "available" },
                          { seatId: "R01C03", status: "reserved" },
                          { seatId: "R01C04", status: "available" },
                          { seatId: "R01C05", status: "available" },
                        ],
                      },
                      {
                        row: "R02",
                        seats: [
                          { seatId: "R02C01", status: "available" },
                          { seatId: "R02C02", status: "available" },
                          { seatId: "R02C03", status: "reserved" },
                          { seatId: "R02C04", status: "available" },
                          { seatId: "R02C05", status: "available" },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
            ticketPrice: 14.99,
          },
          {
            theaterId: "SFT2",
            name: "SF Premier Theaters",
            location: "1011 Union Square, San Francisco, CA",
            photoUrls: [
              "https://example.com/images/sf_premier_theaters_1.jpg",
              "https://example.com/images/sf_premier_theaters_2.jpg",
            ],
            trailerID: "SFT2-TRAILER1",
            showSchedules: [
              {
                date: "2024-08-24",
                simplifiedDate: "24",
                day: "Saturday",
                month: "August",
                year: "2024",
                slots: [
                  {
                    time: "16:00 - 18:30",
                    seatMatrix: [
                      {
                        row: "R01",
                        seats: [
                          { seatId: "R01C01", status: "available" },
                          { seatId: "R01C02", status: "reserved" },
                          { seatId: "R01C03", status: "available" },
                          { seatId: "R01C04", status: "available" },
                          { seatId: "R01C05", status: "available" },
                        ],
                      },
                      {
                        row: "R02",
                        seats: [
                          { seatId: "R02C01", status: "available" },
                          { seatId: "R02C02", status: "available" },
                          { seatId: "R02C03", status: "reserved" },
                          { seatId: "R02C04", status: "available" },
                          { seatId: "R02C05", status: "available" },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
            ticketPrice: 15.99,
          },
        ],
      },
    ],
  },

  {
    movieId: 2,
    movieName: "Science Fiction Extravaganza",
    duration: "2h 15m",
    ticketPrice: 14.99,
    imageUrl:
      "https://vhsrevival.com/wp-content/uploads/2018/12/the-terminator-japanese-poster.jpg",
    director: "Alice Johnson",
    language: "English",
    genre: "Sci-Fi",
    description:
      "A thrilling adventure in a futuristic world with advanced technology.",
    availableIn: [
      {
        city: "San Francisco",
        theaters: [
          {
            theaterId: "SFT1",
            name: "Galaxy Cinemas",
            location: "456 Market St, San Francisco, CA",
            photoUrls: [
              "https://example.com/images/galaxy_cinemas_1.jpg",
              "https://example.com/images/galaxy_cinemas_2.jpg",
            ],
            trailerID: "SFT1-TRAILER1",
            showSchedules: [
              {
                date: "2024-09-01",
                simplifiedDate: "01",
                day: "Sunday",
                month: "September",
                year: "2024",
                slots: [
                  {
                    time: "13:00 - 15:15",
                    seatMatrix: [
                      {
                        row: "R01",
                        seats: [
                          { seatId: "R01C01", status: "available" },
                          { seatId: "R01C02", status: "reserved" },
                          { seatId: "R01C03", status: "available" },
                          { seatId: "R01C04", status: "available" },
                          { seatId: "R01C05", status: "available" },
                        ],
                      },
                      {
                        row: "R02",
                        seats: [
                          { seatId: "R02C01", status: "available" },
                          { seatId: "R02C02", status: "available" },
                          { seatId: "R02C03", status: "reserved" },
                          { seatId: "R02C04", status: "available" },
                          { seatId: "R02C05", status: "available" },
                        ],
                      },
                      // More rows as needed...
                    ],
                  },
                  {
                    time: "18:00 - 20:15",
                    seatMatrix: [
                      {
                        row: "R01",
                        seats: [
                          { seatId: "R01C01", status: "reserved" },
                          { seatId: "R01C02", status: "available" },
                          { seatId: "R01C03", status: "available" },
                          { seatId: "R01C04", status: "available" },
                          { seatId: "R01C05", status: "available" },
                        ],
                      },
                      {
                        row: "R02",
                        seats: [
                          { seatId: "R02C01", status: "available" },
                          { seatId: "R02C02", status: "reserved" },
                          { seatId: "R02C03", status: "available" },
                          { seatId: "R02C04", status: "available" },
                          { seatId: "R02C05", status: "available" },
                        ],
                      },
                      // More rows as needed...
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        city: "Los Angeles",
        theaters: [
          {
            theaterId: "LAT1",
            name: "Starview Theater",
            location: "789 Hollywood Blvd, Los Angeles, CA",
            photoUrls: [
              "https://example.com/images/starview_theater_1.jpg",
              "https://example.com/images/starview_theater_2.jpg",
            ],
            trailerID: "LAT1-TRAILER1",
            showSchedules: [
              {
                date: "2024-09-02",
                simplifiedDate: "02",
                day: "Monday",
                month: "September",
                year: "2024",
                slots: [
                  {
                    time: "14:00 - 16:15",
                    seatMatrix: [
                      {
                        row: "R01",
                        seats: [
                          { seatId: "R01C01", status: "available" },
                          { seatId: "R01C02", status: "available" },
                          { seatId: "R01C03", status: "reserved" },
                          { seatId: "R01C04", status: "available" },
                          { seatId: "R01C05", status: "available" },
                        ],
                      },
                      {
                        row: "R02",
                        seats: [
                          { seatId: "R02C01", status: "available" },
                          { seatId: "R02C02", status: "available" },
                          { seatId: "R02C03", status: "available" },
                          { seatId: "R02C04", status: "reserved" },
                          { seatId: "R02C05", status: "available" },
                        ],
                      },
                      // More rows as needed...
                    ],
                  },
                  {
                    time: "19:00 - 21:15",
                    seatMatrix: [
                      {
                        row: "R01",
                        seats: [
                          { seatId: "R01C01", status: "reserved" },
                          { seatId: "R01C02", status: "available" },
                          { seatId: "R01C03", status: "available" },
                          { seatId: "R01C04", status: "available" },
                          { seatId: "R01C05", status: "available" },
                        ],
                      },
                      {
                        row: "R02",
                        seats: [
                          { seatId: "R02C01", status: "available" },
                          { seatId: "R02C02", status: "available" },
                          { seatId: "R02C03", status: "reserved" },
                          { seatId: "R02C04", status: "available" },
                          { seatId: "R02C05", status: "available" },
                        ],
                      },
                      // More rows as needed...
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    movieId: 3,
    movieName: "Mystery at Midnight",
    duration: "2h 00m",
    ticketPrice: 11.99,
    imageUrl:
      "https://i.pinimg.com/736x/49/fa/52/49fa5217d48f1e4dc3a7f7ce99f78fa9.jpg",
    director: "Robert Brown",
    language: "English",
    genre: "Mystery",
    description: "A suspenseful mystery that unravels during a stormy night.",
    availableIn: [
      {
        city: "Chicago",
        theaters: [
          {
            theaterId: "CHT1",
            name: "Regal Downtown",
            location: "101 Main St, Chicago, IL",
            photoUrls: [
              "https://example.com/images/regal_downtown_1.jpg",
              "https://example.com/images/regal_downtown_2.jpg",
            ],
            trailerID: "CHT1-TRAILER1",
            showSchedules: [
              {
                date: "2024-08-30",
                simplifiedDate: "30",
                day: "Friday",
                month: "August",
                year: "2024",
                slots: [
                  {
                    time: "15:00 - 17:00",
                    seatMatrix: [
                      {
                        row: "R01",
                        seats: [
                          { seatId: "R01C01", status: "available" },
                          { seatId: "R01C02", status: "reserved" },
                          { seatId: "R01C03", status: "available" },
                          { seatId: "R01C04", status: "available" },
                          { seatId: "R01C05", status: "reserved" },
                        ],
                      },
                      {
                        row: "R02",
                        seats: [
                          { seatId: "R02C01", status: "available" },
                          { seatId: "R02C02", status: "available" },
                          { seatId: "R02C03", status: "reserved" },
                          { seatId: "R02C04", status: "available" },
                          { seatId: "R02C05", status: "available" },
                        ],
                      },
                      // More rows as needed...
                    ],
                  },
                  {
                    time: "21:00 - 23:00",
                    seatMatrix: [
                      {
                        row: "R01",
                        seats: [
                          { seatId: "R01C01", status: "reserved" },
                          { seatId: "R01C02", status: "available" },
                          { seatId: "R01C03", status: "available" },
                          { seatId: "R01C04", status: "reserved" },
                          { seatId: "R01C05", status: "available" },
                        ],
                      },
                      {
                        row: "R02",
                        seats: [
                          { seatId: "R02C01", status: "available" },
                          { seatId: "R02C02", status: "available" },
                          { seatId: "R02C03", status: "available" },
                          { seatId: "R02C04", status: "reserved" },
                          { seatId: "R02C05", status: "available" },
                        ],
                      },
                      // More rows as needed...
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  {
    movieId: 4,
    movieName: "Animated Wonders",
    duration: "1h 30m",
    ticketPrice: 9.99,
    imageUrl:
      "https://i0.wp.com/teaser-trailer.com/wp-content/uploads/2018/11/Wonder-Park-Movie-poster-1.jpg?resize=384%2C600&ssl=1",
    director: "Emily Davis",
    language: "English",
    genre: "Animation",
    description:
      "A delightful animated film that captivates audiences of all ages.",
    availableIn: [
      {
        city: "Seattle",
        theaters: [
          {
            theaterId: "SET1",
            name: "Pioneer Theater",
            location: "202 Broadway, Seattle, WA",
            photoUrls: [
              "https://example.com/images/pioneer_theater_1.jpg",
              "https://example.com/images/pioneer_theater_2.jpg",
            ],
            trailerID: "SET1-TRAILER1",
            showSchedules: [
              {
                date: "2024-08-22",
                simplifiedDate: "22",
                day: "Thursday",
                month: "August",
                year: "2024",
                slots: [
                  {
                    time: "11:00 - 12:30",
                    seatMatrix: [
                      {
                        row: "R01",
                        seats: [
                          { seatId: "R01C01", status: "available" },
                          { seatId: "R01C02", status: "available" },
                          { seatId: "R01C03", status: "reserved" },
                          { seatId: "R01C04", status: "available" },
                          { seatId: "R01C05", status: "available" },
                        ],
                      },
                      {
                        row: "R02",
                        seats: [
                          { seatId: "R02C01", status: "available" },
                          { seatId: "R02C02", status: "available" },
                          { seatId: "R02C03", status: "available" },
                          { seatId: "R02C04", status: "available" },
                          { seatId: "R02C05", status: "reserved" },
                        ],
                      },
                      // More rows as needed...
                    ],
                  },
                  {
                    time: "16:00 - 17:30",
                    seatMatrix: [
                      {
                        row: "R01",
                        seats: [
                          { seatId: "R01C01", status: "reserved" },
                          { seatId: "R01C02", status: "available" },
                          { seatId: "R01C03", status: "available" },
                          { seatId: "R01C04", status: "available" },
                          { seatId: "R01C05", status: "available" },
                        ],
                      },
                      {
                        row: "R02",
                        seats: [
                          { seatId: "R02C01", status: "available" },
                          { seatId: "R02C02", status: "available" },
                          { seatId: "R02C03", status: "reserved" },
                          { seatId: "R02C04", status: "available" },
                          { seatId: "R02C05", status: "available" },
                        ],
                      },
                      // More rows as needed...
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  {
    movieId: 5,
    movieName: "Historical Drama",
    duration: "2h 05m",
    ticketPrice: 12.49,
    imageUrl:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7433c024369343.56333149ce0fa.jpg",
    director: "Laura Wilson",
    language: "English",
    genre: "Drama",
    description: "A gripping historical drama based on real events.",
    availableIn: [
      {
        city: "Austin",
        theaters: [
          {
            theaterId: "AUS1",
            name: "Capitol Cinema",
            location: "303 W 15th St, Austin, TX",
            photoUrls: [
              "https://example.com/images/capitol_cinema_1.jpg",
              "https://example.com/images/capitol_cinema_2.jpg",
            ],
            trailerID: "AUS1-TRAILER1",
            showSchedules: [
              {
                date: "2024-08-28",
                simplifiedDate: "28",
                day: "Wednesday",
                month: "August",
                year: "2024",
                slots: [
                  {
                    time: "12:00 - 14:05",
                    seatMatrix: [
                      {
                        row: "R01",
                        seats: [
                          { seatId: "R01C01", status: "available" },
                          { seatId: "R01C02", status: "reserved" },
                          { seatId: "R01C03", status: "available" },
                          { seatId: "R01C04", status: "available" },
                          { seatId: "R01C05", status: "available" },
                        ],
                      },
                      {
                        row: "R02",
                        seats: [
                          { seatId: "R02C01", status: "available" },
                          { seatId: "R02C02", status: "available" },
                          { seatId: "R02C03", status: "reserved" },
                          { seatId: "R02C04", status: "available" },
                          { seatId: "R02C05", status: "available" },
                        ],
                      },
                      // More rows as needed...
                    ],
                  },
                  {
                    time: "17:00 - 19:05",
                    seatMatrix: [
                      {
                        row: "R01",
                        seats: [
                          { seatId: "R01C01", status: "reserved" },
                          { seatId: "R01C02", status: "available" },
                          { seatId: "R01C03", status: "available" },
                          { seatId: "R01C04", status: "available" },
                          { seatId: "R01C05", status: "reserved" },
                        ],
                      },
                      {
                        row: "R02",
                        seats: [
                          { seatId: "R02C01", status: "available" },
                          { seatId: "R02C02", status: "reserved" },
                          { seatId: "R02C03", status: "available" },
                          { seatId: "R02C04", status: "available" },
                          { seatId: "R02C05", status: "available" },
                        ],
                      },
                      // More rows as needed...
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  {
    movieId: 6,
    movieName: "Action Packed Thrills",
    duration: "2h 20m",
    ticketPrice: 13.99,
    imageUrl:
      "https://i.pinimg.com/736x/49/fa/52/49fa5217d48f1e4dc3a7f7ce99f78fa9.jpg",
    director: "Michael Lee",
    language: "English",
    genre: "Action",
    description: "An adrenaline-pumping action film with non-stop excitement.",
    availableIn: [
      {
        city: "Miami",
        theaters: [
          {
            theaterId: "MIA1",
            name: "Sunset Cinema",
            location: "456 Sunset Blvd, Miami, FL",
            photoUrls: [
              "https://example.com/images/sunset_cinema_1.jpg",
              "https://example.com/images/sunset_cinema_2.jpg",
            ],
            trailerID: "MIA1-TRAILER1",
            showSchedules: [
              {
                date: "2024-09-05",
                simplifiedDate: "05",
                day: "Thursday",
                month: "September",
                year: "2024",
                slots: [
                  {
                    time: "14:00 - 16:20",
                    seatMatrix: [
                      {
                        row: "R01",
                        seats: [
                          { seatId: "R01C01", status: "available" },
                          { seatId: "R01C02", status: "available" },
                          { seatId: "R01C03", status: "reserved" },
                          { seatId: "R01C04", status: "available" },
                          { seatId: "R01C05", status: "available" },
                        ],
                      },
                      {
                        row: "R02",
                        seats: [
                          { seatId: "R02C01", status: "available" },
                          { seatId: "R02C02", status: "available" },
                          { seatId: "R02C03", status: "available" },
                          { seatId: "R02C04", status: "reserved" },
                          { seatId: "R02C05", status: "available" },
                        ],
                      },
                      // More rows as needed...
                    ],
                  },
                  {
                    time: "19:00 - 21:20",
                    seatMatrix: [
                      {
                        row: "R01",
                        seats: [
                          { seatId: "R01C01", status: "reserved" },
                          { seatId: "R01C02", status: "available" },
                          { seatId: "R01C03", status: "available" },
                          { seatId: "R01C04", status: "reserved" },
                          { seatId: "R01C05", status: "available" },
                        ],
                      },
                      {
                        row: "R02",
                        seats: [
                          { seatId: "R02C01", status: "available" },
                          { seatId: "R02C02", status: "available" },
                          { seatId: "R02C03", status: "available" },
                          { seatId: "R02C04", status: "available" },
                          { seatId: "R02C05", status: "reserved" },
                        ],
                      },
                      // More rows as needed...
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  // Add more movies following the same structure...
];

export default moviesData;
