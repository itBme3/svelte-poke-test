#!/bin/bash

SRC_LIB="src/lib";
SRC_TEST="src/test";
SRC_ROUTES="src/routes";
SRC="src $SRC_ROUTES";

[ ! -d graphd ] && mkdir graphd;

madge $SRC -i "graphd/src.svg";
# madge $SRC_LIB -i "graphd/src.lib.svg";
# madge $SRC_TEST -i "graphd/src.test.svg";
madge $SRC_ROUTES -i "graphd/src.routes.svg";

exit