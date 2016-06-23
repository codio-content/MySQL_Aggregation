#!/bin/bash

# start on container startup checks the database existance 
# and prepopulate database

SAMPLE_DATA_DIR=/home/codio/workspace/.guides/sample-data
for NAME in "e_store"
do
  DATA=${SAMPLE_DATA_DIR}/${NAME}.sql
  DATABASE="${NAME}"

  LINES=$(mysqlshow $DATABASE | grep Database: | wc -l)
  if [ "x$LINES" == "x0" ]; then
    echo "Populate"
    mysql < ${DATA}
  fi
done
