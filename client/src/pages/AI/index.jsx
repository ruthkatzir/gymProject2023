
import React, { useEffect, useState } from "react";
import axios from "axios";
import WideTitleCard from "./WideTitleCard";
import WideTitle from "./WideTitle";
import AlertDialog from "./popupAI";

const MyComponent = () => {
    const [data, setData] = useState([]);
    const [isChoose, setIsChoose] = useState(false);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const day = "1";
        const time = "10:00:00";
        try {
            const response = await axios.post("http://localhost:3600/api/schedules/", {
                day,
                time,
            });
            setData(response.data);
        } catch (error) {
        }
    };

    const handleCardClick = () => {
        setIsChoose(true);
    };

    return (
        <>
            <WideTitle />
            <h2 style={{ textAlign: "center" }}>Choose your preferred option</h2>
            <div
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}
            >
                {data.map((item) => (
                    <div key={item.id}>
                        <WideTitleCard
                            cardTitle={item.LessonType}
                            cardText={item.StartHour}
                            cardType={item.ActiveType}
                            onClick={handleCardClick}
                            cardImgSrc={item.ActiveType}
                        />
                        {isChoose && <AlertDialog open={true} />}
                    </div>
                ))}
            </div>
        </>
    );
};

export default MyComponent;
