const testData = {
  movies: [
    {
      name: "Action Packed Thrills",
      imageUrl:
        "https://i0.wp.com/teaser-trailer.com/wp-content/uploads/2018/11/Wonder-Park-Movie-poster-1.jpg?resize=384%2C600&ssl=1",
      description:
        "An exciting action film with thrilling sequences and edge-of-your-seat moments.",
      availableIn: [
        {
          city: "Delhi",
          theaters: [
            {
              value: "Theater 1",
              label: "Theater 1",
              availableDates: [
                {
                  day: "12",
                  month: "Aug",
                  weekday: "Mon",
                  slots: [
                    { value: "10-12", label: "10:00 AM - 12:00 PM" },
                    { value: "2-4", label: "2:00 PM - 4:00 PM" },
                  ],
                },
                {
                  day: "13",
                  month: "Aug",
                  weekday: "Tue",
                  slots: [
                    { value: "12-2", label: "12:00 PM - 2:00 PM" },
                    { value: "4-6", label: "4:00 PM - 6:00 PM" },
                  ],
                },
              ],
            },
            {
              value: "Theater 2",
              label: "Theater 2",
              availableDates: [
                {
                  day: "14",
                  month: "Aug",
                  weekday: "Wed",
                  slots: [
                    { value: "10-12", label: "10:00 AM - 12:00 PM" },
                    { value: "6-8", label: "6:00 PM - 8:00 PM" },
                  ],
                },
              ],
            },
          ],
        },
        {
          city: "Noida",
          theaters: [
            {
              value: "Theater 3",
              label: "Theater 3",
              availableDates: [
                {
                  day: "15",
                  month: "Aug",
                  weekday: "Thu",
                  slots: [
                    { value: "2-4", label: "2:00 PM - 4:00 PM" },
                    { value: "6-8", label: "6:00 PM - 8:00 PM" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Romantic Escape",
      imageUrl: "https://example.com/romantic-escape.jpg",
      description:
        "A heartwarming romantic drama that will make you believe in love.",
      availableIn: [
        {
          city: "Gurgaon",
          theaters: [
            {
              value: "Theater 4",
              label: "Theater 4",
              availableDates: [
                {
                  day: "16",
                  month: "Aug",
                  weekday: "Fri",
                  slots: [
                    { value: "10-12", label: "10:00 AM - 12:00 PM" },
                    { value: "2-4", label: "2:00 PM - 4:00 PM" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default testData;
