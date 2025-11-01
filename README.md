# PhoneLookupWebAppDemo
Next.js demo app that connects to the Telecom Trust Center (TTC) API to perform phone number lookups and display caller's information. 


- Input a phone number and country
- Calls the TTC `/phoneLookup` API endpoint
- Displays returned data including:
  - Name / Title
  - Type (Person / Company)
  - Summary & Category
  - Website & Address
  - Trust level (e.g., Verified)
- Clean responsive UI built with **Tailwind CSS**




## 🧩 API Reference

**Endpoint:**

POST https://api.telecomtrustcenter.com/v1/phoneLookup


How It Works

User enters a phone number and country.

App sends a POST request to the TTC /phoneLookup endpoint.

API returns enriched data.

The Web app displays the results in a clean, formatted layout.


⚙️ Tech Stack

Next.js 14+

React

Tailwind CSS

Axios (for API requests)


To test the API, you’ll need a valid X-Billing-Token from Telecom Trust Center: https://www.telecomtrustcenter.com/ 
