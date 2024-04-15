import NotionMagicLinkEmail from "@/components/EmailTemplate";
import { NextResponse } from "next/server";
import {Resend } from "resend";

export async function GET() {
    const resend = new Resend(process.env.RESEND_API_KEY);
    try{
        const {data} = await resend.emails.send({
            from: 'alarms@smartrf.cloud',
            to: 'kolinsr@gmail.com',
            subject: 'Smart RF Alarms',
            react: NotionMagicLinkEmail({loginCode: "www.smartrf.cloud"})
        });
        return NextResponse.json({'data': data});
    } catch(error) {
        return NextResponse.json({'error': error});
    }
}