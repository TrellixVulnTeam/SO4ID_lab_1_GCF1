import React from "react";
import { useEffect, useState } from "react";


export function Reservations() {
    /*--- Código mágico que consulta el API ;D ----*/

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/reservations');
        const items = await data.json();
        setItems(items);
    };
    /*-----------------------------------------*/
    return (
        <div className=" d-flex justify-content-center">
            <aside className="col-lg margins" >
                <div className="card">
                    <h4 className="card-header">Reservaciones</h4>
                    <div className="card-body">
                        <div>
                            {items.map(item =>
                                <ul>
                                    <li>{item.id_space}</li>
                                    <li>{item.time}</li>
                                    <li>{item.car_plate}</li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </aside>
        </div>

    )
}