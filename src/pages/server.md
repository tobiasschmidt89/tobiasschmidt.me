---
url: /server/
title: Server
subtitle: My server configuration
description: Server configuration of my webserver.
keywords: tobias, schmidt, tobias schmidt, munich, tech consultant, project engineer, web developer, server
date: 2021-09-16
---

<header>

# [{{title}}](/)

{{subtitle}}

</header>

<section>

`.htaccess` configuration of my webserver. I provide this information for transparency and educational purposes.

```html
# X-XSS-Protection
<IfModule mod_headers.c>
	Header set X-XSS-Protection "1; mode=block"
</IfModule>

# X-Frame-Options
<IfModule mod_headers.c>
	Header set X-Frame-Options "SAMEORIGIN"
</IfModule>

# X-Content-Type-Options
<IfModule mod_headers.c>
	Header set X-Content-Type-Options "nosniff"
</IfModule>

# Strict-Transport-Security
<IfModule mod_headers.c>
	Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains"
</IfModule>

# Referrer-Policy
<IfModule mod_headers.c>
	Header always set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>

# Permission-Policy
<IfModule mod_headers.c>
	Header set Permissions-Policy "geolocation=(), camera=(), microphone=()"
</IfModule>

# Content-Security-Policy
<IfModule mod_headers.c>
	Header set Content-Security-Policy "default-src 'none'; script-src 'self'; connect-src 'self'; img-src 'self' data: https: https://picsum.photos/; style-src 'self' 'unsafe-inline'; base-uri 'self'; form-action 'self'; font-src 'self'; manifest-src 'self'"
</IfModule>

# Disable Cookies
<IfModule mod_headers.c>
	Header unset Cookie
	Header unset Set-Cookie
</IfModule>

# Static File Caching
<IfModule mod_headers.c>
<FilesMatch "\.(gif|ico|jpeg|jpg|png|css|js|woff2)$">
	Header set Cache-Control "max-age=31536000, public"
</FilesMatch>
</IfModule>

# GZIP Compression
<IfModule mod_deflate.c>
  	AddOutputFilterByType DEFLATE image/svg+xml
  	AddOutputFilterByType DEFLATE application/javascript
  	AddOutputFilterByType DEFLATE application/rss+xml
  	AddOutputFilterByType DEFLATE application/vnd.ms-fontobject
  	AddOutputFilterByType DEFLATE application/x-font
  	AddOutputFilterByType DEFLATE application/x-font-opentype
  	AddOutputFilterByType DEFLATE application/x-font-otf
  	AddOutputFilterByType DEFLATE application/x-font-truetype
  	AddOutputFilterByType DEFLATE application/x-font-ttf
  	AddOutputFilterByType DEFLATE application/x-javascript
  	AddOutputFilterByType DEFLATE application/xhtml+xml
  	AddOutputFilterByType DEFLATE application/xml
  	AddOutputFilterByType DEFLATE font/opentype
  	AddOutputFilterByType DEFLATE font/otf
  	AddOutputFilterByType DEFLATE font/ttf
  	AddOutputFilterByType DEFLATE image/x-icon
  	AddOutputFilterByType DEFLATE text/css
  	AddOutputFilterByType DEFLATE text/html
  	AddOutputFilterByType DEFLATE text/javascript
  	AddOutputFilterByType DEFLATE text/plain
  	AddOutputFilterByType DEFLATE text/xml
</IfModule>

# Redirect 404 to Index
ErrorDocument 404 /index.html

# Block Wayback Machine
RewriteEngine On
RewriteCond %{HTTP_USER_AGENT} ^.*(ia_archiver|archive.org_bot).*$ [NC]
RewriteRule .* - [F,L]
```

Beside these manual configurations the server has some other configuration that is not included in the `.htaccess`:

- Disabled Server Logs
- Redirects

</section>
