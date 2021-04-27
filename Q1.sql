-- SQLite
SELECT ar.Name AS ArtistName,
       count(al.Title) AS QtdeAlbums
FROM albums al
LEFT JOIN artists ar ON al.ArtistId = ar.ArtistId
GROUP BY 1
ORDER BY 2 DESC;