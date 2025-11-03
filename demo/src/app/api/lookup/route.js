export async function POST(request) {
  try {
    const { phone, billingToken } = await request.json();

       if (!billingToken) {
      return new Response(
        JSON.stringify({ error: "Billing token is required" }),
        { status: 400 }
      );
    }

    const response = await fetch("https://api.telecomtrustcenter.com/v1/phoneLookup", {
      method: "POST",
      headers: {
        "X-Billing-Token": billingToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone, country: "us" }),
    });

    let data;
    const contentType = response.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      data = await response.json(); // parse JSON if returned
    } else {
      const text = await response.text(); // fallback to raw text
      data = { message: text }; // wrap it in an object for consistency
    }

    return Response.json(data);
  } catch (error) {
    console.error("Server error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch lookup", details: error.message }),
      { status: 500 }
    );
  }
}
