import NotionMagicLinkEmail from "@/components/EmailTemplate";
import { NextResponse } from "next/server";
import {Resend } from "resend";

export async function GET() {
    const resend = new Resend(process.env.RESEND_API_KEY);

    try{
        const {data} = await resend.batch.send([
            {
            from: 'Smart RF Alarms <alarms@smartrf.cloud>',
            to: [
            'Collins<kolinsr@gmail.com>', 
            'Dan<danielotieno993@gmail.com>', 
            'Rotich<collinsrotich001@gmail.com>',
            'Alarms<alarms@smartrf.cloud>', 
            'CR7<crotich@safaricom.co.ke>',
            'Bernard<Bjuma@safaricom.co.ke>',
            'Simon<smbogo@safaricom.co.ke>',
            'Maingi<jmaingi@safaricom.co.ke>',
            'Tabby<tngure@safaricom.co.ke>',
            'Dan<dootieno@safaricom.co.ke>',
            ],
            subject: 'Smart RF Alarms',
            react: NotionMagicLinkEmail({loginCode: "www.smartrf.cloud"})
        }
        ]
    );
        return NextResponse.json({'data': data});
    } catch(error) {
        return NextResponse.json({'error': error});
    }
}