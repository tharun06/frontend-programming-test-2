#!/bin/bash
# Description : Zip up the files in the project and rm the answer files
# Copyright : (c) RiskSense, Inc.
# License : Proprietary

set -e

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
TEMP_DIR="frontend-programming-test"
STAGING_DIR="$HOME/$TEMP_DIR"
repo_base_dir="${DIR}/../"

if [ -d "$STAGING_DIR" ] ; then
    echo "Staging directory already exists! You need to manually delete before proceeding"
    exit 1
fi

echo "Copying over all the project files"
cp -r $repo_base_dir $STAGING_DIR

if [ -d "$STAGING_DIR/node_modules" ] ; then
  echo "Removing dependencies"
  rm -r $STAGING_DIR/node_modules
fi

if [ -d "$STAGING_DIR/.git" ] ; then
  echo "Removing git files"
  rm -fr $STAGING_DIR/.git
fi

if [ -d "$STAGING_DIR/src/test" ] ; then
  echo "Removing test files"
  rm -r $STAGING_DIR/src/test
fi

if [ -d "$STAGING_DIR/src/answers" ] ; then
  echo "Removing answers"
  rm -r $STAGING_DIR/src/answers
fi

echo "Zipping archive"
cd $HOME
zip -r frontend-programming-test.zip ./$TEMP_DIR
cd $DIR
mv $HOME/frontend-programming-test.zip $DIR

echo "Removing temp directory"
rm -Rf $STAGING_DIR
