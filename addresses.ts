export interface AddressLabel {
  address: string
  name: string
  description?: string
  url?: string
  category?: 'exchange' | 'team' | 'developer' | 'pool' | 'other'
}

export const knownAddresses: AddressLabel[] = [
  {
    address: 'DAJ88XgDfp1XrnuaLQ1ods7izJUMSbyLMa',
    name: 'Developer Address',
    description: 'Main developer funding address',
    url: 'https://www.deccord.com',
    category: 'developer'
  },
  {
    address: 'DC6CfnCdV8EjZTR6bwXgGCxi8V4B3Nwm8X',
    name: 'altcoinspool.com',
    description: 'Mining Pools address',
    url: 'https://altcoinspool.com',
    category: 'pool'
  },
  {
    address: 'DD4vpCxyMzctQhY8J9YEAD5LWV2UuCECAD',
    name: 'minorpool.com',
    description: 'Mining Pools address',
    url: 'https://minorpool.com',
    category: 'pool'
  },
  {
    address: 'DNiwm95UEAJ2TWX9X5cAmjaMKdaD4LC8bj',
    name: 'mecacex.com',
    description: 'Mecacex Exchange Hot Wallet',
    url: 'https://mecacex.com',
    category: 'exchange'
  },
  {
    address: 'D5ZX4ocNdQUuq8NwEGRLDA2Pq4PMN5THYM',
    name: 'zergpool.com',
    description: 'Mining Pools address',
    url: 'https://zergpool.com',
    category: 'pool'
  },
]

export function getAddressLabel(address: string): AddressLabel | undefined {
  return knownAddresses.find(a => a.address === address)
}
