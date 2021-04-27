-- SQLite
SELECT c.FirstName || " " || c.LastName AS FullName,
       printf("%.2f", SUM(i.Total)) AS Total
FROM customers c
LEFT JOIN invoices i ON i.CustomerId = c.CustomerId
GROUP BY 1
ORDER BY 2 DESC LIMIT 20;