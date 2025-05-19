import antlr4 from 'antlr4';
import fs from 'fs';

import PilaLexer from './generated/PilaLexer.js';
import PilaParser from './generated/PilaParser.js';
import PilaListener from './generated/PilaListener.js';

class CustomPilaListener extends PilaListener {
    constructor() {
        super();
        this.tree = [];
        this.indent = 0;
        this.operations = [];
    }

    enterEveryRule(ctx) {
        const ruleName = PilaParser.ruleNames[ctx.ruleIndex];
        this.tree.push(' '.repeat(this.indent) + ruleName);
        this.indent += 2;

        if (['crear', 'push', 'pop', 'peek'].includes(ruleName)) {
            this.currentOperation = { type: ruleName };
        }
    }

    exitEveryRule(ctx) {
        this.indent -= 2;
        const ruleName = PilaParser.ruleNames[ctx.ruleIndex];
        
        if (this.currentOperation && ['crear', 'push', 'pop', 'peek'].includes(ruleName)) {
            this.operations.push(this.currentOperation);
            this.currentOperation = null;
        }
    }

    enterValor(ctx) {
        if (this.currentOperation) {
            const text = ctx.getText();
            this.currentOperation.value = text.startsWith('"') ? text : parseFloat(text);
        }
    }

    enterLista(ctx) {
        if (this.currentOperation?.type === 'crear') {
            this.currentOperation.elements = [];
            for (const child of ctx.children) {
                const text = child.getText();
                if (!['[', ']', ','].includes(text)) {
                    this.currentOperation.elements.push(
                        text.startsWith('"') ? text : parseFloat(text)
                    );
                }
            }
        }
    }
}

class PilaAnalyzer {
    constructor(input) {
        this.input = input;
        this.lexer = new PilaLexer(new antlr4.InputStream(input));
        this.tokens = new antlr4.CommonTokenStream(this.lexer);
        this.parser = new PilaParser(this.tokens);
        this.lexemesTable = [];
        this.errors = [];
        
        this.lexer.removeErrorListeners();
        this.parser.removeErrorListeners();
        
        const errorListener = {
            syntaxError: (recognizer, offendingSymbol, line, column, msg, err) => {
                this.errors.push({line, column, msg});
            }
        };
        
        this.lexer.addErrorListener(errorListener);
        this.parser.addErrorListener(errorListener);
    }

    analyze() {
        this.buildLexemesTable(); // CORRECCIÓN: Cambiado de build.exemesTable a buildLexemesTable
        const tree = this.parser.programa();
        
        const listener = new CustomPilaListener();
        antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
        
        return {
            isValid: this.errors.length === 0,
            errors: this.errors,
            lexemesTable: this.getLexemesTable(),
            parseTree: this.getParseTree(tree),
            jsCode: this.translateToJavaScript(listener.operations)
        };
    }

    buildLexemesTable() {
        this.lexer.reset();
        this.tokens.fill();
        
        for (const token of this.tokens.tokens) {
            if (token.channel === this.lexer.HIDDEN) continue;
            
            this.lexemesTable.push({
                lexeme: token.text,
                token: PilaLexer.symbolicNames?.[token.type] ?? token.text,
                line: token.line,
                column: token.column
            });
        }
    }

    getLexemesTable() {
        return this.lexemesTable;
    }

    getParseTree(tree) {
        const listener = new CustomPilaListener();
        antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
        return listener.tree.join('\n');
    }

    translateToJavaScript(operations) {
    let jsCode = '// Código JavaScript generado\n';
    jsCode += 'let pilaStack = [];\n';  // Usando let y el nombre correcto
    jsCode += 'let lastOperationResult = null;\n\n';
    
    for (const op of operations) {
        switch(op.type) {
            case 'crear':
                jsCode += `pilaStack = [${op.elements.join(', ')}];\n`;
                jsCode += 'console.log(`Pila creada: [${pilaStack.join(", ")}]`);\n';
                break;
                
            case 'push':
                jsCode += `pilaStack.push(${op.value});\n`;
                jsCode += `console.log("Elemento ${op.value} agregado");\n`;
                break;
                
            case 'pop':
                jsCode += 'lastOperationResult = pilaStack.pop();\n';
                jsCode += 'console.log(`Elemento removido: ${lastOperationResult}`);\n';
                break;
                
            case 'peek':
                jsCode += 'lastOperationResult = pilaStack[pilaStack.length-1];\n';
                jsCode += 'console.log(`Elemento en la cima: ${lastOperationResult}`);\n';
                break;
        }
        jsCode += '\n';
    }
    
    return jsCode;
}
}

function main() {
    const inputFile = process.argv[2] || 'input.txt';
    const input = fs.readFileSync(inputFile, 'utf-8');
    
    const analyzer = new PilaAnalyzer(input);
    const result = analyzer.analyze();
    
    console.log('=== Resultados del análisis ===');
    console.log('Código válido:', result.isValid);
    
    if (!result.isValid) {
        console.log('\nErrores:');
        console.table(result.errors);
    }
    
    console.log('\nTabla de tokens:');
    console.table(result.lexemesTable);
    
    console.log('\nÁrbol sintáctico:');
    console.log(result.parseTree);
    
    console.log('\nCódigo JavaScript generado:');
    console.log(result.jsCode);
    
    if (result.isValid) {
        console.log('\nEjecutando código generado:');
        try {
            eval(result.jsCode);
        } catch (e) {
            console.error('Error al ejecutar:', e.message);
        }
    }
}

main();