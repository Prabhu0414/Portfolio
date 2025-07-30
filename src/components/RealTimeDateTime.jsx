import React, {useState, useEffect} from "react";

    const  RealTimeDateTime = () =>{
            const [dateTime, setDateTime] = useState(new Date());

            useEffect(() => {
                const interval = setInterval(() => {
                    setDateTime(new Date());
                }, 1000);
            }, []);
            
            const formateDateTime = (dt) => {
                const days = ["Sundays", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
                const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

                const day = days[dt.getDay()];
                const date = dt.getDate();
                const month = months[dt.getMonth()];
                const year = dt.getFullYear();

                let hours = dt.getHours();
                const minutes = dt.getMinutes();
                const seconds = dt.getSeconds();
                const ampm = hours >= 12 ? 'PM' : 'AM';
                hours = hours % 12 || 12;

                const pad = (n) => n.toString().padStart(2, '0');

                return `${day}, ${date}, ${month} ${year} - ${pad(hours)}: ${pad(minutes)}: ${pad(seconds)} ${ampm} `;
            };

            return (
                <div>
                    {formateDateTime(dateTime)}
                </div>
            )
        }
 export default RealTimeDateTime;   