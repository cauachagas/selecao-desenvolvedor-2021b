-- SQLite
SELECT a.title AS AlbumTitle,
       printf("%.2f", COUNT(t.trackid)*t.UnitPrice) AS Price,
       SUM(t.Milliseconds)/60000 AS Duration_minutes,
       printf("%.2f",(SUM(t.Bytes)/1000000.0)) AS Size_MB
FROM tracks t
LEFT JOIN albums a ON a.albumid = t.albumid
GROUP BY 1