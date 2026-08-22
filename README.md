# undercl0ck.com

Static site for [https://undercl0ck.com](https://undercl0ck.com), published with GitHub Pages.

## Publishing

The site is served from the `main` branch root. GitHub Pages reads the custom domain from the `CNAME` file (`undercl0ck.com`).

After DNS is pointed at GitHub Pages, `www.undercl0ck.com` should redirect to the apex domain.

## DNS (GoDaddy)

This domain currently uses GoDaddy nameservers (`ns11.domaincontrol.com`, `ns12.domaincontrol.com`). Replace the parking A records with GitHub Pages records:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |
| CNAME | `www` | `ryanheinrich.github.io` |

Delete any existing `@` A records that point at GoDaddy parking (`3.33.130.190`, `15.197.148.33`) and any forwarding that conflicts with these records.

HTTPS is provisioned by GitHub after the apex and `www` records resolve. That can take up to 24 hours, often much less.
