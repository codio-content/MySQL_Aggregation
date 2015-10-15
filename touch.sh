#!/bash/bin

COUNT=10
while (( COUNT > 0 ))
do
	touch sql-6-$COUNT.sql
	(( COUNT -- ))
done