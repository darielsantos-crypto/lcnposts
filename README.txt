LUCENA EDITOR — PACOTE MOBILE

Abra index.html no navegador. Para instalar no Android:
1. Hospede a pasta em um endereço HTTPS ou abra pelo navegador compatível.
2. Use “Adicionar à tela inicial” / “Instalar app”.

Estrutura:
- index.html: aplicação principal leve, sem assets em base64.
- assets/estados: bandeiras reais.
- assets/clientes: logos reais.
- assets/frames: frames de post.
- assets/background: fundo dos Stories.
- manifest.webmanifest e service-worker.js: suporte de PWA.

Importação de imagens:
- PNG, JPG, JPEG, WEBP, GIF e SVG são suportados pelos navegadores atuais.
- HEIC/HEIF funciona em aparelhos/navegadores que disponibilizam decodificação nativa (em especial iOS/Safari).
- PSD/PSB é aceito no seletor, mas navegadores não renderizam PSD nativamente sem um decodificador específico. Caso não abra, exporte em PNG/JPG/WEBP antes de importar.


Vídeos:
- Aceita MP4, MOV, M4V, WEBM, OGV/OGG, AVI, MKV e 3GP no seletor.
- A reprodução depende do codec que o navegador do aparelho suporta. MP4 (H.264/AAC), MOV com H.264 e WEBM costumam ser as opções mais confiáveis.
- Quando houver vídeo, o botão “Baixar vídeo (WebM)” exporta uma composição de 10 segundos em WebM em navegadores compatíveis.
