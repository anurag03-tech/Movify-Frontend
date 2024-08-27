const mockData = {
  cities: [
    {
      cityId: "1",
      cityName: "Delhi",
      theaters: [
        {
          theaterId: "T1",
          theaterName: "Theater 1",
          address: "123 Main St, Delhi",
          movies: [
            {
              movieId: "M1",
              title: "Movie 1",
              duration: "120 mins",
              days: [
                { date: 26, month: "August", day: "Monday", year: 2024 },
                { date: 28, month: "August", day: "Wednesday", year: 2024 },
                { date: 30, month: "August", day: "Friday", year: 2024 },
              ],
              slots: ["Morning", "Evening"],
              imageUrl: "url-to-image1.jpg",
            },
            {
              movieId: "M2",
              title: "Movie 2",
              duration: "150 mins",
              days: [
                { date: 27, month: "August", day: "Tuesday", year: 2024 },
                { date: 29, month: "August", day: "Thursday", year: 2024 },
                { date: 31, month: "August", day: "Saturday", year: 2024 },
              ],
              slots: ["Afternoon", "Night"],
              imageUrl: "url-to-image2.jpg",
            },
            {
              movieId: "M3",
              title: "Movie 3",
              duration: "100 mins",
              days: [{ date: 25, month: "August", day: "Sunday", year: 2024 }],
              slots: ["Night"],
              imageUrl: "url-to-image3.jpg",
            },
          ],
        },
        {
          theaterId: "T2",
          theaterName: "Theater 2",
          address: "456 Elm St, Delhi",
          movies: [
            {
              movieId: "M4",
              title: "Movie 4",
              duration: "130 mins",
              days: [
                { date: 26, month: "August", day: "Monday", year: 2024 },
                { date: 29, month: "August", day: "Thursday", year: 2024 },
                { date: 31, month: "August", day: "Saturday", year: 2024 },
              ],
              slots: ["Morning", "Afternoon"],
              imageUrl: "url-to-image4.jpg",
            },
            {
              movieId: "M5",
              title: "Movie 5",
              duration: "110 mins",
              days: [
                { date: 27, month: "August", day: "Tuesday", year: 2024 },
                { date: 30, month: "August", day: "Friday", year: 2024 },
              ],
              slots: ["Evening", "Night"],
              imageUrl: "url-to-image5.jpg",
            },
          ],
        },
      ],
    },
    {
      cityId: "2",
      cityName: "Noida",
      theaters: [
        {
          theaterId: "T3",
          theaterName: "Theater 3",
          address: "789 Pine St, Noida",
          movies: [
            {
              movieId: "M6",
              title: "Movie 6",
              duration: "105 mins",
              days: [
                { date: 27, month: "August", day: "Tuesday", year: 2024 },
                { date: 29, month: "August", day: "Thursday", year: 2024 },
                { date: 31, month: "August", day: "Saturday", year: 2024 },
              ],
              slots: ["Evening", "Night"],
              imageUrl: "url-to-image6.jpg",
            },
            {
              movieId: "M7",
              title: "Movie 7",
              duration: "125 mins",
              days: [
                { date: 26, month: "August", day: "Monday", year: 2024 },
                { date: 28, month: "August", day: "Wednesday", year: 2024 },
              ],
              slots: ["Afternoon", "Night"],
              imageUrl: "url-to-image7.jpg",
            },
          ],
        },
        {
          theaterId: "T4",
          theaterName: "Theater 4",
          address: "101 Maple St, Noida",
          movies: [
            {
              movieId: "M8",
              title: "Movie 8",
              duration: "140 mins",
              days: [
                { date: 26, month: "August", day: "Monday", year: 2024 },
                { date: 29, month: "August", day: "Thursday", year: 2024 },
              ],
              slots: ["Morning", "Evening"],
              imageUrl: "url-to-image8.jpg",
            },
            {
              movieId: "M9",
              title: "Movie 9",
              duration: "95 mins",
              days: [
                { date: 27, month: "August", day: "Tuesday", year: 2024 },
                { date: 30, month: "August", day: "Friday", year: 2024 },
              ],
              slots: ["Afternoon"],
              imageUrl: "url-to-image9.jpg",
            },
          ],
        },
      ],
    },
    {
      cityId: "3",
      cityName: "Gurgaon",
      theaters: [
        {
          theaterId: "T5",
          theaterName: "Theater 5",
          address: "202 Oak St, Gurgaon",
          movies: [
            {
              movieId: "M10",
              title: "Movie 10",
              duration: "115 mins",
              days: [
                { date: 25, month: "August", day: "Sunday", year: 2024 },
                { date: 27, month: "August", day: "Tuesday", year: 2024 },
                { date: 29, month: "August", day: "Thursday", year: 2024 },
              ],
              slots: ["Morning", "Evening"],
              imageUrl: "url-to-image10.jpg",
            },
            {
              movieId: "M11",
              title: "Movie 11",
              duration: "130 mins",
              days: [
                { date: 26, month: "August", day: "Monday", year: 2024 },
                { date: 28, month: "August", day: "Wednesday", year: 2024 },
              ],
              slots: ["Afternoon", "Night"],
              imageUrl: "url-to-image11.jpg",
            },
          ],
        },
        {
          theaterId: "T6",
          theaterName: "Theater 6",
          address: "303 Birch St, Gurgaon",
          movies: [
            {
              movieId: "M12",
              title: "Movie 12",
              duration: "90 mins",
              days: [
                { date: 25, month: "August", day: "Sunday", year: 2024 },
                { date: 27, month: "August", day: "Tuesday", year: 2024 },
              ],
              slots: ["Evening"],
              imageUrl: "url-to-image12.jpg",
            },
            {
              movieId: "M13",
              title: "Movie 13",
              duration: "125 mins",
              days: [
                { date: 26, month: "August", day: "Monday", year: 2024 },
                { date: 29, month: "August", day: "Thursday", year: 2024 },
              ],
              slots: ["Morning", "Night"],
              imageUrl: "url-to-image13.jpg",
            },
          ],
        },
      ],
    },
  ],
};

export default mockData;
