// src/components/Reservation.js

import React, { useState } from 'react';
import './Reservation.css';

const tables = [
    { id: 1, seats: 4 },
    { id: 2, seats: 4 },
    { id: 3, seats: 4 },
    { id: 4, seats: 4 },
    { id: 5, seats: 4 },
    { id: 6, seats: 4 },
    { id: 7, seats: 8 },
    { id: 8, seats: 8 },
    { id: 9, seats: 4 },
    { id: 10, seats: 12 },
    { id: 11, seats: 8 },
    { id: 12, seats: 4 },
    { id: 13, seats: 4 },
    { id: 14, seats: 4 },
    { id: 15, seats: 4 },
];

const Reservation = () => {
    const [reservedTable, setReservedTable] = useState(null);

    const handleReservation = (table) => {
        setReservedTable(table);
        alert(`Table ${table.id} reserved!`);
    };

    return (
        <section className="reservation">
            <h2>Reserve a Table</h2>
            <div className="table-grid">
                {tables.map((table) => (
                    <div key={table.id} className={`table-item table${table.id}`}>
                        <div className="table-info">
                            <p>Table {table.id} - Seats: {table.seats}</p>
                            <button onClick={() => handleReservation(table)}>Reserve</button>
                        </div>
                    </div>
                ))}
            </div>
            {reservedTable && (
                <div className="reserved-info">
                    <h3>Reserved Table Info</h3>
                    <p>Table {reservedTable.id} - Seats: {reservedTable.seats}</p>
                </div>
            )}
        </section>
    );
};

export default Reservation;
