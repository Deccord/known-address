# Address Labels for dcdexplorer.com

This repository maintains a list of known Deccord addresses with labels that appear on **[dcdexplorer.com](https://dcdexplorer.com)**. If you own an exchange, mining pool, or other relevant service and would like your address labeled, follow the instructions below.

## Structure of `addresses.ts`
Each entry in the `knownAddresses` array follows this structure:

```typescript
export interface AddressLabel {
  address: string
  name: string
  description?: string
  url?: string
  category?: string
}
```

### Example Entry
```typescript
{
  address: 'DAJ88XgDfp1XrnuaLQ1ods7izJUMSbyLMa',
  name: 'Developer Address',
  description: 'Main developer funding address',
  url: 'https://www.deccord.com',
  category: 'developer'
}
```

## How to Add Your Address
1. **Fork this repository.**
2. Open `addresses.ts` in your fork.
3. Add your address **at the bottom** of the `knownAddresses` array, following the structure above.
4. Submit a **pull request (PR)** with the changes.

### Rules for Adding Addresses
- The address **must be valid** and related to Deccord.
- Use a **clear and accurate name** for your service.
- The **description** should explain the purpose of the address.
- The **URL** should be an official website (optional but recommended).
- The **category** field can be any relevant category, but only appropriate ones will be accepted.

## Contact
For any issues or questions, open a GitHub **issue** or contact the Deccord team via [https://discord.gg/rhfYv7r9Q4](https://discord.gg/rhfYv7r9Q4).

