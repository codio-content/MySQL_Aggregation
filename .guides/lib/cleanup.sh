#!/bin/bash

#!/bin/bash
for NAME in "e_store"
do
  echo "DROP DATABASE ${NAME};" | mysql
done