#!/usr/bin/env bash
set -eou pipefail

if [ $# -eq 0 ]; then
  echo "Usage: $0 <subcommand>"
  echo
  echo "Subcommands:"
  echo "  migrate   Run migrations"
  echo
  exit 1
fi

if [ "$1" = "migrate" ]; then
  echo "This automatic code migration is provided by grit.io"
  echo "Visit https://app.grit.io/studio?preset=openai_v4 for more details."
  shift
  npx -y @getgrit/launcher init
  npx -y @getgrit/launcher apply openai_v4 "$@"
else
  echo "Unknown subcommand $1; Expected 'migrate'" >&2
  exit 1
fi
