grammar Pila;

programa: PILA nombre LLAVE_IZQ comandos LLAVE_DER ;

comandos: operacion* ;

operacion: crear
         | push
         | pop
         | peek ;

crear: CREAR PAR_IZQ lista PAR_DER SIG_NEGACION ;

push: EMPUJAR PAR_IZQ valor PAR_DER SIG_NEGACION ;

pop: SACAR PAR_IZQ PAR_DER SIG_NEGACION ;

peek: MIRAR PAR_IZQ PAR_DER SIG_NEGACION;

lista: COR_IZQ valor (COMA valor)* COR_DER ;

valor: numero | TEXTO ;

numero: DIGITO+;

nombre: ID ;

//TOKENS
PILA        : 'pila';
CREAR       : 'crear';
EMPUJAR     : 'empujar';
SACAR       : 'sacar';
MIRAR       : 'mirar';
MAYOR_QUE   : '>';
IGUAL       : '=';
COR_IZQ     : '[';
COR_DER     : ']';
LLAVE_IZQ   : '{';
LLAVE_DER   : '}';
PAR_IZQ     : '(';
PAR_DER     : ')';
COMA        : ',';
SIG_NEGACION: '!';
DIGITO: [0-9]+ ;
TEXTO: '"' ~["\r\n]* '"' ;
ID: [a-zA-Z][a-zA-Z_0-9]* ;

WS: [ \t\r\n]+ -> skip ;