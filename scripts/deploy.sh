#!/bin/bash
# =============================================================================
# BitCraft Studio — One-Command Cloudflare Workers Deploy Script
# =============================================================================
# Usage:
#   ./scripts/deploy.sh              → Deploy to default environment
#   ./scripts/deploy.sh --prod        → Deploy to production
#   ./scripts/deploy.sh --preview     → Deploy to preview
# =============================================================================

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

log_info()  { echo -e "${BLUE}[INFO]${NC} $1"; }
log_warn()  { echo -e "${YELLOW}[WARN]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }
log_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }

# Parse arguments
ENV=""
while [[ $# -gt 0 ]]; do
  case $1 in
    --prod|--production)
      ENV="production"
      shift
      ;;
    --preview)
      ENV="preview"
      shift
      ;;
    --help|-h)
      echo "Usage: ./scripts/deploy.sh [--prod|--preview]"
      echo ""
      echo "Options:"
      echo "  --prod, --production   Deploy to production environment"
      echo "  --preview              Deploy to preview environment"
      echo "  -h, --help             Show this help message"
      exit 0
      ;;
    *)
      log_error "Unknown option: $1"
      echo "Run ./scripts/deploy.sh --help for usage."
      exit 1
      ;;
  esac
done

cd "$PROJECT_ROOT"

# Check for wrangler
echo ""
log_info "Checking wrangler CLI..."
if ! command -v wrangler &> /dev/null && ! command -v npx &> /dev/null; then
  log_error "wrangler or npx not found. Please install dependencies first:"
  echo "  bun install"
  exit 1
fi

# Check for wrangler authentication
echo ""
log_info "Checking Cloudflare authentication..."
if ! npx wrangler whoami &> /dev/null; then
  log_warn "Not logged in to Cloudflare."
  echo ""
  echo "Please run:"
  echo "  npx wrangler login"
  echo ""
  echo "Or set the CLOUDFLARE_API_TOKEN environment variable."
  exit 1
fi
log_success "Authenticated with Cloudflare"

# Build the project
echo ""
log_info "Building project for Cloudflare Workers..."
npm run build

if [[ ! -f "dist/server/index.mjs" ]]; then
  log_error "Build failed: dist/server/index.mjs not found"
  exit 1
fi
log_success "Build complete"

# Deploy
echo ""
if [[ -n "$ENV" ]]; then
  log_info "Deploying to ${ENV} environment..."
  npx wrangler deploy --env "$ENV"
else
  log_info "Deploying to default environment..."
  npx wrangler deploy
fi

echo ""
log_success "Deployment complete!"
echo ""
