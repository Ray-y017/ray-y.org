export default async (request, context) => {
    const accept = request.headers.get("accept") ?? "";
    const userAgent = request.headers.get("user-agent") ?? "";
    const isCurl = accept.includes("application/json") || userAgent.startsWith("curl/");

    if (isCurl) {
        const url = new URL(request.url);
        let filename;

        if (url.pathname === "/" || url.pathname === "/index")
            filename = "curl-index.txt";
        else if (url.pathname === "/proj")
            filename = "curl-proj.txt";
        else if (url.pathname === "/technologies")
            filename = "curl-technologies.txt";
        else if (url.pathname === "/contact")
            filename = "curl-contact.txt";


        if (filename) {
            const jsonUrl = new URL(`/curl/${filename}`, request.url);
            const res = await fetch(jsonUrl);
            return new Response(res.body, {
                status: res.status,
                headers: { "content-type": "application/json" },
            });
        }
    }

    return context.next();
};