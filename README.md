# Python Pas a Pas

Primera versió d'una plataforma educativa de Python en català, construïda només
amb frontend.

## Contingut

- Teoria organitzada en quatre capítols.
- Dotze exercicis interactius per al capítol d'interaccions bàsiques.
- Execució de Python al navegador amb Pyodide.
- Proves automàtiques i feedback específic per errors habituals.
- Pistes progressives i progrés guardat amb `localStorage`.
- Protecció contra bucles infinits mitjançant un `Web Worker`.

## Executar la web

Pyodide necessita que la web se serveixi per HTTP. Des d'aquesta carpeta:

```powershell
python -m http.server 8000
```

Després, obre `http://localhost:8000`.

La primera execució d'un exercici necessita connexió a internet per carregar
Pyodide. La teoria i la navegació funcionen sense aquesta càrrega.
