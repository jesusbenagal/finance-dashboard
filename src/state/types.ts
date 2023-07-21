export interface ExpensesByCategory {
  salaries: number;
  supplies: number;
  services: number;
}

export interface Month {
  id: string;
  month: string;
  revenue: number;
  expenses: number;
  nonOperationalExpenses: number;
  operationalExpenses: number;
}

export interface Day {
  id: string;
  date: string;
  revenue: number;
  expenses: number;
}

export interface GetKpisResponse {
  id: string;
  _id: string;
  __v: number;
  totalProfit: number;
  totalRevenue: number;
  totalExpenses: number;
  expensesByCategory: ExpensesByCategory;
  monthlyData: Array<Month>;
  dailyData: Array<Day>;
  createdAt: string;
  updatedAt: string;
}

export interface GetProductsResponse {
  id: string;
  _id: string;
  __v: number;
  price: number;
  expense: number;
  transactions: Array<string>;
  createdAt: string;
  updatedAt: string;
}

export interface GetTransactionsResponse {
  id: string;
  _id: string;
  __v: number;
  buyer: string;
  amount: number;
  productIds: Array<string>;
  createdAt: string;
  updatedAt: string;
}

export interface RevenueExpenses {
  name: string;
  revenue: number;
  expenses: number;
}

export interface RevenueProfits {
  name: string;
  revenue: number;
  profit: string;
}

export interface Revenue {
  name: string;
  revenue: number;
}

export interface OperationalExpenses {
  name: string;
  "Operational Expenses": number;
  "Non Operational Expenses": number;
}

export interface ExpenseBreakdown {
  name: string;
  value: string | number;
}

export interface Predictions {
  name: string;
  "Actual Revenue": number;
  "Regression Line": number;
  "Predicted Revenue": number;
}

export interface GetKpisResponseTransformed {
  revenueExpenses: RevenueExpenses[];
  revenueProfits: RevenueProfits[];
  revenue: Revenue[];
  operationalExpenses: OperationalExpenses[];
  expenseBreakDownData: ExpenseBreakdown[][];
  predctionsData: Predictions[];
}

export interface ProductExpense {
  id: string;
  price: number;
  expense: number;
}

export interface GetProductsResponseTransformed {
  products: GetProductsResponse[];
  productExpenseData: ProductExpense[];
}
