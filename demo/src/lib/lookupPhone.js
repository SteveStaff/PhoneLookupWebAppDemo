export async function lookupPhoneNumber(phonenumber, billingToken) {
  try {
    const response = await fetch("/api/lookup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({  phone: phonenumber, country: 'us', billingToken}),
    });

    if (!response.ok) throw new Error(`API returned status ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching phone data:", error);
    throw error;
  }
}
