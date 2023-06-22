import { passengersTravels } from "../repositories/passenger.repository.js";
import connection from "../database/database.js";

export async function getPassengers(req, res){
    try{
        const allPassengersTravels = await connection.query(`
        SELECT "fullName" AS passenger, COUNT(passenger_travels.*) AS travels
        FROM passengers
        JOIN passenger_travels ON passengers.id = passenger_travels."passengerId"
        GROUP BY passengers."fullName"
        ORDER BY travels DESC
        `)
        res.send(allPassengersTravels.rows)
    } catch (error){
        res.send(error)
    }
}