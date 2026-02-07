/*
  Timetable Component
  Displays weekly subject schedule for students
*/

export default function Timetable() {
  // Static timetable data (later fetched from backend)
  const timetableData = [
    {
      day: "Monday",
      slots: [
        { time: "9:00 - 10:00", subject: "Mathematics" },
        { time: "10:00 - 11:00", subject: "Science" },
        { time: "11:00 - 12:00", subject: "English" },
      ],
    },
    {
      day: "Tuesday",
      slots: [
        { time: "9:00 - 10:00", subject: "Science" },
        { time: "10:00 - 11:00", subject: "Mathematics" },
        { time: "11:00 - 12:00", subject: "Computer" },
      ],
    },
    {
      day: "Wednesday",
      slots: [
        { time: "9:00 - 10:00", subject: "English" },
        { time: "10:00 - 11:00", subject: "Science" },
        { time: "11:00 - 12:00", subject: "Mathematics" },
      ],
    },
    {
      day: "Thursday",
      slots: [
        { time: "9:00 - 10:00", subject: "Computer" },
        { time: "10:00 - 11:00", subject: "English" },
        { time: "11:00 - 12:00", subject: "Science" },
      ],
    },
    {
      day: "Friday",
      slots: [
        { time: "9:00 - 10:00", subject: "Mathematics" },
        { time: "10:00 - 11:00", subject: "Computer" },
        { time: "11:00 - 12:00", subject: "English" },
      ],
    },
  ];

  return (
    <div className="p-6">

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Weekly Timetable
      </h2>

      {/* Timetable Layout */}
      <div className="space-y-4">
        {timetableData.map((dayData, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-5"
          >
            {/* Day Name */}
            <h3 className="text-lg font-semibold text-blue-600 mb-3">
              {dayData.day}
            </h3>

            {/* Time Slots */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {dayData.slots.map((slot, i) => (
                <div
                  key={i}
                  className="border rounded-lg p-3 text-center"
                >
                  <p className="text-sm text-gray-500">
                    {slot.time}
                  </p>
                  <p className="font-semibold text-gray-800 mt-1">
                    {slot.subject}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
