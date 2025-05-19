// Generated from Pila.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import PilaListener from './PilaListener.js';
import PilaVisitor from './PilaVisitor.js';

const serializedATN = [4,1,19,85,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,1,0,1,0,1,0,1,0,1,
0,1,1,5,1,30,8,1,10,1,12,1,33,9,1,1,2,1,2,1,2,1,2,3,2,39,8,2,1,3,1,3,1,3,
1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,
1,6,1,7,1,7,1,7,1,7,5,7,67,8,7,10,7,12,7,70,9,7,1,7,1,7,1,8,1,8,3,8,76,8,
8,1,9,4,9,79,8,9,11,9,12,9,80,1,10,1,10,1,10,0,0,11,0,2,4,6,8,10,12,14,16,
18,20,0,0,80,0,22,1,0,0,0,2,31,1,0,0,0,4,38,1,0,0,0,6,40,1,0,0,0,8,46,1,
0,0,0,10,52,1,0,0,0,12,57,1,0,0,0,14,62,1,0,0,0,16,75,1,0,0,0,18,78,1,0,
0,0,20,82,1,0,0,0,22,23,5,1,0,0,23,24,3,20,10,0,24,25,5,10,0,0,25,26,3,2,
1,0,26,27,5,11,0,0,27,1,1,0,0,0,28,30,3,4,2,0,29,28,1,0,0,0,30,33,1,0,0,
0,31,29,1,0,0,0,31,32,1,0,0,0,32,3,1,0,0,0,33,31,1,0,0,0,34,39,3,6,3,0,35,
39,3,8,4,0,36,39,3,10,5,0,37,39,3,12,6,0,38,34,1,0,0,0,38,35,1,0,0,0,38,
36,1,0,0,0,38,37,1,0,0,0,39,5,1,0,0,0,40,41,5,2,0,0,41,42,5,12,0,0,42,43,
3,14,7,0,43,44,5,13,0,0,44,45,5,15,0,0,45,7,1,0,0,0,46,47,5,3,0,0,47,48,
5,12,0,0,48,49,3,16,8,0,49,50,5,13,0,0,50,51,5,15,0,0,51,9,1,0,0,0,52,53,
5,4,0,0,53,54,5,12,0,0,54,55,5,13,0,0,55,56,5,15,0,0,56,11,1,0,0,0,57,58,
5,5,0,0,58,59,5,12,0,0,59,60,5,13,0,0,60,61,5,15,0,0,61,13,1,0,0,0,62,63,
5,8,0,0,63,68,3,16,8,0,64,65,5,14,0,0,65,67,3,16,8,0,66,64,1,0,0,0,67,70,
1,0,0,0,68,66,1,0,0,0,68,69,1,0,0,0,69,71,1,0,0,0,70,68,1,0,0,0,71,72,5,
9,0,0,72,15,1,0,0,0,73,76,3,18,9,0,74,76,5,17,0,0,75,73,1,0,0,0,75,74,1,
0,0,0,76,17,1,0,0,0,77,79,5,16,0,0,78,77,1,0,0,0,79,80,1,0,0,0,80,78,1,0,
0,0,80,81,1,0,0,0,81,19,1,0,0,0,82,83,5,18,0,0,83,21,1,0,0,0,5,31,38,68,
75,80];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class PilaParser extends antlr4.Parser {

    static grammarFileName = "Pila.g4";
    static literalNames = [ null, "'pila'", "'crear'", "'empujar'", "'sacar'", 
                            "'mirar'", "'>'", "'='", "'['", "']'", "'{'", 
                            "'}'", "'('", "')'", "','", "'!'" ];
    static symbolicNames = [ null, "PILA", "CREAR", "EMPUJAR", "SACAR", 
                             "MIRAR", "MAYOR_QUE", "IGUAL", "COR_IZQ", "COR_DER", 
                             "LLAVE_IZQ", "LLAVE_DER", "PAR_IZQ", "PAR_DER", 
                             "COMA", "SIG_NEGACION", "DIGITO", "TEXTO", 
                             "ID", "WS" ];
    static ruleNames = [ "programa", "comandos", "operacion", "crear", "push", 
                         "pop", "peek", "lista", "valor", "numero", "nombre" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = PilaParser.ruleNames;
        this.literalNames = PilaParser.literalNames;
        this.symbolicNames = PilaParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, PilaParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.match(PilaParser.PILA);
	        this.state = 23;
	        this.nombre();
	        this.state = 24;
	        this.match(PilaParser.LLAVE_IZQ);
	        this.state = 25;
	        this.comandos();
	        this.state = 26;
	        this.match(PilaParser.LLAVE_DER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comandos() {
	    let localctx = new ComandosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, PilaParser.RULE_comandos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 60) !== 0)) {
	            this.state = 28;
	            this.operacion();
	            this.state = 33;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operacion() {
	    let localctx = new OperacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, PilaParser.RULE_operacion);
	    try {
	        this.state = 38;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 34;
	            this.crear();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 35;
	            this.push();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 36;
	            this.pop();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 37;
	            this.peek();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	crear() {
	    let localctx = new CrearContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, PilaParser.RULE_crear);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.match(PilaParser.CREAR);
	        this.state = 41;
	        this.match(PilaParser.PAR_IZQ);
	        this.state = 42;
	        this.lista();
	        this.state = 43;
	        this.match(PilaParser.PAR_DER);
	        this.state = 44;
	        this.match(PilaParser.SIG_NEGACION);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	push() {
	    let localctx = new PushContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, PilaParser.RULE_push);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.match(PilaParser.EMPUJAR);
	        this.state = 47;
	        this.match(PilaParser.PAR_IZQ);
	        this.state = 48;
	        this.valor();
	        this.state = 49;
	        this.match(PilaParser.PAR_DER);
	        this.state = 50;
	        this.match(PilaParser.SIG_NEGACION);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pop() {
	    let localctx = new PopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, PilaParser.RULE_pop);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(PilaParser.SACAR);
	        this.state = 53;
	        this.match(PilaParser.PAR_IZQ);
	        this.state = 54;
	        this.match(PilaParser.PAR_DER);
	        this.state = 55;
	        this.match(PilaParser.SIG_NEGACION);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	peek() {
	    let localctx = new PeekContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, PilaParser.RULE_peek);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(PilaParser.MIRAR);
	        this.state = 58;
	        this.match(PilaParser.PAR_IZQ);
	        this.state = 59;
	        this.match(PilaParser.PAR_DER);
	        this.state = 60;
	        this.match(PilaParser.SIG_NEGACION);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lista() {
	    let localctx = new ListaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, PilaParser.RULE_lista);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(PilaParser.COR_IZQ);
	        this.state = 63;
	        this.valor();
	        this.state = 68;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===14) {
	            this.state = 64;
	            this.match(PilaParser.COMA);
	            this.state = 65;
	            this.valor();
	            this.state = 70;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 71;
	        this.match(PilaParser.COR_DER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, PilaParser.RULE_valor);
	    try {
	        this.state = 75;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 73;
	            this.numero();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 74;
	            this.match(PilaParser.TEXTO);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, PilaParser.RULE_numero);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 77;
	            this.match(PilaParser.DIGITO);
	            this.state = 80; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===16);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombre() {
	    let localctx = new NombreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, PilaParser.RULE_nombre);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.match(PilaParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

PilaParser.EOF = antlr4.Token.EOF;
PilaParser.PILA = 1;
PilaParser.CREAR = 2;
PilaParser.EMPUJAR = 3;
PilaParser.SACAR = 4;
PilaParser.MIRAR = 5;
PilaParser.MAYOR_QUE = 6;
PilaParser.IGUAL = 7;
PilaParser.COR_IZQ = 8;
PilaParser.COR_DER = 9;
PilaParser.LLAVE_IZQ = 10;
PilaParser.LLAVE_DER = 11;
PilaParser.PAR_IZQ = 12;
PilaParser.PAR_DER = 13;
PilaParser.COMA = 14;
PilaParser.SIG_NEGACION = 15;
PilaParser.DIGITO = 16;
PilaParser.TEXTO = 17;
PilaParser.ID = 18;
PilaParser.WS = 19;

PilaParser.RULE_programa = 0;
PilaParser.RULE_comandos = 1;
PilaParser.RULE_operacion = 2;
PilaParser.RULE_crear = 3;
PilaParser.RULE_push = 4;
PilaParser.RULE_pop = 5;
PilaParser.RULE_peek = 6;
PilaParser.RULE_lista = 7;
PilaParser.RULE_valor = 8;
PilaParser.RULE_numero = 9;
PilaParser.RULE_nombre = 10;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_programa;
    }

	PILA() {
	    return this.getToken(PilaParser.PILA, 0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	LLAVE_IZQ() {
	    return this.getToken(PilaParser.LLAVE_IZQ, 0);
	};

	comandos() {
	    return this.getTypedRuleContext(ComandosContext,0);
	};

	LLAVE_DER() {
	    return this.getToken(PilaParser.LLAVE_DER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComandosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_comandos;
    }

	operacion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OperacionContext);
	    } else {
	        return this.getTypedRuleContext(OperacionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterComandos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitComandos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaVisitor ) {
	        return visitor.visitComandos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OperacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_operacion;
    }

	crear() {
	    return this.getTypedRuleContext(CrearContext,0);
	};

	push() {
	    return this.getTypedRuleContext(PushContext,0);
	};

	pop() {
	    return this.getTypedRuleContext(PopContext,0);
	};

	peek() {
	    return this.getTypedRuleContext(PeekContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterOperacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitOperacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaVisitor ) {
	        return visitor.visitOperacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CrearContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_crear;
    }

	CREAR() {
	    return this.getToken(PilaParser.CREAR, 0);
	};

	PAR_IZQ() {
	    return this.getToken(PilaParser.PAR_IZQ, 0);
	};

	lista() {
	    return this.getTypedRuleContext(ListaContext,0);
	};

	PAR_DER() {
	    return this.getToken(PilaParser.PAR_DER, 0);
	};

	SIG_NEGACION() {
	    return this.getToken(PilaParser.SIG_NEGACION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterCrear(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitCrear(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaVisitor ) {
	        return visitor.visitCrear(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PushContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_push;
    }

	EMPUJAR() {
	    return this.getToken(PilaParser.EMPUJAR, 0);
	};

	PAR_IZQ() {
	    return this.getToken(PilaParser.PAR_IZQ, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	PAR_DER() {
	    return this.getToken(PilaParser.PAR_DER, 0);
	};

	SIG_NEGACION() {
	    return this.getToken(PilaParser.SIG_NEGACION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterPush(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitPush(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaVisitor ) {
	        return visitor.visitPush(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_pop;
    }

	SACAR() {
	    return this.getToken(PilaParser.SACAR, 0);
	};

	PAR_IZQ() {
	    return this.getToken(PilaParser.PAR_IZQ, 0);
	};

	PAR_DER() {
	    return this.getToken(PilaParser.PAR_DER, 0);
	};

	SIG_NEGACION() {
	    return this.getToken(PilaParser.SIG_NEGACION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterPop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitPop(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaVisitor ) {
	        return visitor.visitPop(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PeekContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_peek;
    }

	MIRAR() {
	    return this.getToken(PilaParser.MIRAR, 0);
	};

	PAR_IZQ() {
	    return this.getToken(PilaParser.PAR_IZQ, 0);
	};

	PAR_DER() {
	    return this.getToken(PilaParser.PAR_DER, 0);
	};

	SIG_NEGACION() {
	    return this.getToken(PilaParser.SIG_NEGACION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterPeek(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitPeek(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaVisitor ) {
	        return visitor.visitPeek(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_lista;
    }

	COR_IZQ() {
	    return this.getToken(PilaParser.COR_IZQ, 0);
	};

	valor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValorContext);
	    } else {
	        return this.getTypedRuleContext(ValorContext,i);
	    }
	};

	COR_DER() {
	    return this.getToken(PilaParser.COR_DER, 0);
	};

	COMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PilaParser.COMA);
	    } else {
	        return this.getToken(PilaParser.COMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterLista(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitLista(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaVisitor ) {
	        return visitor.visitLista(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_valor;
    }

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	TEXTO() {
	    return this.getToken(PilaParser.TEXTO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_numero;
    }

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PilaParser.DIGITO);
	    } else {
	        return this.getToken(PilaParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NombreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_nombre;
    }

	ID() {
	    return this.getToken(PilaParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterNombre(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitNombre(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaVisitor ) {
	        return visitor.visitNombre(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




PilaParser.ProgramaContext = ProgramaContext; 
PilaParser.ComandosContext = ComandosContext; 
PilaParser.OperacionContext = OperacionContext; 
PilaParser.CrearContext = CrearContext; 
PilaParser.PushContext = PushContext; 
PilaParser.PopContext = PopContext; 
PilaParser.PeekContext = PeekContext; 
PilaParser.ListaContext = ListaContext; 
PilaParser.ValorContext = ValorContext; 
PilaParser.NumeroContext = NumeroContext; 
PilaParser.NombreContext = NombreContext; 
