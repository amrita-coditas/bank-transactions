export const accountDetails = [
  {
    account_id: 'A001',
    account_holder: 'John Doe',
    account_type: 'Checking',
    balance: 1500.75,
    currency: 'USD',
    transactions: [
      {
        transaction_id: 'T001',
        date: '2024-07-01',
        amount: -200.0,
        currency: 'USD',
        description: 'Grocery Shopping',
      },
      {
        transaction_id: 'T002',
        date: '2024-07-05',
        amount: -50.0,
        currency: 'USD',
        description: 'Gas',
      },
      {
        transaction_id: 'T003',
        date: '2024-07-10',
        amount: 1000.0,
        currency: 'USD',
        description: 'Salary Deposit',
      },
    ],
  },
  {
    account_id: 'A002',
    account_holder: 'Jane Smith',
    account_type: 'Savings',
    balance: 5000.0,
    currency: 'USD',
    transactions: [
      {
        transaction_id: 'T004',
        date: '2024-07-02',
        amount: -100.0,
        currency: 'USD',
        description: 'Electricity Bill',
      },
      {
        transaction_id: 'T005',
        date: '2024-07-08',
        amount: 2000.0,
        currency: 'USD',
        description: 'Bonus Deposit',
      },
    ],
  },
];
