import connection from "../database/database.js";

export async function passengersTravels() {
    const allPassengersTravels = await connection.query(`
    SELECT "fullName" AS passenger, COUNT(passenger_travels.*) AS travels
    FROM passengers
    JOIN passenger_travels ON passengers.id = passenger_travels."passengerId"
    GROUP BY passengers."fullName"
    ORDER BY travels DESC
    `)
    console.log(allPassengersTravels)
    return allPassengersTravels
}