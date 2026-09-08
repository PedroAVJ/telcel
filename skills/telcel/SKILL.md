---
name: telcel
description: Inspect and manage a Telcel line's live usage, active package, Saldo Amigo, data add-ons, recurrences, and explicitly authorized recharges or package changes. Trigger for Telcel SMS interpretation, running out of mobile data, Mi Telcel, Amigo Sin Límite, Internet Amigo, or Telcel recharge work.
---

# Telcel

Ground every decision in current evidence from the exact line. Account state and
official purchase terms change; never treat an old message, remembered package,
or static price table as confirmed current.

## Evidence order

1. Resolve the user's intended line without printing or persisting its full
   number. If more than one line is plausible, stop before any purchase.
2. For “look at my messages,” use the available Messages integration and read
   the smallest recent Telcel window that answers the question. Do not use a raw
   Messages database when the integration withholds content or reports a
   permission filter; do not retry or switch to UI control unless the user
   explicitly asks for that alternative.
3. Treat SMS as a clue, not the usage ledger. “Expira” means a package is
   expiring; a purchase prompt is an upsell. Only explicit exhaustion language
   such as “agotaste” or live account data showing zero remaining supports a
   claim that navigation data is exhausted.
4. Verify the active package, remaining free-navigation data, expiry, recurrence
   status, and Saldo Amigo in Mi Telcel before spending or changing recurrence.
   Prefer an existing authenticated Chrome session. Use only official Telcel
   pages for account actions or checkout.

If message access is unavailable but live Mi Telcel state is available, proceed
from the account state and say that the message text was not verified. If the
account state is unavailable, do not guess from an expiry or promotional SMS.
Exhaust other safe, official paths before calling authentication a blocker. An
account-specific Telcel purchase link in the exact carrier thread, an official
passwordless checkout, or a currently verified activation SMS may provide the
same result without restarting sign-in.

## Choose the right intervention

Use live package terms and the current billing-cycle position:

- If the base Amigo Sin Límite package is still active and only its general
  navigation data is exhausted, prefer a one-off Internet Amigo data package.
  Do not replace a still-valid base package merely to restore data.
- If the base package expired or recurring activation failed for insufficient
  Saldo Amigo, fund or activate the exact existing renewal first when that still
  fits the user's needs.
- Change the recurring base package only when live history shows repeated early
  exhaustion, or when the expected cost of repeated add-ons is at least the
  next suitable tier. Compare included general-navigation data, validity,
  recurring behavior, and total recurring cost—not social-network allowances or
  an expired promotion.
- Avoid six- or twelve-package prepayments and other long commitments unless the
  user explicitly approves the exact upfront price and commitment length. A
  request for automatic payment, convenience, consistency, or "not having to
  worry about it" is not approval for a multi-month prepayment. Unused data may
  expire, and terms can change.

Keep package recurrence and payment funding separate. A recurrent Telcel
package normally debits Saldo Amigo; it does not prove that a bank card will be
charged automatically. When the user explicitly prioritizes freedom from
future card updates, CVV entry, or failed monthly funding, compare Telcel's
current prepaid multi-month offer against a programmed card recharge. Prefer a
programmed monthly recharge unless the user separately authorizes the exact
prepaid total and term. Prefer a prepaid offer only when its live monthly data
is sufficient and the exact upfront commitment is approved. Verify Apple Pay,
Click to Pay, or another wallet in the actual checkout instead of assuming
support from the device or browser. When the card has changed, prepare Telcel's
wallet card-replacement or add-card screen and leave the card number, expiry,
CVV, postal code, and save action to the user.

When the user says only “add data,” choose the smallest official one-off package
that reasonably covers the remaining current cycle. Do not buy a tiny package
that obviously cannot cover the stated use, or a larger tier just because its
unit price looks better.

## Live sources

Recheck the applicable current terms immediately before checkout:

- Mi Telcel: `https://www.mitelcel.com/`
- Amigo Sin Límite: `https://www.telcel.com/personas/amigo/paquetes/paquetes-amigo-sin-limite`
- Internet Amigo: `https://www.telcel.com/personas/amigo/paquetes/mb-para-tu-amigo`
- Recharge channels: `https://www.telcel.com/personas/amigo/recargas/medios-de-recarga`

Telcel also documents SMS activation at short code 5050, but command keys and
recurrence syntax must be verified on the live official page before sending.
Never derive a command from memory or an old message.

## Authorization and checkout

A current instruction to buy, add, recharge, activate, renew, or change the
package authorizes that exact Telcel mutation when the intended line, exact
price, package behavior, and payment source are resolved. Do not add a second
confirmation merely because checkout is consequential. A request only to
check, compare, explain, or recommend remains read-only.

Authentication recovery is a separate credential mutation. A failed login,
rejected PIN, blocked account task, or authorization to recharge does not
authorize requesting a recovery code, resetting a password or NIP, or
generating a replacement credential. Do any independent read-only work and
stop at the authentication blocker unless the user explicitly requests that
exact recovery action. Never invent or submit a replacement credential merely
to continue the account workflow.

Do not interrupt the workflow with questions whose answers can be resolved from
the exact line, live Telcel state, saved contact identity, current official
terms, or the user's existing action authority. Complete all read-only
preparation first. If the active interface or tool imposes an unavoidable
action-time confirmation, ask once at the last possible step and include the
exact charge and package in that single confirmation.

- Use saved account and payment state when available. Never reveal, copy, log,
  or store card data, credentials, full phone numbers, or one-time codes.
- Before the final purchase action, read back the exact package name, price,
  one-off versus recurring status, validity, included general-navigation data,
  and any effect on the active package.
- If authentication or an SMS code is required, preserve the exact live
  challenge tab. Do not reload, replace, close, or restart the sign-in while a
  code is pending.
- Treat an outbound activation SMS as the purchase action. Send it only when the
  user's current request authorizes activation and the exact official command
  and destination have been verified.
- Stop on a line mismatch, unresolved charge, changed total, duplicate pending
  order, or ambiguous recurring status.

## Verify the result

Do not call an operation successful from a button click or a submitted form.
Read back at least one authoritative resulting state in Mi Telcel: new package,
increased remaining data, updated recurrence, or changed balance. Use the
confirmation SMS as secondary corroboration when available. Check that only one
charge or activation occurred.

Report the exact outcome without exposing private identifiers: what changed,
the amount charged, whether it is one-off or recurring, its validity or renewal
date, and the verified remaining data or balance. Keep “source published,”
“checkout submitted,” and “account state verified” distinct when any stage is
still pending.
