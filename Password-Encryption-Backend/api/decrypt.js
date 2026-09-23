export default function handler(req, res) {

    // CORS headers
    res.setHeader(
        "Access-Control-Allow-Origin",
        "*"
    );

    res.setHeader(
        "Access-Control-Allow-Methods",
        "POST, OPTIONS"
    );

    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type"
    );


    // Handle browser preflight request
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }


    // Allow only POST requests
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }


    const encryption_key = 2;

    const text = req.body.text;

    let decrypted = "";


    for (let i of text) {

        if (i === "a") {

            decrypted += "z";

        }

        else if (i === "$") {

            decrypted += " ";

        }

        else {

            decrypted += String.fromCharCode(
                i.charCodeAt(0) - encryption_key
            );

        }

    }


    res.status(200).json({
        decrypted: decrypted
    });

}