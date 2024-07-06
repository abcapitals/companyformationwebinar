import { NextResponse } from "next/server";
import { google } from "googleapis"
import key from "../../../secrets.json" assert {type: 'json'}

export async function POST(request: Request) {
    const body = await request.json();
    const fullNumber=body.countryCode+' '+body.phone;
    const client = new google.auth.JWT(process.env.CLIENT_EMAIL, undefined, process.env.PRIVATE_KEY?.replace(/\\n/g, '\n'), ['https://www.googleapis.com/auth/spreadsheets'])
    const sheets = google.sheets({version: 'v4', auth: client})
    try {
        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.SHEET_ID,
            range: 'Sheet1!A:E',
            insertDataOption: 'INSERT_ROWs',
            valueInputOption: 'RAW',
            requestBody:{
                values: [[body.name,fullNumber,body.email,body.service,body.message]]
            }
        })
    } catch (error) {
        return new NextResponse("Sheet API error",{status: 500})
    }
    return new NextResponse("Form Submitted Successfully", {status: 200})
}