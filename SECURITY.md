# Segurança - Fear Idle

## Correções aplicadas

### 1. Integridade do save com checksum
Os dados salvos agora incluem um checksum (hash) que é validado ao carregar/importar.
Isso dificulta a manipulação manual dos saves por jogadores que decodifiquem o Base64.

**Arquivos:** `app.component.ts` - métodos `computeChecksum`, `serializeWithChecksum`, `deserializeWithChecksum`

### 2. Validação de range no import de save
Todos os valores numéricos importados são validados com `isFinite()` e `>= 0`, rejeitando:
- `NaN`, `Infinity`, `-Infinity`
- Valores negativos (essência, custos, quantidades)

**Arquivos:** `app.component.ts` - método `isSafeNumber`, usado em `importSave()`

### 3. Sanitização de mensagens de erro
Mensagens de erro internas (`e.message`) não são mais expostas ao usuário nos alerts.
Apenas mensagens genéricas e seguras são exibidas.

### 4. Logging condicional (apenas em desenvolvimento)
`console.error` e `console.warn` foram substituídos por `logError()` e `logWarn()`,
que só imprimem no console quando `isDevMode()` retorna `true` (ambiente de desenvolvimento).
Em produção, nenhuma informação interna é vazada no console do navegador.

### 5. Content Security Policy (CSP)
Adicionada meta tag CSP no `index.html` que restringe:
- **Scripts:** apenas do próprio domínio (`'self'`)
- **Estilos:** próprio domínio + Google Fonts + inline (necessário para Angular)
- **Fontes:** próprio domínio + Google Fonts
- **Imagens:** próprio domínio + placehold.co + data URIs
- **Mídia:** apenas assets.mixkit.co (efeito sonoro)
- **Objetos/embeds:** bloqueados (`'none'`)
- **Formulários:** apenas para o próprio domínio

---

## Recomendações pendentes (configuração do servidor)

As seguintes melhorias **não podem ser aplicadas no código da aplicação** e dependem da configuração do servidor/plataforma de hospedagem:

### 1. HTTPS obrigatório
Configurar redirecionamento HTTP -> HTTPS no servidor de hospedagem.

- **Netlify:** Ativado por padrão
- **Vercel:** Ativado por padrão
- **Nginx:** `return 301 https://$host$request_uri;`
- **Apache:** `RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]`

### 2. Headers de segurança adicionais
Configurar no servidor os seguintes headers HTTP:

```
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### 3. Self-hosting de assets externos
Para eliminar dependência de CDNs externos e reduzir risco de supply chain:

| Recurso | CDN atual | Recomendação |
|---|---|---|
| Fontes | fonts.googleapis.com | Baixar e servir localmente via `assets/fonts/` |
| Imagens placeholder | placehold.co | Criar imagens fallback locais em `assets/img/` |
| Efeito sonoro | assets.mixkit.co | Baixar e servir de `assets/audio/` |

Após self-hosting, atualizar a CSP para remover os domínios externos.

### 4. Subresource Integrity (SRI)
Se optar por manter CDNs externos, adicionar atributos `integrity` e `crossorigin` nos links.
Exemplo para Google Fonts: gerar hash do CSS e adicionar `integrity="sha384-..."`.
