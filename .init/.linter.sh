#!/bin/bash
cd /home/kavia/workspace/code-generation/cloud-resource-management-platform-311548-311558/react_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

