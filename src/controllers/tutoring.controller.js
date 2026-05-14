export const tutoringHours = [
    { id: 201, subject: "Math", room: "LSC 104", startTime: "2026-02-10T09:00:00" },
    { id: 202, subject: "CS", room: "TECH 215", startTime: "2026-02-10T11:00:00" },
    { id: 203, subject: "Writing", room: "LIB 120", startTime: "2026-02-11T13:00:00" },
    { id: 204, subject: "Chemistry", room: "SCI 310", startTime: "2026-02-12T10:30:00" },
    { id: 205, subject: "Accounting", room: "BUS 205", startTime: "2026-02-13T14:00:00" }
];

export const getAllHours = (req, res) => {
    res.status(200).json({ data: tutoringHours });
}