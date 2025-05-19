# Analizador de Lenguaje Pila

Un compilador/interprete que procesa código en lenguaje Pila y lo traduce a JavaScript.

## Requisitos previos

- Node.js v18 o superior
- Java Runtime Environment (JRE) 8+ (para ANTLR)
- ANTLR4 instalado globalmente:
  ```bash
  npm install -g antlr4

  Instalación
Clona el repositorio o descarga los archivos

Instala las dependencias:
(bash)
npm install

Genera los analizadores léxico y sintáctico:
(bash)
antlr4 -Dlanguage=JavaScript Pila.g4

Ejecución
Procesa un archivo de entrada:
(bash)
node analyzer.js inputCorrecto1.txt
node analyzer.js inputCorrecto2.txt
node analyzer.js inputError1.txt
node analyzer.js inputError2.txt


## Sugerencias adicionales:

1. **Para Windows users**: Añade una nota sobre PowerShell:
   ```markdown
   ## Nota para Windows
   Si usas PowerShell, ejecuta así:
   ```bash
   node .\analyzer.js .\ejemplos\correcto1.txt

   
2. **Solución de problemas**:
```markdown
## Problemas comunes
- "Class extends value undefined": Regenera los analizadores
  ```bash
  rm -rf generated/
  antlr4 -Dlanguage=JavaScript Pila.g4
  ```
- Errores de ejecución: Verifica que tienes Node.js v18+