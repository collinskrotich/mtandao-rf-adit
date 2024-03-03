'use client';

import React, { useEffect, useState }  from "react";
import axios from 'axios';

export default function App() {
    const [dataa, setDataa] = useState([])

    useEffect(() => {
        axios.get('/api/payload')
        .then((result) => {
            console.log("Getting data from server ::::",result.data)
            const sortedData = result.data.sort((a, b) => new Date(b.timeStamp) - new Date(a.timeStamp));
            setDataa(sortedData);

        }).catch((err) => {
            console.log(err)
        });

    }, []);

    return(
        <div>
            Test
        </div>
    )
}