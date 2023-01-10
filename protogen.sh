#!/bin/bash

cd $1
rm -rf $1/src/pb
npx proto-loader-gen-types --longs=String --enums=String --defaults --keepCase --oneofs --grpcLib=@grpc/grpc-js --outDir=src/pb/ ../proto/*.proto
