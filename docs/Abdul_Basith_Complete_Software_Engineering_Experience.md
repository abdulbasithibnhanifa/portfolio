# Abdul Basith — Complete Software Engineering Experience Inventory

> Comprehensive working inventory reconstructed from the available AutoShipp master inventory, historical resumes, cover-letter evidence, and supporting engineering material.
>
> **Evidence rule:** This is intentionally broader than a resume. It preserves architecture/design, implementation, investigation, validation, operations, documentation, and AI-assisted engineering. It does not invent unsupported projects.
>
> **Ownership rule:** `Designed/Architected`, `Implemented/Shipped`, `Investigated`, `Validated`, and `Concept` are kept distinct wherever the available evidence supports that distinction.

---

# Table of Contents

1. [Career / Engineering Profile](#career--engineering-profile)
2. [AutoShipp Experience](#autoshipp-experience)
3. [Additional AutoShipp Architecture Systems](#additional-autoshipp-architecture-systems)
4. [Independent / Academic Projects](#independent--academic-projects)
5. [Technical Capability Inventory](#technical-capability-inventory)
6. [Engineering Practices](#engineering-practices)
7. [Verified Numbers and Evidence](#verified-numbers-and-evidence)
8. [Evidence / Credibility Notes](#evidence--credibility-notes)

---

# Career / Engineering Profile

- BCA graduate (2022–2025).
- Full-stack engineer with a strong backend focus.
- Hands-on AI application engineering experience.
- Experience spanning backend APIs, databases, integrations, queues, authentication, authorization, migrations, production validation, system architecture, and AI orchestration.
- AutoShipp experience: Full-Stack Engineer & Architect, Mar 2025 – Jun 2025.
- Technical leadership was primarily technical rather than people-management: planning, architecture investigation, risk identification, documentation, validation, and AI-agent workflow design.
- Designed and operated an AI-assisted engineering workflow for a two-person team.
- Worked on real production/customer systems.

## Engineering Growth

```text
BCA / academic foundations
        ↓
Frontend + programming
        ↓
Python / JavaScript / web development
        ↓
MERN / full-stack applications
        ↓
Backend APIs + databases
        ↓
AutoShipp production engineering
        ↓
PostgreSQL + migrations + Redis/BullMQ
        ↓
Shopify + Meta/WhatsApp + shipping integrations
        ↓
Identity/RBAC + multi-tenant SaaS
        ↓
AI systems + RAG + LLM orchestration
        ↓
System architecture + AI-assisted engineering
```

---

# AutoShipp Experience


> **Purpose:** Master inventory of the user's work performed under the AutoShipp company. This is intentionally broader than a resume. It includes products, client work, engineering work, architecture, migrations, integrations, debugging, infrastructure, documentation, AI-assisted engineering, and operational work.

---

# 01. AutoShipp Shipping Automation

## Product / Project

- Worked on the AutoShipp Shipping Automation product.
    
- Investigated the complete order-to-shipment lifecycle.
    
- Inspected the existing shipping automation source code.
    
- Investigated Shopify-originated orders.
    
- Investigated Shiprocket-originated orders.
    
- Investigated ShipXpeed-originated orders.
    
- Investigated other shipping-provider/aggregator flows.
    
- Investigated unified order intake.
    
- Investigated order normalization.
    
- Investigated shipping-provider selection.
    
- Investigated provider ownership.
    
- Investigated provider locking.
    
- Investigated brand-level shipping configuration.
    
- Investigated courier availability.
    
- Investigated courier scoring.
    
- Investigated courier selection.
    
- Investigated shipment creation.
    
- Investigated AWB generation.
    
- Investigated shipping label generation.
    
- Investigated tracking.
    
- Investigated COD orders.
    
- Investigated prepaid orders.
    
- Investigated COD verification.
    
- Investigated failure handling.
    
- Investigated retry behavior.
    
- Investigated idempotency.
    
- Investigated webhook-driven shipping updates.
    
- Investigated queue/worker-based processing.
    
- Investigated the API layer.
    
- Investigated the UI/dashboard.
    
- Investigated provider-specific controllers.
    
- Investigated existing runtime configuration.
    

## Important business rule investigated

You established that an order originating from a shipping aggregator should not arbitrarily jump to another aggregator.

For example:

```text
Shiprocket-originated order
        ↓
Shiprocket
        ↓
Select best courier available through Shiprocket
```

rather than:

```text
Shiprocket order
        ↓
Randomly move to ShipXpeed
```

This distinction between **order source/provider ownership** and **courier selection** was an important part of the shipping architecture work.

---

# 02. Shipping Automation Client Demo Preparation

- Prepared the Shipping Automation project for client demonstration.
    
- Inspected the actual source code before making claims about functionality.
    
- Inspected existing controllers and services.
    
- Inspected webhook handlers.
    
- Inspected application configuration.
    
- Inspected order-processing code.
    
- Inspected provider-specific code.
    
- Identified what is actually implemented.
    
- Identified what is partially implemented.
    
- Identified what is missing.
    
- Identified unknowns.
    
- Identified potential blockers.
    
- Avoided coding before establishing evidence.
    
- Prepared/updated technical understanding of the current workflow.
    
- Worked with the Shipping Automation workflow documentation.
    

---

# 03. Shipping Automation Source-Code Investigation

Concrete files/directories you inspected included:

- `server.js`
    
- `appConfig.js`
    
- `index.js`
    
- `webhooks.js`
    
- `orders.js`
    
- `OrderController.js`
    
- `ShopifyWebhookController.js`
    
- `ShipxpeedWebhookController.js`
    
- `src`
    
- `Artifacts`
    
- `.agents`
    

You used this investigation to establish the real implementation state instead of relying on assumptions or outdated documentation.

---

# 04. Shipping Automation Documentation

Worked on:

- `AutoShip_Shipping_Automation_Workflow_Obsidian.md`
    
- Shipping automation workflow documentation.
    
- Current-state documentation.
    
- Target-state documentation.
    
- Gap documentation.
    
- Implementation verification.
    
- Unknown-state tracking.
    

You specifically required documentation to distinguish:

- Implemented.
    
- Partially implemented.
    
- Planned.
    
- Missing.
    
- Unknown.
    

---

# 05. AutoShipp Platform Consolidation

One of your largest AutoShipp engineering workstreams.

## Objective

Consolidate shared business entities from the legacy `fit` schema into the unified AutoShipp platform schema.

Worked on:

- Architecture investigation.
    
- Ownership analysis.
    
- Entity mapping.
    
- Database mapping.
    
- Migration planning.
    
- Runtime analysis.
    
- Migration safety.
    
- Feature flags.
    
- Dual writes.
    
- Read cutovers.
    
- Schema parity.
    
- Production validation.
    

---

# 06. Fit → Platform Data Consolidation

Worked on consolidating:

```text
fit
 ↓
AutoShipp Platform
```

with the goal of canonical ownership of shared business entities.

Worked on:

- `fit_admins`
    
- `fit_operator_roles`
    
- `fit_shopify_connections`
    
- `fit_products`
    
- `fit_tenant_configs`
    

and corresponding platform entities.

---

# 07. Platform Consolidation — Approved Scope

Worked on:

```text
fit_admins
    ↓
public.identity_users
```

```text
fit_operator_roles
    ↓
public.identity_user_roles
```

```text
fit_shopify_connections
    ↓
public.core_integrations
public.core_integration_credentials
```

---

# 08. Platform Consolidation — Deferred Scope

Investigated but deliberately deferred:

```text
fit_products
    ↓
public.commerce_products
```

and:

```text
fit_tenant_configs
    ↓
public.core_accounts
```

You specifically avoided presenting these as completed migrations.

---

# 09. Zero-Downtime Migration Engineering

Worked under a production-safe migration strategy.

Requirements included:

- Zero downtime.
    
- Live production traffic.
    
- No destructive migration.
    
- No table drops.
    
- No read cutover without parity validation.
    
- Feature-flagged migration.
    
- Dual-write approach.
    
- Runtime validation.
    
- Backup before risky work.
    
- Rollback awareness.
    

---

# 10. Neon PostgreSQL Engineering

Worked extensively with the AutoShipp Neon PostgreSQL database.

Work included:

- Database inspection.
    
- Schema inspection.
    
- Table inventory.
    
- Migration.
    
- Data validation.
    
- Record-count validation.
    
- Legacy table analysis.
    
- Public/fit schema comparison.
    
- JSONB data analysis.
    
- Database documentation.
    
- Database cleanup.
    

---

# 11. AutoShipp Database Audit

Audited the AutoShipp database and established:

- 80 total tables.
    
- 49 tables in `public`.
    
- 31 tables in `fit`.
    
- 48 active tables.
    
- 28 legacy duplicates.
    
- 2 unused duplicates in `fit`.
    

Also validated platform records including:

- `public.core_accounts`
    
- `public.core_integrations`
    
- `public.core_integration_credentials`
    

---

# 12. Database Backup / Production Safety

- Created a Neon snapshot backup before platform consolidation work.
    
- Used backups as part of production-safe migration planning.
    
- Validated database state before making structural changes.
    

---

# 13. AutoShipp Database Documentation

Created/maintained:

- `HANDOVER_PLATFORM_CONSOLIDATION.md`
    
- `AutoShipp_Platform_Database_Reference_Manual.md`
    
- `AutoShipp_DB_Mermaid_Diagrams.md`
    
- `autoshipp-platform-DB-Doc.md`
    

Worked on:

- Database reference documentation.
    
- Entity descriptions.
    
- Table relationships.
    
- Ownership.
    
- Legacy vs active tables.
    
- Mermaid diagrams.
    
- Current DB state.
    
- Migration state.
    

---

# 14. Database Cleanup / Legacy Cleanup

Worked on identifying and removing obsolete database/application structures.

Concrete work included:

- Removing `src/shared/database/migrate-app-domain.ts`.
    
- Investigating obsolete `tenants` table exports.
    
- Investigating obsolete legacy database structures.
    
- Verifying whether old objects were still used before removal.
    

---

# 15. Platform Identity Consolidation

Worked on moving legacy identity/admin concepts toward unified AutoShipp platform identity.

Worked with:

```text
fit.fit_admins
        ↓
public.identity_users
```

and:

```text
fit.fit_operator_roles
        ↓
public.identity_user_roles
```

---

# 16. Admin Dual-Write

Implemented/validated admin dual-write behavior.

Validated creation of:

- `fit.fit_admins`
    
- `public.identity_users`
    
- `public.identity_user_accounts`
    
- `public.identity_user_roles`
    

Worked through:

- Admin creation.
    
- Platform identity creation.
    
- Account assignment.
    
- Role assignment.
    
- Feature-flag-controlled dual write.
    

---

# 17. AdminService Investigation

Identified an important implementation issue:

- Admin dual-write behavior existed in seeding.
    
- It was not yet implemented in the proper `AdminService` runtime path.
    

This became a documented blocker/gap.

---

# 18. Platform Identity User Type

Added/worked with:

```text
user_type
```

on:

```text
public.identity_users
```

using:

```text
identity_user_type_enum
```

---

# 19. Platform RBAC Migration

Worked on:

**Phase 2B.3 — Platform Authorization Consolidation**

including:

- WBS.
    
- TDS.
    
- Architecture.
    
- Migration plan.
    
- Platform roles.
    
- Permissions.
    
- Account-scoped authorization.
    
- User types.
    
- Identity relationships.
    

---

# 20. RBAC Repository Audit

Audited the existing codebase to determine whether platform RBAC was actually operational.

Discovered:

- Platform RBAC entities existed.
    
- Entities were not actually imported/used.
    
- Permission decorators were not present.
    
- Runtime authorization was still largely based on legacy RBAC.
    

This prevented a false assumption that platform RBAC was already implemented everywhere.

---

# 21. AuthService / JWT Context Migration

Completed PR-06.

Implemented:

```text
resolveActiveUserContext()
```

which selects:

```text
resolveLegacyUserContext()
```

or:

```text
resolvePlatformUserContext()
```

based on:

```text
FF_PLATFORM_AUTH_READ_CUTOVER
```

---

# 22. AccountVisibilityGuard

Implemented PR-07:

**AccountVisibilityGuard**

for account-level access control.

---

# 23. PermissionsGuard Platform Integration

Implemented PR-08.

Extended:

**PermissionsGuard**

to support:

- Legacy role-based identities.
    
- Platform RBAC identities.
    

---

# 24. Controller Authorization Audit

Worked on PR-09:

**Controller Authorization Adoption — Discovery & Plan**

Audited controller authorization coverage.

Identified:

- Missing `PermissionsGuard`.
    
- Missing `AccountVisibilityGuard`.
    

Specifically identified:

- `ProductsController`
    
- `SizeChartsController`
    

as needing account-visibility protection.

---

# 25. Account-Based Authorization Architecture

Worked toward:

```text
User
 ↓
Account
 ↓
Role
 ↓
Permissions
```

instead of relying entirely on the legacy tenant-based model.

---

# 26. Account Assignment Investigation

Investigated:

- `identity_user_accounts`
    
- User/account relationships.
    
- Account visibility.
    
- Account-scoped authorization.
    
- Account assignment behavior.
    

Avoided assuming the account model was already correct.

---

# 27. Feature Flags

Worked with:

- `FF_PLATFORM_IDENTITY_DUAL_WRITE`
    
- `FF_PLATFORM_SHOPIFY_DUAL_WRITE`
    
- `FF_PLATFORM_AUTH_READ_CUTOVER`
    

Work included:

- Flag seeding.
    
- Initial disabled state.
    
- Controlled enabling.
    
- Migration validation.
    
- Authentication cutover.
    
- Dual-write testing.
    

---

# 28. Encryption / Credential Architecture

During platform consolidation:

- Identified mock encryption.
    
- Identified `LocalAesEncryptionProvider` as the intended production implementation.
    
- Recorded the encryption provider as a production-readiness blocker.
    

---

# 29. QueryRunner / Migration Runtime Issues

Investigated:

- QueryRunner cleanup.
    
- Migration runtime behavior.
    
- Cleanup problems.
    
- Migration execution concerns.
    

---

# 30. Shopify Platform Integration

Worked extensively with Shopify.

This was not one isolated feature.

It included:

- Shopify Customers API.
    
- Shopify Products.
    
- Shopify Orders.
    
- Shopify Webhooks.
    
- Shopify Custom Apps.
    
- Shopify HMAC validation.
    
- Shopify configuration.
    
- Shopify production debugging.
    
- Shopify product options.
    
- Shopify customer migration.
    
- Shopify order matching.
    
- Shopify analytics.
    

---

# 31. Dynamic Shopify Product Search

Completed:

- Configurable search priorities.
    
- `search_priorities` inside `commerce_config`.
    
- Four-step waterfall search.
    
- CommerceEngine waterfall implementation.
    

Validated using:

- `npm test`
    
- `npx tsc --noEmit`
    

---

# 32. Shopify Product Webhooks

Worked with:

- `product-update`
    
- `product-delete`
    
- `collection-update`
    

and investigated:

- `collections/update`
    
- `collections/delete`
    

---

# 33. Shopify Webhook Security

Worked with:

- HMAC validation.
    
- Webhook signature verification.
    
- Shopify secret configuration.
    
- Request authenticity.
    

---

# 34. Shopify Production Webhook Debugging

Discovered production Shopify webhooks were pointing at:

`virtual-trail-api.onrender.com`

which was a dead/obsolete endpoint.

This was a production integration diagnosis.

---

# 35. Shopify Webhook Secret Investigation

Discovered Render production was missing:

`SECRET_SHOPIFY_WEBHOOK_SECRET`

Investigated:

- Shopify Custom App.
    
- API Secret Key.
    
- `shpss_...` secret.
    
- Render environment configuration.
    
- HMAC validation.
    

---

# 36. Shopify Webhook Registration

Discovered:

- `collections/update`
    
- `collections/delete`
    

were not automatically registered.

Determined manual Shopify Admin registration was required.

---

# 37. Shopify Webhook Runtime Verification

Created a structured verification process:

```text
Code
 ↓
Configuration
 ↓
Production webhook
 ↓
Shopify event
 ↓
Backend
 ↓
Pipeline
```

Created:

`scratch/update-webhooks-ts.ts`

for programmatic webhook updates.

---

# 38. Shopify Customer Migration

Worked on migrating MomzCradle Shopify customer data.

Source:

**Shopify Customers API**

Records:

- 7,528 retrieved.
    
- 7,525 migrated into AutoShipp.
    

---

# 39. Customer Database / Profile Migration

Worked with:

- `customers_customers`
    
- `customers_customer_profiles`
    

---

# 40. Customer Metadata / JSONB

Worked with customer JSONB metadata containing:

- Default address.
    
- Sub-addresses.
    
- Marketing consent.
    
- Preferred locale.
    
- Metafields.
    
- Billing currencies.
    

---

# 41. Customer Data Validation

Validated:

- 7,525 enriched customers.
    
- Customer profile information.
    
- Address data.
    
- Geographic distributions.
    

Identified major customer concentrations including:

- Chennai.
    
- Coimbatore.
    

---

# 42. MomzCradle Shopify Store Work

Worked on the MomzCradle maternity clothing Shopify store.

Work included:

- Product options.
    
- Product forms.
    
- Checkout behavior.
    
- Admin/order behavior.
    
- Theme behavior.
    
- Shopify apps.
    

---

# 43. Shopify Product Option Customization

Worked with:

- With Zip.
    
- Without Zip.
    

Requirement:

- Make the option mandatory.
    
- Preserve the selected option.
    
- Ensure visibility in checkout/order/admin.
    

---

# 44. Shopify Theme / App Investigation

Worked around:

- Be Yours theme 8.1.1.
    
- RoarTheme.
    
- ReelUp.
    
- COD King.
    
- PageFly.
    
- Fast Bundle.
    

---

# 45. WhatsApp / Meta Platform

Worked extensively with Meta WhatsApp Cloud API.

---

# 46. AutoShipp as Meta Tech Provider

Established the SaaS architecture where:

```text
AutoShipp
 ↓
AutoShipp-owned Meta App
 ↓
Multiple customers
 ↓
Multiple WhatsApp businesses/numbers
```

rather than requiring every customer to own their own Meta app.

---

# 47. WhatsApp Cloud API Integration

Implemented/validated:

- Cloud API.
    
- Webhook verification.
    
- HMAC validation.
    
- Tenant isolation.
    
- Redis deduplication.
    
- Conversation Gateway.
    
- Text messaging.
    

---

# 48. WhatsApp Setup

Worked through:

- Meta Developer Account.
    
- Meta App.
    
- WhatsApp Business Account.
    
- Phone number.
    
- Public HTTPS endpoint.
    
- PostgreSQL.
    
- Redis.
    
- Permanent access token.
    
- Meta verification.
    

---

# 49. WhatsApp Webhook Architecture

Worked with:

- Webhook verification.
    
- HMAC signatures.
    
- Incoming messages.
    
- Tenant routing.
    
- Deduplication.
    
- Conversation processing.
    

---

# 50. WhatsApp Multi-Tenant Architecture

Worked on:

- Tenant identification.
    
- Tenant isolation.
    
- Per-tenant configuration.
    
- Shared Meta infrastructure.
    
- Message routing.
    

---

# 51. Redis WhatsApp Deduplication

Used Redis for duplicate event/message protection.

---

# 52. Conversation Gateway

Integrated WhatsApp messaging with the AutoShipp Conversation Gateway.

---

# 53. WhatsApp Text-Only Scope

Explicitly established:

**Current WhatsApp scope = text-only.**

Deferred:

- Images.
    
- Audio.
    
- Rich media.
    

Identified future requirement:

- Cloudflare R2 media upload.
    

---

# 54. WhatsApp Campaign / Commerce Analytics

Worked with a real MomzCradle campaign:

- 2,900 messages sent.
    
- ~1,500 reads.
    
- 9 validated matched orders.
    

Calculated:

- Sent → matched: 0.34%.
    
- Read → matched: 0.67%.
    
- Average revenue per matched order: ₹2,758.13.
    
- Revenue per message sent: ₹9.51.
    
- Revenue per read: ₹18.39.
    

---

# 55. Communication & Messaging Product

Worked on Feature 2:

**Communication & Messaging**

Established that it is:

- Independent sub-product.
    
- Externally hosted.
    
- Not part of the core Platform API.
    

Corrected base URL:

`https://shipping-automation.onrender.com/api/v1`

Updated frontend configuration accordingly.

---

# 56. AutoShipp Temporary Dashboard

Redesigned the temporary AutoShipp dashboard as a product launchpad.

Products:

1. Virtual Try-On.
    
2. Returns / ReturnFlow.
    
3. Delivery Estimate / ETA.
    
4. WhatsApp & Communications.
    

---

# 57. AutoShipp Product Ecosystem

Worked on understanding/bounding the AutoShipp ecosystem:

- Shipping Automation.
    
- Virtual Try-On.
    
- Returns / ReturnFlow.
    
- Delivery Estimate / ETA.
    
- WhatsApp & Communications.
    
- Fit Intelligence.
    
- Universal ChatBot.
    

Worked on deciding:

- Internal vs external.
    
- Platform vs product.
    
- API boundaries.
    
- Dashboard routing.
    

---

# 58. Fit Intelligence

Worked extensively with Fit Intelligence.

Work included:

- FI codebase.
    
- FI database.
    
- Migration.
    
- Schema.
    
- Tenant isolation.
    
- Runtime validation.
    
- Platform consolidation.
    

---

# 59. Universal ChatBot + Fit Intelligence

Worked with the merged:

**Universal ChatBot + Fit Intelligence**

codebase.

Investigated:

- Shared architecture.
    
- Database.
    
- Platform entities.
    
- Tenant isolation.
    
- Migration.
    
- Product boundaries.
    

---

# 60. Fit Intelligence Database

Validated:

- Fresh DB.
    
- Migration-only bootstrap.
    
- 28 `fit_*` tables.
    
- Schema parity.
    
- App boot.
    
- Health endpoint.
    
- Tenant isolation.
    

---

# 61. Fit Intelligence Embeddings Investigation

Identified:

**Embeddings were absent from the FI pipeline.**

This was documented as a technical gap rather than assumed to exist.

---

# 62. MomzCradle Onboarding / Data Integration

Worked with MomzCradle as a real AutoShipp client/business integration.

Work included:

- Shopify connection.
    
- Customer migration.
    
- Customer enrichment.
    
- Product configuration.
    
- WhatsApp.
    
- Campaign analytics.
    
- Orders.
    
- Shipping.
    
- COD.
    
- Webhooks.
    

---

# 63. AutoShipp Customer / Commerce Data

Worked with:

- Customers.
    
- Customer profiles.
    
- Orders.
    
- Products.
    
- Addresses.
    
- Marketing consents.
    
- Metafields.
    
- Currency.
    
- Shopify data.
    

---

# 64. Commerce Configuration

Worked with:

`commerce_config`

including:

- Search configuration.
    
- `search_priorities`.
    
- Dynamic product search.
    

---

# 65. API Architecture

Worked on boundaries between:

- AutoShipp Platform API.
    
- Shipping Automation API.
    
- Communication API.
    
- External products.
    
- Shopify integrations.
    
- Meta integrations.
    

---

# 66. Multi-Tenant SaaS Architecture

Worked on:

- Tenant isolation.
    
- Account isolation.
    
- Identity.
    
- RBAC.
    
- Shopify integrations.
    
- WhatsApp.
    
- Platform entities.
    
- External products.
    

---

# 67. PostgreSQL / JSONB Engineering

Worked with:

- PostgreSQL.
    
- Neon.
    
- Relational schemas.
    
- JSONB.
    
- Customer metadata.
    
- Platform entities.
    
- Legacy schemas.
    
- Migration schemas.
    

---

# 68. Redis / BullMQ

Worked with:

- Render Redis.
    
- BullMQ.
    
- Queues.
    
- Workers.
    
- Worker concurrency.
    
- Connection limits.
    
- Background processing.
    

Known Redis limit investigated:

**50 max connections.**

---

# 69. Render Infrastructure

Worked with:

- Render production.
    
- Render Free Tier.
    
- Environment variables.
    
- Redis.
    
- Production deployment.
    
- Production debugging.
    

---

# 70. Production Branch / Deployment

Production:

```text
master
```

Development:

```text
pre-prod
```

Production deployment:

```text
git push main master
```

You worked with:

- Branch synchronization.
    
- Production deployment.
    
- Pre-prod.
    
- Git remotes.
    
- Merge strategy.
    

---

# 71. Git / Release Management

Worked with:

- `feature/platform-data-consolidation`.
    
- `main`.
    
- `pre-prod`.
    

Work included:

- Branch creation.
    
- Branch cleanup.
    
- Main → pre-prod synchronization.
    
- No-fast-forward merge.
    
- Feature branch merge.
    
- Obsolete branch removal.
    
- Obsolete script removal.
    

Known merge:

`1150e3f`

Known cleanup commit:

`f56b102`

---

# 72. Backend Engineering

Across AutoShipp company work you worked with:

- Node.js.
    
- TypeScript.
    
- Express/backend services.
    
- Controllers.
    
- Services.
    
- TypeORM.
    
- APIs.
    
- Webhooks.
    
- Authentication.
    
- Authorization.
    
- Background workers.
    
- Database migrations.
    

---

# 73. TypeORM

Worked with:

- Entities.
    
- Repositories.
    
- Migrations.
    
- Schema changes.
    
- Platform entities.
    
- Identity entities.
    
- RBAC entities.
    
- Database consolidation.
    

---

# 74. Authentication

Worked on:

- JWT.
    
- User context.
    
- Legacy identity.
    
- Platform identity.
    
- Context resolution.
    
- Authentication read cutover.
    

---

# 75. Authorization

Worked on:

- RBAC.
    
- Roles.
    
- Permissions.
    
- PermissionsGuard.
    
- AccountVisibilityGuard.
    
- Account-scoped authorization.
    
- Legacy/platform compatibility.
    

---

# 76. Security

Worked with:

- HMAC.
    
- Shopify webhook security.
    
- WhatsApp webhook security.
    
- JWT.
    
- RBAC.
    
- Tenant isolation.
    
- Account isolation.
    
- Integration credentials.
    
- Encryption provider architecture.
    

---

# 77. Production Debugging

Diagnosed actual production/configuration issues including:

- Shopify webhooks pointing to dead endpoint.
    
- Missing Render Shopify secret.
    
- Missing webhook registrations.
    
- Platform RBAC entities not wired into runtime.
    
- Admin dual-write in wrong layer.
    
- Mock encryption provider.
    
- QueryRunner cleanup issues.
    
- Account assignment uncertainty.
    

---

# 78. Runtime Verification

Validated:

- App boot.
    
- Health endpoints.
    
- Database connectivity.
    
- Tenant isolation.
    
- Admin creation.
    
- Identity creation.
    
- Role assignment.
    
- Account assignment.
    
- Feature flags.
    
- Webhooks.
    
- Production configuration.
    
- Migration state.
    

---

# 79. Testing / Validation

Worked with:

- `npm test`.
    
- `npx tsc --noEmit`.
    
- TypeScript compilation.
    
- Runtime testing.
    
- Migration validation.
    
- DB validation.
    
- Webhook validation.
    
- Integration testing.
    

---

# 80. Production-Safe Engineering

A recurring part of your AutoShipp work was:

**Do not change production code until evidence shows a code problem.**

You repeatedly used:

```text
Inspect
 ↓
Verify
 ↓
Reproduce
 ↓
Identify actual cause
 ↓
Implement
 ↓
Validate
```

rather than:

```text
Assume
 ↓
Code
```

---

# 81. Architecture Investigation

Worked on:

- Platform architecture.
    
- Product architecture.
    
- Database architecture.
    
- Identity architecture.
    
- RBAC architecture.
    
- Integration architecture.
    
- Shipping architecture.
    
- Multi-tenant architecture.
    
- API boundaries.
    

---

# 82. Repository Auditing

Performed repository-wide investigations into:

- Controllers.
    
- Services.
    
- Entities.
    
- Guards.
    
- RBAC.
    
- Authentication.
    
- Webhooks.
    
- Migrations.
    
- Configuration.
    
- Feature flags.
    
- Runtime usage.
    

---

# 83. Source-vs-Documentation Verification

Repeatedly compared:

**What documentation says**

against:

**What source code actually does**

and:

**What production actually does.**

This was especially important for:

- Shipping Automation.
    
- RBAC.
    
- Shopify webhooks.
    
- Database consolidation.
    
- Fit Intelligence.
    

---

# 84. Documentation Engineering

You created/maintained a large AutoShipp documentation ecosystem.

Including:

- Architecture docs.
    
- Database docs.
    
- Mermaid diagrams.
    
- Migration docs.
    
- WBS.
    
- TDS.
    
- Handover docs.
    
- Runtime verification plans.
    
- Webhook verification plans.
    
- Shipping workflow docs.
    
- Project status docs.
    

---

# 85. Project Handover Engineering

Created handovers containing:

- Completed work.
    
- Incomplete work.
    
- Current state.
    
- Blockers.
    
- Database state.
    
- Branch state.
    
- Deployment state.
    
- Runtime evidence.
    
- Next steps.
    
- PR state.
    

The goal was to allow another ChatGPT/AI agent/engineer to continue without losing context.

---

# 86. AI-Assisted Engineering

You created project-specific AI rules for working safely on AutoShipp.

For example:

`PROJECT_ASSISTANT_RULES_V2.md`

The rules enforced:

- No assumptions.
    
- Evidence required.
    
- Production-safe recommendations.
    
- Source verification.
    
- Fact vs hypothesis.
    
- No hallucinated project state.
    
- Documentation consistency.
    

---

# 87. AI Agent Project Rules

Worked on making AI agents operate safely against the AutoShipp repository.

The AI was expected to:

- Read source code.
    
- Verify current state.
    
- Follow project rules.
    
- Avoid inventing functionality.
    
- Avoid copying stale documentation.
    
- Distinguish implemented vs planned.
    
- Preserve project context.
    

---

# 88. Graph Documentation Workflow

Worked on:

- `graphinit`.
    
- `graphdoc`.
    

The `graphdoc` workflow was designed to:

1. Check whether the current documentation is actually up to date.
    
2. Avoid blindly copying an old document.
    
3. Run `graphinit` when necessary.
    
4. Analyze current source state.
    
5. Generate/update the documentation.
    
6. Replace the document with the updated version.
    

---

# 89. Documentation Synchronization

Worked on keeping:

```text
Source Code
     ↕
Project Graph
     ↕
Documentation
```

synchronized.

This was especially important because AutoShipp is a large evolving codebase.

---

# 90. Platform Knowledge Architecture

Worked on organizing AutoShipp knowledge around:

- Platform.
    
- Projects.
    
- Products.
    
- Database.
    
- Architecture.
    
- Operations.
    
- Documentation.
    
- AI-agent rules.
    

This was beyond ordinary coding and involved creating a maintainable project knowledge system.

---

# 91. Business / Technical Analysis

You worked at the intersection of:

- Product requirements.
    
- Business rules.
    
- Backend implementation.
    
- Database.
    
- APIs.
    
- Production.
    
- Analytics.
    

Examples:

- Shipping provider ownership.
    
- Courier selection.
    
- WhatsApp conversion.
    
- Customer migration.
    
- Product options.
    
- Platform ownership.
    

---

# 92. Real Customer Production Work

Your AutoShipp work was not purely educational or demo-only.

You worked against real production/customer systems involving:

- MomzCradle.
    
- Shopify.
    
- WhatsApp.
    
- Orders.
    
- Customers.
    
- Shipping.
    
- Production webhooks.
    
- Production database.
    
- Production deployment.
    

---

# 93. Data Migration Engineering

Worked on migrations involving:

- Shopify customers.
    
- Fit Intelligence entities.
    
- Admins.
    
- Roles.
    
- Shopify connections.
    
- Platform identities.
    
- Customer profiles.
    

---

# 94. Data Validation

Performed:

- Row-count validation.
    
- Schema parity.
    
- Customer-count validation.
    
- Identity validation.
    
- Role validation.
    
- Account validation.
    
- Migration validation.
    
- Production-state validation.
    

---

# 95. Business Analytics

Worked on actual commerce/marketing analytics.

Particularly:

- WhatsApp campaign performance.
    
- Order matching.
    
- Revenue attribution.
    
- Conversion rates.
    
- Customer geography.
    

---

# 96. Product Dashboard / Frontend

Worked on:

- AutoShipp launchpad.
    
- Product cards.
    
- Internal routing.
    
- External product links.
    
- WhatsApp dashboard routing.
    
- Frontend API configuration.
    

---

# 97. External Product Integration

Worked with the AutoShipp ecosystem's external products:

- Virtual Try-On.
    
- ReturnFlow.
    
- Delivery Estimate / ETA.
    

and integrated them conceptually/through the temporary launchpad.

---

# 98. Communication Product Integration

Worked on connecting:

**WhatsApp & Communications**

to the AutoShipp ecosystem while keeping the product's backend externally hosted.

---

# 99. Production Configuration

Worked with:

- Render environment variables.
    
- Shopify secrets.
    
- Meta credentials.
    
- API base URLs.
    
- Feature flags.
    
- Database configuration.
    
- Redis configuration.
    

---

# 100. Operational Engineering

Your work also included operational activities such as:

- Deployment.
    
- Branch management.
    
- Environment validation.
    
- Production debugging.
    
- Webhook configuration.
    
- Database backups.
    
- Runtime verification.
    
- Migration safety.
    
- Handover.
    

---

# 101. Architecture / Engineering Decision Making

You were involved in decisions such as:

- Platform vs product ownership.
    
- Legacy vs canonical database ownership.
    
- Account vs tenant authorization.
    
- Internal vs external product boundaries.
    
- Provider locking.
    
- Shipping-provider selection.
    
- Text-only WhatsApp scope.
    
- Feature-flagged migration.
    
- Production-safe deployment.
    

---

# 102. Work With Real Constraints

You worked under constraints including:

- Live production.
    
- Real customer traffic.
    
- No downtime.
    
- No destructive migrations.
    
- No staging environment.
    
- Render Free Tier.
    
- Redis connection limits.
    
- Existing legacy database.
    
- Existing production Shopify configuration.
    
- Existing Meta configuration.
    
- Existing customer data.
    
- Existing product architecture.
    

---

# 103. AutoShipp Company-Level Engineering Scope

When all of the above is combined, your AutoShipp company experience spans:

### Products

- Shipping Automation.
    
- Platform.
    
- Fit Intelligence.
    
- Universal ChatBot.
    
- WhatsApp / Communications.
    
- Virtual Try-On ecosystem.
    
- ReturnFlow.
    
- Delivery Estimate / ETA.
    

### Client / Business Work

- MomzCradle.
    
- Shopify commerce.
    
- WhatsApp campaigns.
    
- Customer migration.
    
- Product configuration.
    
- Shipping.
    

### Backend

- Node.js.
    
- TypeScript.
    
- APIs.
    
- TypeORM.
    
- Webhooks.
    
- Workers.
    
- Queues.
    

### Data

- PostgreSQL.
    
- Neon.
    
- JSONB.
    
- Migrations.
    
- Data consolidation.
    
- Customer migration.
    

### Infrastructure

- Render.
    
- Redis.
    
- BullMQ.
    
- Environment configuration.
    
- Production deployment.
    

### Security

- JWT.
    
- HMAC.
    
- RBAC.
    
- Permissions.
    
- Account visibility.
    
- Tenant isolation.
    
- Credential/encryption architecture.
    

### Integrations

- Shopify.
    
- Meta WhatsApp Cloud API.
    
- Shipping aggregators.
    
- Courier systems.
    
- External AutoShipp products.
    

### Engineering

- Architecture.
    
- Codebase audits.
    
- Runtime verification.
    
- Production debugging.
    
- Migration strategy.
    
- Feature flags.
    
- Testing.
    
- Documentation.
    

### AI / Knowledge Engineering

- Project Assistant Rules.
    
- AI-agent workflows.
    
- Graph initialization.
    
- Graph documentation.
    
- Documentation synchronization.
    
- Handover generation.
    
- Source-vs-documentation validation.
    

---

# 104. Resume-Level Interpretation of Your AutoShipp Experience

So, when you put **AutoShipp Company** on your resume, I would NOT describe your experience simply as:

> "Worked on shipping automation."

That would massively undersell what you did.

A more accurate high-level description is:

> **Worked as a software engineer across AutoShipp's multi-tenant SaaS ecosystem, contributing to shipping automation, Shopify and Meta integrations, customer-data migration, Fit Intelligence, platform data consolidation, identity/RBAC modernization, PostgreSQL architecture, Redis/BullMQ infrastructure, production debugging, dashboard development, analytics, deployment, and AI-assisted engineering/documentation workflows.**

And your portfolio should probably have **multiple AutoShipp case studies**, not one giant "AutoShipp Project" page.

---

# 105. Suggested Portfolio Case-Study Structure

Your AutoShipp company experience can eventually become these separate portfolio entries:

1. **AutoShipp Shipping Automation**
    
2. **AutoShipp Platform Data Consolidation**
    
3. **Identity & RBAC Modernization**
    
4. **Shopify Integration & Customer Migration**
    
5. **WhatsApp / Meta Tech Provider Platform**
    
6. **MomzCradle Commerce & WhatsApp Analytics**
    
7. **Fit Intelligence & Universal ChatBot**
    
8. **AutoShipp Product Launchpad**
    
9. **Production Infrastructure & Reliability**
    
10. **AutoShipp AI-Assisted Engineering & Documentation System**
    

And underneath those, the smaller tasks/features become the individual contributions.

---

# 106. Most Important Correction From My Previous Answers

The correct mental model is:

```text
                         AUTOSHIPP COMPANY
                                │
        ┌───────────────────────┼────────────────────────┐
        │                       │                        │
   PRODUCTS                 CLIENT WORK             PLATFORM
        │                       │                        │
 Shipping Automation        MomzCradle           Platform Consolidation
 Fit Intelligence           Shopify              Identity
 Universal ChatBot          WhatsApp              RBAC
 Communications             Customer Data        Database
 Virtual Try-On             Orders               Auth
 ReturnFlow                 Analytics            Integrations
 Delivery ETA                                    Infrastructure
        │                       │                        │
        └───────────────────────┼────────────────────────┘
                                │
                         YOUR ENGINEERING WORK
                                │
       ┌────────────────────────┼────────────────────────┐
       │                        │                        │
 Backend/API              Database/Infra          Architecture
       │                        │                        │
 Webhooks                 PostgreSQL              Migration
 APIs                     Redis                  RBAC
 TypeScript               BullMQ                 SaaS
 TypeORM                  Render                 Security
       │                        │                        │
       └────────────────────────┼────────────────────────┘
                                │
                         Production / Operations
                                │
                    Debugging • Deployment
                    Validation • Documentation
                    AI-assisted Engineering
```

**That is the scope you were asking for.**

And one more important point: this is still an inventory reconstructed from the AutoShipp conversations/context I have available. I don't want to falsely claim this is mathematically guaranteed to contain _every single task you've ever done at the company_ if there are AutoShipp conversations/files that aren't available to me in this context. But this version is the correct **company-level scope**, rather than treating Shipping Automation as the whole of your AutoShipp experience.


Here are the additional items I would add to the master inventory.

## 1. Shopify → AutoShipp Customer Migration Engineering

The previous list only said:

> 7,528 Shopify customers → 7,525 AutoShipp customers.

That is **far too shallow**.

You worked on the actual migration implementation, including:

- Shopify customer extraction.
- Shopify Customers API pagination.
- Handling Shopify's paginated customer dataset.
- Migrating customer records into AutoShipp.
- Migrating/synchronizing customer profiles.
- Mapping Shopify customer data to AutoShipp customer entities.
- Handling customer metadata.
- Handling Shopify IDs.
- Handling customer/profile relationships.
- Production-ready migration design.
- Mandatory environment-secret validation.
- Database transactions.
- Checkpoint/resume capability.
- Rollback handling.
- Profile synchronization.
- Migration progress/state handling.
- Pagination validation.
- Migration verification.
- Record-count verification.
- Post-migration data validation.

A particularly important validation was a **3-page / 750-customer pagination test** against the Shopify customer dataset.

The Shopify source count was validated at **7,528 customers**.

---

# 2. Resumable Customer Migration

You worked on making the migration capable of **checkpoint/resume behavior** rather than assuming the entire migration must succeed in one uninterrupted run.

That means the migration work involved considerations around:

```
Shopify
 ↓
Fetch batch
 ↓
Process
 ↓
Persist
 ↓
Checkpoint
 ↓
Next batch
```

and the ability to continue from a known migration state.

This is a significant engineering detail that was missing.

---

# 3. Transactional Customer Migration

The migration implementation included **database transactions**.

This was important for ensuring that partially completed database operations did not leave the destination data in an inconsistent state.

That should be represented separately from simply saying "migrated customers."

---

# 4. Migration Rollback Strategy

You worked on rollback considerations for the Shopify → AutoShipp migration.

The migration wasn't treated as:

> Fetch customers → insert everything → hope it works.

It included production-safety considerations around:

- Transactions.
- Failure handling.
- Rollback.
- Checkpoint/resume.

---

# 5. Migration Environment Validation

The migration implementation included **mandatory environment-secret validation** before execution.

This is another detail missing from my previous inventory.

The migration was designed to verify that the required environment configuration existed rather than starting a production migration with incomplete configuration.

---

# 6. Shopify Pagination Validation

You didn't simply trust the Shopify API pagination.

You specifically validated pagination behavior against the customer dataset.

The validation involved:

- 3 pages.
- 750 customers.
- Shopify's pagination behavior.
- Correct continuation between pages.
- Correct total-count reconciliation.

This is useful evidence of real API integration/testing work.

---

# 7. Customer Migration Discrepancy Investigation

There was also an important data-quality issue discovered during migration validation.

The source contained:

**7,528 Shopify customers**

while:

**7,525 customers/profiles were migrated.**

The migration review identified:

- 2 skipped records.
- 1 additional discrepancy/unaccounted record.

This was treated as something requiring explanation rather than simply declaring:

> "7,525 migrated, therefore complete."

That's important because you were doing **data reconciliation**, not merely writing an import script.

For resume purposes, I would describe this as:

> Performed source-to-destination reconciliation and investigated record-count discrepancies during production customer migration.

rather than claiming 100% migration unless the discrepancy was ultimately resolved.

---

# 8. Customer Migration Indexing

You also identified/recommended indexes around:

- `account_id`
- Shopify ID metadata.

That means the migration work included consideration of **query performance and lookup efficiency**, not just data insertion.

---

# 9. Customer Profile Synchronization

The migration work wasn't limited to the customer table.

You worked on **profile synchronization**, including the relationship between:

```
customers_customers
        ↓
customers_customer_profiles
```

This should be a separate work item because customer identity and customer profile synchronization were distinct pieces of the migration.

---

# 10. Production-Ready Migration Design

The Shopify customer migration was later reported as having a production-ready implementation involving:

- Mandatory secrets.
- Transactions.
- Checkpoint/resume.
- Rollback.
- Profile sync.
- Pagination validation.
- Record-count validation.
- Performance/index considerations.

This is significantly stronger experience than the previous list conveyed.

---

# 11. Migration Approval / Evidence-Based Validation

There was also a distinction between:

### Implementation reported as production-ready

and

### Migration being fully reconciled/approved.

The migration had strong implementation safeguards, but the final data reconciliation still had the **7,528 → 7,525 discrepancy** that required explanation.

This fits your broader AutoShipp engineering pattern:

> **Don't mark something complete just because the code exists; validate the actual result.**

---

# 12. Shopify Customer Migration Performance Engineering

Because you were dealing with thousands of customers and paginated API data, you also considered:

- Batch processing.
- Pagination.
- Database indexing.
- Resume capability.
- Transaction boundaries.
- Lookup efficiency.

This belongs under your backend/data-engineering experience.

---

# 13. Shopify Customer → AutoShipp Data Mapping

Another detail that deserves its own entry:

You worked on mapping Shopify's customer representation into AutoShipp's internal customer/profile representation.

This involved dealing with:

- Shopify customer IDs.
- AutoShipp customer IDs.
- Customer profiles.
- Addresses.
- Metadata.
- JSONB.
- Shopify-specific metadata.

---

# 14. Customer Metadata Preservation

The migration preserved/handled metadata including:

- `default_address`
- Sub-addresses.
- Marketing consents.
- Preferred locales.
- Metafields.
- Billing currencies.

This was more than a basic:

```
Shopify name/email → AutoShipp name/email
```

migration.

---

# 15. Customer Data Reconciliation

You worked on comparing:

```
Shopify source
       ↓
AutoShipp destination
```

using:

- Total counts.
- Migrated counts.
- Profile counts.
- Customer IDs.
- Metadata.
- Data completeness.

---

# 16. Migration Production Safety

The customer migration work also had explicit production-safety considerations:

- Transactions.
- Rollback.
- Checkpoint/resume.
- Required environment configuration.
- Validation before migration.
- Post-migration reconciliation.

This should be added to your **Data Migration Engineering** category.

---

# 17. One More Important Correction

There is also a difference between the two numbers that we should preserve in your final resume notes:

**7,528** = Shopify source customer count.

**7,525** = AutoShipp migrated/enriched customer count that was reported/validated.

The remaining discrepancy was **not something we should silently turn into "7,528 successfully migrated."**

For your portfolio, the technically honest version is:

> "Migrated and enriched 7,525 of 7,528 Shopify customer records, with source/destination reconciliation performed and remaining discrepancies investigated."

That is actually **more credible** than claiming 100%.

---

## So the missing work I can verify from the additional historical context is mainly this:

|Missing work|What you actually did|
|---|---|
|Customer migration implementation|Shopify → AutoShipp migration|
|API pagination|Multi-page Shopify customer retrieval|
|Pagination validation|3-page / 750-customer validation|
|Transactions|Transactional destination writes|
|Checkpoint/resume|Resumable migration|
|Rollback|Failure/rollback handling|
|Environment validation|Mandatory secret/config validation|
|Profile synchronization|Customer + profile migration|
|Data mapping|Shopify → AutoShipp entity mapping|
|Metadata preservation|JSONB/address/consent/metafield/etc.|
|Data reconciliation|Source vs destination verification|
|Discrepancy investigation|7,528 vs 7,525 analysis|
|Database performance|`account_id` / Shopify-ID indexing considerations|
|Production readiness|Production-safe migration design|

**This is exactly why I don't want to call the previous 100+ item list "complete."** The migration itself contained several engineering accomplishments that disappeared when I summarized it as simply "migrated 7,525 customers."

---

# Additional AutoShipp Architecture Systems

These systems are explicitly represented in later resume material as architecture/design work. They are kept separate from implementation claims.

## Verification Hub

**Classification:** Architecture/design

- Provider-agnostic OTP/challenge platform.
- Clean Architecture:
  - Domain
  - Application
  - Infrastructure
  - SDK
  - Admin portal
- Tenant configuration.
- Replay queue.
- Audit logging.
- Telemetry.
- Provider abstraction and multi-tenant configuration.
- Reliability/replay and observability considerations.

## Clip Farm

**Classification:** Architecture/design

Creator-economy / campaign platform designed from scratch with:

- Campaign management.
- Creator submissions.
- Submission validation.
- Leaderboards.
- Razorpay payout integration.
- BullMQ view-sync jobs.
- Settlement jobs.
- Prisma/PostgreSQL data layer.

Engineering themes:
- Background processing.
- Payment integration.
- Data persistence.
- Campaign workflows.
- Validation.
- Leaderboards.

## GoKwik vs AutoShipp Competitive Analysis

**Classification:** Business + technical analysis / R&D

- Structured comparison across 10 GoKwik products.
- Feature-parity mapping.
- Strategic/product gap identification.
- R&D documentation.
- Roadmap input for AutoShipp.

---

# Independent / Academic Projects

## 1. NeuroVault — AI Knowledge Platform

**Classification:** Personal project

**Repository:** `github.com/abdulbasithibnhanifa/NeuroVault`

**Stack:**
- Next.js
- TypeScript
- Node.js
- MongoDB
- Supabase pgvector
- Redux Toolkit
- Redis
- BullMQ
- AWS S3

**Built:**
- Document ingestion.
- MiniLM vector embeddings.
- pgvector storage.
- Semantic retrieval.
- Streaming LLM responses.
- Multi-LLM support.
- Knowledge graph visualization.
- Asynchronous BullMQ processing for non-blocking ingestion.

**LLM technologies represented in the resume evidence:**
- Gemini
- Claude
- Llama

**Core concepts:**
- RAG.
- Vector embeddings.
- Semantic search.
- Vector databases.
- LLM integration.
- Streaming.
- Async/background processing.
- Knowledge graphs.
- Object storage.

```text
Document
   ↓
Ingestion
   ↓
MiniLM Embedding
   ↓
pgvector
   ↓
Semantic Retrieval
   ↓
LLM
   ↓
Streaming Response

Long-running ingestion
   ↓
BullMQ
   ↓
Background processing
```

## 2. DevDesk — MERN Project Management System

**Classification:** Personal project

**Repository:** `github.com/abdulbasithibnhanifa/DevDesk`

**Live:** `dev-desk-app.vercel.app`

**Stack:**
- MongoDB
- Express.js
- React.js
- Node.js
- JWT

**Built:**
- Project management.
- Ticket management.
- Full-stack REST API.
- MongoDB data modelling.
- Security-first authentication.

**Authentication/security:**
- JWT.
- HttpOnly cookies.
- Refresh-token rotation.
- Axios interceptor for automatic token refresh.

**Engineering characteristics:**
- RESTful API design.
- Token lifecycle management.
- Automatic refresh.
- Frontend/backend integration.
- Full-stack architecture.

## 3. Task Manager Web App

**Classification:** Full-stack project

**Stack:**
- MongoDB
- Express.js
- React.js
- Node.js
- JWT/authentication

**Built:**
- MERN task/to-do application.
- User authentication.
- CRUD operations.
- RESTful APIs.
- Node.js + Express backend.
- MongoDB persistence.
- Responsive React UI.
- State management.
- Form validation.
- Modular components.
- Reusable services.

Historical cover-letter evidence also describes the project as using RESTful Express services and dynamic React interfaces.

## 4. Wide Body Area Network using Blockchain / Blockchain-based Health Data Simulation

**Classification:** Academic project

**Stack:**
- Python
- Blockchain concepts

**Built:**
- Simulation of secure healthcare-data transfer in a Body Area Network (BAN).
- Blockchain-style logging.
- Distributed node behavior.
- Tamper-proof health-data logging.
- Data-integrity/security modelling.
- Data structures and logging mechanisms.

## 5. Personal Portfolio Website

**Classification:** Personal web project

**Stack:**
- HTML5
- CSS3
- JavaScript
- Flexbox/Grid
- GitHub Pages
- Webhooks/contact-form handling in one backend-oriented resume version

**Built:**
- Responsive/mobile-first layout.
- Project showcase.
- Skills presentation.
- Contact section.
- Dynamic DOM manipulation.
- Interactive components.
- Custom CSS.
- Contact-form handling via webhooks.
- GitHub Pages deployment is explicitly stated in the backend-oriented resume evidence.

## 6. Browser-Based Calculator Web App

**Classification:** Academic/personal web project

**Stack:**
- HTML
- CSS
- Vanilla JavaScript

**Built:**
- Core arithmetic operations.
- Input validation.
- Real-time result rendering.
- Responsive/clean UI.
- DOM-based interaction.

## 7. Student Record Management

**Classification:** Concept / backend practice

> Historical backend resume material explicitly labels this **(Concept)**. It should not be represented as a completed production/deployed project.

**Stack:**
- Python
- MySQL
- Console-based backend logic

**Designed:**
- CRUD operations.
- Validation.
- Modular functions.
- Database operations.

---

# Technical Capability Inventory

## Languages
- JavaScript (ES6+)
- TypeScript
- Python
- Java
- C
- C++
- SQL

## Frontend
- React.js
- Next.js
- HTML5
- CSS3
- Tailwind CSS
- Redux Toolkit
- Responsive UI
- Flexbox/Grid
- DOM manipulation
- Form validation
- State management
- Dashboard/product routing

## Backend
- Node.js
- Express.js
- NestJS
- REST APIs
- Controllers
- Services
- TypeORM
- Prisma ORM
- WebSockets
- Webhooks
- Background workers
- Queue-based processing

## Databases / Data
- PostgreSQL
- Neon PostgreSQL
- MongoDB
- MySQL
- SQL
- JSONB
- Supabase pgvector
- Relational schema design
- Entity/repository modelling
- Database migrations
- Schema parity
- Data consolidation
- Data migration
- Customer/profile synchronization
- Data reconciliation
- Database backups/snapshots
- Indexing/performance considerations

## AI Engineering
- RAG
- Vector embeddings
- MiniLM
- Semantic search
- pgvector
- Gemini
- Claude
- Llama
- Groq
- Mistral
- OpenAI
- Multi-LLM routing
- Streaming
- Knowledge graph visualization
- AI-agent workflow design
- Project-planner AI
- Coding-agent AI
- AI rule systems
- Evidence-first AI engineering
- AI-assisted documentation

## Authentication / Security
- JWT
- HttpOnly cookies
- Refresh-token rotation
- JWT context resolution
- RBAC
- Permissions
- PermissionsGuard
- AccountVisibilityGuard
- Account-scoped authorization
- Tenant isolation
- Account isolation
- HMAC validation
- Shopify webhook signature validation
- WhatsApp webhook security
- Feature-flag-controlled authentication cutover
- Integration credential handling
- Encryption-provider architecture
- Security checklists

## Architecture
- Multi-tenant SaaS
- Clean Architecture
- Domain-Driven Design concepts
- Event-driven systems
- System design
- API boundary design
- Product/platform separation
- Internal/external product boundaries
- Identity architecture
- RBAC architecture
- Shipping architecture
- Integration architecture
- Database architecture
- Zero-downtime migration strategy
- Dual-write strategy
- Feature-flagged cutovers
- Provider abstraction
- Queue/worker architecture

## Integrations
- Shopify: Customers API, Products, Orders, Webhooks, Custom Apps, OAuth, HMAC
- Meta WhatsApp Cloud API
- WhatsApp Business infrastructure
- Shiprocket
- ShipXpeed
- Shipping aggregators
- Courier systems
- Razorpay
- External AutoShipp products
- Cloudflare
- AWS S3
- Vercel
- Render

## Infrastructure / DevOps / Operations
- Render
- Redis
- BullMQ
- Queue workers
- Worker concurrency
- Redis connection limits
- Environment variables
- Production deployment
- Git/GitHub
- GitHub Actions
- Vercel
- AWS S3
- Cloudflare
- Sentry
- Postman
- Linux CLI
- Deployment debugging
- Branch/release management
- Runtime verification
- Production configuration

---

# Engineering Practices

## Evidence-First Engineering

Recurring AutoShipp workflow:

```text
Inspect
  ↓
Verify
  ↓
Reproduce
  ↓
Identify actual cause
  ↓
Implement
  ↓
Validate
```

Instead of:

```text
Assume
  ↓
Code
```

## Repository / Codebase Auditing

Investigated:
- Controllers.
- Services.
- Entities.
- Repositories.
- Guards.
- Authentication.
- Authorization.
- RBAC.
- Webhooks.
- Migrations.
- Configuration.
- Feature flags.
- Runtime usage.
- Product boundaries.
- Database ownership.

## Runtime Verification

Validated:
- Application boot.
- Health endpoints.
- Database connectivity.
- Tenant isolation.
- Admin creation.
- Identity creation.
- Role assignment.
- Account assignment.
- Feature flags.
- Webhooks.
- Production configuration.
- Migration state.

## Testing / Validation

Used/worked with:
- `npm test`
- `npx tsc --noEmit`
- TypeScript compilation.
- Runtime testing.
- Migration validation.
- Database validation.
- Webhook validation.
- Integration testing.
- Source-vs-runtime verification.
- Data reconciliation.

## Production-Safe Engineering

Worked under:
- Live production.
- Real customer traffic.
- No downtime.
- No destructive migrations.
- No table drops.
- No unvalidated read cutovers.
- No staging environment.
- Render Free Tier constraints.
- Redis connection limits.
- Existing legacy database.
- Existing Shopify configuration.
- Existing Meta configuration.
- Existing customer data.
- Existing product architecture.

## Git / Release Management

Worked with:
- `master`
- `pre-prod`
- `main`
- `feature/platform-data-consolidation`

Activities:
- Branch creation.
- Branch cleanup.
- Feature branch merging.
- Main/pre-prod synchronization.
- No-fast-forward merges.
- Obsolete branch removal.
- Obsolete script removal.

Known historical commits:
- Merge: `1150e3f`
- Cleanup: `f56b102`

## Documentation Engineering

Created/maintained:
- Architecture documentation.
- Database reference manuals.
- Mermaid ER diagrams.
- Migration documentation.
- WBS.
- TDS.
- Handover documents.
- Runtime verification plans.
- Webhook verification plans.
- Shipping workflow documentation.
- Project status documents.
- Current-state documentation.
- Target-state documentation.
- Gap documentation.
- Unknown-state tracking.

## Handover Engineering

Handover material included:
- Completed work.
- Incomplete work.
- Current state.
- Blockers.
- Database state.
- Branch state.
- Deployment state.
- Runtime evidence.
- Next steps.
- PR state.

Goal:
- Enable another engineer or AI agent to continue without losing project context.

---

# AI-Assisted Engineering System

## Two-AI Engineering Workflow

Designed and operated an AI-assisted workflow for a two-person team:

```text
Architecture / Investigation
          ↓
Project Planner AI
          ↓
Structured Implementation Plan
          ↓
Task / Workstream Assignment
          ↓
Coding Agent AI
          ↓
Implementation
          ↓
Tests / Validation
          ↓
Review
          ↓
Deployment Gate
```

### Project Planner AI
- Used `PROJECT_ASSISTANT_RULES_V2`.
- Analyzed architecture reports.
- Generated implementation plans.
- Produced structured prompts.
- Translated architecture into concrete work.

### Coding Agent AI
Governed by project rules covering:
- Git.
- Security.
- Handover.
- Session completion.
- Testing.

## Eight Custom AI Rule Files

Authored custom rules covering:
- Evidence-first review.
- No-assumption policy.
- Discovery-before-implementation.
- Reuse-first behavior.
- Git safety boundaries.
- No push/deploy without explicit approval.
- Improvement-injection discipline.
- Remaining project-specific rules.

Expected AI behavior:
- Read source code.
- Verify current state.
- Follow project rules.
- Avoid inventing functionality.
- Avoid stale documentation.
- Distinguish implemented vs planned.
- Preserve project context.

## Graph / Knowledge Documentation Workflow

Worked with:
- `graphinit`
- `graphdoc`

Workflow:

```text
Check documentation freshness
        ↓
Run graph initialization when needed
        ↓
Analyze current source
        ↓
Generate/update documentation
        ↓
Replace stale documentation
```

Maintained:

```text
Source Code
     ↕
Project Graph
     ↕
Documentation
```

## Platform Knowledge Architecture

Organized knowledge around:
- Platform.
- Projects.
- Products.
- Database.
- Architecture.
- Operations.
- Documentation.
- AI-agent rules.

---

# Verified Numbers and Evidence

## AutoShipp
- **80+** PostgreSQL tables in later architecture claims.
- **80** tables covered by zero-downtime migration work.
- **44** formal AES specification documents.
- **8** custom AI rule files.
- **2-person** engineering team.
- **2-AI** engineering workflow.

## Shopify Customer Migration
- **7,528** Shopify source customer records.
- **7,525** AutoShipp migrated/enriched customer records reported/validated in the master inventory.
- **3-page / 750-customer** pagination validation.
- Transactions.
- Checkpoint/resume.
- Rollback handling.
- Profile synchronization.
- Metadata preservation.
- Source/destination reconciliation.
- Indexing/performance considerations.
- Environment/secret validation.

> Preserve the distinction between 7,528 source records and 7,525 migrated/enriched records. Do not rewrite this as 100% migration without separate verification.

## WhatsApp Campaign — MomzCradle
- **2,900** messages sent.
- **~1,500** reads.
- **9** validated matched orders.
- **0.34%** sent → matched.
- **0.67%** read → matched.
- **₹2,758.13** average revenue per matched order.
- **₹9.51** revenue per message sent.
- **₹18.39** revenue per read.

## Competitive Analysis
- **10** GoKwik products analyzed.

---

# Experience by Engineering Domain

| Domain | Experience |
|---|---|
| Full-stack | React, Next.js, Node.js, Express, NestJS, REST APIs |
| Backend | Controllers, services, TypeORM, Prisma, APIs, webhooks, workers |
| Database | PostgreSQL, Neon, MongoDB, MySQL, JSONB, pgvector |
| Data engineering | Migration, consolidation, reconciliation, indexing, profile sync |
| Authentication | JWT, user context, HttpOnly cookies, refresh rotation |
| Authorization | RBAC, permissions, account visibility, tenant/account isolation |
| Security | HMAC, webhook verification, credentials, encryption architecture |
| SaaS | Multi-tenancy, accounts, identities, roles, integrations |
| Integrations | Shopify, Meta WhatsApp, Shiprocket, ShipXpeed, Razorpay |
| Messaging | WhatsApp Cloud API, webhooks, routing, deduplication, Conversation Gateway |
| Shipping | Order intake, normalization, provider ownership, courier selection, AWB, labels, tracking |
| Async systems | Redis, BullMQ, queues, workers, background processing |
| AI | RAG, embeddings, semantic retrieval, LLMs, routing, streaming |
| AI agents | Planner/coding-agent workflows, rule systems, validation |
| Infrastructure | Render, Redis, Vercel, AWS S3, Cloudflare, GitHub Actions |
| Production | Debugging, deployment, runtime verification, configuration |
| Testing | Unit/integration/runtime/database/webhook/migration validation |
| Documentation | Architecture, DB, migration, WBS, TDS, handover, Mermaid |
| Technical leadership | Planning, decomposition, architecture investigation, validation |
| Product/technical analysis | Competitive analysis, business rules, analytics, roadmap input |

---

# Portfolio-Level Project / Workstream Index

## Professional / Production
1. AutoShipp Shipping Automation
2. AutoShipp Platform Data Consolidation
3. Identity & RBAC Modernization
4. Shopify Integration & Customer Migration
5. WhatsApp / Meta Tech Provider Platform
6. MomzCradle Commerce & WhatsApp Analytics
7. Fit Intelligence
8. Universal AI ChatBot
9. AutoShipp Product Launchpad / Dashboard
10. Production Infrastructure & Reliability
11. AI-Assisted Engineering & Documentation System
12. Verification Hub — architecture/design
13. Clip Farm — architecture/design
14. GoKwik vs AutoShipp Competitive Analysis

## Personal / Academic
15. NeuroVault — AI Knowledge Platform
16. DevDesk — MERN Project Management System
17. Task Manager Web App
18. Wide Body Area Network using Blockchain
19. Personal Portfolio Website
20. Browser-Based Calculator Web App
21. Student Record Management — Concept

> These are portfolio-level projects/workstreams, not 21 separate employers or unrelated codebases. AutoShipp contains multiple products, client engagements, platform workstreams, and supporting engineering activities.

---

# Evidence / Credibility Notes

## Strong implementation evidence
- Zero-downtime PostgreSQL schema migration.
- Shopify customer migration pipeline.
- JWT auth context resolver and reversible auth cutover.
- WhatsApp Cloud API integration.
- WhatsApp campaign analysis.
- NeuroVault RAG pipeline.
- DevDesk full-stack project/ticket platform.
- Task Manager MERN application.
- Academic blockchain simulation.
- Portfolio website.
- Browser calculator.

## Architecture / design evidence
- AutoShipp SaaS core platform architecture.
- Universal AI ChatBot architecture.
- Fit Intelligence architecture.
- Verification Hub architecture.
- Clip Farm architecture.
- Product ecosystem boundaries.
- Some external-product integration work.

## Investigation / audit evidence
A significant portion of AutoShipp engineering involved:
- Source inspection.
- Repository audits.
- Architecture investigation.
- Production debugging.
- Runtime verification.
- Gap/blocker identification.
- Documentation-vs-source comparison.
- Migration planning.
- Production-safety analysis.

## Collaboration / AI-assisted development
AI was used as an engineering workflow/acceleration component. The available evidence does not support claiming that every line of every system was manually written independently.

Use these ownership categories when describing experience:

```text
Designed
Implemented
Investigated
Validated
Documented
Operated
Collaborated
AI-assisted
Concept
```

---

# Final Engineering Profile

> **Full-stack/backend engineering across production SaaS, e-commerce integrations, shipping automation, databases and migrations, identity/RBAC, multi-tenant architecture, WhatsApp/Meta integrations, AI/RAG systems, asynchronous processing, production debugging, system architecture, technical analysis, documentation engineering, and AI-assisted engineering workflows — supplemented by MERN, blockchain, frontend, and AI personal/academic projects.**

---

# Source Basis

This inventory was reconstructed from:
- AutoShipp master engineering inventory: `6dab67a4-5518-49cd-984d-076aba38f46d.md`.
- Historical resumes and resume variants.
- Historical cover-letter evidence for the Task Manager project.
- Later resume material documenting NeuroVault, DevDesk, AutoShipp architecture, production engineering, and technical skills.
- Supporting engineering/interview-preparation material used to distinguish architecture/design from implementation.

Duplicate resume versions were treated as evidence for the same underlying projects rather than separate experiences.
