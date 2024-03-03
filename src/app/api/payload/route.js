// /pages/api/payload/route.js

import { NextApiRequest, NextApiResponse } from 'next';
import AWS from 'aws-sdk';
import { config } from 'dotenv';
import { NextResponse } from 'next/server';
config();

AWS.config.update({
    apiVersion: 'latest',
    region: process.env.MY_AWS_REGION || "",
    accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY || "",
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();

export async function GET() {
    try {
        const params = {
            TableName: "SmartRF_Table10"
        };
        const response = await dynamoClient.scan(params).promise();
        console.log("mayoo",response.Items[0]);
        console.log("shidaaa",response.Items[1]);
        console.log("shidaaa",response.Items[2]);

        const formattedData = response.Items.map(item => ({
            Longitude: item.Longitude,
            Latitude: item.Latitude,
            timestamp: item.timestamp,
            'Distance to Obstruction': item.distance_to_obstruction,
            Azimuth: item.Azimuth,
            Height: item.Height,
            Tilt: item.Tilt,
            Roll: item.Roll
          }));

        // Check if any items were retrieved
        if (response.Items && response.Items.length > 0) {
            return new NextResponse(
                { status: 200 },
                { body: formattedData },
            );
        } else {
            return new NextResponse(
                { status: 404 },
                { body: { message: 'No items found' } }
            );
        }
    } catch (error) {
        console.error(" woi", error);
        return new NextResponse(
            { status: 500 },
            { body: { error: 'Internal Server Error' } }
        );
    }
};
