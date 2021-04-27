-- SQLite
SELECT g.Name AS Genre,
       printf("%.2f", SUM(ii.Quantity*ii.UnitPrice)) AS TotalSold,
       COUNT(ii.Quantity) AS QtdeSold
FROM genres g
LEFT JOIN tracks t ON g.GenreId = t.GenreId
LEFT JOIN invoice_items ii ON t.TrackId = ii.TrackId
WHERE ii.Quantity IS NOT NULL
GROUP BY Genre