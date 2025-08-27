# Renaming Guide: Caribbean Fairy Tales Project

## Files Already Updated ✅
- `wrangler.toml` - Worker name changed to `caribbeanfairytales`
- `package.json` - Project name changed to `caribbeanfairytales`
- `setup-cf.sh` - Database names updated
- Database scripts updated to use new names

## External Resources to Rename

### 1. Cloudflare Pages Project
**Current:** `carribeanfairytales`
**New:** `caribbeanfairytales`

```bash
# You'll need to rename this in the Cloudflare Dashboard:
# 1. Go to https://dash.cloudflare.com
# 2. Navigate to Pages
# 3. Find your project "carribeanfairytales"
# 4. Go to Settings > General
# 5. Rename project to "caribbeanfairytales"
```

### 2. D1 Database
**Current:** `d1-carribeanfairytales` (ID: c5dd5b29-2527-4c21-9aec-b04f996db00f)
**New:** `caribbeanfairytales`

```bash
# Option 1: Rename existing database (if supported)
export CLOUDFLARE_API_TOKEN="_epC9MhxS157PVekMcArbHplNs6ddaq6Wxn8Yfzw"
# Check if rename is available in wrangler CLI

# Option 2: Create new database and migrate data
wrangler d1 create caribbeanfairytales

# Then copy the new database ID to wrangler.toml
# And migrate data from old to new database
```

### 3. GitHub Repository
**Current:** `https://github.com/max-chudnovsky/carribeanfairytales`
**New:** `https://github.com/max-chudnovsky/caribbeanfairytales`

```bash
# Rename repository on GitHub:
# 1. Go to https://github.com/max-chudnovsky/carribeanfairytales
# 2. Click Settings tab
# 3. Scroll down to "Repository name" section
# 4. Change name to "caribbeanfairytales"
# 5. Click "Rename"

# Update local git remote:
git remote set-url origin https://github.com/max-chudnovsky/caribbeanfairytales.git
```

### 4. Update Cloudflare Pages Integration
After renaming the GitHub repository:

```bash
# In Cloudflare Dashboard:
# 1. Go to Pages > caribbeanfairytales (after renaming)
# 2. Go to Settings > Builds & deployments
# 3. Update GitHub integration to point to new repository name
```

## Complete Rename Process

1. **Rename GitHub Repository** (as shown above)
2. **Rename Cloudflare Pages Project** (in dashboard)
3. **Create new D1 database** with correct name:
   ```bash
   export CLOUDFLARE_API_TOKEN="_epC9MhxS157PVekMcArbHplNs6ddaq6Wxn8Yfzw"
   wrangler d1 create caribbeanfairytales
   ```
4. **Update wrangler.toml** with new database ID
5. **Migrate data** to new database:
   ```bash
   wrangler d1 execute caribbeanfairytales --remote --file=./db/schema.sql
   ```
6. **Update Cloudflare Pages** to use new GitHub repo
7. **Delete old D1 database** (optional, after confirming everything works)

## Verification Steps
- [ ] GitHub repository renamed
- [ ] Cloudflare Pages project renamed  
- [ ] New D1 database created and populated
- [ ] wrangler.toml updated with new database ID
- [ ] Site deploys successfully with new names
- [ ] Database queries work correctly

## Notes
- The project files already use the correct `caribbeanfairytales` naming
- Only external Cloudflare resources need to be renamed
- Keep the existing database ID until migration is complete