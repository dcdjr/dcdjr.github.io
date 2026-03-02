#!/bin/bash

# dump.sh — print all source files to stdout

set -e

echo "===== PORTFOLIO DUMP START ====="
echo

# Find and print relevant files
find . -type f \
    ! -path "./.git/*" \
    ! -path "./assets/images/*" \
    ! -name "*.png" \
    ! -name "*.jpg" \
    ! -name "*.jpeg" \
    ! -name "*.gif" \
    ! -name "*.tar.gz" \
    ! -name "dump.sh" \
    | sort | while read -r file; do

    echo "----- FILE: $file -----"
    cat "$file"
    echo
done

echo "===== PORTFOLIO DUMP END ====="
