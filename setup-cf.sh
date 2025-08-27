#!/bin/bash

# Caribbean Fairy Tales - Cloudflare Setup Script
echo "🌴 Setting up Caribbean Fairy Tales on Cloudflare Workers..."

# Set the API token
export CLOUDFLARE_API_TOKEN="_epC9MhxS157PVekMcArbHplNs6ddaq6Wxn8Yfzw"

echo "✅ Cloudflare API token configured"

# Authenticate with Cloudflare
echo "🔐 Authenticating with Cloudflare..."
wrangler auth list

# Create D1 database for development
echo "💾 Creating D1 database for development..."
wrangler d1 create caribbeanfairytales

echo "📝 Please update wrangler.toml with the database ID from above"

# Create D1 database for production
echo "💾 Creating D1 database for production..."
wrangler d1 create caribbeanfairytales-prod

echo "📝 Please update wrangler.toml [env.production] with the production database ID"

# Initialize the database schema
echo "🗄️ Initializing database schema..."
wrangler d1 execute caribbeanfairytales --local --file=./db/schema.sql

echo "🚀 Cloudflare setup complete!"
echo ""
echo "Next steps:"
echo "1. Update wrangler.toml with the database IDs shown above"
echo "2. Run 'npm install' to install dependencies"
echo "3. Run 'npm run dev' to start development server"
echo "4. Run 'npm run deploy' to deploy to Cloudflare Pages"