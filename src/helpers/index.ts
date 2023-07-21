import regression, { DataPoint } from "regression";

import {
  GetKpisResponse,
  GetKpisResponseTransformed,
  GetProductsResponse,
  GetProductsResponseTransformed,
} from "@/state/types";

export const kpiDataTransformer = (
  response: Array<GetKpisResponse>
): GetKpisResponseTransformed => {
  const revenueExpenses = response[0].monthlyData.map(
    ({ month, revenue, expenses }) => ({
      name: month.substring(0, 3),
      revenue: revenue,
      expenses: expenses,
    })
  );

  const revenueProfits = response[0].monthlyData.map(
    ({ month, revenue, expenses }) => {
      return {
        name: month.substring(0, 3),
        revenue,
        profit: (revenue - expenses).toFixed(2),
      };
    }
  );

  const revenue = response[0].monthlyData.map(({ month, revenue }) => {
    return {
      name: month.substring(0, 3),
      revenue,
    };
  });

  const operationalExpenses = response[0].monthlyData.map(
    ({ month, operationalExpenses, nonOperationalExpenses }) => {
      return {
        name: month.substring(0, 3),
        "Operational Expenses": operationalExpenses,
        "Non Operational Expenses": nonOperationalExpenses,
      };
    }
  );

  const totalExpenses = response[0].totalExpenses;
  const expenseBreakDownData = Object.entries(
    response[0].expensesByCategory
  ).map(([key, value]) => {
    return [
      {
        name: key,
        value: value as string,
      },
      {
        name: `${key} of Total`,
        value: totalExpenses - value,
      },
    ];
  });

  const monthData = response[0].monthlyData;

  const formattedMonthData: Array<DataPoint> = monthData.map(
    ({ revenue }, i: number) => {
      return [i, revenue];
    }
  );
  const regressionLine = regression.linear(formattedMonthData);

  const predctionsData = monthData.map(({ month, revenue }, i: number) => {
    return {
      name: month,
      "Actual Revenue": revenue,
      "Regression Line": regressionLine.points[i][1],
      "Predicted Revenue": regressionLine.predict(i + 12)[1],
    };
  });

  return {
    revenueExpenses,
    revenueProfits,
    revenue,
    operationalExpenses,
    expenseBreakDownData,
    predctionsData,
  };
};

export const productDataTransformer = (
  response: Array<GetProductsResponse>
): GetProductsResponseTransformed => {
  const productExpenseData = response.map(({ _id, price, expense }) => {
    return {
      id: _id,
      price,
      expense,
    };
  });

  return {
    products: response,
    productExpenseData,
  };
};
