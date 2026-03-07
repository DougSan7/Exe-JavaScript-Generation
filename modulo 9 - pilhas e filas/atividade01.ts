import { Queue } from "./Queue";
import readlinesync = require('readline-sync');

const fila = new Queue<string>();
var opcao;
let nome;
let retira;
let continua;

do{ 
  console.log("*******************************************");
  console.log("      1 - Adicionar cliente na fila");
  console.log("      2 - Listar todos os clientes");
  console.log("      3 - Retirar clientes da fila");
  console.log("      0 - Sair");
  console.log("*******************************************");

  opcao = readlinesync.questionInt("Entre com a opcao desejada: ");
  
  if(opcao === 1){
    nome = readlinesync.question("Digite o nome: ");
  }
  console.log("\n*******************************************");
    
  switch(opcao){
    case 1:
      console.log("Fila:\n");

      fila.enqueue(`${nome}`);
      fila.printQueue();    

      console.log("\nCliente Adicionado!");
      continua = true;      
    break;

    case 2:
      console.log("Lista de Clientes na Fila: \n");
      
      if(fila.isEmpty() === false){
        fila.printQueue();
      }else{ 
        console.log("A Fila está vazia!");
      }
      continua = true;
    break;
    
    case 3:
      console.log("Fila:\n");
      
      retira = fila.dequeue();

      if(retira == null){
        fila.printQueue();
      }else{
        fila.printQueue();
        console.log(`\nO Cliente ${retira} foi Chamado!`);
      } 
      continua = true; 
    break;

    case 0:
      continua = false;
      console.log("Programa Finalizado!")
    break;
  }
}while(continua == true);
