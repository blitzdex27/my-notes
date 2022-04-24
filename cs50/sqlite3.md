```sqlite3
sqlite3
sqlite> .mode csv
sqlite> .import 'Favorite TV shows.csv' shows
.schema
```

Output:

````sql
CREATE TABLE shows (
    "Timestamp" TEXT,
    "title" TEXT,
    "genres"TEXT
)

```sql
SELECT columns FROM table;
````

Functions available in sql to alter the data

```sql
AVG
COUNT
DISTINCT
LOWER
MAX
MIN
UPPER
```

Conditions

```sql
WHERE
LIKE
ORDER BY
LIMIT
GROUP BY
```

Wild card character 
```sql
%
```
